
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MAin from "../components/MAin"
import FilteredProducts from "../components/product/FilteredProducts"


const AppRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MAin/>} />
        <Route path="/FilteredProducts/:type" element={<FilteredProducts/>} />

</Routes>
</BrowserRouter> 
    </div>
  )
}

export default AppRouter