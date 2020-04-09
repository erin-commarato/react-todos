import React from 'react';

const Todo = ({ todo, finishTodo }) => {
  const style = {}
  if (todo.completed) {
    style.textDecoration = 'line-through'
  }
  return (
    <div style={style} onClick={finishTodo} data-name={todo._id}>
      {/* <input type="checkbox" name={todo._id} /> */}
      {todo.text}
    </div>
  )
}

export default Todo;