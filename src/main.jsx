import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
 {
  path:'/',
  element:<Home></Home>,
  children:[
    {
      path:'/',
      element: <Shop></Shop>,
     loader:()=>fetch('bengalTShirt.json')
      
    },
    {
      path:'order',
      element: <Order></Order>
    },
    {
      path:'about',
      element:<About></About>
    },
    {
      path:'contact',
      element:<Contact></Contact>
    }
  ]
 } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
