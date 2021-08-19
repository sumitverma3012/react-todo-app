import React, {useState} from 'react';
import {Avatar, Box, Chip} from "@material-ui/core";

const TodoFilters = (props) => {
    const {filterCompleteTodoItems, filterTotalTodoItems, totalTodos, completedTodos} = props;
    const [completed, setCompleted] = useState(true);

    const chipClickHandler = (status) => {
        if(status === 'completed') {
            filterTotalTodoItems()
            setCompleted(true);
        } else {
            filterCompleteTodoItems()
            setCompleted(false);
        }
    }

    return(
        <Box textAlign={'right'}>
            <Box marginRight={2} component="span">
                <Chip
                    label="Total"
                    clickable
                    avatar={<Avatar>{totalTodos}</Avatar>}
                    color={completed ? "primary" : "default" }
                    onClick={() => chipClickHandler('completed')}
                    variant="outlined"
                />
            </Box>
            <Box component="span">
                <Chip
                    label="Completed"
                    clickable
                    avatar={<Avatar>{completedTodos}</Avatar>}
                    color={!completed ? "primary" : "default" }
                    onClick={chipClickHandler}
                    variant="outlined"
                />
            </Box>
        </Box>
    )
}

export default TodoFilters;