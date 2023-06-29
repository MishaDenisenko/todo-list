import React, {useState} from 'react';
import {AddItem, TaskContent} from "./components";
import "./App.css"

const App = () => {
    const [incompleteTaskList, setIncompleteTaskList] = useState([]);
    const [completedTaskList, setCompletedTaskList] = useState([]);

    const ProgressBar = () => {
        const completed = completedTaskList.length;
        const incomplete = incompleteTaskList.length;
        let progress = 0;

        if (completed && !incomplete) progress = 100;
        else if (incomplete) progress = Math.trunc((completed * 100) / (incomplete + completed))

        return (
            <div className="progress" data-progress={progress}>
                <div className="progress-bar" style={{width: progress+'%'}}></div>
            </div>
        )
    }

    return (
        <div className='container'>
            <AddItem setIncompleteTaskList={setIncompleteTaskList} incompleteTaskList={incompleteTaskList}/>
            <TaskContent
                taskList={incompleteTaskList}
                setIncompleteTaskList={setIncompleteTaskList}
                setCompletedTaskList={setCompletedTaskList}
            />
            <TaskContent
                isCompleted={true}
                taskList={completedTaskList}
                setIncompleteTaskList={setIncompleteTaskList}
                setCompletedTaskList={setCompletedTaskList}
            />
            <ProgressBar/>
        </div>
    );
};

export default App;