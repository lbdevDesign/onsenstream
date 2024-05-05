import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './style/index.scss';
import App from './pages/homepage/App';
import Movie from './pages/media/movie';
import Serie from './pages/media/serie';
import People from './pages/people/people';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "/serie/:id",
    element: <Serie />
  },
  {
    path: "/people/:id",
    element: <People />
  }
], {
  basename: "/onsenstream" 
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
