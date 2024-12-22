import Image from "next/image";

export default function Hero2() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="bg-customHero2 grid grid-cols-2 w-full h-[660px] items-center px-28">
        {/* Left Column: Text */}
        <div className="space-y-6 pl-12">
          <h5 className="text-white font-normal text-[20px] leading-[30px] tracking-[0.2px]">
            SUMMER 2020
          </h5>
          <h2 className="text-white font-bold text-[58px] leading-[70px] tracking-[0.2px] max-w-[500px]">
            Vita Classic Product
          </h2>
          <h4 className="text-white font-normal text-[14px] leading-[20px] tracking-[0.2px] max-w-[340px]">
            We know how large objects will act, We know how are objects will act, We know
          </h4>
          <div className="flex items-center gap-10">
            <span className="text-white font-bold text-[24px] leading-[32px] tracking-[0.1px]">
              $16.48
            </span>
            <button className="text-white font-bold bg-customButtonHero2 text-[14px] leading-[22px] tracking-[0.2px] w-[184px] h-[52px] rounded-[5px]">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex items-center justify-center pr-[1px]">
          <Image
            src="/images/hero2.png"
            alt="hero-section-image"
            width={443}
            height={685}
            className="object-contain max-h-[650px] mb-[-63.5px]"
          />
        </div>
      </div>
    </section>
  );
}
