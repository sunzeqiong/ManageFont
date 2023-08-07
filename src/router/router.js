import React from 'react';
import router, { createBrowserRouter } from 'react-router-dom';
import Login from '../commponents/login/index.jsx';
import Home from '../commponents/home/Home.jsx';
const MyRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login></Login>
    },
    {
       path:"/home",
       element: <Home></Home>
    }
])
export default MyRouter;