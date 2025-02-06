import Blog from "./components1/blog";
import Hero from "./components1/hero";
import Hero2 from "./components1/hero2";
import Hero3 from "./components1/hero3";
import ProductCard from "./components1/productcards";
import ShopCards from "./components1/shopcards";
import { fetchProducts } from "@/sanity/lib/client";

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

export default async function Home(){

  const products: Product[] = await fetchProducts("home");

  return(
    <main>
      <Hero/>
      <ShopCards />
      <div className="pt-8 mt-14">
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

      {/* Products Grid */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {products.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
      <Hero2/>
      <Hero3/>
      
      <div id="blog-section">
      <Blog />
      </div>
      
    </main>
  )
}