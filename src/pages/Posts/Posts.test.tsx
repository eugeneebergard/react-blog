import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { IPost } from 'interfaces'
import Posts from './index'

jest.mock('axios')

describe('Posts', () => {
  it('Component render', async () => {
    render(<Posts />)

    await waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument())
    expect(screen.queryByRole('list')).toBeNull()
  })

  describe('API', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>
    const hits: IPost[] = [
      {
        userId: 1,
        id: 1,
        title: 'test text title',
        body: 'test text body',
      },
      {
        userId: 2,
        id: 2,
        title: 'test text title 2',
        body: 'test text body 2',
      },
    ]

    it('Successful Post-List request', async () => {
      const resolvedMock = mockedAxios.get.mockResolvedValueOnce({ data: hits })

      render(
        <BrowserRouter>
          <Posts />
        </BrowserRouter>
      )

      await waitFor(() => resolvedMock)

      expect(mockedAxios.get).toHaveBeenCalledTimes(1)
      expect(screen.getAllByRole('listitem')).toHaveLength(2)
      expect(screen.queryByTestId('loader')).toBeNull()
    })

    it('Rejected Post-List request', async () => {
      const rejectedMock = mockedAxios.get.mockRejectedValueOnce(new Error('Async error'))

      render(
        <BrowserRouter>
          <Posts />
        </BrowserRouter>
      )

      await waitFor(() => rejectedMock)

      expect(screen.queryByTestId('loader')).toBeNull()
      expect(screen.getByText(/No posts!/i)).toBeVisible()
    })
  })
})
