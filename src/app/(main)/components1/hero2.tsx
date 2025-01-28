import Image from "next/image";

export default function Hero2() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="bg-customHero2 grid grid-cols-1 md:grid-cols-2 w-full h-auto items-center px-6 md:px-28 pt-20">
        {/* Left Column: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h5 className="text-white font-normal text-[20px] leading-[30px] tracking-[0.2px]">
            SUMMER 2020
          </h5>
          <h2 className="text-white font-bold text-[30px] md:text-[58px] leading-[34px] md:leading-[70px] tracking-[0.2px] max-w-full">
            Vita Classic Product
          </h2>
          <h4 className="text-white font-normal text-[18px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[0.2px] max-w-full">
          We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-10">
            <span className="text-white font-bold text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0.1px]">
              $16.48
            </span>
            <button className="text-white font-bold bg-customButtonHero2 text-[14px] leading-[22px] tracking-[0.2px] w-[160px] md:w-[184px] h-[48px] md:h-[52px] rounded-[5px]">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/hero2.png"
            alt="hero-section-image"
            width={443}
            height={685}
            className="object-contain max-h-[400px] md:max-h-[650px] pt-16"
          />
        </div>
      </div>
    </section>
  );
}
