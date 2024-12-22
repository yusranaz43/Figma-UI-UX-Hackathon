import Image from "next/image"
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OurOffice from "../components2/ouroffice";


export default function Contact(){
    return(
        <main>
            <section className="w-full h-[800px] bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
                        
                        <div className="space-y-5 mx-10 mt-[-60px]">
                          <h5 className="text-cBlue font-bold text-[16px] leading-[24px] tracking-[0.1px] w-[108px] h-[24px]">
                          CONTACT US
                          </h5>
                          <h1 className="text-cBlue font-bold text-[58px] leading-[80px] tracking-[0.2px] w-[378px] h-[160px]">
                          Get in touch 
                          today!
                          </h1>
                          <h4 className="text-customGrey2 font-normal text-[22px] leading-[30px] tracking-[0.2px] w-[376px] h-[60px] pb-2">
                          We know how large objects will act, 
                          but things on a small scale
                          </h4>
                          <h3 className="text-cBlue font-bold text-[23px] leading-[32px] tracking-[0.1px] w-[242px] h-[32px]">
                          Phone ; +451 215 215 
                          </h3>
                          <h3 className="text-cBlue font-bold text-[23px] leading-[32px] tracking-[0.1px] w-[207px] h-[32px] top-[52px]">
                          Fax : +451 215 215
                          </h3>
                          <div className="flex space-x-4 text-2xl">
                            <a href="/"><FontAwesomeIcon icon={faTwitter} className="text-cBlue"/></a>
                            <a href="/"><FontAwesomeIcon icon={faFacebook} className="text-cBlue"/></a>
                            <a href="/"><FontAwesomeIcon icon={faInstagram} className="text-cBlue"/></a>
                            <a href="/"><FontAwesomeIcon icon={faLinkedin} className="text-cBlue"/></a>
                          </div>
                        </div>
                
                        
                        <div className="relative flex justify-center items-center">
                            <div className="bg-cLightWhite rounded-full absolute w-[484.06px] h-[484.06px] left-[20px]"></div>
                            <div className="bg-cLightWhite rounded-full absolute w-[77.39px] h-[77.39px] top-[11.96px] left-[29px]"></div>
                            <div className="bg-cLightPurple rounded-full absolute w-[14.78px] h-[14.78px] top-[121.72px] left-[576.94px]"></div>
                            <div className="bg-cLightPurple rounded-full absolute w-[14.78px] h-[14.78px] top-[408.78px] left-[-9px]"></div>
                            <div className=""></div>
                          <Image
                          src="/images/contacthero.png"
                          alt="about-section-hero-image"
                          width={571}
                          height={826}
                          className="relative object-contain top-[20px] left-[21px]"/>
                        </div>
                      </div>
            </section>

            <OurOffice/>
        </main>
    )
}