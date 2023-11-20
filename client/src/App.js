import React from 'react'
import { TextField } from '@mui/material'
import useTodoStore from './stores/store';
import Button from './components/Button';
import './App.css';

function App() {
  const todosArr = useTodoStore((state) => state.todos)
  const newTitle = useTodoStore((state) => state.newTitleInputValue)
  const setNewTitle = useTodoStore((state) => state.setNewTitle)
  const newDescription = useTodoStore((state) => state.newDescriptionInputValue)
  const setNewDescription = useTodoStore((state) => state.setNewDescription)

  return (
    <div className='grid-container'>
      <h1>Hello world</h1>
      <div style={{ gridColumn: '3 / 11' }}>
        <h6>{newTitle}</h6>
        <h6>{newDescription}</h6>
      </div>

      <div className='add-section'>
        <TextField placeholder='Title' variant='outlined' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <TextField placeholder='Description' variant='outlined' value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
        <Button className='form-button' label="Add" />
      </div>
      <div style={{ gridColumn: '3 / 11' }}>
        {todosArr.map((todo) => {
          const { todo_id, todo_title } = todo

          return <p key={todo_id}>{todo_title}</p>
        })}
      </div>
    </div>
  );
}

export default App;
