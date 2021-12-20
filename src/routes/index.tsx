import React from 'react';
import { Routes as ReactRouters, Route } from 'react-router-dom';
import { routes } from './routes';
import Loader from 'components/ui/Loader';

const Home = React.lazy(() => import('pages/Home'));
const Posts = React.lazy(() => import('pages/Posts'));
const Post = React.lazy(() => import('pages/Post'));
const Error = React.lazy(() => import('pages/Error'));

const Routes = () => {
  return (
    <React.Suspense fallback={ <Loader /> }>
      <ReactRouters>
        <Route
          path={ routes.home }
          element={ <Home /> }
        />
        <Route
          path={ routes.posts }
          element={ <Posts /> }
        />
        <Route
          path={ routes.post }
          element={ <Post /> }
        />
        <Route
          path="*"
          element={ <Error /> }
        />
      </ReactRouters>
    </React.Suspense>
  )
}

export default Routes;
