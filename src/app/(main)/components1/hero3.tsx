import Image from "next/image"

export default function Hero3(){
    return(
       <section className="max-w-[1200px] mx-auto">
           <div className="bg-white grid grid-cols-2 w-full h-[505px] items-center px-28 gap-28">
            <div>
              <Image
              src="/images/hero3.png"
              alt="hero-section-image"
              width={725}
              height={774}
              className="object-contain top-[-211px] left-[-137px]"/>
            </div>

            <div>
              <h5 className="text-customGrey font-bold text-[16px] leading-[24px] tracking-[0.1px] w-[122px] h-[24px]">
                SUMMER 2020</h5>
              <h2 className="text-customBlue pt-4 font-bold text-[40px] leading-[50px] tracking-[0.2px] w-[375px] h-[100px]">
                Part of the Neural 
              Universe</h2>
              <h4 className="text-customGrey2 pt-7 font-normal text-[20px] leading-[30px] tracking-[0.2px] w-[375px] h-[100px]">
                We know how large objects will act, 
              but things on a small scale.</h4>
              <div className="flex items-center gap-3 pt-4">
                <button className="bg-customButtonHero2 text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] w-[148px] h-[43px] text-center rounded-[3px]">BUY NOW</button>
                <button className="border-customButtonHero2 border-2 text-customButtonHero2 font-bold text-[14px] leading-[22px] tracking-[0.2px] w-[150px] h-[43px] text-center rounded-[3px]">READ MORE</button>
              </div>
            </div>
           </div>
       </section>
    )
}