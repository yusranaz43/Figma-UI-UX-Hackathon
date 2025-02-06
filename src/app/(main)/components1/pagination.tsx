"use client";

import Link from "next/link";

interface PaginationProps {
  activePage: number;
  setActivePage: (page: number) => void;
  totalPages: number;
}

export default function Pagination({ activePage, setActivePage, totalPages }: PaginationProps) {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  const handlePrevClick = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  // Create an array of page numbers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="flex justify-center mb-14">
      <div className="flex border border-customGrey rounded-lg overflow-hidden w-[189px] h-[50px] md:w-[313px]">
        <ul className="flex items-center justify-between w-full">
          {/* Prev Button */}
          <li className="flex-1 border-r border-customGrey">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrevClick();
              }}
              className={`flex justify-center items-center h-full text-[14px] font-bold ${
                activePage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-cSky hover:bg-cSky hover:text-white"
              }`}
            >
              Prev
            </Link>
          </li>

          {/* Page Numbers */}
          {pages.map((page, index) => (
            <li
              key={page}
              className={`flex-1 ${index < pages.length - 1 ? "border-r border-customGrey" : ""}`}
            >
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageClick(page);
                }}
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

          {/* Next Button */}
          <li className="flex-1">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNextClick();
              }}
              className={`flex justify-center items-center h-full text-[14px] font-bold ${
                activePage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-cSky hover:bg-cSky hover:text-white"
              }`}
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
