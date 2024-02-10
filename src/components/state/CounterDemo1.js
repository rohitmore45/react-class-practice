import React, { Component } from 'react'

export default class CounterDemo1 extends Component {
  counter = 0;
  increment = () => {
    this.counter = this.counter + 1;
    console.log(this.counter)
    this.forceUpdate();
  }
  render() {
    return <>
      <h1>this is counter 1 demo component</h1>
      <hr />
      <div>Counter value is {this.counter}</div>
      <p>
        <button onClick={this.increment}>Increment</button>
      </p>
    </>
  }
}
