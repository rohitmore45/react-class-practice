import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0 w-100 z-1">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Flipkart</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            <NavLink className='nav-link' to={'/home'} > HOME</NavLink >
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to={'/careers'}>Careers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to={'/contactus'}>Contact Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to={'/aboutus'}>About us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to={'/products'}>Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to={'/users'}>Users</NavLink>
          </li>



        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
}
