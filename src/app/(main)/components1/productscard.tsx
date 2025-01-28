import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ pageType = "home" }) {
  const homeProducts = [
    { id: 1, image: "/images/product1.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 2, image: "/images/product4.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 3, image: "/images/product3.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 4, image: "/images/product2.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 5, image: "/images/product5.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 6, image: "/images/product6.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 7, image: "/images/product7.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 8, image: "/images/product8.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
  ];

  const shopProducts = [
    { id: 9, image: "/images/product9.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 10, image: "/images/product10.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 11, image: "/images/product11.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 12, image: "/images/product12.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 13, image: "/images/product13.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 14, image: "/images/product14.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 15, image: "/images/product15.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 16, image: "/images/product16.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 17, image: "/images/product17.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 18, image: "/images/product18.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 19, image: "/images/product19.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
    { id: 20, image: "/images/product20.png", title: "Graphic Design", department: "English Department", price: "$16.48", discountedPrice: "$6.48" },
  ];

  const products = pageType === "home" ? homeProducts : shopProducts;

  return (
    <section className="my-12 bg-white">
      {/* Render headings only if the pageType is 'home' */}
      {pageType === "home" && (
        <div className="pt-8">
        <div className="text-center flex flex-col items-center">
          <h2 className="pb-2.5 text-customGrey2 font-normal text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] tracking-[0.2px] w-full sm:w-[90%] md:w-[80%] white-space-normal">
            Featured Products
          </h2>
          <h3 className="pb-2.5 text-cBlue font-bold text-[22px] sm:text-[24px] leading-[32px] sm:leading-[34px] tracking-[0.1px] w-full sm:w-[90%] md:w-[80%] white-space-normal">
            BESTSELLER PRODUCTS
          </h3>
          <p className="pt-2.5 text-customGrey2 font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] tracking-[0.2px] w-full sm:w-[90%] md:w-[80%]">
            Problems trying to resolve the conflict between
          </p>
        </div>
      </div>
      
      
      )}

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-20 max-w-[1200px] mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`text-center flex flex-col items-center shadow-lg rounded-lg p-4 sm:p-6 ${index >= 4 ? "mt-8" : ""}`}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={330}
              className="w-full max-w-[200px] sm:max-w-[250px] object-cover"
            />
            <div className="pt-5">
              <h5 className="font-bold pb-2 text-[14px] sm:text-[16px]">{product.title}</h5>
              <Link href="/" className="font-bold text-gray-500 text-[12px] sm:text-[14px]">
                {product.department}
              </Link>
              <h5 className="text-gray-400 font-semibold pt-2 text-[12px] sm:text-[14px]">
                {product.price}{" "}
                <span className="text-green-700 font-semibold">{product.discountedPrice}</span>
              </h5>
            </div>

            <div className="flex gap-2 pt-4">
              <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cSky"></div>
              <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cGreen"></div>
              <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cOrange"></div>
              <div className="w-[12px] sm:w-[16px] h-[12px] sm:h-[16px] rounded-full bg-cBlue"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
