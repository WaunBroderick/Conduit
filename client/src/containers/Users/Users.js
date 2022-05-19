import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersAsync } from "../../redux/reducers/users/users.thunk";
import { loadDepartmentsAsync } from "../../redux/reducers/departments/departments.thunk";
import { useCookies } from "react-cookie";

import UserTable from "../../components/UserTable/UserTable";

import Lottie from "lottie-react";
import loadingLargeAnimation from "../../assets/animations/loadingLarge.json";

import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../../graphql/authentiation";

import { ConduitPage } from "../../styles/themes/GlobalComponents";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { loadProfileAsync } from "../../redux/reducers/profile/profile.thunk";

const Users = () => {
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);

  const users = user;
  const departments = user.organization.departments;
  console.log(users);

  const handleClick = () => {
    console.log(users);
  };

  return (
    <ConduitPage>
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
