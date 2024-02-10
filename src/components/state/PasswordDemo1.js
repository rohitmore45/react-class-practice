// import React, { Component } from 'react'

// export default class PasswordDemo1 extends Component {

//   state = {
//     flag: true
//   }

//   handleClick = () => {
//     this.setState({ flag: !this.state.flag })
//   }

//   render() {
//     return <>
//       <input type={this.state.flag ? 'password' : 'text'} />
//       <input type='checkbox' onClick={this.handleClick} id='check' />
//       <label htmlFor='check'> {this.state.flag ? 'SHOW ' : 'HIDE'}</label>
//     </>
//   }
// }

import React, { useState } from 'react';

export default function PasswordDemo1() {
  let [flag, setFlag] = useState(true);

  let handleClick = () => {
    setFlag(!flag)
  }
  return <>
    <input type={flag ? 'password' : 'text'} />
    <input type='checkbox' onClick={handleClick} id='check' />
    <label htmlFor='check'>{flag ? 'Show' : 'Hide'}</label>
  </>
}

