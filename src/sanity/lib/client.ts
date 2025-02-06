import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url' // Import the image URL builder
import { apiVersion, dataset, projectId } from '../env'
import dotenv from 'dotenv'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
dotenv.config()

// Create the Sanity client instance
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.NEXT_SANITY_TOKEN,
})

// Initialize image URL builder with the Sanity client
const builder = imageUrlBuilder(client)

// Function to build the image URL from Sanity's image reference
export function urlFor(source: SanityImageSource) {
  return builder.image(source) // This will generate the image URL
}

// Fetch products from Sanity.
// For "home", return the first 8 products.
// For "shop", skip the first 8 so that home products aren’t repeated.
export async function fetchProducts(pageType: string) {
  const data = await client.fetch(`*[_type == "products"]{
    _id,
    title,
    originalPrice,
    discountedPrice,
    image,
    description,
    inventory,
    ratings,
    colors,
    slug { current }
  }`);

  if (pageType === "home") {
    return data.slice(0, 8); // First 8 products for home page.
  } else {
    return data.slice(8); // Skip the first 8 products for shop page.
  }
}
