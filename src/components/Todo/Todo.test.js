import {fireEvent, render} from '@testing-library/react';
import Todo from './Todo';

describe('Todo Component', () => {

    let props;
    let dateMock;
    let deleteTodoItem = jest.fn();
    let completeTodoItem = jest.fn();


    beforeEach(() => {
        dateMock = jest.spyOn(Date, 'now').mockImplementation(() => 1629457998205);

        props = {
            todo: {
                completed: false,
                description: 'First todo item',
                id: '123-123-123',
                timeStamp: new Date()
            },
            completeTodoItem: completeTodoItem,
            deleteTodoItem: deleteTodoItem
        }
    })

    afterAll(() => {
        dateMock.mockRestore();
    });

    test('renders todo item', () => {
        const {getByText} = render(<Todo {...props} />);
        const item = getByText(/First todo item/i);
        expect(item).toBeInTheDocument();
    });

    test('verify checkbox value and update it', () => {
        const {getByTestId} = render(<Todo {...props} />);
        const checkbox = getByTestId('checkbox')
        expect(checkbox).toBeInTheDocument();

        fireEvent.click(checkbox);
        expect(completeTodoItem).toBeCalledTimes(1)
    });
});