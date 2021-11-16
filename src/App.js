import React from 'react';
import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([newItem, ...todos])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([...todos.map((todo) => 
      todo.id === id ? { ...todo, complete: !todo.complete } : {...todo } )])
  }

  return (
    <div className="App">
      <header>
        <h2>Кількість справ: {todos.length}</h2>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
          todo={todo}
          key={todo.id}
          toggleTask={handleToggle}
          removeTask={removeTask} />
        )
      })}
    </div>
  );
}

export default App;
