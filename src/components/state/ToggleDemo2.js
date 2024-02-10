import React, { useState } from 'react'

export default function ToggleDemo2() {
  const [flag, setFlag] = useState(true);

  let handleToggle = () => {
    setFlag(!flag);
    // console.log(!flag)
  }

  return <>
    <h2 style={{ display: flag ? 'block' : 'none' }}>this is the text that will toggle after below button click..</h2>
    <button onClick={handleToggle}>{flag ? 'HIDE' : 'SHOW'}</button>
  </>
}
