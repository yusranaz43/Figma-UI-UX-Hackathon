import { notFound } from "next/navigation";
import CategoryDetails from "../../components1/categorydetails";
import { client } from "@/sanity/lib/client";

export const dynamicParams = false; // Important for SSG

export async function generateStaticParams() {
  return []; // Empty array for dynamic routes
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = await client.fetch(
    `*[_type == "categories" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  if (!category) notFound();

  const products = await client.fetch(
    `*[_type == "products" && category->slug.current == $slug]`,
    { slug: params.slug }
  );

  return <CategoryDetails category={category} products={products} />;
}