import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Rooms from '../pages/Rooms/Rooms';
import MyBookings from '../pages/MyBookings/MyBookings';
import AuthLayout from '../components/AuthLayout/AuthLayout';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';
import About from '../pages/About/About';
import RoomDetails from '../pages/RoomDetails/RoomDetails';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';
import Wishlist from '../pages/Wishlist/Wishlist';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/rooms",
        loader: () => fetch('http://localhost:3000/rooms'),
        Component: Rooms,
      },
      {

        path: "/rooms/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/rooms/${params.id}`),
        Component: RoomDetails,

      },
      {
        path: "/myBookings",
        Component: MyBookings,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/gallery",
        Component: Gallery,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/wishlist",
        Component: Wishlist
      },
      {
        path: "/auth",
        Component: AuthLayout,
        children: [
          {
            path: "/auth/login",
            Component: LogIn,
          },
          {
            path: "/auth/register",
            Component: Register
          }
        ]
      }
    ]
  },
]);