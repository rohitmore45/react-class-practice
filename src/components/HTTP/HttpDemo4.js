import React, { useEffect, useState } from 'react'
import UserCard from '../listitem/UserCard';
import AxiosInstance from './AxiosInstance';

export default function HttpDemo4() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    let response = await AxiosInstance.get('/users');
    // console.log(response.data)
    setUsers(response.data)
    setIsLoading(false)
  }
  const fetchComments = async () => {
    let response = await AxiosInstance.get('/comments')
    console.log(response.data)
  }

  const fetchPhotos = async () => {
    let response = await AxiosInstance.get('/photos')
    console.log(response.data)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchUsers()
    fetchComments()
    fetchPhotos()
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
