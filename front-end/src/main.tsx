import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
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
