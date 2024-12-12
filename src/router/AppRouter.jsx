import { BrowserRouter, Routes, Route } from "react-router-dom"
import MAin from "../components/MAin"
import FilteredProducts from "../components/product/FilteredProducts"
import SingleProduct from "../components/product/SingleProduct"
import Navbar from "../components/Navbar"




const AppRouter = () => {



  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
               <Routes>
        <Route path="/" element={<MAin/>}/>
          <Route path="/filteredProducts/:type"  element={<FilteredProducts/>}/>
          <Route path="/filteredProducts/:type/:id"element={<SingleProduct/>} />
                  </Routes>
      </BrowserRouter>
    </div>
  );
}
export default AppRouter