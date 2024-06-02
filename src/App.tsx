import { createBrowserRouter, RouterProvider } from "react-router-dom"
import IndexHomePage from "./Pages/HomePage/IndexHomePage"
import IndexLayout from "./Layout/IndexLayout"
import IndexProducts from "./Pages/products/IndexProducts"
import Details from "./Pages/products/Details"
import Checkout from "./Pages/products/Checkout"


function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<IndexLayout />,
      children : [
        {
          path:'/', 
          element:<IndexHomePage />
        },
        {
          path:'product',
          children:[
            {
              path:'homme',
              element:<IndexProducts />,
              children:[
                {
                  path:':id',
                  element:<Details />
                }
              ]
            },
            {
              path:'femme',
              element:<IndexProducts />,
              children:[
                {
                  path:':id',
                  element:<Details />
                }
              ]
            },
            {
              path:'accessoires',
              element:<IndexProducts />,
              children:[
                {
                  path:':id',
                  element:<Details />
                }
              ]
            },
            {
              path:'checkout', 
              element:<Checkout />
            }
          ]
        }
      ]
    }
  ])
  

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
