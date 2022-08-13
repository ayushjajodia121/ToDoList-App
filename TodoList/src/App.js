import {useState,useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import './App.css';


function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const[inputTask,setInputTask] = useState("");
  const[todos,setTodos] = useState(initialState);
  const[editTodos,setEditTodos] = useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form 
            inputTask={inputTask}
            setInputTask={setInputTask}
            setTodos={setTodos}
            todos={todos}
            editTodos={editTodos}
            setEditTodos={setEditTodos}
          />
        </div>
        <div>
          <ToDoList 
            todos={todos}
            setTodos={setTodos}
            setEditTodos={setEditTodos}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
