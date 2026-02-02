// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CorSlangCeramicDB title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CorSlangCeramicDB/i);
    expect(titleElement).toBeInTheDocument();
});
