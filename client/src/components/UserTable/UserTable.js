import React, { Fragment, useState } from "react";

import {
  EuiHealth,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiInMemoryTable,
  EuiFacetGroup,
  EuiFacetButton,
} from "@elastic/eui";

import useModal from "../shared/useModal";
import Modal from "../UserDetails/UserDetails";

const UserTable = ({ users = [], departments = [] }) => {
  const { toggle, visible } = useModal();
  const [items, setItems] = useState(users);
  const [userDetails, setuserDetails] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [, setSelectedItems] = useState([]);
  const [selectedOptionId, setSelectedOptionId] = useState(undefined);

  const deleteUser = (user) => {
    console.log(user);
    setSelectedItems([]);
  };

  const modalTrigger = (user) => {
    setuserDetails(user);
    visible;
    toggle();
  };

  const editUser = (user) => {
    console.log(user);
    setSelectedItems([]);
  };

  const actions = [
    {
      name: "Edit",
      description: "Edit this person",
      icon: "pencil",
      type: "icon",
      onClick: modalTrigger,
    },
    {
      name: "Delete",
      description: "Delete this person",
      icon: "trash",
      type: "icon",
      color: "danger",
      onClick: deleteUser,
    },
  ];

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
    {
      field: "online",
      name: "Online",
      dataType: "boolean",
      render: (online) => {
        const color = online ? "success" : "danger";
        const label = online ? "Online" : "Offline";
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
      sortable: true,
    },
    {
      name: "Actions",
      actions,
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

  const facets = departments.map((department) => ({
    id: department.name,
    label: department.name,
    isSelected: selectedOptionId === department.name,
    onClick: () => {
      setSelectedOptionId(department.name);
      setQuery(`departments:("${department.name}")`);
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
      <Modal visible={visible} toggle={toggle} userDetails={userDetails} />
      <EuiPanel>
        <EuiFlexGroup>
          <EuiFlexItem>
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
          <EuiFlexItem grow={6}>
            <EuiInMemoryTable
              tableCaption="Demo of EuiInMemoryTable"
              items={items}
              search={search}
              columns={columns}
              pagination={true}
              sorting={sorting}
              hasActions={true}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </Fragment>
  );
};

export default UserTable;
