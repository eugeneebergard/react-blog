import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { IPost, IComment } from 'interfaces'
import Post from './index'
import { routes } from 'routes/routes'

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
  it('Component render', () => {
    render(<Post />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
    expect(screen.queryByTestId('post')).toBeNull()
  })

  it('Successful post and commits requests', async () => {
    const resolvedMock = mockedAxios.get.mockResolvedValue({ data: hit })

    render(
      <MemoryRouter initialEntries={[`${routes.posts}/${hit.id}`]}>
        <Routes>
          <Route path={routes.post} element={<Post />} />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() => resolvedMock)

    expect(mockedAxios.get).toHaveBeenCalledTimes(2)
    expect(screen.queryByTestId('loader')).toBeNull()
    expect(screen.getByText(/example title/i)).toBeInTheDocument()
    expect(screen.getByText(/example text/i)).toBeInTheDocument()
  })
  afterEach(jest.clearAllMocks)

  it('Rejected post request', async () => {
    const rejectedMock = mockedAxios.get.mockRejectedValueOnce(new Error())

    render(
      <MemoryRouter initialEntries={[`${routes.posts}/notValidId`]}>
        <Routes>
          <Route path={routes.post} element={<Post />} />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() => rejectedMock)

    expect(screen.queryByTestId('loader')).toBeNull()
    expect(screen.getByText(/post not found/i)).toBeVisible()
    expect(screen.getByRole('link')).toBeVisible()
  })

  // test('comments', async () => {
  //   const promiseComments = Promise.resolve({ data: hits })
  //   mockedAxios.get.mockImplementationOnce(() => promiseComments)
  //
  //   const loader = screen.getAllByTestId('loader')[1];
  //
  //   expect(screen.getAllByTestId('loader')[1]).toBeInTheDocument()
  //   expect(screen.queryByRole('list')).toBeNull()
  //
  //   await waitFor(() => promiseComments)
  //
  //   expect(screen.getAllByRole('listitem')).toHaveLength(2)
  //   expect(screen.queryAllByTestId('loader')[12]).toBeNull()
  // })
})
