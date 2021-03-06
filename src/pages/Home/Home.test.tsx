import { render, screen } from '@testing-library/react'
import Home from './index'
import { BrowserRouter } from 'react-router-dom'
import { routes } from 'routes/routes'

describe('Home', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

  it('link must be visible and contain the correct route', () => {
    expect(screen.getByText(/Check posts/i)).toBeVisible()
    expect(screen.getByText(/Check posts/i)).toHaveAttribute('href', `${routes.posts}`)
  })
})
