import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full h-auto lg:h-[636px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 h-full">
          {/* Left Column */}
          <div className="col-span-3 bg-cDarkSky flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-12 lg:px-28 py-8 lg:py-0 h-full">
            <h5 className="text-white font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] w-auto lg:w-[128px] h-auto lg:h-[24px]">
              WORK WITH US
            </h5>
            <h2 className="text-white font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[40px] lg:leading-[50px] tracking-[0.2px] w-auto lg:w-[440px] h-auto lg:h-[50px] mt-2 lg:mt-4">
              Now Let’s grow Yours
            </h2>
            <p className="text-white font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] lg:leading-[24px] tracking-[0.2px] max-w-[300px] sm:max-w-[400px] lg:max-w-[440px] mt-2 lg:mt-4">
              The gradual accumulation of information about atomic and small-scale
              behavior during the first quarter of the 20th century.
            </p>
            <button className="mt-4 lg:mt-6 bg-transparent text-white border text-center font-bold px-4 py-2 text-[12px] sm:text-[14px] leading-[20px] sm:leading-[22px] tracking-[0.2px] w-[100px] sm:w-[120px] h-[40px] rounded-lg">
              Button
            </button>
          </div>

          {/* Right Column */}
          <div className="col-span-2 flex items-center justify-center h-full">
            <Image
              src="/images/abouthero2.png"
              alt="about section hero image"
              width={590}
              height={640}
              className="object-cover h-full w-full lg:w-[590px] lg:h-[640px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
