// import React, { useState } from 'react'

// export default function RemainingChar() {
//   let [count, setCount] = useState(100)

//   let handleCount = (e) => {
//     let userValue = e.target.value;
//     let remainChar = 100 - userValue.length;
//     setCount(remainChar);

//     console.log(e.target, e.target.value)
//     // console.log(e.target.value)
//   }
//   return <>
//     <textarea onKeyUp={handleCount}></textarea>
//     <p>Remaining Character : {count} </p>
//   </>
// }

import React, { Component } from 'react'

export default class RemainingChar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 100,
    }
  }

  handleCount = (e) => {
    let msg = e.target.value;
    this.setState({ count: 100 - msg.length })
  }


  render() {
    return <>
      <textarea onKeyUp={this.handleCount}></textarea>
      <p>Remaining Character : {this.state.count} </p>
    </>
  }
}
