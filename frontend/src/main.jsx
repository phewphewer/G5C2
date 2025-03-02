import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/HomePage.jsx'
import Dashboard from './pages/ProfilePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      errorElement: <PageNotFound/>
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <PageNotFound/>
},
{
  path: '/profile_dashboard',
  element: <Dashboard />,
  errorElement: <PageNotFound/>
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);