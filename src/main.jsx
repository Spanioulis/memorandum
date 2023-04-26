import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyled } from './styles';
import ReactDOM from 'react-dom/client';
import { Movies, Home, Series } from './pages';
import { Body } from './components/layouts';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   },
   {
      path: '/series',
      element: <Series />
   },
   {
      path: '/films',
      element: <Movies />
   }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <GlobalStyled />
      <Body>
         <RouterProvider router={router} />
      </Body>
   </React.StrictMode>
);
