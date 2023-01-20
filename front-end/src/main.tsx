import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './tailwind.css';

const root = document.getElementById('root') as HTMLElement;
const route = createBrowserRouter([
  {
    path: '',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
