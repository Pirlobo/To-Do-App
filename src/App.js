import React, { useState, useEffect } from "react";
import './App.css';
// Importing Components
import Form from "./Components/Form"
import TodoList from "./Components/TodoList"
function App() {

  // State
  const [inputText, setInputText] = useState(""); // hooks
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Run once when the app start
   useEffect(() =>{
     getLocalTodos();
   },[]);
  // Use effect
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Save to local
  // const saveLocalTodos = () => {
  //   if (localStorage.getItem('todos') === null) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   } else {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // }
    const saveLocalTodos = () => { 
    localStorage.setItem('todos', JSON.stringify(todos));
}

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      // JSON.parse(localStorage.getItem('todos'));
    // console.log(todoLocal);
    setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>ToDo List </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}

      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
