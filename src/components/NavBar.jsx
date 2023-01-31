import { Link }  from "react-router-dom"

const NavBar = () => {
  return(
    <header>
        <nav className=" flex h-12 items-center justify-between bg-teal-600 px-6">
          <p className="font-bold  text-gray-200">MiniMarket.</p>
          <div className="flex justify-between gap-4  text-gray-200">
            <Link to="/products" >Products</Link>
            <Link to="/cart" >Cart</Link>
          </div>
        </nav>
      </header>

  )
}
export default NavBar