import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increase, decrease } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.cartItems.find((item) => item.id === product.id),
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncrease = () => {
    dispatch(increase(product.id));
  };

  const handleDecrease = () => {
    dispatch(decrease(product.id));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      <div className="relative pt-[100%] bg-gray-50 overflow-hidden group">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        {product.discountPercentage > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-xs text-gray-500 font-medium">
              {product.rating}
            </span>
          </div>
        </div>

        <h3
          className="text-lg font-bold text-gray-900 mb-1 line-clamp-1"
          title={product.title}
        >
          {product.title}
        </h3>

        <p
          className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow"
          title={product.description}
        >
          {product.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-xs text-gray-400 line-through">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              )}
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded ${product.stock < 10 ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}
            >
              {product.stock < 10 ? "Low Stock" : "In Stock"}
            </span>
          </div>

          {cartItem ? (
            <div className="flex items-center justify-between bg-indigo-50 rounded-md">
              <button
                onClick={handleDecrease}
                className="w-10 h-10 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 rounded-l-md transition-colors font-bold text-lg cursor-pointer"
              >
                -
              </button>
              <span className="text-gray-900 font-semibold">
                {cartItem.quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="w-10 h-10 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 rounded-r-md transition-colors font-bold text-lg cursor-pointer"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow active:scale-95 transform"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
