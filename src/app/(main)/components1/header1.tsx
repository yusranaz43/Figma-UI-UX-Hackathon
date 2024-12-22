import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faHeart} from '@fortawesome/free-regular-svg-icons';
import { faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Header1() {
  return (
    <header className="flex justify-between items-center bg-white w-full h-[45px] left-0 mt-14 shadow-sm relative max-w-[1200px] mx-auto">

      <div>
        <h2 className="text-customBlue text-2xl font-bold pl-12">Bandage</h2>
      </div>
      {/* Navigation */}
      <nav className="text-customBlue pr-[300px]">

        <ul className="flex gap-x-6">
          <li className="hover:text-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="#blog-section">Blog</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/pages">Pages</Link>
          </li>
        </ul>
      </nav>

     {/* Icons */}
      <div className="flex mr-12 gap-x-5 text-sky-500">
       <div>
          <FontAwesomeIcon icon={faUser} className="px-1" />
          <Link href="/login" className="font-bold">Login</Link>
          <span className="px-1">/</span>
          <Link href="/register" className="font-bold">Register</Link>
       </div>
        <a href="#" className="hover:text-gray-700">
          <FontAwesomeIcon icon={faSearch} />
        </a>
       <div className="relative">
        <a href="#" className="hover:text-gray-700">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="px-1 absolute top-[6px] text-sm">1</span>
        </a>
       </div>
       <div className="relative">
        <a href="#" className="hover:text-gray-700">
          <FontAwesomeIcon icon={faHeart} />
          <span className="px-1 absolute top-[6px] text-sm">1</span>
        </a>
       </div> 
      </div>
    </header>
  );
}
