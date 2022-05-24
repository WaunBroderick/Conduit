import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersAsync } from "../../redux/reducers/users/users.thunk";
import { loadDepartmentsAsync } from "../../redux/reducers/departments/departments.thunk";
import { useCookies } from "react-cookie";

import UserTable from "../../components/UserTable/UserTable";

import Lottie from "lottie-react";
import loadingLargeAnimation from "../../assets/animations/loadingLarge.json";

import { useQuery, useLazyQuery } from "@apollo/client";
import { LOAD_USERS } from "../../graphql/authentiation";

import { ConduitPage } from "../../styles/themes/GlobalComponents";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { loadProfileAsync } from "../../redux/reducers/profile/profile.thunk";

import NavBar from "../../components/NavBar/NavBar";

import { LOAD_ORG_USERS } from "../../graphql/users";

const Users = () => {
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);

  const [getOrgUsers, { called, data, loading, error }] = useLazyQuery(
    LOAD_ORG_USERS,
    {
      variables: { usersByOrgId: "6269cd8878ce539f1226e436" },
      fetchPolicy: "network-only",
      onCompleted: (data) => {
        dispatch(loadUsersAsync(data.usersByOrg));
      },
    }
  );

  useEffect(() => {
    getOrgUsers();
  }, []);

  const users = useSelector((state) => state.users.users);

  const test = useSelector(
    (state) => state.profile.profile.organization.departments
  );
  console.log(test);
  console.log("YOOOOOOOO");

  //const users = user;
  const departments = user.organization.departments;
  console.log(users);

  const handleClick = () => {
    console.log(users);
  };

  return (
    <ConduitPage>
      <NavBar />
      {users ? (
        <EuiFlexGroup alignItems="center" gutterSize="s">
          <EuiFlexItem>
            <UserTable users={users} departments={departments} />
          </EuiFlexItem>
        </EuiFlexGroup>
      ) : (
        <EuiFlexGroup alignItems="center" gutterSize="s">
          <EuiFlexItem>
            <UserTable users={users} departments={departments} />
          </EuiFlexItem>
        </EuiFlexGroup>
      )}
    </ConduitPage>
  );
};

export default Users;
