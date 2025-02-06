"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Define type for wishlist items
interface WishlistItem {
  _id: string;
  title: string;
  image?: {
    asset?: {
      _ref: string;
    };
  };
  discountedPrice: number;
  originalPrice?: number;
}

// Define type for Wishlist Context
interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (productId: string) => void;
}

// Create Wishlist Context with proper type
const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // **Load Wishlist from Local Storage**
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // **Save Wishlist to Local Storage whenever it updates**
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product: WishlistItem) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = [...prevWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item._id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the Wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
