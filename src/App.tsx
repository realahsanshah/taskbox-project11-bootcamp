import React from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const task = {
    id: '1',
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2020, 11, 22, 12, 0),
}
  return (
    <div className="App">
      App
      <br />
      <Task task={task} />
    </div>
  );
}

export default App;
