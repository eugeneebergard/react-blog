import { render, screen  } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { routes } from 'routes/routes';

describe('App', () => {
    render(
        <BrowserRouter >
          <App />
        </BrowserRouter>
    );

    test('links must contain the correct address', () => {
        expect(screen.getByText(/React-Blog/i)).toHaveAttribute('href', routes.home);
        expect(screen.getByText(/JSON Placeholder/i)).toHaveAttribute('href', 'https://jsonplaceholder.typicode.com');
    })
})
