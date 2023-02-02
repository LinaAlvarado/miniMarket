import { useParams } from "react-router-dom";
import getProducts from "../request/requestData";
import IconArrow from "../components/icon/IconArrow";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const data = getProducts();
  const params = useParams();
  const product = data.products.filter((element) => element.id == params.id);
  console.log(product);
  // console.log(params.id)
  // console.log(title)
  return (
    <>
      <section>
        <Link to={"/products"} className="m-4 flex items-center">
          <IconArrow />
          <h2 className="font-bold text-gray-500"> Product details</h2>
        </Link>
        {product.map((element) => (
          <article className="container flex flex-col">
            <div>
              <img src={element.url} alt="Product" />
            </div>
            <div>
              <h3 className="font-bold text-gray-600">{element.item}</h3>
              <p className=" text-gray-500">{element.description}</p>
              <p className="font-bold text-teal-600">{element.price}</p>
              <button className="h-11 w-full rounded-lg bg-teal-600 font-bold text-white  hover:bg-teal-500">
                Buy
              </button>
              {/* <p> mensaje de "guardado en el carrito"</p> */}
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default ProductDetail;
