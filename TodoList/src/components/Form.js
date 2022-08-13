import React, { useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({ inputTask, setInputTask, todos, setTodos, editTodos, setEditTodos }) => {

    useEffect(()=>{
        if(editTodos){
            setInputTask(editTodos.title);
        }else{
            setInputTask("");
        }
    },[setInputTask,editTodos]);

    const updateTodo = (title,id,completed) => {
        const newTodo = todos.map((todo) => {
            return(
            (todo.id === id) ? {title, id, completed} : todo
            )
        });
        setTodos(newTodo);
        setEditTodos("");
    }
     

    const onInputChange = (event) => {
        setInputTask(event.target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodos){
        setTodos([...todos,{ id:uuidv4(), title:inputTask, completed:false }]);
        setInputTask("");
        }
        else{
            updateTodo(inputTask,editTodos.id,editTodos.completed);
        }
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input 
            autoFocus
            type="text" 
            placeholder="Enter your Task here....." 
            className="task-input" 
            value={inputTask}
            onChange={onInputChange}/>
        <button className="button-add" type="submit">
            {editTodos?"Save":"Add"}
        </button>
    </form>
  )
}

export default Form
