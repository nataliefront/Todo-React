import React from 'react';
import { useState } from 'react';

function TodoForm({ addTask }) {
   const [userInput, setUserInput] = useState('');

   const handleChange = (e) => {
      setUserInput(e.currentTarget.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      addTask(userInput);
      setUserInput("");
   }

   const handleKeyPress = (e) => {
      if(e.key === "Enter") {
         handleSubmit(e);
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Яка задача?" />

         <button>Зберегти</button>
      </form>
   )
}

export default TodoForm;