"use client";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { Product} from "../../../../type";

interface AddToCartButtonProps {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  onAddToCart: () => void;
}

const AddToCartButton = ({ product, selectedColor, selectedSize, quantity }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }

    const cartItem = {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    };

    addToCart(cartItem); // Ensure item is added to cart context properly
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
