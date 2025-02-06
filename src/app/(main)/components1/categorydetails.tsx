"use client";
import Image from "next/image";
import Link from "next/link"; 
import { urlFor } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  discountedPrice: number;
  originalPrice?: number;
  image: { asset: { _ref: string } };
  slug?: { current: string }; 
  colors?: string[];
  description: string;
  rating: number;
}

interface Category {
  _id: string;
  title: string;
  image: { asset: { _ref: string } };
  description: string;
}

interface CategoryDetailsProps {
  category: Category;
  products: Product[];
}

const CategoryDetails = ({ category, products }: CategoryDetailsProps) => {
  return (
    <section className="w-full flex flex-col items-center mt-24 px-4">
      <h2 className="text-customBlue font-bold text-[24px]">{category.title}</h2>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-20 max-w-[1200px] mx-auto">
        {products.length > 0 ? (
          products.map((product: Product, index: number) => (
            <Link
              key={product._id}
              href={`/products/${product.slug?.current}`} 
            >
              <div
                className={`text-center flex flex-col items-center shadow-2xl transition-transform duration-300 hover:scale-105 rounded-lg p-4 sm:p-6 ${index >= 4 ? "mt-8" : ""}`}
              >
                
                {/* Product Image */}
                {product.image && product.image.asset?._ref ? (
                  <Image
                    src={urlFor(product.image.asset._ref).width(250).height(330).url()}
                    alt={product.title}
                    width={250}
                    height={330}
                    className="w-full max-w-[250px] sm:max-w-[250px] object-cover"
                  />
                ) : (
                  <div className="w-full max-w-[250px] h-[330px] bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}

                <div className="pt-5">
                  <h5 className="text-customBlue font-bold pb-2 text-[14px] sm:text-[16px] line-clamp-2 min-h-[55px]">
                    {product.title}
                  </h5>

                  <h5 className="text-gray-400 font-semibold pt-2 text-[12px] sm:text-[14px]">
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through">{`$${product.originalPrice}`}</span>
                    )}
                    <span className="text-green-700 font-semibold">{` $${product.discountedPrice}`}</span>
                  </h5>

                  
                </div>
                {/* Color options */}
              <div className="flex gap-2 pt-4">
                <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cSky"></div>
                <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cGreen"></div>
                <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cOrange"></div>
                <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cBlue"></div>
              </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default CategoryDetails;
