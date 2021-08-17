import React from 'react';

const Todo = (props) => {
    const {todo, deleteTodoItem, completeTodoItem} = props;

    const renderCompletedTodoItem = (todo) => {
        const {completed, description} = todo;
        return completed ? <s>{description}</s> : description;
    }

    return (
        <li>
            <span>
                <input type="checkbox" onChange={() => completeTodoItem(todo)} checked={todo.completed}/>
            </span>
            <span>{renderCompletedTodoItem(todo)}</span>
            <span>
                <button onClick={() => deleteTodoItem(todo)}>Delete</button>
            </span>
        </li>
    )
}

export default Todo;