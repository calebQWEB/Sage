import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home/Home'
import UserHomePage from './Pages/UserHomePage/UserHomePage'
import Profile from './Pages/Profile/Profile'
import Details from './Pages/Details/Details'
import Categories from './Pages/Categories/Categories'

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
                    path: 'details/:id/:category',
                    element: <Details />
                },
                {
                    path: '/user-page',
                    element: <UserHomePage />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/categories/:genre',
                    element: <Categories />
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default Router