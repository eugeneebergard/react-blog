import React from 'react'
import {render, waitFor, screen, getAllByTestId} from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { IPost, IComment } from 'interfaces'
import Post from './index'
import { routes } from 'routes/routes';

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
  test('Component render', () => {
    render(<Post />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
    expect(screen.queryByTestId('post')).toBeNull()
  })

  test('Successful post request', async () => {
    const promise = Promise.resolve({ data: hit })
    mockedAxios.get.mockImplementation(() => promise)

    render(
      <MemoryRouter initialEntries={[`${routes.posts}/${hit.id}`]}  >
        <Routes>
          <Route path={routes.post} element={<Post />} />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() => promise);

    expect(screen.queryByTestId('loader')).toBeNull();
    expect(screen.getByText(/example title/i)).toBeInTheDocument()
    expect(screen.getByText(/example text/i)).toBeInTheDocument()
  })

  // test('Rejected post request', async () => {
  //   const promise = Promise.reject(new Error())
  //   mockedAxios.get.mockRejectedValue(() => promise)
  //
  //   render(
  //       <MemoryRouter initialEntries={[`${routes.posts}/999`]}  >
  //         <Routes>
  //           <Route path={routes.post} element={<Post />} />
  //         </Routes>
  //       </MemoryRouter>
  //   )
  //
  //   expect(screen.queryByTestId('loader')).toBeNull();
  //   expect(screen.getByText(/post not found/i)).toBeVisible()
  //   expect(screen.getByRole('link')).toBeVisible()
  // })



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
