import React, { useEffect, useState } from 'react'
import UserCard from '../listitem/UserCard';

export default function HttpDemo1() {

  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    let URL = 'https://jsonplaceholder.typicode.com/users';
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    fetchUsers()
  }
  )
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {
            users.map((user) => {
              return <UserCard user={user} />
            })
          }
        </div>
      </div>


    </div>
  )
}
