import { render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
    test('renders learn react link', () => {
        render(<App />);
        const helloWorldElement = screen.getByText(/hello world!/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/input value/i);
        expect(helloWorldElement).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        // screen.debug(<App />);
        expect(input).toMatchSnapshot();
    });

    test('renders screen', () => {
        render(<App />);
        const helloWorldElement = screen.queryByText(/hello2/i);
        expect(helloWorldElement).toBeNull();
    });
});
