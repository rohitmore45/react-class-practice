import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function UserDetails() {
  let [searchParams] = useSearchParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    // console.log(currentParams)// get new values on change;
    // console.log(searchParams.get('name'), searchParams.get('email'),
    //   searchParams.get('city'))
    // setUser(currentParams)
    setUser({
      name: searchParams.get('name'),
      email: searchParams.get('email'),
      city: searchParams.get('city')
    })

  }, [searchParams])


  return (
    <> <h1>UserDetails</h1>
      <button className='btn btn-sm btn-warning'
        onClick={() => navigate(-1)}>Back</button>
      <div className="card col-sm-4 offset-4" >
        <img
          // height={200}
          className="card-img-top w-25"
          src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {user.name}</h5>
          <p className="card-text">
            Email: {user.email}
          </p>
          <p className="card-text">
            Address: {user.city}
          </p>

        </div>
      </div></>
  )
}
