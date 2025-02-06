import ProductDetails from "../../components1/productdetails";  
import { client } from "@/sanity/lib/client";  
import { notFound } from "next/navigation";  

interface IParams {
  slug: string; // This will hold the dynamic slug from the URL
}

async function fetchProductBySlug(slug: string) {
  // Sanity query to fetch the product by slug
  const product = await client.fetch(`
    *[_type == "products" && slug.current == $slug][0] {
      _id,
      title,
      image,
      originalPrice,
      discountedPrice,
      description,
      rating,
      colors,
      slug {current}
    }
  `, { slug });

  return product;
}

export default async function ProductPage({ params }: { params: IParams }) {
  const { slug } = params;  // Destructure slug directly from params

  // Fetch the product data using the slug
  const product = await fetchProductBySlug(slug);

  if (!product) {
    notFound();  // If product not found, show 404
  }

  // Render the ProductDetails component with the fetched product data
  return (
    <ProductDetails product={product} />
  );
}
