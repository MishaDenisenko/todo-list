import React from 'react';
import '../App.css'


const Task = ({name, setIncompleteTaskList, setCompletedTaskList, isCompleted}) => {
    const handleSwitch = (e) => {
        e.preventDefault();

        if (isCompleted) {
            setIncompleteTaskList(prevState => [name, ...prevState]);
            setCompletedTaskList(prevState => prevState.splice(prevState.indexOf(name)) ? prevState : prevState);
        }
        else {
            setCompletedTaskList(prevState => [name, ...prevState]);
            setIncompleteTaskList(prevState => prevState.splice(prevState.indexOf(name)) ? prevState : prevState);
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();

        if (isCompleted) {
            setCompletedTaskList(prevState => prevState.splice(prevState.indexOf(name), 1) ? [...prevState] : [...prevState]);
        }
        else {
            setIncompleteTaskList(prevState => prevState.splice(prevState.indexOf(name), 1) ? [...prevState] : [...prevState]);
        }
    }

    const handleEdit = (e) => {
        e.preventDefault();

        const item = e.target.parentNode;
        const label = item.querySelector('label');
        const editInput = item.querySelector('input[type=text]');

        if (item.classList.contains("edit-mode")) {
            if (isCompleted)
                setCompletedTaskList(prevState => prevState.splice(prevState.indexOf(name), 1, editInput.value) ? [...prevState] : [...prevState]);
            else
                setIncompleteTaskList(prevState => prevState.splice(prevState.indexOf(name), 1, editInput.value) ? [...prevState] : [...prevState]);
            label.innerText = editInput.value;
        }
        else editInput.value = label.innerText;

        item.classList.toggle('edit-mode')
    }

    return (
        <div className='task-item'>
            <input onClick={handleSwitch} type="checkbox" checked={isCompleted}/>
            <label>{name}</label>
            <input type="text"/>
            <button onClick={handleEdit} className="edit">Edit</button>
            <button onClick={handleDelete} className="delete">Delete</button>
        </div>
    );
};

export default Task;