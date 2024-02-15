import React from 'react'

function Counter({ counter }) {
  console.log('counter component rendered')
  return (
    <h2>Counter value is {counter}</h2>
  )
}
export default React.memo(Counter)