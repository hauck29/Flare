import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <>
    <NavLink to={'/'}>Return to Photos</NavLink>

{/* whoever made the starter for this project decided to do in line styling below.... noob */}
    <ul>
      <li>
        <strong>User Id: </strong> {userId}
      </li>
      <li>
        <strong>Username: </strong> {user.username}
      </li>
      <li>
        <strong>Email: </strong> {user.email}
      </li>
    </ul>
    </>
  );
}
export default User;
