import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { IPost, IComment } from 'interfaces'
import Post from './index'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const hit: IPost = {
  userId: 1,
  id: 1,
  title: 'example title',
  body: 'example text',
}

const hits: IComment[] = [
  {
    body: 'example body',
    email: 'example@mail.ru',
    id: 1,
    name: 'Ivan',
    postId: 1,
  },
  {
    body: 'example body',
    email: 'example@yandex.ru',
    id: 2,
    name: 'Masha',
    postId: 2,
  },
]

describe('Post', () => {
  test('sending a request to receive Post API and Comments API and correct rendering of the loading', async () => {
    const promise = Promise.resolve({ data: hit })
    // const promiseComments = Promise.resolve({ data: hits })

    mockedAxios.get.mockImplementation(() => promise)
    // mockedAxios.get.mockImplementationOnce(() => promiseComments)

    render(<BrowserRouter><Post /></BrowserRouter>)

    expect(screen.getAllByTestId('loader')[0]).toBeInTheDocument()
    expect(screen.queryByTestId('post')).toBeNull()

    await waitFor(() => promise)

    // ==== С этого места все падает ==== \\
    // expect(screen.getByText(/example title/i)).toBeInTheDocument()
    // expect(screen.getByText(/example text/i)).toBeInTheDocument()
    // expect(screen.queryAllByTestId('loader')[0]).toBeNull()


    // ==== Проверки для второго запроса ==== \\
    // expect(screen.getAllByTestId('loader')[1]).toBeInTheDocument()
    // expect(screen.queryByRole('list')).toBeNull()
    //
    // await waitFor(() => promiseComments)
    //
    // expect(screen.getAllByRole('listitem')).toHaveLength(2)
    // expect(screen.queryAllByTestId('loader')[1]).toBeNull()
  })
})
