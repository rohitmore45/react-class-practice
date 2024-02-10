import React from 'react'

export default function Addition({num1=0, num2=0}) {
  return<>
        <h2>The sum of {num1} and {num2} is {num1 + num2}</h2>
  </>
}
