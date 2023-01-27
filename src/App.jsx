
import { useState } from "react";
import ProductCard from "./components/ProductCard"
const App = () => {

  const [filter, setFilter] = useState("")
  const [ products, setProducts] = useState([])

  return (
    <>
      <header>
        <nav className=" flex h-12 items-center justify-between bg-teal-600 px-6">
          <p className="font-bold  text-gray-200">MiniMarket.</p>
          <div className="flex justify-between gap-4  text-gray-200">
            <p>Products</p>
            <p>Cart (icon)</p>
          </div>
        </nav>
      </header>

      <main className="">
        <section className="w-full p-6">
          <h1 className="text-xl font-bold text-gray-600">
            What do you want to buy today?
          </h1>
          <p className="text-gray-500">
            You never know what you want until you see it on sale.
          </p>
          <select className="mt-4" onChange={e => setFilter(e.target.value)}>
            <option value=""> Select Category</option>
            <option value="shoes"> Shoes </option>
            <option value="clothes"> Clothes </option>
            <option value="technology"> Technology </option>
          </select>
        </section>

        {/* Products */}
        <ProductCard></ProductCard>
      </main>

      <footer className="bg-gray-900  w-full h-40 mt-10 flex justify-center items-center flex-col"> 
        <p className="text-gray-400 font-bold text-lg"> MiniMarket.</p>
        <p className="text-gray-300"> See you later! :D </p>
      </footer>
    </>
  );
};
export default App;
