import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About', () => {
    render((<MemoryRouter><About /></MemoryRouter>))
    const linkElement = screen.getByText(/version/i);
    expect(linkElement).toBeInTheDocument();
});
