 import { Link } from "react-router-dom";
 
 
 function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
      <div>
        <h1 className="text-black text-4xl font-bold">Shopping Cart</h1>
      </div>
      <div className="flex space-x-6 text-lg">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/Cart" className="text-blue-600 hover:underline">
          Cart
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
