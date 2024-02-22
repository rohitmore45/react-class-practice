import React, { useEffect, useState } from 'react'
import UserCard from '../listitem/UserCard';
import axios from 'axios';

export default function HttpDemo3() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    let URL = 'https://jsonplaceholder.typicode.com/users';
    let response = await axios.get(URL);
    // console.log(response.data)
    setUsers(response.data)
    setIsLoading(false)
  }
  useEffect(() => {
    setIsLoading(true)
    fetchUsers()
  }, [])
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {
            isLoading ? <h2>Loading content...</h2> :
              users.map((user) => {
                return <UserCard user={user} key={user.id} />
              })
          }
        </div>
      </div>


    </div>
  )
}
