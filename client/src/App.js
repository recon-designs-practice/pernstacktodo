import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Button from './components/Button';
import './App.css';

function App() {
  const [titleInputValue, setTitleInputValue] = useState('')
  const [descriptionInputValue, setDescriptionInputValue] = useState(null)
  console.log(titleInputValue)

  return (
    <div className='grid-container'>
      <h1>Hello world</h1>
      <h6>{titleInputValue}</h6>
      <div className='add-section'>
        <TextField placeholder='Title' variant='outlined' value={titleInputValue} onChange={(e) => setTitleInputValue(e.target.value)} />
        <TextField placeholder='Description' variant='outlined' value={descriptionInputValue} onChange={(e) => setDescriptionInputValue(e.target.value)} />
        <Button className='form-button' label="Add" />
      </div>
    </div>
  );
}

export default App;
