import React from 'react'

export default function UserCard({ user }) {
  let { id, name, email,  address: { city } } = user;

  return <>
    <div className="col-sm-3 mt-4 mb-4" >
      <div className="card" key={id}>
        <img
          className="card-img-top"
          src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">
          Email: {email}
          </p>
          <p className="card-text">
            Address: {city}
          </p>
          <a href="#" className="btn btn-primary">
            View more..
          </a>
        </div>
      </div>
    </div>

  </>
}
