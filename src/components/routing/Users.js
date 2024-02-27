import React from "react";
import users from "../listitem/users.json";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();

  const goToUserDetails = (name, city, email) => {
    let obj = {
      pathname: '/userdetails',
      search: `?${createSearchParams({ name, city, email })}`
    }
    navigate(obj)

  }
  return (
    <>
      <div className="container">
        <div className="row">
          {users.map((user) => {
            let { id, name, email, address: { city } } = user;
            return <div className="col-sm-3 mt-4 mb-4" key={id}  >
              <div className="card " >
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
                  <button className="btn btn-primary"
                    onClick={() => goToUserDetails(name, city, email)}>
                    Details
                  </button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  );
}
