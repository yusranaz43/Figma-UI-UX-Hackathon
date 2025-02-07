"use client";
import React from "react";
import { useWishlist } from "../context/WishlistContext"; // Import the WishlistContext
import { useCart } from "../context/CartContext"; // Import CartContext
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { FaTrashCan } from "react-icons/fa6"; // Trash icon from fa6
import { FaShoppingCart } from "react-icons/fa"; // Correct Cart Icon Import

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  interface WishlistItem {
    _id: string;
    title: string;
    image?: {
      asset?: {
        _ref?: string;
      };
    };
    discountedPrice: number;
    originalPrice?: number;
  }

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({ 
      ...item, 
      image: item.image && item.image.asset && item.image.asset._ref ? { asset: { _ref: item.image.asset._ref } } : undefined, 
      quantity: 1 
    }); // Add the item to the cart with a default quantity of 1
  };

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-7 mt-5 text-center">Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-center">Your wishlist is empty.</p>
        ) : (
          <ul>
            {wishlist.map((item) => (
              <li key={item._id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center space-x-4">
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
                <div className="flex items-center space-x-20 ml-auto">
                  <div className="text-left">
                    <p className="text-lg font-semibold text-cBlue">${item.discountedPrice}</p>
                    {item.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">${item.originalPrice}</p>
                    )}
                  </div>
                  <button onClick={() => removeFromWishlist(item._id)} className="text-customGrey2 hover:text-customBlue mt-2">
                    <FaTrashCan size={20} />
                  </button>
                  <button onClick={() => handleAddToCart(item)} className="flex items-center bg-cBlue text-white rounded-md px-4 py-2 space-x-2">
                    <FaShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
