import { createBrowserRouter, RouterProvider } from "react-router-dom"
import IndexHomePage from "./Pages/HomePage/IndexHomePage"
import IndexLayout from "./Layout/IndexLayout"
import IndexProducts from "./Pages/products/IndexProducts"
import Details from "./Pages/products/Details"
import Checkout from "./Pages/products/Checkout"
import { Provider } from "react-redux"
import { store } from "./store/store"


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
        }
      ]
    }
  ])
  

  return (
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  )
}

export default App
