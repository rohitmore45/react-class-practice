import React, { useState } from 'react'
import Counter from './Counter';
import Todo from './Todo';

export default function MemoParent() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(['todo1', 'todo2'])

  let addTodo = () => {
    todos.push('new Todo')
    setTodos([...todos])
  }
  return (
    <>
      <h2>this is memo parent component</h2>
      <button onClick={() => setCounter(counter + 1)}>Change Counter</button>
      <button onClick={addTodo}>Add Todo</button>

      <Counter counter={counter} />
      -------------------------------------
      <Todo todos={todos} />
    </>
  )
}
