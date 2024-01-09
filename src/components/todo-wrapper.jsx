import react, { useEffect, useState } from 'react'
import '../assets/styles/main.css'
import '../assets/styles/root.css'
import { Button } from './common-components/Button'
import ToDoList from './ToDoList'
import Container from './Container'

export const TodoWrapper = () => {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  // handel-change
  const handelChange = (e) => {
    if(e.target.name === 'task'){
      setTitle(e.target.value);
    }
    else {
      setDescription(e.target.value);
    }
  }

  // Add the task
  const addTask = (e) => {
    e.preventDefault();
    setTodoList([...todoList, {key: todoList.length + 1, titleName:title, descritionName:description, completed: false}])
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    localStorage.setItem("allToDoList: ", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Container>
      <div className="todo-wrapper">
        <div className="flex items-center justify-between mb-3"  style={{gap:'16px'}}>
          <div className="input-form flex items-center justify-between" style={{gap:'8px'}}>
            <label htmlFor="title">Title</label>
            <input className="input-field" type="text" name="task" placeholder="Enter the task?" value={title} onChange={(e)=>{handelChange(e)}} />
          </div>
          <div className="input-form flex items-center justify-between" style={{gap:'8px'}}>
            <label htmlFor="title">Discripation</label>
            <input className="input-field" type="text" name="description" placeholder="Describe the task" value={description} onChange={(e)=>{handelChange(e)}} />
          </div>
        </div>
        <div className='flex items-center' style={{float: 'right'}}>
          <Button className='primary' onClick={addTask}>Add task</Button>
        </div>
      </div>
      { 
        todoList.length != 0 && 
        <div className='todo-list-item'>
          {todoList.map((task)=>{
            return <ToDoList taskName={task} key={task.key} />
          })}
        </div>
      }
    </Container>
  )
}