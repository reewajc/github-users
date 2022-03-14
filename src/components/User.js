import React, { Fragment } from 'react'
import useGithubUsers from '../hooks/useGithubUsers'
import UserList from './UserList';

function User() {
  const { users, loading, error } = useGithubUsers();
  console.log(users);
  return (

    <div className='container'>
      <h1>Github Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className='row'>
        {users.map(user => (
          <div className='col-md-4 col-lg-3 p-2'>
            <UserList key={user.id} user={user} />
          </div>
        ))}

      </div>
      </div>

      )
}

      export default User;