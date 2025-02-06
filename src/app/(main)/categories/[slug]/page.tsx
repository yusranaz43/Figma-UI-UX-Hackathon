import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import CategoryDetails from "../../components1/categorydetails";

interface IParams {
  slug: string;  // The dynamic parameter 'slug' from the URL
}

// Function to fetch category by its slug
async function fetchCategoryBySlug(slug: string) {
  const category = await client.fetch(`
    *[_type == "categories" && slug.current == $slug][0] {
      _id,
      title,
      image,
      description
    }
  `, { slug });

  return category;
}

// Function to fetch products for a category using its slug
async function fetchProductsByCategorySlug(slug: string) {
  const products = await client.fetch(`
    *[_type == "products" && category->slug.current == $slug] {
      _id,
      title,
      discountedPrice,
      originalPrice,
      image,
      slug { current }
    }
  `, { slug });

  return products;
}

// Main CategoryPage component that will fetch data and render CategoryDetails
export default async function CategoryPage({ params }: { params: IParams }) {
  const { slug } = params;  // Get the slug from the URL params

  // Fetch the category and its associated products
  const category = await fetchCategoryBySlug(slug);
  const products = await fetchProductsByCategorySlug(slug);

  // If category doesn't exist, show a 404 page
  if (!category) {
    notFound();
  }

  return (
    <div>
      {/* Render CategoryDetails component with the fetched data */}
      <CategoryDetails category={category} products={products} />
    </div>
  );
}
