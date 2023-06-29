import React from 'react';

const AddItem = ({setIncompleteTaskList, incompleteTaskList}) => {
    const handleAddTask = (e) => {
        e.preventDefault();
        const taskName = document.querySelector('#new-task').value;

        setIncompleteTaskList(incompleteTaskList.includes(taskName) ? [...incompleteTaskList]: [taskName, ...incompleteTaskList])
    }

    return (
        <div>
            <label htmlFor="new-task">Add Item</label>
            <input id="new-task" type="text"/>
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
};

export default AddItem;