"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { FaTrashCan } from "react-icons/fa6";

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart(); // Use the context

  // Check if cart is undefined, it should never be undefined if the provider is used properly
  if (cart === undefined) {
    return <div>Loading...</div>;
  }

  const totalAmount = cart.reduce(
    (total, item) => total + item.discountedPrice * (item.quantity || 1),
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold my-5 text-center text-cBlue">Shopping Cart</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item._id} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center space-x-4">
                    {item.image?.asset?._ref ? (
                      <Image
                        src={urlFor(item.image.asset._ref).width(80).height(80).url()}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-md">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-cBlue">{item.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item._id, Math.max(1, (item.quantity || 1) - 1))}
                      className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300 text-cBlue"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity || 1}
                      onChange={(e) =>
                        updateQuantity(item._id, Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-12 text-center border rounded-md text-cBlue"
                    />
                    <button
                      onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                      className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300 text-cBlue"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-lg font-semibold text-cBlue">
                      ${item.discountedPrice.toFixed(2)}
                    </p>
                    {item.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </p>
                    )}
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-customGrey2 hover:text-customBlue mt-2 mx-auto flex justify-center"
                    >
                      <FaTrashCan size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between text-gray-600">
            <span>Subtotal ({cart.length} items)</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <span>Shipping Fee</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-4">
            <span>Total</span>
            <span className="text-cBlue">${totalAmount.toFixed(2)}</span>
          </div>
          <button className="w-full mt-6 bg-cBlue text-white py-2 rounded-lg hover:bg-customBlue transition">
            Proceed to Checkout ({cart.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
