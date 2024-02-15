import React from 'react'

function Todo({ todos }) {
  console.log('Todo component rendered')
  return (
    <>
      {todos.map((todo, ind) => {
        return <div key={ind}>{todo}</div>
      })}

    </>
  )
}
export default React.memo(Todo)