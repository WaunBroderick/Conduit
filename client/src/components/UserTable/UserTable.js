import React, { Fragment, useState } from "react";

import {
  EuiBasicTable,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiInMemoryTable,
  EuiFacetGroup,
  EuiFacetButton,
} from "@elastic/eui";

const UserTable = ({ users = [], departments = [] }) => {
  const [items, setItems] = useState(users);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedOptionId, setSelectedOptionId] = useState(undefined);

  const columns = [
    {
      field: "name",
      name: "Full Name",
      sortable: true,
    },
    {
      field: "email",
      name: "E-Mail",
      sortable: true,
    },
    {
      field: "departments",
      name: "Departments",
      sortable: true,
    },
  ];

  const sorting = {
    sort: {
      field: "name",
      direction: "desc",
    },
  };

  const onQueryChange = ({ query }) => {
    clearTimeout(debounceTimeoutId);
    clearTimeout(requestTimeoutId);

    debounceTimeoutId = setTimeout(() => {
      setIsLoading(true);

      requestTimeoutId = setTimeout(() => {
        const items = users.filter((user) => {
          const normalizedName =
            `${user.firstName} ${user.lastName}`.toLowerCase();
          const normalizedQuery = query.text.toLowerCase();
          return normalizedName.indexOf(normalizedQuery) !== -1;
        });

        setIsLoading(false);
        setItems(items);
      }, 1000);
    }, 300);
  };

  const handleOnChange = ({ queryText, error }) => {
    setSelectedOptionId(undefined);
    if (!error) {
      setQuery(queryText);
    }
  };

  // TODO: Currently does not handle Departments containing Whitespaces in them
  const facets = departments.map((department) => ({
    id: department.name,
    label: department.name,
    isSelected: selectedOptionId === department.name,
    onClick: () => {
      setSelectedOptionId(department.name);
      setQuery(`departments:(${department.name})`);
    },
  }));
  const search = {
    query,
    onChange: handleOnChange,
    box: {
      schema: true,
    },
    filters: [
      {
        type: "is",
        field: "online",
        name: "Online",
        negatedName: "Offline",
      },
      {
        type: "field_value_selection",
        field: "departments",
        name: "Departments",
        multiSelect: "or",
        options: departments.map((department) => ({
          value: department.name,
          name: department.name,
          view: `${department.name}`,
        })),
      },
    ],
  };

  let debounceTimeoutId;
  let requestTimeoutId;

  return (
    <Fragment>
      <EuiFlexGroup>
        <EuiFlexItem grow={1}>
          <EuiFacetGroup>
            {facets.map((facet) => {
              return (
                <EuiFacetButton
                  key={facet.id}
                  id={facet.id}
                  isSelected={facet.isSelected}
                  onClick={facet.onClick}
                >
                  {facet.label}
                </EuiFacetButton>
              );
            })}
          </EuiFacetGroup>
        </EuiFlexItem>
        <EuiFlexItem grow={3}>
          <EuiInMemoryTable
            tableCaption="Demo of EuiInMemoryTable"
            items={items}
            search={search}
            columns={columns}
            pagination={true}
            sorting={sorting}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </Fragment>
  );
};

export default UserTable;
