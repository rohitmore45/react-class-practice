import React, { Component } from 'react'

export default class EventDemo1 extends Component {
  f1 = () => {
    console.log('I am f1 ')
  }

  add = (a, b) => {
    console.log(`addition is ${a + b}`)
  }
  render() {
    return (
      <>
        <button onClick={this.f1} className='btn btn-primary'>btn-1</button>
        <button onClick={() => this.add(2, 4)} className='btn btn-secondary mx-2 '>add</button>


      </>
    )
  }
}
