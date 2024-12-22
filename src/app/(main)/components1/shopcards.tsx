import Image from "next/image";

export default function ShopCards() {
  return (
    <section className="w-full flex flex-col items-center mt-64">
      <div className="text-center mb-10 flex flex-col items-center">
        <h2 className="text-customBlue font-bold text-[24px] leading-[32px] tracking-[0.1px] w-[181px] h-[32px]">
          EDITOR’S PICK
        </h2>
        <p className="text-customGrey2 font-normal text-[14px] leading-[20px] tracking-[0.2px] w-[347px] h-[20px] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex w-full justify-center gap-4 mt-8">
        {/* First Image */}
        <div className="relative w-[509px] h-[500px]">
          <Image
            src="/images/filter1.png"
            alt="First Image"
            width={509}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[426px] left-[125px] transform text-center -translate-x-1/2 bg-white text-black w-[170px] h-[48px] px-4 py-2 shadow-md">
            MEN
          </div>
        </div>

        {/* Second Image */}
        <div className="relative w-[239px] h-[500px]">
          <Image
            src="/images/filter2.png"
            alt="Second Image"
            width={239}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[434px] right-[48px] bottom-[12px] left-[87px] transform text-center -translate-x-1/2 bg-white text-black w-[136px] h-[48px] px-4 py-2 shadow-md">
            WOMEN
          </div>
        </div>

        {/* Third and Fourth Images */}
        <div className="flex flex-col gap-4">
          {/* Third Image */}
          <div className="relative w-[239px] h-[242px]">
            <Image
              src="/images/filter3.png"
              alt="Third Image"
              width={239}
              height={242}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[176px] right-[40px] bottom-[12px] left-[77px] transform text-center -translate-x-1/2 bg-white text-black w-[120px] h-[48px] px-4 py-2 shadow-md">
              ACCESSORIES
            </div>
          </div>

          {/* Fourth Image */}
          <div className="relative w-[239px] h-[242px]">
            <Image
              src="/images/filter4.png"
              alt="Fourth Image"
              width={239}
              height={242}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[176px] right-[40px] bottom-[12px] left-[77px] transform text-center -translate-x-1/2 bg-white text-black w-[120px] h-[48px] px-4 py-2 shadow-md">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
