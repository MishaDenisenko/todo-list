import React from 'react';

const AddItem = ({setIncompleteTaskList, incompleteTaskList}) => {
    const handleAddTask = (e) => {
        e.preventDefault();
        const addField = document.querySelector('#new-task')
        const taskName = addField.value.trim();

        if (taskName.length === 0) {
            alert('Добавьте название задачи для добавления!');
            return addField.classList.add('empty');
        }

        addField.value = '';
        setIncompleteTaskList(incompleteTaskList.includes(taskName) ? [...incompleteTaskList]: [taskName, ...incompleteTaskList])
    }

    const handleOnChange = (e) => {
        e.preventDefault();

        e.target.classList.remove('empty');
    }

    const handleSubmit = (e) => {
        if (e.code === 'Enter') handleAddTask(e)
    }

    return (
        <div className={'add-block'}>
            <label className='add-label' htmlFor="new-task">Add Item</label>
            <input className='add-field' onChange={handleOnChange} onKeyDown={handleSubmit} id="new-task" type="text"/>
            <button  onClick={handleAddTask}>Add</button>
        </div>
    );
};

export default AddItem;