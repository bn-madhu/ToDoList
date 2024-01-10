import React from 'react'
import { Button } from './common-components/Button';

const ToDoLists = ({item, index, deleteTodoItem, completeTodoItem, updateTodoItem }) => {
  return (
    <div className="todolist-wrapper">
      <div className="task-list-container">
        <h1 className="list-title">{item.todo}</h1>
        <p className="list-description">{item.descriptionName}</p>
      </div>
      <div>
        <Button theme="outline" className="secondary has-right-icon" onClick={() => updateTodoItem(index)}>
          Update
          <svg x="0px" y="0px" viewBox="0 0 512 512" className="fill-active">
            <g>
              <path d="M352.459,220c0-11.046-8.954-20-20-20h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206 C343.505,240,352.459,231.046,352.459,220z"></path>
              <path d="M126.459,280c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H251.57c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20 H126.459z"></path>
              <path d="M173.459,472H106.57c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v123 c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112,0-80,35.888-80,80v352 c0,44.112,35.888,80,80,80h66.889c11.046,0,20-8.954,20-20C193.459,480.954,184.505,472,173.459,472z"></path>
              <path d="M467.884,289.572c-23.394-23.394-61.458-23.395-84.837-0.016l-109.803,109.56c-2.332,2.327-4.052,5.193-5.01,8.345 l-23.913,78.725c-2.12,6.98-0.273,14.559,4.821,19.78c3.816,3.911,9,6.034,14.317,6.034c1.779,0,3.575-0.238,5.338-0.727 l80.725-22.361c3.322-0.92,6.35-2.683,8.79-5.119l109.573-109.367C491.279,351.032,491.279,312.968,467.884,289.572z M333.776,451.768l-40.612,11.25l11.885-39.129l74.089-73.925l28.29,28.29L333.776,451.768z M439.615,346.13l-3.875,3.867 l-28.285-28.285l3.862-3.854c7.798-7.798,20.486-7.798,28.284,0C447.399,325.656,447.399,338.344,439.615,346.13z"></path>
              <path d="M332.459,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S343.505,120,332.459,120z"></path>
            </g>
          </svg>
        </Button>
        <Button className="success has-right-icon" onClick={() => completeTodoItem(index)}>Complete</Button>
        <Button theme="outline" className="danger has-right-icon" onClick={() => deleteTodoItem(index)}>
          Delete 
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g stroke="rgba(0,0,0,0)" strokeWidth="1" opacity="0" fill="#fff">
              <rect width="24" height="24" stroke="none"></rect>
              <rect x="0.5" y="0.5" width="23" height="23" fill="none"></rect>
            </g>
            <path d="M9,3V4H4V6H5V19a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V6h1V4H15V3H9M7,6H17V19H7V6M9,8v9h2V8H9m4,0v9h2V8Z" fill="#fff" className="fill-active"></path>
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default ToDoLists;