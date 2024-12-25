import Image from "next/image";
import PriceCard from "../components2/pricecard";
import PricingFaqs from "../components2/pricingfaqs";
import Offer from "../components2/offer";

export default function Pricing() {
  return (
    <main>
      <PriceCard />
      <section>
        {/* Clients Logos Section */}
        <div className="max-w-[1200px] mx-auto pt-8 px-4 sm:px-8 lg:px-12">
          <h4 className="text-cBlue font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center my-12">
            Trusted By Over 4000 Big Companies
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-8">
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
        </div>
      </section>
      <PricingFaqs />
      <Offer/>
    </main>
  );
}
