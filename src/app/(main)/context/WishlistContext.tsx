"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface WishlistItem {
  _id: string;
  title: string;
  discountedPrice: number;
  originalPrice: number;
  image?: {
    asset?: {
      _ref: string;
    };
  };
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    // Load wishlist from localStorage when the app is first rendered
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    // Save wishlist to localStorage whenever it changes
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      localStorage.removeItem("wishlist");
    }
  }, [wishlist]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((wishlistItem) => wishlistItem._id === item._id)) {
        return [...prevWishlist, item];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
