import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersAsync } from "../../redux/reducers/users/users.thunk";
import UserTable from "../../components/UserTable/UserTable";

import { ConduitPage } from "../../styles/globalStyles";

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, users, errorMessage } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(loadUsersAsync());
  }, []);

  const handleClick = () => {
    console.log(users);
  };

  console.log("hello");
  console.log({ users });
  console.log(errorMessage);
  return (
    <ConduitPage>{users ? <UserTable users={users} /> : "empty"}</ConduitPage>
  );
};

export default Users;
