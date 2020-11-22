import React from 'react';
import Task from '../components/Task';

export default {
    component: Task,
    title: "Task",
};

// const Template = (args:any) =><Task {...args} />
const task = {
    id: '1',
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2020, 11, 22, 12, 0),
}
export const DefaultTask = () => {
    return (
        <Task task={task} />
    )
}


export const Pinned = ()=>{
    return(
        <Task task={{...task,title:"Pinned",state:'TASK_PINNED'}} />
    );
}

export const Archived = ()=>{
    return(
        <Task task={{...task,title:"Archived",state:'TASK_ARCHIVED'}} />
    );
}
