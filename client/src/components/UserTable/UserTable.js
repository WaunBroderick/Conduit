import React from "react";

const UserTable = ({ users = [] }) => {
  return (
    <div>
      {users.map((user) => (
        <p key={user.name}>{user.email}</p>
      ))}
    </div>
  );
};

export default UserTable;
