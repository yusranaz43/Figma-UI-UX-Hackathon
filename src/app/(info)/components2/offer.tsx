import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Offer(){
    return(
        <section className="w-full h-[400px] bg-white mt-28">
           <div className="flex flex-col items-center">
              <h2 className="text-cBlue font-bold text-[40px] leading-[50px] tracking-[0.2px] w-[547px] h-[50px] text-center">
                Start your 14 days free trial
              </h2>

              <p className="text-customGrey2 font-normal text-[14px] leading-[20px] tracking-[0.2px] w-[411px] h-[40px] text-center mt-8">
                Met minim Mollie non desert Alamo est sit cliquey dolor 
                do met sent. RELIT official consequent.
              </p>

              <button className="bg-cSky text-white w-[186px] h-[52px] py-[15px] px-[40px] rounded-[5px] mt-8">
                <Link href="/" className="font-bold text-[14px] leading-[20px] tracking-[0.2px] w-[106px] h-[22px] text-center">
                   Try it free now
                </Link>
              </button>

              {/* Social Icons */}
              <div className="flex justify-center space-x-11 text-4xl mt-7 text-center">
                 <a href="/"><FontAwesomeIcon icon={faTwitter} className="text-customLightBlue"/></a>
                 <a href="/"><FontAwesomeIcon icon={faFacebook} className="text-cFacebookBlue"/></a>
                 <a href="/"><FontAwesomeIcon icon={faInstagram} className="text-black"/></a>
                 <a href="/"><FontAwesomeIcon icon={faLinkedin} className="text-cLinkedInSky"/></a>
              </div>
           </div>
        </section>
    )
}