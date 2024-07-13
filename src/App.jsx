import Rootlayout from "./components/Rootlayout"
import Home from "./pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Product from "./pages/Product"
import Productdetails from "./pages/Productdetails"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout />}>
    <Route index path='/' element={<Home />}></Route>
    <Route path='/product' element={<Product />}></Route>
    <Route path='/product/:id' element={<Productdetails />}
    ></Route>




  </Route>
))

function App() {


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
