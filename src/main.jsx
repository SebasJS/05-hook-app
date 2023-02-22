import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getRoutes } from './09-useContext/Routes'

import './index.css'

const router = createBrowserRouter(getRoutes)

ReactDOM.createRoot(document.getElementById('root')).render(
// <React.StrictMode>
  <RouterProvider router = { router } />
// </React.StrictMode>
)
