"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Swal from "sweetalert2";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

interface Product {
  _id: string;
  title: string;
  image: { asset: { _ref: string } };
  originalPrice: number;
  discountedPrice: number;
  description: string;
  ratings: number;
  slug: { current: string };
  colors: string[];
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1); // Quantity state

  const { addToCart } = useCart(); // Cart context se addToCart function le raha hai
  const { addToWishlist } = useWishlist(); // Get the addToWishlist function from the Wishlist context

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      Swal.fire({
        title: "Oops!",
        text: "Please select a color and size!",
        icon: "warning",
      });
      return;
    }

    const cartItem = {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
      toFixed: (arg0: number) => product.discountedPrice.toFixed(arg0),
    };

    addToCart(cartItem); // Product ko cart mein add kar raha hai

    // SweetAlert2 Success message
    Swal.fire({
      title: "Success!",
      text: "Product added to cart successfully! 🛒",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product); // Add the product to wishlist
    Swal.fire({
      title: "Success!",
      text: "Product added to wishlist! ❤️",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  // Handle increase or decrease of quantity
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="my-6 bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section: Product Image */}
        <div className="flex justify-center mb-8">
          {product.image && product.image.asset?._ref ? (
            <Image
              src={urlFor(product.image.asset._ref)
                .width(500)
                .height(650)
                .url()}
              alt={product.title}
              width={300}
              height={250}
              className="object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              priority
            />
          ) : (
            <div className="w-full max-w-[500px] h-[650px] bg-gray-200 flex items-center justify-center rounded-lg shadow-lg">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* Right Section: Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {product.title}
          </h1>

          {/* Ratings and Wishlist */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
              <FaStar className="text-gray-300" />
              <span className="text-gray-500">(10 Reviews)</span>
            </div>
            <CiHeart
              onClick={handleAddToWishlist} // Add product to wishlist when heart icon is clicked
              className="text-gray-400 cursor-pointer hover:text-red-500 text-2xl"
            />
          </div>

          {/* Pricing */}
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-green-600">
              ${product.discountedPrice}
            </span>
            <span className="line-through text-gray-500 text-lg">
              ${product.originalPrice}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700">{product.description}</p>

          {/* Color and Size Selection */}
          <div>
            <h3 className="font-semibold text-[16px] sm:text-[18px]">Color:</h3>
            <div className="flex space-x-4 pt-2">
              {["#252B42", "#23856D", "#E77C40", "#23A6F0"].map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                    selectedColor === color
                      ? "transform scale-110 ring-2 ring-gray-800"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold text-[16px] sm:text-[18px]">Size:</h3>
            <div className="flex space-x-4 pt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md text-sm ${
                    selectedSize === size
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Professionally Designed Quantity Selector */}
          <div className="flex items-center space-x-4 pt-4">
            <h3 className="font-semibold text-[16px] sm:text-[18px]">
              Quantity:
            </h3>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 flex justify-center items-center bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 transition-all"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value, 10)))
                }
                className="w-14 h-10 text-center font-semibold text-gray-800 border-none focus:ring-0"
                min="1"
              />
              <button
                onClick={increaseQuantity}
                className="w-10 h-10 flex justify-center items-center bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 transition-all"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-center space-x-4 pt-6">
            <button
              onClick={handleAddToCart}
              className="px-11 py-3 bg-blue-600 text-white font-semibold text-sm rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition"
            >
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleAddToCart}
              className="px-11 py-3 bg-green-600 text-white font-semibold text-sm rounded-lg flex items-center space-x-2 hover:bg-green-700 transition"
            >
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
