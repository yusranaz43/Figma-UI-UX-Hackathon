import Image from "next/image";

export default function Filter() {
  return (
    <section className="w-full bg-white py-14 border px-4 sm:px-6 lg:px-[109px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        
        {/* Showing Results */}
        <p className="text-customGrey2 font-bold text-[14px] leading-[24px] tracking-[0.1px] text-center lg:text-left">
          Showing all 12 results
        </p>

        {/* Views Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <span className="text-customGrey2 font-bold text-[14px] leading-[24px] tracking-[0.1px] text-center sm:text-left">
            Views:
          </span>
          <div className="flex gap-2">
            <button className="w-[46px] h-[46px] p-[15px] border border-gray-300 rounded-[5px] flex items-center justify-center">
              <Image
                src="/images/grid.png"
                alt="grid image"
                width={16}
                height={16}
              />
            </button>
            <button className="w-[46px] h-[46px] p-[15px] border border-gray-300 rounded-[5px] flex items-center justify-center">
              <Image
                src="/images/list.png"
                alt="list image"
                width={14}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:gap-6">
          <select className="border border-gray-300 rounded-[5px] px-4 py-2 text-sm text-gray-600 w-[141px] h-[50px]">
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
          <button className="bg-cSky text-white px-4 py-2 rounded-[5px] w-[94px] h-[50px]">
            Filter
          </button>
        </div>
      </div>
    </section>
  );
}
