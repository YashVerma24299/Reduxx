import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  clearCart,
  increaseQty,
  decreaseQty,
} from "../redux/slice/cart/cartSlice";
import { ShoppingCart } from "lucide-react";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity } = useSelector((state) => state.cart);

  // 🔢 TOTAL CALCULATION
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center mt-20 space-y-3">
        <ShoppingCart size={35} />
        <p className="text-3xl font-semibold text-gray-700">
          Your cart is empty
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* HEADER */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <span className="text-gray-600">{items.length} Items</span>
      </div>

      {/* CART ITEMS */}
      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />

              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.brand}</p>
              </div>

              <div className="flex items-center gap-3 px-3 py-1">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="w-8 h-8 flex items-center justify-center 
               bg-white border rounded-md text-lg font-semibold 
               hover:bg-gray-200 transition cursor-pointer"
                >
                  −
                </button>

                <span className="min-w-6 text-center font-semibold text-gray-700">
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="w-8 h-8 flex items-center justify-center 
               bg-white border rounded-md text-lg font-semibold 
               hover:bg-gray-200 transition cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-6">
              <span className="font-semibold text-green-600">
                ${(item.price * item?.quantity).toFixed(2)}
              </span>

              <button
                onClick={() => dispatch(removeItem(item))}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm transition cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-8  pt-6 flex justify-between items-center">
        <button
          onClick={() => dispatch(clearCart())}
          className="text-red-500 font-semibold hover:underline cursor-pointer"
        >
          Clear Cart
        </button>

        <div className="text-right">
          <p className="text-gray-600">Total Amount</p>
          <p className="text-2xl font-bold text-green-700">
            ${totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
