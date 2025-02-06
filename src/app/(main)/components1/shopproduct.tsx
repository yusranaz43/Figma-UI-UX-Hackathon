"use client";

import { useState } from "react";
import Pagination from "./pagination";
import ProductCard from "./productcards";


interface Product {
  _id: string;
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

interface ShopProductsProps {
  products: Product[];
}

export default function ShopProducts({ products }: ShopProductsProps) {
  // Force exactly 3 pages with 12 products per page.
  const totalPages = 3;
  const productsPerPage = 12;
  const [activePage, setActivePage] = useState(1);

  // Calculate indices for slicing the shop products array.
  const indexOfLastProduct = activePage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      {/* Products Grid */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          // If there are no products for this page, render placeholders.
          Array.from({ length: productsPerPage }).map((_, index) => (
            <div
              key={index}
              className="border border-dashed border-gray-300 rounded-lg p-4 h-[350px] flex items-center justify-center text-gray-500"
            >
              No Product
            </div>
          ))
        )}
      </section>

      {/* Pagination Controls (always visible since we force 3 pages) */}
      <Pagination activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />
    </>
  );
}
