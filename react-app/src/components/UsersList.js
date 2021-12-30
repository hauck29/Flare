import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./UsersList.css";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <>
      <div className="rtpBack">
        <NavLink className="rtp" to={"/"}>
          Return to Photos
        </NavLink>
      </div>
      <div className="h1D">
        <h1>User List: </h1>
      </div>
      <ul>{userComponents}</ul>
    </>
  );
}

export default UsersList;
