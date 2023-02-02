import { Link } from "react-router-dom";
import IconCart from "./icon/IconCart";

const ProductCard = ({ element }) => {
  return (
    <article
      className="w-48 overflow-hidden rounded-lg bg-gray-200"
      key={element.id}
    >
      <div className="h-36 w-full overflow-hidden">
        <img
          className=" h-full w-full object-cover"
          src={element.url}
          alt="Product"
        />
      </div>

      <div className="mt-2 flex items-end justify-between p-2">
        <div>
          <p className="text-md font-normal text-gray-500">{element.item}</p>
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
  );
};
export default ProductCard;
