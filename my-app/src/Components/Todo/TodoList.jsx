import React, { useState } from 'react';

const TodoList = () => {

  // Styles
 const inputContainerStyle = {
    display: 'flex',
    width:"50%",
    alignItems:"center",
    marginBottom: '1rem',
  };
  
  const inputStyle = {
    flex: '1',
    padding: '0.5rem',
    marginRight: '0.5rem',
  };
  
  const addButtonStyle = {
    padding: '0.5rem',
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  };
  
  const taskListStyle = {
    listStyle: 'none',
    padding: '0',
    // cursor: 'pointer',
  };
  
  const taskItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
    backgroundColor:"orange",
    width:"50%"
  };
  
  const taskTextStyle = {
    flex: '1',
    cursor: 'pointer',
  };
  
  const removeButtonStyle = {
    padding: '0.5rem',
    backgroundColor: '#f44336',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    marginLeft: '0.5rem',
  };

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
        
    if(newTask.length === 0  || newTask.trim()===""){
        alert("Task Cannot be Empty")
        return;
    }
     else{
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
     }

  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h2>To-Do List Component</h2>
      
      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {completedTasks.length}</p>

      <div style={inputContainerStyle}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          style={inputStyle}
          placeholder="Enter task here"
        />
        <button onClick={handleAddTask} style={addButtonStyle}>
          Add Task
        </button>
      </div>

      <ul style={taskListStyle}>
        {tasks.map((task) => (
          <li key={task.id} style={taskItemStyle}>
            <span
              style={{
                ...taskTextStyle,
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
              onClick={() => handleCompleteTask(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => handleRemoveTask(task.id)} style={removeButtonStyle}>
              Remove
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TodoList;


