import Image from "next/image";

export default function ShopCards() {
  return (
    <section className="w-full flex flex-col items-center mt-24 px-4">
      <div className="text-center mb-10 flex flex-col items-center">
        <h2 className="text-customBlue font-bold text-[24px] leading-[32px] tracking-[0.1px] w-[181px] h-[32px]">
          EDITOR’S PICK
        </h2>
        <p className="text-customGrey2 font-normal text-[14px] leading-[20px] tracking-[0.2px] w-full sm:w-[347px] h-auto mt-2">
           Problems trying to resolve the conflict between
        </p>

      </div>

      <div className="flex flex-wrap md:flex-nowrap w-full justify-center gap-4 mt-8">
        {/* First Image */}
        <div className="relative w-full md:w-[509px] h-[300px] md:h-[500px]">
          <Image
            src="/images/product9.png"
            alt="First Image"
            width={509}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black w-[170px] h-[48px] px-4 py-2 shadow-md text-center">
            MEN
          </div>
        </div>

        {/* Second Image */}
        <div className="relative w-full md:w-[239px] h-[300px] md:h-[500px]">
          <Image
            src="/images/product10.png"
            alt="Second Image"
            width={239}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black w-[136px] h-[48px] px-4 py-2 shadow-md text-center">
            WOMEN
          </div>
        </div>

        {/* Third and Fourth Images */}
        <div className="flex flex-col gap-4 w-full md:w-[239px]">
          {/* Third Image */}
          <div className="relative w-full h-[150px] md:h-[242px]">
            <Image
              src="/images/filter3.png"
              alt="Third Image"
              width={239}
              height={242}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black w-[120px] h-[48px] px-4 py-2 shadow-md text-center">
              ACCESSORIES
            </div>
          </div>

          {/* Fourth Image */}
          <div className="relative w-full h-[150px] md:h-[242px]">
            <Image
              src="/images/product12.png"
              alt="Fourth Image"
              width={239}
              height={242}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black w-[120px] h-[48px] px-4 py-2 shadow-md text-center">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
