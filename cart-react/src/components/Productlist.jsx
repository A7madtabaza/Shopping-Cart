import { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/cart/product";
import { addToCart } from "../features/cart/cartlist"; // ✅ تصحيح المسار
// import { useSelector } from "react-redux";
function Productlist() {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>loading products..</p>;
  if (status === "failed") return <p>failed to load..</p>;
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="border-2 flex flex-wrap justify-center gap-10 p-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md text-center w-[250px] bg-white"
            >
              <img
                src={product.image}
                alt="Product"
                className="w-[200px] h-[240px] object-cover mx-auto rounded"
              />
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p className="text-gray-700">Price: {product.price}</p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Productlist;


