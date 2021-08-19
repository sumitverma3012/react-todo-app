import React from 'react';
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import {Container, List, Box, Divider} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import TodoFilters from "../TodoFilters/TodoFilters";

const Todos = (props) => {
    const {todosList, addTodoItem, deleteTodoItem, completeTodoItem, filterTotalTodoItems, filterCompleteTodoItems, totalTodos, completedTodos} = props;
    return (
        <Container maxWidth="sm">

            <div className={'todos-heading'}>Todos List</div>
            <div className={'todos-subHeading'}>What to do next?</div>
            <Box mb={5} mt={4}>
                <Divider />
            </Box>
            <Box className={'todos-addItem'}>
                <Box mb={4}>
                    <AddTodo addTodoItem={addTodoItem} />
                </Box>
                <Box mt={4}>
                    <TodoFilters
                        filterCompleteTodoItems={filterCompleteTodoItems}
                        filterTotalTodoItems={filterTotalTodoItems}
                        totalTodos={totalTodos}
                        completedTodos={completedTodos}
                    />
                </Box>
            </Box>
            <Box>
                {todosList.length === 0 ? (
                    <Box mt={4}>
                        <Alert severity="warning">Nothing to display, no result found.</Alert>
                    </Box>
                ) :
                    <List>
                        {todosList.map((todo) => {
                            return (
                                <Todo
                                    key={todo.id}
                                    todo={todo}
                                    deleteTodoItem={deleteTodoItem}
                                    completeTodoItem={completeTodoItem}
                                />);
                            })
                        }
                    </List>
                }
            </Box>
        </Container>
    )
}

export default Todos;