import getProducts from "../request/requestData";
import ProductCard from "./productCard";

const ProductList = () => {
  
  const data = getProducts();

  return (
    <main className="mx-auto lg:container">
      <section className="max-w-4xl p-6 ">
        <h1 className="text-xl font-bold text-gray-600">
          What do you want to buy today?
        </h1>
        <p className="text-gray-500">
          You never know what you want until you see it on sale.
        </p>
        <select
          className="mt-4"
          onChange={(e) => handleFilterData(e.target.value)}
        >
          <option value=""> Select Category</option>
          <option value="shoes"> Shoes </option>
          <option value="clothes"> Clothes </option>
          <option value="technology"> Technology </option>
        </select>
      </section>

      <section className=" flex flex-wrap items-center justify-center gap-4">
        {
          data.products.map((element) => (
            <ProductCard element={element}/>
          ))
        }
      </section>
    </main>
  );
};
export default ProductList;
