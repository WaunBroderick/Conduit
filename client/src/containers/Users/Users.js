import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersAsync } from "../../redux/reducers/users/users.thunk";

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
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>User Listing</h1>
      <h1>{errorMessage}</h1>
      <h1>{isLoading}</h1>
      {users ? users.map((user) => <li>{user.email}</li>) : "empty"}
      <button onClick={handleClick}>SUPS</button>
    </div>
  );
};

export default Users;
