import Rootlayout from "./components/Rootlayout"
import Home from "./pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Product from "./pages/Product"
import Productdetails from "./pages/Productdetails"
import Cart from "./pages/Cart"
import Error from "./pages/Error"
import Checkout from "./pages/Checkout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Signup from "./pages/Signup"





let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout />}>
    <Route index path='/' element={<Home />}></Route>
    <Route path='/product' element={<Product />}></Route>
    <Route path='/product/:id' element={<Productdetails />}
    ></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    

    <Route path="*" element={<Error/>}></Route>
     




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
