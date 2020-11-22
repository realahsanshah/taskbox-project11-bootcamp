import React from 'react';
import './App.css';
import InboxScreen from './components/InputScreen';
// import {archiveTask,pinTask} from './store/taskSlice';
// import { useDispatch } from 'react-redux';

function App() {
  // const defaultTasks = [
  //   { id: '1', title: 'Something', state: 'TASK_INBOX' },
  //   { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  //   { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  //   { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  // ];

  
  // const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1 className="title">Taskbox</h1>
      <InboxScreen />
    </div>
  );
}

export default App;
