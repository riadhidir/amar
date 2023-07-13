import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Salles from './pages/Salles.jsx';
import Home from './pages/Home.jsx';
import Mainlayout from './layouts/Mainlayout';
import Detailsalle from './pages/Detailsalle';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/salles',
        element: <Salles/>
      },
      {
        path: '/detailSalle/:salleId',
        element : <Detailsalle/>
      }
      //add new sub elements
    ]
  },
  //add new elements

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
