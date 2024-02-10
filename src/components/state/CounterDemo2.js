import React, { useState } from 'react'

export default function CounterDemo2() {
  let [counter, setCounter] = useState(0);
  // let counter = 0;
  let increment = () => {
    setCounter(++counter)
    console.log(counter);
  }
  return <>
    <h1>this is counter demo 2 demo </h1>
    <p>counter value is {counter}</p>
    <p>
      <button onClick={increment}>Increment</button>
    </p>
  </>
}
