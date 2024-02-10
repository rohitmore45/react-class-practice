import React from 'react'

export default function ListDemo1() {
    let cities = ["pune", "mumbai", "banglore", "hyderabad"];
  return <>
    <ol>
        {cities.map((city,ind)=>{
            return <li key={ind}>{city}</li>
        })}
    </ol>

    <select>
        <option>----select----</option>
        {cities.map((city,ind)=>{
            return <option key={ind}>{city}</option>
        })}
    </select>
  </>
}
