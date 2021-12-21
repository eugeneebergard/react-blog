import { render, screen  } from '@testing-library/react';
import Home from './index';
import { BrowserRouter } from 'react-router-dom';
import { routes } from 'routes/routes';

describe('Home', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );

    test('link must be visible and contain the correct route', () => {
        expect(screen.getByText(/Let's go check posts!/i)).toBeVisible();
        expect(screen.getByText(/Let's go check posts!/i)).toHaveAttribute('href', `${routes.posts}`);
    })
})
