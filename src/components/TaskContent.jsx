import React from 'react';
import Task from "./Task";
import '../App.css'

const TaskContent = ({isCompleted = false, taskList, setIncompleteTaskList, setCompletedTaskList}) => {
    return isCompleted ? (
        <>
            <h3>Completed</h3>
            <div className='completed-tasks'>
                {taskList.map((task, i) => (
                    <Task
                        isCompleted={isCompleted}
                        setCompletedTaskList={setCompletedTaskList}
                        setIncompleteTaskList={setIncompleteTaskList}
                        taskList={taskList}
                        name={task}
                        key={i}
                    />))}
            </div>
        </>
    ) : (
        <>
            <h3>TodoTasks</h3>
            <div className='incomplete-tasks'>
                {taskList.map((task, i) => (
                    <Task
                        isCompleted={isCompleted}
                        setCompletedTaskList={setCompletedTaskList}
                        setIncompleteTaskList={setIncompleteTaskList}
                        taskList={taskList}
                        name={task}
                        key={i}
                    />))}
            </div>
        </>
    );
};

export default TaskContent;