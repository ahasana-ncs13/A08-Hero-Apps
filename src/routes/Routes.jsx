import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import AppDetails from '../Pages/AppDetails/AppDetails';
import AllApps from '../Pages/AllApps/AllApps';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AppError from '../Pages/AppError/AppError';

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
     errorElement : <ErrorPage></ErrorPage>,
     
    children : [
        {
            index: true,
            path:'/',
            loader : ()=> fetch("/public/appData8.json"),
            Component : Home,
            
        },
        {
            path : '/appDetails/:id',
            loader : ()=> fetch("/public/appData15.json"),
            Component : AppDetails ,
            errorElement: <AppError></AppError>
        },
        {
           path:'/allApps' ,
           loader : ()=> fetch("/public/appData15.json"),
           Component : AllApps,
        }
    ]
    
  },
]);
