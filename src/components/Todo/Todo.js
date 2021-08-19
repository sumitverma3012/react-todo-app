import React from 'react';
import {
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Zoom
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import GreenCheckbox from "../common/Checkbox/Checkbox";
import './Todo.css';


const Todo = (props) => {
    const {todo, deleteTodoItem, completeTodoItem} = props;

    const renderCompletedTodoItem = (todo) => {
        const {completed, description} = todo;
        return completed ? <span className='todo-section__text'>{description}</span> : <span className='todo-section__description'>{description}</span>;
    }

    return (
        <Zoom timeout={600} in={true}>
            <Paper elevation={3} className={'todo-section'}>
                <ListItem dense button onClick={() => completeTodoItem(todo)}>
                    <ListItemIcon>
                        <GreenCheckbox
                            edge="start"
                            checked={todo.completed}
                            tabIndex={-1}
                        />
                    </ListItemIcon>
                    <ListItemText id={todo.id} primary={renderCompletedTodoItem(todo)} />
                    <ListItemSecondaryAction>
                        <IconButton color="secondary" edge="end" aria-label="delete" onClick={() => deleteTodoItem(todo)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Paper>
        </Zoom>
    )
}

export default Todo;