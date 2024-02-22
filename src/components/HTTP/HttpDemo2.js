import React, { useEffect, useState } from 'react'
import UserCard from '../listitem/UserCard';

export default function HttpDemo2() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    let URL = 'https://jsonplaceholder.typicode.com/users';
    let res = await fetch(URL)
    let data = await res.json();
    setUsers(data)
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {
            users.map((user) => {
              return <UserCard user={user} key={user.id} />
            })
          }
        </div>
      </div>


    </div>
  )
}
