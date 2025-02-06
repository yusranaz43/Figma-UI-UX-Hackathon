import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";

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

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug.current}`}>
      <div className="text-center flex flex-col items-center shadow-2xl transition-transform duration-300 hover:scale-105 rounded-lg p-4 sm:p-6">
        {/* Product Image */}
        {product.image && product.image.asset?._ref ? (
          <Image
            src={urlFor(product.image.asset._ref).width(250).height(330).url()}
            alt={product.title}
            width={250}
            height={330}
            className="w-full max-w-[250px] object-cover"
          />
        ) : (
          <div className="w-full max-w-[250px] h-[330px] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}

        {/* Product Details */}
        <div className="pt-5">
          <h5 className="text-customBlue font-bold pb-2 text-[14px] sm:text-[16px] line-clamp-2 min-h-[55px]">
            {product.title}
          </h5>
          <h5 className="text-gray-400 font-semibold pt-2 text-[12px] sm:text-[14px]">
            <span className="text-gray-500 line-through">{`$${product.originalPrice}`}</span>{" "}
            <span className="text-green-700 font-semibold">{`$${product.discountedPrice}`}</span>
          </h5>
        </div>

        {/* Color Options */}
        <div className="flex gap-2 pt-4">
          <div className="w-[12px] h-[12px] rounded-full bg-cSky"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-cGreen"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-cOrange"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-cBlue"></div>
        </div>
      </div>
    </Link>
  );
}
