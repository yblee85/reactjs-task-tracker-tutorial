import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AddTask from './AddTask';

test('renders AddTask', () => {
    const fakeAddTask = ()=>true;

    render((<MemoryRouter><AddTask addTask={fakeAddTask} /></MemoryRouter>))
    const linkElement = screen.getByText(/Task/i);
    expect(linkElement).toBeInTheDocument();
});
