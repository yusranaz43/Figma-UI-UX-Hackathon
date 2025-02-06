import { defineType } from "sanity";

export const product = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "originalPrice",
      title: "Original Price",
      type: "number",
    },
    {
      name: "discountedPrice",
      title: "Discounted Price",
      type: "number",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
    },
    {
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "isAvailable",
      title: "Product Availability",
      type: "boolean",
      description: "Indicates if the product is available for sale",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", 
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ratings",
      title: "Ratings",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5).error("Ratings must be between 1 and 5"),
    },
  ],
});
