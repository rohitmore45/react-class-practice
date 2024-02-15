import React from 'react'

function ComponentC({ c }) {
  console.log('C component rendered...')

  return (
    <h5>ComponentC - c value is {c}</h5>
  )
}
export default React.memo(ComponentC)
