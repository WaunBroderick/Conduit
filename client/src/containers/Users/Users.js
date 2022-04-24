import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersAsync } from "../../redux/reducers/users/users.thunk";
import { loadDepartmentsAsync } from "../../redux/reducers/departments/departments.thunk";
import { useCookies } from "react-cookie";

import UserTable from "../../components/UserTable/UserTable";

import Lottie from "lottie-react";
import loadingLargeAnimation from "../../assets/animations/loadingLarge.json";

import { ConduitPage } from "../../styles/themes/GlobalComponents";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

// Feature Flagging
import { useFeature } from "@growthbook/growthbook-react";

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

  // Boolean on/off flags
  const newTable = useFeature("new-table").on;

  return (
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
  );
};

export default Users;
