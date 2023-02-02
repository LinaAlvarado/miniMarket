import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<ProductList />} path="/"></Route>
        <Route element={<ProductList />} path="/products"></Route>
        <Route element={<ProductDetail />} path="/products/:id"></Route>
        <Route
          element={
            <h1 className="m-20 text-center text-3xl font-bold text-slate-700">
              we are building this page.. 🛠
            </h1>
          }
          path="/cart"
        ></Route>
        <Route element={<h1> Error 404. </h1>} path="*"></Route>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
