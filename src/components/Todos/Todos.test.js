import {render} from '@testing-library/react';
import Todos from './Todos';

describe('Todos Component', () => {

    let props;
    let deleteTodoItem = jest.fn();
    let completeTodoItem = jest.fn();
    let addTodoItem = jest.fn();
    let filterTotalTodoItems = jest.fn()
    let filterCompleteTodoItems = jest.fn()


    beforeEach(() => {
        props = {
            todosList: [{
                completed: false,
                description: 'Todo item 1',
                id: '123-123-123',
                timeStamp: new Date()
            },{
                completed: false,
                description: 'Todo item 2',
                id: '123-123-1234',
                timeStamp: new Date()
            }],
            completeTodoItem,
            deleteTodoItem,
            addTodoItem,
            filterTotalTodoItems,
            filterCompleteTodoItems,
            totalTodos: 1,
            completedTodos: 0
        }
    })

    test('renders todos component', () => {
        const {getByText} = render(<Todos {...props} />);
        const item = getByText(/Todos List/i);
        expect(item).toBeInTheDocument();
    });

    test('show warning when no list item is available', () => {
        const updateProps = {
            ...props,
            todosList: []
        }
        const {getByText} = render(<Todos {...updateProps} />);
        const item = getByText('Nothing to display, no result found.');
        expect(item).toBeVisible();
    });

});