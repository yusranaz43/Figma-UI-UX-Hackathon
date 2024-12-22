import Image from "next/image";
import Problem from "../components2/problem";
import Traffic from "../components2/traffic";
import Video from "../components2/video";
import OurTeam from "../components2/ourteam";
import Clients from "../components2/clients";
import AboutHero from "../components2/abouthero";

export default function About() {
  return (
    <main>
        <section className="w-full h-[570px] top-[104px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        
        <div className="space-y-5 mx-10 mt-[-60px]">
          <h5 className="text-cBlue font-bold text-[16px] leading-[24px] tracking-[0.1px]">
            ABOUT COMPANY
          </h5>
          <h1 className="text-cBlue font-bold text-[58px] leading-[80px] tracking-[0.2px]">
            ABOUT US
          </h1>
          <h4 className="text-customGrey2 font-normal text-[20px] leading-[30px] tracking-[0.2px] pb-2">
            We know how large objects will act,<br/> but things on a small scale
          </h4>
          <button className="bg-cSky text-white w-[195px] h-[52px] rounded-[5px] font-bold text-[14px] leading-[22px] tracking-[0.2px]">
            Get Quote Now
          </button>
        </div>

        
        <div className="relative flex justify-center items-center">
            <div className="bg-cLightWhite rounded-full absolute w-[484.06px] h-[484.06px] left-[20px]"></div>
            <div className="bg-cLightWhite rounded-full absolute w-[77.39px] h-[77.39px] top-[11.96px] left-[29px]"></div>
            <div className="bg-blue-500 rounded-full absolute w-[14.78px] h-[14.78px] top-[121.72px] left-[576.94px]"></div>
            <div className="bg-blue-500 rounded-full absolute w-[14.78px] h-[14.78px] top-[408.78px] left-[-9px]"></div>
            <div className=""></div>
          <Image
          src="/images/about-hero.png"
          alt="about-section-hero-image"
          width={571}
          height={668}
          className="relative object-contain top-[-66.5px] left-[-20px]"/>
        </div>
      </div>
    </section>
    <Problem/>
    <Traffic/>
    <Video/>
    <OurTeam/>
    <Clients/>
    <AboutHero/>
    </main>
    
  );
}
