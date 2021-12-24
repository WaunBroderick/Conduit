import React, { useState } from "react";

import {
  EuiBasicTable,
  EuiHealth,
  EuiIcon,
  EuiLink,
  EuiToolTip,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSwitch,
  EuiSpacer,
  EuiCode,
} from "@elastic/eui";

const UserTable = ({ users = [] }) => {
  const [enableAll, setEnableAll] = useState(false);
  const [readonly, setReadonly] = useState(false);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);

  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const onTableChange = ({ page = {}, sort = {} }) => {
    const { index: pageIndex, size: pageSize } = page;

    const { field: sortField, direction: sortDirection } = sort;

    setPageIndex(pageIndex);
    setPageSize(pageSize);
    setSortField(sortField);
    setSortDirection(sortDirection);
  };

  const togglePerPageOptions = () => setShowPerPageOptions(!showPerPageOptions);

  const { pageOfItems, totalItemCount } = 20;

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
    },
  ];

  const items = users.filter((user, index) => index > 10);

  const getRowProps = (item) => {
    const { id } = item;
    return {
      "data-test-subj": `row-${id}`,
      className: "customRowClass",
      onClick: () => {},
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: "customCellClass",
      "data-test-subj": `cell-${id}-${field}`,
      textOnly: true,
    };
  };

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount,
    pageSizeOptions: [3, 5, 8],
    hidePerPageOptions: !showPerPageOptions,
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
    enableAllColumns: enableAll,
    readOnly: readonly,
  };

  return (
    <div>
      <h1>hello</h1>
      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiSwitch
            label={<EuiCode>enableAllColumns</EuiCode>}
            checked={enableAll}
            onChange={() => setEnableAll((enabled) => !enabled)}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSwitch
            label={<EuiCode>readOnly</EuiCode>}
            checked={readonly}
            onChange={() => setReadonly((readonly) => !readonly)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiBasicTable
        tableCaption="Employee Table"
        items={items}
        rowHeader="firstName"
        columns={columns}
        sorting={sorting}
        pagination={pagination}
        onChange={onTableChange}
      />
    </div>
  );
};

const UserTable2 = ({ users = [] }) => {
  return (
    <div>
      {users.map((user) => (
        <p key={user.name}>{user.email}</p>
      ))}
    </div>
  );
};

export default UserTable;
