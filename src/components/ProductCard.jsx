import getProducts from "../request/requestData";
import IconCart from "./icon/IconCart";
const ProductCard = () => {
  const data = getProducts();
  return (
    <section className="flex flex-wrap justify-center gap-4">
      
        {
          // aqui tenia un for each, porque no funciono?
          data.products.map((element) => (
            <article className="w-48 overflow-hidden rounded-lg bg-gray-200">

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
                  <p className="text-md font-normal text-gray-500"> {element.item} </p>
                  <p className="font-bold text-gray-600">$ {element.price}</p>
                </div>
                <button 
                // onClick={addToCart}
                className="flex w-10 h-10 items-center justify-around rounded-full bg-teal-600 font-medium text-white hover:bg-teal-500">
                  <IconCart />
                </button>
              </div>

            </article>
          ))
        }

    </section>
  );
};
export default ProductCard;
