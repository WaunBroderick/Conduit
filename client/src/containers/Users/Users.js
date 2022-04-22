import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersAsync } from "../../redux/reducers/users/users.thunk";
import { loadDepartmentsAsync } from "../../redux/reducers/departments/departments.thunk";
import { useCookies } from "react-cookie";

import UserTable from "../../components/UserTable/UserTable";

import Lottie from "lottie-react";
import loadingLargeAnimation from "../../assets/animations/loadingLarge.json";

import { Layout } from "../../layout";
import { ConduitPage } from "../../styles/themes/GlobalComponents";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, users, errorMessage } = useSelector(
    (state) => state.users
  );
  const [cookies, setCookie] = useCookies();

  const { departments } = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(loadUsersAsync(Object.values(cookies)));
    dispatch(loadDepartmentsAsync(Object.values(cookies)));
  }, []);

  const handleClick = () => {
    console.log(users);
  };

  return (
    <Layout>
      <ConduitPage>
        {users ? (
          <EuiFlexGroup alignItems="center" gutterSize="s">
            <EuiFlexItem>
              <UserTable users={users} departments={departments} />
            </EuiFlexItem>
          </EuiFlexGroup>
        ) : (
          <div>
            <Lottie animationData={loadingLargeAnimation} />
          </div>
        )}
      </ConduitPage>
    </Layout>
  );
};

export default Users;
