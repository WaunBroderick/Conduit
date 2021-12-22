import React from "react";

import { connect } from "react-redux";

import { EuiPageTemplate, EuiEmptyPrompt } from "@elastic/eui";
import UserTable from "../../components/UserTable/UserTable";

import fetchUsers from "../../redux/actions/orgUsers";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    dispatch(fetchUsers());
  },
});

const User = connect(mapStateToProps, mapDispatchToProps)(UserTable);

function Userxx() {
  return (
    <EuiPageTemplate
      template="centeredContent"
      pageContentProps={{ paddingSize: "none" }}
    >
      <UserTable />
      <EuiEmptyPrompt title={<span>User Screen</span>} />
    </EuiPageTemplate>
  );
}

export default User;
