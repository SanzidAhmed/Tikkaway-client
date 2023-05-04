import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx';
import Chef from './components/Chef.jsx';
import ChefDetails from './components/ChefDetails.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://tikkaway-server-sanzidahmed.vercel.app/chef')
      },
      {
        path: "/chef/:id",
        element: <ChefDetails></ChefDetails>,
        loader:  ({params}) => fetch(`https://tikkaway-server-sanzidahmed.vercel.app/chef/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
