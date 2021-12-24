import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { IPost } from 'interfaces'
import Posts from './index'

jest.mock('axios')
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

describe('Posts', () => {
  test('sending a request to receive PostList API and correct rendering of the loading', async () => {
    const promise = Promise.resolve({ data: hits })
    mockedAxios.get.mockImplementationOnce(() => promise)

    render(
      <BrowserRouter>
        <Posts />
      </BrowserRouter>
    )

    expect(screen.getByTestId('loader')).toBeInTheDocument()
    expect(screen.queryByRole('list')).toBeNull()

    await waitFor(() => promise)

    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.queryByTestId('loader')).toBeNull()
  })
})
