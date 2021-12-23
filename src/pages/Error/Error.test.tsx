import { render, screen  } from '@testing-library/react';
import Error from './index';
import { BrowserRouter } from 'react-router-dom';
import { routes } from 'routes/routes';

describe('Error', () => {
    render(
        <BrowserRouter>
            <Error />
        </BrowserRouter>
    );

    test('link must be visible and contain the correct route', () => {
        expect(screen.getByText(/Go to Home page/i)).toBeVisible();
        expect(screen.getByText(/Go to Home page/i)).toHaveAttribute('href', `${routes.home}`);
    })
})
