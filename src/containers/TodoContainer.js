import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import Todos from "../components/Todos/Todos";
import {getLocalStorage, setLocalStorage} from '../utils/sessionStorage';

const TodoContainer = () => {
    const [todos, setTodos] = useState(
        () => JSON.parse(getLocalStorage('todos')) || []
    );
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setCompleted(todos.filter(item => item.completed === true).length)
        setLocalStorage('todos', JSON.stringify(todos));
    }, [todos]);

    const createTodoItem = (description) => {
        const newTodo = {
            id: uuidv4(),
            description,
            completed: false,
        };
        setTodos([...todos, newTodo])
    };

    const deleteTodoItem = (todoItem) => {
        const filteredTodo = todos.filter((todo) => {
            return todo.id !== todoItem.id;
        })
        setTodos(filteredTodo);
    }

    const completeTodoItem = (todoItem) => {
        const filteredTodo = todos.map((todo) => {
            if (todo.id === todoItem.id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        })
        setTodos(filteredTodo);
    }

    return(
        <>
            <Todos addTodoItem={createTodoItem} deleteTodoItem={deleteTodoItem} todosList={todos} completeTodoItem={completeTodoItem}/>
            <div className="child">
                <span>Total of items: {todos.length}</span> | <span>Completed: {completed}</span>
            </div>
        </>
    )
}

export default TodoContainer;