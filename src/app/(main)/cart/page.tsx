"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { FaTrashCan } from "react-icons/fa6";

// Define the type for cart items
interface CartItem {
  _id: string;
  title: string;
  discountedPrice: number;
  originalPrice?: number;
  quantity?: number;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Use the CartItem type for item in reduce
  const totalAmount = cart.reduce(
    (total: number, item: CartItem) => total + item.discountedPrice * (item.quantity || 1),
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
              {cart.map((item: CartItem) => (
                <li key={item._id} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center space-x-4">
                    {/* Display product image */}
                    {item.image && item.image.asset && item.image.asset._ref ? (
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

                  {/* Quantity Controls */}
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

                  {/* Price and Delete Button Below */}
                  <div className="text-center">
                    <p className="text-lg font-semibold text-cBlue">
                      ${item.discountedPrice}
                    </p>
                    {item.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </p>
                    )}
                    {/* Professional Delete Icon */}
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

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between text-gray-600">
            <span>Subtotal ({cart.length} items)</span>
            <span>${totalAmount}</span>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <span>Shipping Fee</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-4">
            <span>Total</span>
            <span className="text-cBlue">${totalAmount}</span>
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
