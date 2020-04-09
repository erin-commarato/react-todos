import React, { useState, useRef, useEffect } from "react";
import {Link} from 'react-router-dom';
import Todo from '../components/Todo'
import API from '../utils/API'
import './todos.css'

function Todos(props) {
  // Setting our component's initial state
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const inputEl = useRef(null);

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
    loadTodos();
  }, []);

  // Loads all todos and sets them to "todos" in state
  function loadTodos() {
    API.getTodos()
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    setTodo(event.target.value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    // save todos to the database
    API.saveTodo({ text: todo })
      .then(() => {
        loadTodos();
      })
      .catch(err => console.log(err));

    // set todo to blank to clear input
    setTodo('');
  };

  const finishTodo = (todo) => {
    const todoToEdit = todos.find(item => item._id === todo._id);
    API.updateTodo({ ...todoToEdit, completed: !todoToEdit.completed })
      .then(() => {
        loadTodos();
      })
      .catch(err => console.log(err));
  }

  const renderTodos = () => {
    return (
      <div>
        <form>
          <input type="text" name="todo" onChange={handleInputChange} value={todo} ref={inputEl}></input>
          <button onClick={handleFormSubmit}>Add Todo</button>
        </form>
        <hr />
        <h2>Todo</h2>
        {!todos.length ?
          <h3>Nothing left to do!</h3> :
          todos.map((todo) => <Todo todo={todo} key={todo._id} finishTodo={() => finishTodo(todo)} />)
        }
    </div>
    )
  }

  const logInPlease = () => {
    return (
      <div>You must be logged in! Please login <Link to="/login">here</Link></div>
    )
  }

  return (
    <div className="todos">
      <h1>My Todos App</h1>
      {props.isLoggedIn ? renderTodos() : logInPlease()}
    </div>
  );
}

export default Todos;