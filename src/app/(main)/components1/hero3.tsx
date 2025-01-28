import Image from "next/image";

export default function Hero3() {
  return (
    <section className="bg-white max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:h-[505px] items-center lg:px-28 lg:gap-28 gap-8">
        {/* Image Section */}
        <div className="order-2 lg:order-1 flex justify-center lg:mt-0 mt-8">
          <Image
            src="/images/hero3.png"
            alt="hero-section-image"
            width={725}
            height={774}
            className="object-contain max-w-full max-h-full lg:mb-[-70px]"
          />
        </div>

        {/* Text Section */}
        <div className="order-1 lg:order-2 text-center lg:text-left mt-20 lg:mt-0">
          <h5 className="text-customGrey font-bold text-[16px] leading-[24px] tracking-[0.1px] w-full lg:w-[122px] lg:h-[24px]">
            SUMMER 2020
          </h5>
          <h2 className="text-customBlue pt-4 font-bold text-[34px] lg:text-[40px] leading-[36px] lg:leading-[50px] tracking-[0.2px] w-full lg:w-[375px]">
            Part of the Neural Universe
          </h2>
          <h4 className="text-customGrey2 pt-4 lg:pt-7 font-normal text-[19px] lg:text-[20px] leading-[28px] lg:leading-[30px] tracking-[0.2px] w-full lg:w-[375px]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 justify-center lg:justify-start">
            <button className="bg-customButtonHero2 text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] w-auto min-w-[120px] px-6 h-[43px] text-center rounded-[3px]">
              BUY NOW
            </button>
            <button className="border-customButtonHero2 border-2 text-customButtonHero2 font-bold text-[14px] leading-[22px] tracking-[0.2px] w-auto min-w-[120px] px-6 h-[43px] text-center rounded-[3px]">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
