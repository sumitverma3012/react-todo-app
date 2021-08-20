import {fireEvent, render} from '@testing-library/react';
import TodoFilters from './TodoFilters';

describe('TodoFilters Component', () => {

    let props;
    let filterTotalTodoItems = jest.fn()
    let filterCompleteTodoItems = jest.fn()


    beforeEach(() => {
        props = {
            filterTotalTodoItems,
            filterCompleteTodoItems,
            totalTodos: 1,
            completedTodos: 0
        }
    })

    test('renders TodoFilters component', () => {
        const {getByText} = render(<TodoFilters {...props} />);
        const total = getByText(/Total/i);
        const completed = getByText(/Completed/i);
        expect(total).toBeInTheDocument();
        expect(completed).toBeInTheDocument();
    });

    test('call complete event handler and should check styling', () => {
        const {getByText} = render(<TodoFilters {...props} />);
        const total = getByText(/Total/i);

        const completed = getByText(/Completed/i);
        const completedCount = getByText(/0/i);

        expect(completedCount).toHaveClass('MuiAvatar-colorDefault')

        fireEvent.click(completed)
        expect(filterCompleteTodoItems).toHaveBeenCalled();
        expect(completedCount).toHaveClass('MuiChip-avatarColorPrimary')

        fireEvent.click(total);
        expect(filterTotalTodoItems).toHaveBeenCalled();

        expect(completedCount).toHaveClass('MuiAvatar-colorDefault')
    });
});