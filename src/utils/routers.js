import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { getCartAndProductsData } from '../loaders/getCartAndProductsData';
import Home from '../components/Home/Home';
import Quiz from '../components/Quiz/Quiz';

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    loader: getCartAndProductsData,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/home',
            element: <Home></Home>,
        },
        {
            path: '/quiz',
            element: <Quiz></Quiz>,
        },

    ]
}])