import React from 'react'

export default function ConditionalDemo1() {
  let n = 45;
  if(n % 2 === 0){
    return <h2>{n} is even number</h2>
  }
  else{
    return <h2>{n} is odd number</h2>
  }
}
