
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
const App = () => {
  // const [filterOption, setfilterOption] = useState("")
  // useEffect(()=>{ 

  //   setProducts(data)
  // },[products])

  // const handleFilterData =(category)=>{
  //   console.log('categoria', category)
  //   setProducts(productsData.products.filter( product => product.category === category))
  //   console.log(productsData)
  //   return productsData
  // }

  return (
    <>
      <NavBar/>
      <Routes>
        <Route element={<ProductCard/>} path="/"></Route>
        <Route element={<ProductCard/>} path="/products"></Route>
        <Route element={<ProductDetail/>} path="/products/:id"></Route>
        <Route element={<h1 className="text-3xl font-bold text-slate-700 m-20 text-center">we are building this page.. 🛠</h1>} path="/cart"></Route>
        <Route element={<h1> Error 404. </h1>} path="*"></Route>
      </Routes>
      <Footer/>
    </>
  );
};
export default App;
