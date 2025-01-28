import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function StickyBar() {
  return (
    <section className="bg-customBlue w-full h-[45px] absolute top-0 hidden lg:block max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center h-full">
        <div className="flex space-x-8 pl-12 text-xs">
          <div>
            <FontAwesomeIcon icon={faPhone} className="text-white pr-1" />
            <a href="tel:2255550118" className="text-white">(225) 555 0118</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="text-white pr-1" />
            <a href="mailto:michelle.river@example.com" className="text-white">michelle.river@example.com</a>
          </div>
        </div>
        <div>
          <h6 className="text-white text-xs">Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="flex justify-between gap-2 pr-12 text-xs">
          <div>
            <h6 className="text-white">Follow Us :</h6>
          </div>
          <div className="space-x-3">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="text-white" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} className="text-white" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className="text-white" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
