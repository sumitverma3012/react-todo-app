import {fireEvent, render} from '@testing-library/react';
import AddTodo from './AddTodo';

describe('AddTodo Component', () => {

    test('renders AddTodo with button', () => {
        const {getByText} = render(<AddTodo />);
        const button = getByText(/Add/i);
        expect(button).toBeInTheDocument();
    });

    test('enter input value and verify it', () => {
        const {getByPlaceholderText} = render(<AddTodo />);
        const input = getByPlaceholderText(/Todo description/i);
        fireEvent.change(input, {target: {value: 'new task'}})
        expect(input.value).toBe('new task')
    });

    test('enter input value and click on submit button', () => {
        const addTodoItem = jest.fn();
        const {getByPlaceholderText, getByText} = render(<AddTodo addTodoItem={addTodoItem}/>);
        const input = getByPlaceholderText(/Todo description/i);
        const button = getByText(/Add/i);

        fireEvent.change(input, {target: {value: 'new task'}})
        fireEvent.click(button);
        expect(addTodoItem).toHaveBeenCalled();
    });

    test('enter empty input value and click on submit button', () => {
        const addTodoItem = jest.fn();
        const {getByPlaceholderText, getByText} = render(<AddTodo addTodoItem={addTodoItem}/>);
        const input = getByPlaceholderText(/Todo description/i);
        const button = getByText(/Add/i);

        fireEvent.change(input, {target: {value: ''}})
        fireEvent.click(button);
        const alert = getByText('Please write a task before submitting it.');
        expect(alert).toBeVisible();
        expect(addTodoItem).toBeCalledTimes(0)
    });
})

