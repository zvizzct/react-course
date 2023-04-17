import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { HeroeApp } from '../HeroeApp';
import { MarvelPage, DcPage } from '../heroes/';
import { LoginPage } from '../auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroeApp />,
    children: [
      {
        path: 'marvel',
        element: <MarvelPage />,
      },
      {
        path: 'dc',
        element: <DcPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <Navigate to="/marvel" />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
