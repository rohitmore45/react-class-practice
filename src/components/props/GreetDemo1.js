import React, { Component } from 'react'

export default class GreetDemo1 extends Component {
  render() {
    let { name, msg, children } = this.props; //props destructring
    return <>
      <h1>Hi {name}, {msg}</h1>
      <h2>{children}</h2>
    </>

  }
}

