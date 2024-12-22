import Image from 'next/image';

export default function Hero(){
    return(
      <section>
        <div className="relative w-full h-[469px] max-w-[1200px] mx-auto">

          <div className="absolute top-72 left-32 transform -translate-y-1/2 z-10">
            <h5 className="text-white font-bold text-[16px] leading-[24px] tracking-[0.1px] w-[122px] h-[24px]">SUMMER 2020</h5>
            <h1 className="text-white font-bold text-[58px] leading-[80px] tracking-[0.2px] w-[548px] h-[80px] pt-5">NEW COLLECTION</h1>
            <h4 className="text-white font-normal text-[20px] leading-[30px] tracking-[0.2px] w-[376px] h-[60px] pt-10">We know how large objects will act, 
            but things on a small scale.</h4>
            <button className="bg-customButtonHero2 text-white font-bold w-[163px] h-[47px] rounded-[5px] mt-20">SHOP NOW</button>
          </div>
          <Image 
          src="/images/hero1.jpg"
          alt="first-image-of-hero-section-image"
          width={1440}
          height={716}/>
        
        </div>
      </section>
    )
  }