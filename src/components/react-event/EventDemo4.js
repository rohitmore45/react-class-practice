import React from 'react'

export default function EventDemo4() {

  let f1 = (e) => {
    console.log(e);
  }
  return (
    <>

      <button onClick={f1}>btn-1</button>

    </>
  )
}
