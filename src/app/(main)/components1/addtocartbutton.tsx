"use client";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext"; 


// Define the type for product
interface Product {
  title: string;
  image: { asset: { _ref: string } };
  originalPrice: number;
  discountedPrice: number;
  description?: string;
  inventory: number;
  ratings?: number;
  colors: string[];
  slug: { current: string };
}

interface AddToCartButtonProps {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  onAddToCart: () => void;
}

const AddToCartButton = ({ product, selectedColor, selectedSize, quantity }: AddToCartButtonProps) => {
  const { addToCart } = useCart(); // Access the addToCart function from context

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select both color and size.');
      return;
    }

    // Add the product to the cart with the selected color, size, and quantity
    const cartProduct = {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    };

    addToCart(cartProduct);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-6 py-3 bg-green-600 text-white font-semibold text-sm rounded-lg flex items-center space-x-2 hover:bg-green-700 transition"
    >
      <IoCartOutline className="text-xl" />
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
