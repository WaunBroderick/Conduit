import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersAsync } from "../../redux/reducers/users/users.thunk";
import { loadDepartmentsAsync } from "../../redux/reducers/departments/departments.thunk";

import UserTable from "../../components/UserTable/UserTable";

import { ConduitPage } from "../../styles/globalStyles";

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, users, errorMessage } = useSelector(
    (state) => state.users
  );

  const { departments } = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(loadUsersAsync());
    dispatch(loadDepartmentsAsync());
  }, []);

  const handleClick = () => {
    console.log(users);
  };

  return (
    <ConduitPage>
      {users ? <UserTable users={users} departments={departments} /> : "empty"}
    </ConduitPage>
  );
};

export default Users;