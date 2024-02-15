import React, { Component, PureComponent } from 'react'

export default class PureDemo1 extends PureComponent {
  state = {
    color: 'red'
  }
  changeColor = () => {
    this.setState({ color: 'blue ' })
  }
  render() {
    console.log('pureDemo1 render() called ')
    return (
      <>
        <h1>color is {this.state.color}</h1>
        <button onClick={this.changeColor}>Change color</button>
      </>

    )
  }
}
