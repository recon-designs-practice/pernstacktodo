import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App bg-slate-400 min-h-screen">
      <div className='grid grid-cols-12'>
        <h1 style={{ border: '1px solid red' }} className='font-bold text-3xl col-span-12'>Todo list</h1>
        <Button label="Hello" />
      </div>
    </div>
  );
}

export default App;
