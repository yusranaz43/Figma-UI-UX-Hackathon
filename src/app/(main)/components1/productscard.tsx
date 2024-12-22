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
            <h2 className="pb-2.5 text-customGrey2 font-normal text-[20px] leading-[30px] tracking-[0.2px] w-[191px] h-[30px]">
              Featured Products
            </h2>
            <h3 className="pb-2.5 text-cBlue font-bold text-[24px] leading-[34px] tracking-[0.1px] w-[299px] h-[32px]">
              BESTSELLER PRODUCTS
            </h3>
            <p className="pt-2.5 text-customGrey2 font-normal text-[14px] leading-[20px] tracking-[0.2px] w-[347px] h-[20px]">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
      )}

      <div className="px-32 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-20 max-w-[1200px] mx-auto">
        {products.map((product, index) => (
          <div key={product.id} className={`text-center flex flex-col items-center ${index >= 4 ? "mt-8" : ""}`}>
            <Image src={product.image} alt={product.title} width={183} height={238} />
            <div className="pt-5">
              <h5 className="font-bold pb-2">{product.title}</h5>
              <Link href="/" className="font-bold text-gray-500">
                {product.department}
              </Link>
              <h5 className="text-gray-400 font-semibold pt-2">
                {product.price}{" "}
                <span className="text-green-700 font-semibold">{product.discountedPrice}</span>
              </h5>
            </div>

            <div className="flex gap-2 pt-4">
              <div className="w-[16px] h-[16px] rounded-full bg-cSky"></div>
              <div className="w-[16px] h-[16px] rounded-full bg-cGreen"></div>
              <div className="w-[16px] h-[16px] rounded-full bg-cOrange"></div>
              <div className="w-[16px] h-[16px] rounded-full bg-cBlue"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
