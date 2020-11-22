import React from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ];

  return (
    <div className="App">
      <h1 className="title">Taskbox</h1>
      <TaskList tasks={defaultTasks} loading={false} />
    </div>
  );
}

export default App;
