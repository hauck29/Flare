import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import "./User.css";

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
    <div className="rtpBack">
              <NavLink className='rtp' to={'/'}>Return to Photos</NavLink>
    <NavLink
              className="rtp"
              to="/users"
              exact={true}
              activeClassName="active"
            >
              Return to User Reference List
            </NavLink>

    </div>
    <ul>
      <li>
        <strong>User Id: </strong><pre>   {userId}</pre>
      </li>
      <li>
        <strong>Username: </strong><pre>   {user.username}</pre>
      </li>
      <li>
        <strong>Email: </strong><pre>   {user.email}</pre>
      </li>
    </ul>
    </>
  );
}
export default User;
