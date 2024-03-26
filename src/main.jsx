import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ListedBooks from './pages/ListedBooks';
import Root from './pages/Root';
import ViewDetails from './component/ViewDetails';
import ReadBooks from './component/ReadBooks';
import WishList from './component/WishList';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listed-books',
        element:<ListedBooks></ListedBooks>,
       children:[
        {
          index: true,
          element:<ReadBooks></ReadBooks>
        },
        {
          path:'wishlist',
          element:<WishList></WishList>
        }
       ]
      },
      {
        path:'/book/:bookId',
        element:<ViewDetails></ViewDetails>,
        loader:()=>fetch('../books.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
