import './App.css';
import {useState} from 'react'
import Addtask from './Components/Addtask/Addtask';
import FilterTask from './Components/FilterTask/FilterTask';
import TodoList from './JS/TodoList/TodoList';

function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);
  return (
    <div >
<Addtask/>
<div style={{ textAlign: "center" }}>
  <FilterTask setDone={setDone} setUndone={setUndone}/>
      
      </div>
<TodoList  done={done} unDone={unDone}/>
    </div>
  );
}

export default App;