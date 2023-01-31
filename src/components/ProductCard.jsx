import IconCart from "./icon/IconCart";
import getProducts from "../request/requestData";
import { Link } from "react-router-dom";
const ProductCard = () => {
  const data = getProducts();

  return (
    <main className="lg:container mx-auto"> 
      <section className="p-6 max-w-4xl ">
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
    
      <section className=" flex flex-wrap justify-center items-center gap-4">
        {
          // aqui tenia un for each, porque no funciono?
          data.products.map((element) => (
            <article
              className="w-48 overflow-hidden rounded-lg bg-gray-200"
              key={element.id}
            >
              <div className="h-36 w-full overflow-hidden">
                <img
                  className=" h-full w-full object-cover"
                  // la url de la data no sirvio, entonces cual debe ser el path?
                  src={element.url}
                  alt="Product"
                />
              </div>

              <div className="mt-2 flex items-end justify-between p-2">
                <div>
                  <p className="text-md font-normal text-gray-500">
                    {element.item}
                  </p>
                  <p className="font-bold text-gray-600">$ {element.price}</p>
                </div>
                <Link to={`/products/${element.id}`}> 
                <button
                  // onClick={addToCart}
                  className="flex h-10 w-10 items-center justify-around rounded-full bg-teal-600 font-medium text-white hover:bg-teal-500"
                >
                  <IconCart />
                </button>
                </Link>
              </div>
            </article>
          ))
        }
      </section>

    </main>
  );
};
export default ProductCard;
