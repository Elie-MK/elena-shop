import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"

import IndexHomePage from "./Pages/HomePage/IndexHomePage"
import IndexLayout from "./Layout/IndexLayout"
import IndexProducts from "./Pages/products/IndexProducts"
import Details from "./Pages/products/Details"
import Checkout from "./Pages/products/Checkout"
import { store } from "./store/store"
import Login, { action as LoginAction } from "./Pages/auth/Login"
import SignUp, { action as SignupAction } from "./Pages/auth/SignUp"
import NotFoundPage from "./Pages/NotFoundPage"
import IndexAdmin, { loader as AdminLoader } from "./Pages/Admin/IndexAdmin"


function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<IndexLayout />,
      errorElement:<NotFoundPage />, 
      children : [
        {
          index:true, 
          element:<IndexHomePage />
        },
        {
          path:'product',
          children:[
            {
              path:'homme',
              element:<IndexProducts />,
            },
            {
              path:'femme',
              element:<IndexProducts />,
            },
            {
              path:'accessoires',
              element:<IndexProducts />,
            },
            {
              path:'chaussures',
              element:<IndexProducts />,
            },
            {
              path:'detail/:idProduct',
              element:<Details />
            },
            {
              path:'checkout', 
              element:<Checkout />
            }
          ]
        }, 
        {
          path:'/dashboard',
          element:<IndexAdmin />,
          loader:AdminLoader 
        }
      ]
    }, 
    {
      path:'/login',
      element:<Login />, 
      action:LoginAction
    },
    {
      path:'/signup',
      element:<SignUp />,
     action:SignupAction
    }, 
  
  ])
  

  return (
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  )
}

export default App
