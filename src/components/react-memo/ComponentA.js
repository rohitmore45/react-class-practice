import React from 'react'

function ComponentA({ a }) {
  console.log('A component rendered...')
  return (
    <h5>ComponentA - a value is {a}</h5>
  )
}
export default React.memo(ComponentA)