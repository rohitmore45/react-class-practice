import React, { useState } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export default function MemoParent2() {
  let [a, setA] = useState(100);
  let [b, setB] = useState(200);
  let [c, setC] = useState(300);

  return (
    <>
      <h1>Memo Parent2 functional component</h1>

      <button onClick={() => setA(a + 1)}>Update A</button>
      <button onClick={() => setB(b + 1)} className='mx-2' >Update B</button>
      <button onClick={() => setC(c + 1)} >Update C</button>


      <ComponentA a={a} />
      <ComponentB b={b} />
      <ComponentC c={c} />

    </>
  )
}
