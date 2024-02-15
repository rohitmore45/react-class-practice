import React, { useState } from 'react'

export default function PureDemo2() {
  let [color, setColor] = useState('red');

  let changeColor = () => {
    setColor('red');
  }
  return (
    <>
      {console.log('pureDemo1 render() called from function component')}
      <h1>color is {color}</h1>
      <button onClick={changeColor}>Change color</button>
    </>
  )
}
