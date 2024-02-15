import React from 'react'

function ComponentB({ b }) {
  console.log('B component rendered...')

  return (
    <h5>ComponentB - b value is {b}</h5>
  )
}
export default React.memo(ComponentB)
