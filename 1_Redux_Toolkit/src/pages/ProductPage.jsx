import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/product/productSlice";
import {
  addToCart,
  clearCart,
  removeItem,
} from "../redux/slice/cart/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  const { items: cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="px-10 py-8">
      {/* Heading */}
      <div className="flex justify-center items-center gap-4">
        <h1 className="text-3xl font-bold text-center">
          React Redux Toolkit Store
        </h1>
        <button
          onClick={() => dispatch(clearCart())}
          className="px-5 py-1 cursor-pointer bg-gray-500 hover:bg-gray-600 text-white rounded-sm font-semibold transition duration-300 "
        >
          Clear Cart
        </button>
      </div>

      {/* LOADING */}
      {status === "loading" && (
        <p className="text-center text-gray-600 text-xl">Loading products...</p>
      )}

      {/* ERROR */}
      {status === "failed" && (
        <p className="text-center text-red-600 text-lg">{error}</p>
      )}

      {/* SUCCESS */}
      {status === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mt-6">
          {items.map((product) => {
            const isInCart = cartItems.some(
              (cartItem) => cartItem.id === product.id
            );
            return (
              <div
                key={product.id}
                className="bg-white shadow-sm hover:shadow-md transition-all duration-300 p-4 rounded-xl cursor-pointer border border-gray-200"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="mx-auto h-48  hover:scale-105 transition-transform"
                />

                <h3 className="font-bold text-lg ">{product.title}</h3>

                <p className="text-gray-500 text-sm">
                  {product.description.substring(0, 100)}...
                </p>

                <div className="mt-3">
                  <span className="text-green-600 font-bold text-xl">
                    ${product.price}
                  </span>
                </div>

                {isInCart ? (
                  <button
                    // disabled
                    onClick={() => dispatch(removeItem(product))}
                    className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold shadow hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-semibold shadow hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
