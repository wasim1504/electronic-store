import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "./usersSlice";
import "./Userspage.css";

function Userspage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchusers());
  }, []);

  return (
    <div className="users-container">
      <h1>Users</h1>

      {users.loading ? (
        <div className="loading-message">Please Wait....</div>
      ) : null}
      {!users.loading && users.error ? (
        <h1 className="error-message">{users.error}</h1>
      ) : null}

      <div className="user-list">
        {users.users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-avatar"></div>
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Userspage;
