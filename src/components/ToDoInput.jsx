import React, { useState } from 'react'
import { Button } from './common-components/Button';

const ToDoInput = ({createTodoItem}) => {
  const [taskName, setTaskName] = useState("");
  const [descriptionName, setDescriptionName] = useState("");

  const handelInputChange = (e) => {
    if(e.target.name === 'task'){
      setTaskName(e.target.value);
    }
    else {
      setDescriptionName(e.target.value);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(taskName === ""){
      return console.log("Please add something to-do")
    }
    createTodoItem(taskName, descriptionName);
    setTaskName("");
    setDescriptionName("");
  }

  return (
    <>
      <form className="todo-wrapper" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between mb-3"  style={{gap:'16px'}}>
          <div className="input-form flex items-center justify-between" style={{gap:'8px'}}>
            <label htmlFor="title">Title</label>
            <input className='mr-1' type="text" placeholder="Create todo task" name="task" value={taskName} onChange={(e) => handelInputChange(e)} />
          </div>
          <div className="input-form flex items-center justify-between" style={{gap:'8px'}}>
            <label htmlFor="title">Discripation</label>
            <input className='mr-1' type="text" placeholder="Description of the task" name="description" value={descriptionName} onChange={(e) => handelInputChange(e)} />
          </div>
        </div>
        <div className='flex items-center' style={{float: 'right'}}>
          <Button className='primary' onClick={handleSubmit}>Create</Button>
        </div>
      </form>
    </>
  )
}

export default ToDoInput