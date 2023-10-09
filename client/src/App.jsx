import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from "./pages/home"
import { ToastContainer } from "react-toastify"
import { FeaturedDetails } from "./pages/products"
import MainLayout from "./components/layout/MainLayout"

function App() {

  return (
    <BrowserRouter>
    <ToastContainer/>
     <Routes>
      <Route path="/" element={<MainLayout/>}> 
      <Route index element={<Home/>}/>
      <Route path="products/:id" element={<FeaturedDetails/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
