import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/home/Home.jsx';
import Login from './components/login/Login.jsx';
import SignUp from './components/login/SignUp.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import BookService from './components/pages/BookService/BookService.jsx';
import Booking from './components/pages/Booking/Booking.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Error from './components/Error/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <Error></Error>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/signup",
        element: <SignUp></SignUp>
      },
      {
        path: '/book/:id', 
        element: <PrivateRoute><BookService></BookService></PrivateRoute> ,
        loader: ({params}) => fetch(`https://car-doctor-server-eight.vercel.app/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
    </AuthProvider>
  </div>
)
