"use client";
import Link from "next/link";
import { useState } from "react";

export default function Pagination() {
  const [activePage, setActivePage] = useState(2); // Current active page
  const totalPages = 3; // Total number of pages

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) setActivePage(page);
  };

  const handleFirstClick = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  const handleNextClick = () => {
    if (activePage < totalPages) setActivePage(activePage + 1);
  };

  return (
    <section className="flex justify-center py-[-4px] mb-14">
      <div className="flex border border-customGrey rounded-lg overflow-hidden w-[189px] h-[50px] md:w-[313px]">
        <ul className="flex items-center justify-between w-full">
          {/* First Page */}
          <li className="flex-1 border-r border-customGrey">
            <Link
              href="#"
              className={`flex justify-center items-center h-full text-[14px] font-bold ${
                activePage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-cSky hover:bg-cSky hover:text-white"
              }`}
              onClick={handleFirstClick}
            >
              First
            </Link>
          </li>

          {/* Page Numbers */}
          {[1, 2, 3].map((page, index) => (
            <li
              key={page}
              className={`flex-1 ${index < 2 ? "border-r border-customGrey" : ""}`}
            >
              <Link
                href="#"
                onClick={() => handlePageClick(page)}
                className={`flex justify-center items-center h-full text-[14px] font-bold ${
                  activePage === page
                    ? "bg-cSky text-white"
                    : "text-cSky hover:bg-cSky hover:text-white"
                }`}
              >
                {page}
              </Link>
            </li>
          ))}

          {/* Next Page */}
          <li className="flex-1">
            <Link
              href="#"
              className={`flex justify-center items-center h-full text-[14px] font-bold ${
                activePage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-cSky hover:bg-cSky hover:text-white"
              }`}
              onClick={handleNextClick}
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
