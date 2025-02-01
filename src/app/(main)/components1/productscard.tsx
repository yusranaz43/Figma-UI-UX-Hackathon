import { client, urlFor } from "@/sanity/lib/client";  
import Image from "next/image";

// Define the Product type for better type safety
interface Product {
  _id: string;
  title: string;
  image: { asset: { _ref: string } };  
  originalPrice: number;
  discountedPrice: number;
}

// Fetch data from Sanity using a simple Groq query
async function fetchProducts(pageType: string): Promise<Product[]> {
  const data = await client.fetch(`*[_type == "products"]{
    _id,
    title,
    originalPrice,
    discountedPrice,
    image,
  }`);

  console.log("Fetched Data: ", data); // Log the data to check the URLs

  if (pageType === "home") {
    return data.slice(0, 8);  // First 8 products for home page
  } else {
    return data.slice(8, 20); // Products 9 to 18 for the shop page
  }
}

// Define props for the ProductCard component
interface ProductCardProps {
  pageType?: string;
}

export default async function ProductCard({ pageType = "home" }: ProductCardProps) {
  const products = await fetchProducts(pageType);

  return (
    <section className="my-12 bg-white">
      {/* Render headings only if the pageType is 'home' */}
      {pageType === "home" && (
        <div className="pt-8">
          <div className="text-center flex flex-col items-center">
            <h2 className="pb-2.5 text-customGrey2 font-normal text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] tracking-[0.2px] w-full sm:w-[90%] md:w-[80%] line-clamp-2">
              Featured Products
            </h2>
            <h3 className="pb-2.5 text-cBlue font-bold text-[22px] sm:text-[24px] leading-[32px] sm:leading-[34px] tracking-[0.1px] w-full sm:w-[90%] md:w-[80%]">
              BESTSELLER PRODUCTS
            </h3>
            <p className="pt-2.5 text-customGrey2 font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] tracking-[0.2px] w-full sm:w-[90%] md:w-[80%]">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
      )}

      {/* Grid for displaying products */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-20 max-w-[1200px] mx-auto">
        {products.map((product: Product, index: number) => (
          <div
            key={product._id}
            className={`text-center flex flex-col items-center shadow-2xl transition-transform duration-300 hover:scale-105 rounded-lg p-4 sm:p-6 ${index >= 4 ? "mt-8" : ""}`}
          >
            {/* Check if product image exists, and display it */}
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
              {/* Display product title */}
              <h5 className="text-customBlue font-bold pb-2 text-[14px] sm:text-[16px] line-clamp-2 min-h-[55px]">{product.title}</h5>
              <h5 className="text-gray-400 font-semibold pt-2 text-[12px] sm:text-[14px]">
                <span className="text-gray-500 line-through">{`$${product.originalPrice}`}</span>{" "}
                <span className="text-green-700 font-semibold">{`$${product.discountedPrice}`}</span>
              </h5>
            </div>

            <div className="flex gap-2 pt-4">
              <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cSky"></div>
              <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cGreen"></div>
              <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cOrange"></div>
              <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cBlue"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
