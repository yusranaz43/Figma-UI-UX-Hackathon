"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Header1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();  // Access cart state from context
  const { wishlist } = useWishlist();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full shadow-sm relative lg:mt-[45px]">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 py-2 max-w-[1200px] mx-auto">
        <div>
          <h2 className="text-customBlue text-2xl font-bold">Bandage</h2>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden text-customBlue">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-customBlue">
            <li className="hover:text-gray-700">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="#blog-section">Blog</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/team">Team</Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-x-5 text-sky-500">
          <div>
            <FontAwesomeIcon icon={faUser} className="px-1" />
            <Link href="/login" className="font-bold">Login</Link>
            <span className="px-1">/</span>
            <Link href="/register" className="font-bold">Register</Link>
          </div>
          <a href="/search" className="hover:text-gray-700">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <div className="relative">
            <a href="/cart" className="hover:text-gray-700">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="absolute top-[6px] text-sm">
              {cart.length}
              </span>
            </a>
          </div>
          <div className="relative">
            <a href="/wishlist" className="hover:text-gray-700">
              <FontAwesomeIcon icon={faHeart} />
              <span className="absolute top-[6px] text-sm">
              {wishlist.length}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-y-4 text-customBlue px-4 py-4">
            <li className="hover:text-gray-700">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="#blog-section">Blog</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link href="/team">Team</Link>
            </li>

            {/* Mobile Icons */}
            <div className="flex flex-col items-center gap-y-4 text-sky-500 mt-4">
              <div>
                <FontAwesomeIcon icon={faUser} className="px-1" />
                <Link href="/login" className="font-bold">Login</Link>
                <span className="px-1">/</span>
                <Link href="/register" className="font-bold">Register</Link>
              </div>
              <a href="/search" className="hover:text-gray-700">
                <FontAwesomeIcon icon={faSearch} />
              </a>
              <div className="relative">
                <a href="/cart" className="hover:text-gray-700">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="absolute top-[6px] text-sm">
                  {cart.length}
                  </span>
                </a>
              </div>
              <div className="relative">
                <a href="/wishlist" className="hover:text-gray-700">
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="absolute top-[6px] text-sm">
                  {wishlist.length}
                  </span>
                </a>
              </div>
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}

