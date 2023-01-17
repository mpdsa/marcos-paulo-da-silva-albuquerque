import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

// Acionar verificação das rotas pelo do RRD.
const route = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
