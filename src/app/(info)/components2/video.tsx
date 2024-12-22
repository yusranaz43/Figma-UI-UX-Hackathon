import Image from "next/image";

export default function Video() {
  return (
    <section className="w-full py-14 md:py-20 lg:py-28 px-4 md:px-10 lg:px-36 bg-white">
      <div className="relative flex justify-center">
        {/* Play button */}
        <div className="absolute bg-cSky rounded-full w-14 h-14 md:w-[72px] md:h-[72px] lg:w-[92.6px] lg:h-[92.6px] flex items-center justify-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
          <Image
            src="/images/playicon.png"
            alt="play button icon"
            width={19}
            height={22}
          />
        </div>

        {/* Video image */}
        <Image
          src="/images/videoimage.png"
          alt="video image"
          width={989}
          height={540}
          className="w-full max-w-[340px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[989px] rounded-[20px]"
        />
      </div>
    </section>
  );
}
