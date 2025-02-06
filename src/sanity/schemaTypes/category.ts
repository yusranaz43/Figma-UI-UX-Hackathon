import { defineType } from "sanity";

export const category = defineType({
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Automatically generate the slug based on the title
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
    },
  ],
});
