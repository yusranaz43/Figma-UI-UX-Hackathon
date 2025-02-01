import dotenv from 'dotenv';
dotenv.config();
import { createClient } from "@sanity/client";

const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  SANITY_TOKEN,
} = process.env;

if (!PUBLIC_SANITY_PROJECT_ID || !SANITY_TOKEN) {
  console.error("Missing required environment variables. Please check your .env.local file.");
  process.exit(1);
}

const sanityClient = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: SANITY_TOKEN,
});

// Function to delete all documents of a given type
async function deleteAllDocuments(docType) {
  try {
    console.log(`Fetching all ${docType} from Sanity...`);

    // Fetch all document IDs of the given type
    const documents = await sanityClient.fetch(`*[_type == "${docType}"]{_id}`);

    if (documents.length === 0) {
      console.log(`No ${docType} found.`);
      return;
    }

    console.log(`Found ${documents.length} ${docType}. Deleting...`);

    // Delete each document
    for (const doc of documents) {
      await sanityClient.delete(doc._id);
      console.log(`Deleted ${docType} with ID: ${doc._id}`);
    }

    console.log(`All ${docType} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting ${docType}:`, error.message);
  }
}

// Main function to delete products and categories
async function deleteData() {
  console.log("Starting deletion process...");

  await deleteAllDocuments("products");   // Delete all products
  await deleteAllDocuments("categories"); // Delete all categories

  console.log("Deletion process completed.");
}

deleteData();
