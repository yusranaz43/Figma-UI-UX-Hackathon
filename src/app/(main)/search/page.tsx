"use client";
import { Suspense, useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { useSearchParams, useRouter } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";  

// Sanity image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source).url(); 

// Product type definition
interface Product {
  _id: string;
  title: string;
  image: { asset: { _ref: string } };
  originalPrice: number;
  discountedPrice: number;
  description?: string;
  rating?: number;
  slug: { current: string }; 
}

// API call to fetch products
const fetchProducts = async (query: string, minPrice?: number, maxPrice?: number): Promise<Product[]> => {
  if (!query.trim()) return []; // Avoid empty query

  let filter = `*[_type == "products" && title match "${query}*"`;

  if (minPrice) {
    filter += ` && discountedPrice >= ${minPrice}`;
  }
  if (maxPrice) {
    filter += ` && discountedPrice <= ${maxPrice}`;
  }

  filter += `]{
    _id, title, image, originalPrice, discountedPrice, description, rating, slug
  }`;

  console.log("Sanity Query:", filter);

  try {
    const results = await client.fetch(filter);
    console.log("Fetched products:", results);
    return results;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// SearchPage component
const SearchPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);
  const [products, setProducts] = useState<Product[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setLoading(true);
      const results = await fetchProducts(query, minPrice, maxPrice);
      setProducts(results || []);
      setLoading(false);
    };

    if (query.trim().length > 0) {
      fetchFilteredProducts();
    } else {
      setProducts([]);
    }
  }, [query, minPrice, maxPrice]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    router.push(`/search?query=${newQuery}`, { scroll: false });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-6 text-cBlue text-center mt-9">Search Products</h1>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="w-[980px] px-4 py-2 border rounded-md mb-4 mx-28"
      />

      {/* Price Range Filter */}
      <div className="flex gap-2 items-center mt-2 mb-6 justify-center">
        <label>Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-20 border px-2 py-1"
        />
        <label>Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-20 border px-2 py-1"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-28">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <Link
              key={product._id}
              href={`/products/${product.slug.current}`} // Add link to product page
              className="text-center flex flex-col items-center shadow-2xl transition-transform duration-300 hover:scale-105 rounded-lg p-4 sm:p-6"
            >
              {/* Product Image */}
              {product.image && product.image.asset?._ref ? (
                <Image
                  src={urlFor(product.image.asset._ref)} // Use urlFor function to get the image URL
                  alt={product.title}
                  width={183}
                  height={238}
                  className="w-full h-[250px] object-cover"
                />
              ) : (
                <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
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
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

// Wrap the SearchPage in Suspense
const SearchPageWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchPage />
  </Suspense>
);

export default SearchPageWithSuspense;
