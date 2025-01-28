import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="relative w-full h-[469px] sm:h-[600px] lg:h-[700px] max-w-[1200px] mx-auto">

        {/* Text Content */}
        <div className="absolute top-1/2 left-6 sm:left-16 lg:left-32 transform -translate-y-1/2 z-10 text-center sm:text-left">
          <h5 className="text-white font-bold text-[12px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px]">
            SUMMER 2020
          </h5>
          <h1 className="text-white font-bold text-[28px] sm:text-[48px] lg:text-[58px] leading-[36px] sm:leading-[60px] lg:leading-[80px] tracking-[0.2px] mt-3 sm:mt-5">
            NEW COLLECTION
          </h1>
          <h4 className="text-white font-normal text-[14px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[28px] lg:leading-[30px] tracking-[0.2px] mt-4 sm:mt-6">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="bg-customButtonHero2 text-white font-bold w-[120px] sm:w-[140px] lg:w-[163px] h-[40px] sm:h-[45px] lg:h-[47px] rounded-[5px] mt-8 sm:mt-10">
            SHOP NOW
          </button>
        </div>

        {/* Background Image */}
        <Image
          src="/images/hero1.jpg"
          alt="first-image-of-hero-section-image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
}
