import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header2() {
  return (
    <header className="flex justify-between items-center bg-white w-full h-[91px] mt-0 shadow-sm relative max-w-[1200px] mx-auto">

      <div>
        <h2 className="text-customBlue text-2xl font-bold pl-2 ml-24">Bandage</h2>
      </div>
      {/* Navigation */}
      <nav className="text-customBlue pr-[180px]">

        <ul className="flex gap-x-6">
          <li className="hover:text-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/product">Product</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
       
      <div className="mr-28">
          <Link href="/login" className="font-normal text-sky-500">Login</Link>
          <button className="bg-sky-500 text-white  ml-4 font-bold text-[14px] leading-[22px] tracking-[0.2px] w-[169px] h-[48px]">
            Become a member
            <FontAwesomeIcon icon={faArrowRight} className="text-white text-xs font-bold pl-2"/>
          </button>
          </div>
    
    </header>
  );
}
