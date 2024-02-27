import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AboutUs() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    console.log('Do something logic......');//any logic can be executed
    navigate('/home')

  }
  return (
    <>
      <h1>This is a About us component</h1>
      <a href='/home'>home</a>
      <Link to='/home' className='m-3'>go to home</Link>
      <button onClick={goToHomePage}>Do something & go to home</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Next</button>
    </>
  )
}
