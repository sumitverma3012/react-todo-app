import React, {useState}  from 'react';
import {Box, Button, Grid, Input, InputAdornment} from "@material-ui/core";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import {Description} from "@material-ui/icons";
import {Alert} from "@material-ui/lab";

const AddTodo = (props) => {
    const [newTask, setNewTask] = useState("");
    const [error, setError] = useState(false);
    const {addTodoItem} = props;

    const submitNewTodo = (event) => {
        event.preventDefault();
        if(newTask.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        addTodoItem(newTask);
        setNewTask("");
    }

    return (
        <form onSubmit={submitNewTodo}>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Input
                        fullWidth
                        value={newTask}
                        placeholder="Todo description"
                        startAdornment={
                            <InputAdornment position="start">
                                <Description color={'primary'}/>
                            </InputAdornment>
                        }
                        inputProps={{ 'aria-label': 'description' }}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        endIcon={<AddBoxOutlinedIcon />}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            {error &&
                <Box mt={2}>
                    <Alert severity="error">Please write a task before submitting it.</Alert>
                </Box>
            }
        </form>
    )
}

export default AddTodo;