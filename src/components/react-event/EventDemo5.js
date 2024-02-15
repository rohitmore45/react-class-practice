import React from 'react'

export default function EventDemo5() {
  return (
    <div onClickCapture={() => console.log('div clicked')}>

      div <br />
      <span onClickCapture={() => console.log('span clicked')}>
        span
        <br />
        <button onClickCapture={() => console.log('button clicked')}>click me</button>
      </span>
    </div>
  )
}
