import Cards from "../components1/cards";
import Filter from "../components1/filter";
import Image from "next/image";
import { fetchProducts } from "@/sanity/lib/client";
import ShopProducts from "../components1/shopproduct";

export default async function Shop(){

  // Fetch products for shop page (skipping the first 8)
  const products = await fetchProducts("shop");

    return(
        <main>
            <Cards/>
            <Filter/>
            <ShopProducts products={products} />
            <section>
               {/* Clients Logos Section */}
                       <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-8 pt-8 mb-11 px-4 sm:px-8 lg:px-20">
                         <Image
                           src="/images/Vector.png"
                           alt="Client partner1"
                           width={103}
                           height={34}
                         />
                         <Image
                           src="/images/col-md-1.png"
                           alt="Client partner2"
                           width={83}
                           height={59}
                         />
                         <Image
                           src="/images/col-md-2.png"
                           alt="Client partner3"
                           width={102}
                           height={74.84}
                         />
                         <Image
                           src="/images/col-md-3.png"
                           alt="Client partner4"
                           width={102.98}
                           height={14.98}
                         />
                         <Image
                           src="/images/col-md-4.png"
                           alt="Client partner5"
                           width={103.68}
                           height={61.75}
                         />
                         <Image
                           src="/images/col-md-5.png"
                           alt="Client partner6"
                           width={75.75}
                           height={71.86}
                         />
                       </div>
            </section>
        </main>
    )
}