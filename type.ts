// Define your Product interface
export interface Product {
  _id: string;
  title: string;
  discountedPrice: number;
  originalPrice?: number;
  image: { asset: { _ref: string } };
  slug?: { current: string };
  colors?: string[];  // Optional, since not all products might have colors
  description: string;
  rating: number;
}

  
  // Define CategoryDetailsProps type to be consistent with Product
  export interface CategoryDetailsProps {
    category: {
      _id: string;
      title: string;
      image: { asset: { _ref: string } };
      description?: string;
    };
    products: Product[]; // This should match the Product interface
  }
  