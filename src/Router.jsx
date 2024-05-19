import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                   index: true,
                   element: <Home />
                },
                {
                    path: '/profile',
                    element: <Profile />
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default Router