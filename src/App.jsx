import React, { useState } from 'react';
import './App.css'
const Todo = () => {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, { id: Date.now(), task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasksList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasksList(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasksList.filter((item) => item.id !== id);
    setTasksList(filteredTasks);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasksList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.task}
            </span>
            <button onClick={() => deleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
