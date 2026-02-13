import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeFromCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-8">
          <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <span className="font-medium text-gray-700 hover:text-gray-800">
                            {item.title}
                          </span>
                        </h3>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => dispatch(decrease(item.id))}
                          className="p-1 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <span className="text-gray-900 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(increase(item.id))}
                          className="p-1 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="absolute top-0 right-0">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="-m-2 p-2 inline-flex text-gray-400 hover:text-red-500"
                        >
                          <span className="sr-only">Remove</span>
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:col-span-4 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-sm font-medium text-gray-900">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <p className="text-base font-medium text-gray-900">Order Total</p>
              <p className="text-base font-medium text-gray-900">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
