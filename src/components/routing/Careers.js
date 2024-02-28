import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Careers() {
  return (
    <>
      <h1 className='text-center text-info'>This is a Careers component</h1>
      <div className='text-center'>
        <Link to='permanent' className='btn btn-sm btn-warning mx-4' >Permanent Job</Link>
        <Link to='contract' className='btn btn-sm btn-warning mx-4'>Contract Job</Link>
      </div>
      <Outlet />

    </>

  )
}
