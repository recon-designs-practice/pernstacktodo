import React, { useEffect } from 'react'
import { TextField } from '@mui/material'
import axios from 'axios'
import useTodoStore from './stores/store';
import Button from './components/Button';
import './App.css';

// const api = "http://localhost:5550/api/todos"
const api = "https://pern-stack-todo-service.onrender.com/api/todos"

function App() {
  const todosArr = useTodoStore((state) => state.todos)
  const setTodos = useTodoStore((state) => state.setTodos)
  const newTitle = useTodoStore((state) => state.newTitleInputValue)
  const setNewTitle = useTodoStore((state) => state.setNewTitle)
  const newDescription = useTodoStore((state) => state.newDescriptionInputValue)
  const setNewDescription = useTodoStore((state) => state.setNewDescription)

  useEffect(() => {
    axios.get(api)
      .then((response) => {
        const tempArr = []

        response.data.forEach((task) => {
          tempArr.push(task)
        })

        setTodos(tempArr)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [setTodos])

  const handleAddTodo = () => {
    axios
      .post(`${api}`, {
        todo_title: newTitle,
        todo_description: newDescription,
        todo_is_complete: false
      })
      .then((response) => {
        axios
          .get(api)
          .then((response) => {
            const tempArr = []

            response.data.forEach((entry) => {
              tempArr.push(entry)
            })
            setTodos(tempArr)
            setNewTitle('')
            setNewDescription('')
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='grid-container'>
      <h1>PostgreSQL Todo List</h1>
      <div className='add-section'>
        <TextField placeholder='Title' variant='outlined' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <TextField placeholder='Description' variant='outlined' value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
        <Button className='form-button' label="Add" onClick={handleAddTodo} />
      </div>
      <div style={{ gridColumn: '3 / 11' }}>
        {todosArr.map((todo, idx) => {
          const { todo_title, todo_description } = todo

          return (
            <div key={idx} style={{ margin: '0px 0px 20px 0px' }}>
              <p style={{ margin: '0px 0px 8px 0px', fontWeight: 'bold' }}>{`${todo_title}`}</p>
              <p style={{ margin: '0px' }}>{`${todo_description}`}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
