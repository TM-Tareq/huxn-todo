import React from 'react'
import "../style.css";
import { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setinput] = useState('');

    const handleSubmit = () => {
        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random() * 10),
            })
        })

        setinput("");
    }

    const removeTodos = id => setTodos((todos) => todos.filter(t => t.id !== id));

  return (
    <div className='container'>
        <input type="text" 
        placeholder='New Todo' 
        value={input} 
        onChange={(e) => setinput(e.target.value)} 
        />

    <button onClick={handleSubmit}>Submit</button>

    <ul className='todos-list'>
        {todos.map(({text, id})=> (
            <li className='todo' key={id}>
                <span>{text}</span>
                <button className='close' onClick={() => removeTodos(id)}>X</button>
            </li>
        ))}
    </ul>

    </div>
  )
};

export default Todo