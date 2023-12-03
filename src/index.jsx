import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { Planner } from './components/Planner';
import { Harmonogram } from './components/Harmonogram';
import { MyDocument } from './components/Print';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/planner',
        element: <Planner />,
      },
      {
        path: '/harmonogram',
        element: <Harmonogram />,
      },
      {
        path: '/print',
        element: <MyDocument />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
