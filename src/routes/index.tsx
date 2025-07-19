import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);