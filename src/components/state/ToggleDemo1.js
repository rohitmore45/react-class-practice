import React, { Component } from 'react'

export default class ToggleDemo1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flag: true,
    }
  }

  handleToggle = () => {
    this.setState({ flag: !this.state.flag });
  }

  render() {
    return <>
      <h2 style={{ display: this.state.flag ? 'block' : 'none' }}>This paragraph will be toggled on below button click</h2>
      <button onClick={this.handleToggle}>{this.state.flag ? 'HIDE' : 'SHOW'}</button>
    </>
  }
}
