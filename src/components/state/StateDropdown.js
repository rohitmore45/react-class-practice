import React from 'react'
import { useState } from 'react';

export default function StateDropdown() {

  let states = ['Maharashtra', 'Rajsthan', 'Gujrat', 'UP', 'MP'];

  const [selectedState, setSelectedState] = useState('');

  let handleState = (e) => {
    // console.log(e.target.value)
    setSelectedState(e.target.value)
  }
  return <>
    <select onChange={handleState}>
      <option>Select State </option>
      {
        states.map((state, ind) => {
          return <option key={ind}>{state}</option>
        })
      }
    </select>

    <h2>You Selected : {selectedState} </h2>
  </>
}
