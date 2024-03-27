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
import PagesToRead from './pages/PagesToRead';
import { Toaster } from 'react-hot-toast';
import WritingTips from './pages/WritingTips';
import About from './pages/About';

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
      },
      {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/writing-tips',
        element:<WritingTips></WritingTips>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
