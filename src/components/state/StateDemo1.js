import React, { Component } from 'react'

export default class StateDemo1 extends Component {
  constructor(props) {
    super(props) //parent's class constructor
      this.state = { //state is a predefined keyword
       counter : 0 
    }
  }
  // state = {
  //   counter: 0 // counter is state variable
  // }

  increment = () => {
    this.setState({ counter:this.state.counter + 1 },()=>{
      console.log(this.state.counter)
    })//setState() is Asynchronous
   
  }
  render() {
    return <>
      <h1>this is counter 1 demo component</h1>
      <hr />
      <div>Counter value is {this.state.counter}</div>
      <p>
        <button onClick={this.increment}>Increment</button>
      </p>
    </>
  }
}

