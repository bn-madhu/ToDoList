import React, { useState } from 'react';
import '../assets/styles/main.css'
import '../assets/styles/root.css'
import Container from './common-components/Container'
import ToDoInput from './ToDoInput';
import ToDoLists from './ToDoLists';

export const TodoWrapper = () => {
  // reading
  const [todoItems, setTodoItems] = useState(
    [
      {todo: 'Mow the lawn', descriptionName: 'this is description 1', complete: false},
      {todo: 'Do Laundry', descriptionName: 'this is description 2', complete: false},
      {todo: 'Make Dinner', descriptionName: 'this is description 3', complete: false}
    ]
  );
  
  // creating
  const createTodoItem = (todo, descriptionName) => {
    const newTodoItems = [...todoItems, { todo, descriptionName, complete: false }];
    setTodoItems(newTodoItems);
  };

  // deleting
  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1)
    setTodoItems(newTodoItems)
  }

  // updating
  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false ? (newTodoItems[index].complete = true) : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems);
  };

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItemTaskName = prompt(`Update TASK name?`, item.todo);
    let newItemSDescriptionName = prompt(`Update DESCRIPTION?`, item.descriptionName);
    let todoObj = { todo: newItemTaskName, descriptionName: newItemSDescriptionName, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItemTaskName === null || newItemTaskName === "") {
      return;
    } else {
      item.todo = newItemTaskName;
      item.todo = newItemSDescriptionName;
    }
    setTodoItems(newTodoItems);
  };

  return (
    <Container>
      <ToDoInput createTodoItem={createTodoItem} />
      {
        todoItems.length !== 0 &&
        <div className='todo-list-item'>
          {todoItems.map((item, index)=>(
            <ToDoLists key={index} index={index} item={item} deleteTodoItem=
            {deleteTodoItem} completeTodoItem={completeTodoItem} updateTodoItem={updateTodoItem} />
          ))}
        </div>
      }
    </Container>
  )
}