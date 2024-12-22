import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer2() {
  return (
    <footer className="pt-7 align-middle">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start lg:justify-between px-6 lg:px-48">
          <h3 className="text-customBlue text-xl font-bold mb-4 lg:mb-0">Bandage</h3>
          <div className="space-x-3 text-xl">
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} className="text-sky-500" />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} className="text-sky-500" />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} className="text-sky-500" />
            </a>
          </div>
        </div>

        <hr className="my-6 mx-6 lg:mx-48 border-gray-300" />

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-6 lg:px-48 py-6">
          {/* Company Info */}
          <div>
            <h5 className="font-bold text-sm text-customBlue">Company Info</h5>
            <ul className="text-xs pt-5 space-y-2 text-gray-700">
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">Carrier</Link></li>
              <li><Link href="/">We are Hiring</Link></li>
              <li><Link href="/">Blogs</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h5 className="font-bold text-sm text-customBlue">Legal</h5>
            <ul className="text-xs pt-5 space-y-2 text-gray-700">
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">Carrier</Link></li>
              <li><Link href="/">We are Hiring</Link></li>
              <li><Link href="/">Blogs</Link></li>
            </ul>
          </div>
          {/* Features */}
          <div>
            <h5 className="font-bold text-sm text-customBlue">Features</h5>
            <ul className="text-xs pt-5 space-y-2 text-gray-700">
              <li><Link href="/">Business Marketing</Link></li>
              <li><Link href="/">User Analytic</Link></li>
              <li><Link href="/">Live Chat</Link></li>
              <li><Link href="/">Unlimited Support</Link></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h5 className="font-bold text-sm text-customBlue">Resources</h5>
            <ul className="text-xs pt-5 space-y-2 text-gray-700">
              <li><Link href="/">IOSS & Android</Link></li>
              <li><Link href="/">Watch a Demo</Link></li>
              <li><Link href="/">Customers</Link></li>
              <li><Link href="/">API</Link></li>
            </ul>
          </div>
          {/* Get In Touch */}
          <div>
            <h5 className="font-bold text-sm text-customBlue">Get In Touch</h5>
            <ul className="text-xs pt-5 space-y-2 text-gray-700">
              <div className="flex items-center gap-2 pb-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-[35px] pl-5 flex-1"
                />
                <button
                  type="submit"
                  className="bg-sky-500 text-white hover:bg-blue-600 px-3 py-1 h-[35px] w-auto"
                >
                  Subscribe
                </button>
              </div>
              <li>
                <Link href="/">Lore imp sum dolor Amit</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-xs text-gray-700 text-center lg:text-start px-6 lg:px-48 py-7">
          <p>
            Made With Love By
            <br className="block lg:hidden" />
            Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
