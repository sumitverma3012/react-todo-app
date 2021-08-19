import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import Todos from "../components/Todos/Todos";
import {getLocalStorage, setLocalStorage} from '../utils/localStorage';

const TodoContainer = () => {
    const [todos, setTodos] = useState(() => JSON.parse(getLocalStorage('todos')) || []);
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [completed, setCompleted] = useState(0);
    const [isFilterEnabled, setIsFilterEnabled] = useState(false);

    useEffect(() => {
        setCompleted(todos.filter(item => item.completed === true).length)
        setLocalStorage('todos', JSON.stringify(todos));
        if(isFilterEnabled){
            filterCompleteTodoItems()
        } else {
            setFilteredTodos([...todos]);
        }
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
        const filteredTodo = todos.filter((todo) => todo.id !== todoItem.id)
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

    const filterCompleteTodoItems = () => {
        setIsFilterEnabled(true)
        setFilteredTodos(todos.filter((todo) => !!todo.completed));
    }

    const filterTotalTodoItems = () => {
        setFilteredTodos(todos);
        setIsFilterEnabled(false)
    }

    return(
        <Todos
            addTodoItem={createTodoItem}
            deleteTodoItem={deleteTodoItem}
            todosList={filteredTodos}
            completeTodoItem={completeTodoItem}
            filterTotalTodoItems={filterTotalTodoItems}
            filterCompleteTodoItems={filterCompleteTodoItems}
            totalTodos={todos.length}
            completedTodos={completed}
        />
    )
}

export default TodoContainer;