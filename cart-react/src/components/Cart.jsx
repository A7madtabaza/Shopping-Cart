import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
 const {
   items: cartItems, totalPrice } = useSelector(state => state.cart);

 const navigate=useNavigate()
 const handleRemoveItem=(id)=>{
  alert(id)
 }
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cartItems.map((item) => (
          <>
            <div className="flex items-center gap-4 border-b pb-4">
              <img
                src={item.imges}
                alt={item.imges}
                className="w-24 h-24 object-cover border rounded"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700">
                  Price: <span className="font-bold">price:jd{item.price}</span>
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="number"
                    min="1"
                    className="w-16 border p-1 rounded"
                  />
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}

        <div className="mt-4 text-lg font-semibold">
          <p>
            Total:jd{totalPrice} <span className="text-blue-600">200 JD</span>
          </p>
        </div>

        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => navigate("/")}
        >
          Back to Shopping
        </button>
      </div>
    </>
  );
}
export default Cart;