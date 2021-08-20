import { render, screen } from '@testing-library/react';
import TodoContainer from './TodoContainer';

describe('TodoContainer Component', () => {
    test('renders TodoContainer with header', () => {
        render(<TodoContainer/>);
        const header = screen.getByText(/Todos List/i);
        expect(header).toBeInTheDocument();
    });
})