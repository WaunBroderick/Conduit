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
import SideBar from "../../components/NavBar/SideBar";

import { LOAD_ORG_USERS } from "../../graphql/users";
import { LOAD_ORGANIZATION_DEPARTMENTS } from "../../graphql/organization";

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

  const [getOrgDepartments, {}] = useLazyQuery(LOAD_ORGANIZATION_DEPARTMENTS, {
    variables: { orgId: "6269cd8878ce539f1226e436" },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      dispatch(loadDepartmentsAsync(data.departmentFindByOrgId));
    },
  });

  useEffect(() => {
    getOrgUsers();
    getOrgDepartments();
  }, []);

  const users = useSelector((state) => state.users.users);
  const departments = useSelector((state) => state.departments.departments);

  const handleClick = () => {
    console.log(users);
  };

  return (
    <>
      <SideBar />
      <ConduitPage>
        <NavBar />
        {departments ? (
          <EuiFlexGroup alignItems="center" gutterSize="s">
            <EuiFlexItem>
              <UserTable users={users} departments={departments} />
            </EuiFlexItem>
          </EuiFlexGroup>
        ) : (
          <Lottie
            loop={true}
            autoPlay={true}
            animationData={loadingLargeAnimation}
            height={1000}
            width={100}
            style={{ height: "250px" }}
          />
        )}
      </ConduitPage>
    </>
  );
};

export default Users;
