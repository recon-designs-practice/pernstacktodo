import logo from './logo.svg';
import { TextField } from '@mui/material'
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello world</h1>
        <TextField variant='outlined' />
        <Button label="Click this" />
      </div>
    </div>
  );
}

export default App;
