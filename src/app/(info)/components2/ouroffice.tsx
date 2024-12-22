import Image from "next/image";
import Link from "next/link";

export default function OurOffice() {
  const cards = [
    {
      id: 1,
      bgColor: "bg-white",
      icon: "/images/phone.png",
    },
    {
      id: 2,
      bgColor: "bg-cBlue",
      icon: "/images/location.png",
    },
    {
      id: 3,
      bgColor: "bg-white",
      icon: "/images/mail.png",
    },
  ];

  return (
    <section className="w-full h-auto">
      <div>
        {/* Heading Section */}
        <div className="flex flex-col items-center mt-32">
          <h6 className="text-cBlue font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">
            VISIT OUR OFFICE
          </h6>
          <h2 className="text-cBlue font-bold text-[40px] leading-[50px] tracking-[0.2px] text-center max-w-[531px]">
            We help small businesses with big ideas
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-3 w-full max-w-[1000px] mx-auto mt-32 relative gap-0">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} ${
                card.id === 2
                  ? "h-[400px] -translate-y-6 z-10" 
                  : "h-[350px]"
              } px-8 py-10 flex flex-col items-center justify-center gap-4 shadow-lg`}
            >
              {/* Icon */}
              <Image
                src={card.icon}
                alt="icon"
                width={52}
                height={52}
                className=""
              />

              {/* Email Section */}
              <div className="w-full">
                <h6
                  className={`${
                    card.id === 2 ? "text-white" : "text-cBlue"
                  } font-bold text-[14px] leading-[24px] text-center`}
                >
                  georgia.young@example.com
                </h6>
                <h6
                  className={`${
                    card.id === 2 ? "text-white" : "text-cBlue"
                  } font-bold text-[14px] leading-[24px] text-center mt-1`}
                >
                  georgia.young@ple.com
                </h6>
              </div>

              {/* Support Heading */}
              <h5
                className={`${
                  card.id === 2 ? "text-white" : "text-cBlue"
                } font-bold text-[16px] leading-[24px] text-center`}
              >
                Get Support
              </h5>

              {/* Button */}
              <button className="text-cSky bg-transparent border-cSky border font-bold text-[14px] leading-[24px] w-[180px] h-[50px] rounded-[37px] px-6 py-2 shadow-md">
                <Link href="/">Submit Request</Link>
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-12 w-full h-[348px] ">
            <Image
            src="/images/Arrow2.png"
            alt="rotate arrow"
            width={75.56}
            height={21.84}
            className="top-[-6.1px] left-[696.29px] "/>

            <h5 className="text-cBlue font-bold text-[16px] leading-[24px] tracking-[0.1px] w-[239px] h-[24px] text-center mt-2">
              WE Cant WAIT TO MEET YOU
            </h5>
            <h2 className="text-cBlue font-bold text-[58px] leading-[80px] tracking-[0.2px] w-[272px] h-[80px] text-center mt-2">
              Let’s Talk
            </h2>

            <button className="text-white bg-cSky py-[15px] px-[40px] rounded-[5px] font-bold text-[14px] leading-[22px] tracking-[0.2px] w-[186px] h-[52px] text-center mt-3">
               <Link href="/">Try it free now</Link>
            </button>
      </div>
      </div>

    </section>
  );
}
