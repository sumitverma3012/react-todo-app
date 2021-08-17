import React, {useState}  from 'react';

const AddTodo = (props) => {
    const [newTask, setNewTask] = useState("");
    const {addTodoItem} = props;

    const submitNewTodo = (event) => {
        event.preventDefault();
        addTodoItem(newTask);
        setNewTask("");
    }

    return (
        <form onSubmit={submitNewTodo}>
            <input
                type="text"
                placeholder="Todo description"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;