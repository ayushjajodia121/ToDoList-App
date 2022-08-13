import React from 'react'

const ToDoList = ({ todos, setTodos, setEditTodos}) => {

  //*****************************Edit Function******************************/

  const handleEdit = (todoClicked) =>{
    const findTodo = todos.find((todo)=>todo.id ===todoClicked.id);
    setEditTodos(findTodo);
  }
  //****************************Complete function****************************/

  const handleComplete = (todo) => {
    setTodos(todos.map((item)=>{
      if(item.id === todo.id)
      {
          return{...item, completed: !item.completed };
      }
      return item;
    })); 
  }

  //*******************************Delete Function****************************/

  const handleDelete = (todoClicked)=>{
    setTodos(todos.filter((todo)=>todo.id!==todoClicked.id));
  };
  return (
    <>
    <div>
      <ul>
        {todos.map((todo) => {
          return(
            <li className = "list-item " key = {todo.id}>
                <input
                    type='text'
                    value={todo.title}
                    className={`list ${todo.completed?"complete":""}`}
                    onChange={(event)=>event.preventDefault()}
                />
                <div>
                  <button className='button-complete task-button' onClick={()=>{handleComplete(todo)}}>
                    <i className='fa fa-check-circle'></i>  
                  </button>  
                  <button className='button-edit task-button' onClick={()=>{handleEdit(todo)}}>
                    <i className='fa fa-edit'></i>  
                  </button>  
                  <button className='button-delete task-button' onClick={()=>{handleDelete(todo)}}>
                    <i className='fa fa-trash'></i>  
                  </button>  
                </div>
            </li>
          )
        })}
      </ul> 
       
    </div>
    </>
  )
}

export default ToDoList;
