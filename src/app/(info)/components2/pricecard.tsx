"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PriceCard() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const cards = [
    {
      id: 1,
      bgColor: "bg-white",
      heading: "FREE",
      price: isYearly ? "0 $" : "0 $",
      description: ["Organize across all", "apps by hand"],
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support",
      ],
    },
    {
      id: 2,
      bgColor: "bg-cBlue",
      heading: "STANDARD",
      price: isYearly ? "99.99 $" : "9.99 $",
      description: ["Organize across all", "apps by hand"],
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support",
      ],
    },
    {
      id: 3,
      bgColor: "bg-white",
      heading: "PREMIUM",
      price: isYearly ? "199.99 $" : "19.99 $",
      description: ["Organize across all", "apps by hand"],
      features: [
        "Unlimited product updates",
        "Unlimited product updates",
        "Unlimited product updates",
        "1GB Cloud storage",
        "Email and community support",
      ],
    },
  ];

  return (
    <section className="w-full h-auto">
      <div>
        {/* Heading Section */}
        <div className="w-full h-[145px] flex flex-col items-center mt-16">
           <h5 className="text-customGrey2 font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center w-[71px] h-[24px]">
             PRICING
           </h5>

           <h2 className="text-cBlue font-bold text-[58px] leading-[80px] tracking-[0.2px] text-center w-[427px] h-[80px]">
             Simple Pricing
           </h2>

           {/* Breadcrumb Section */}
          <div className="flex space-x-2 text-sm font-medium text-customGrey2 mt-7">
            <Link href="/" className="hover:text-customGrey2 text-cBlue font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center w-[43px] h-[24px]">
              Home
            </Link>
            <Image
             src="/images/arrowicon.png"
             alt="Arrow Icon"
             width={9}
             height={16}
            />
            <span className="text-customGrey2 font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center w-[52px] h-[24px]">Pricing</span>
          </div>
        </div>

        {/* Heading Section */}
        <div className="flex flex-col items-center mt-32">
          <h2 className="text-cBlue font-bold text-[40px] leading-[50px] tracking-[0.2px] text-center max-w-[531px]">
            Pricing
          </h2>
          <p className="text-customGrey2 font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center w-[469px] h-[40px] mt-5">
            Problems trying to resolve the conflict between <br/> the two major realms
            of Classical physics: Newtonian mechanics.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center space-x-4 mt-10">
            <span className="text-cBlue font-bold text-[14px]">Monthly</span>
            <div
              className={`w-[52px] h-[25px] top[1px] left[80px] flex items-center bg-white border border-cSky rounded-[16px] p-1 cursor-pointer ${
                isYearly ? "bg-cSky" : ""
              }`}
              onClick={handleToggle}
            >
              <div
                className={`bg-gray-300 w-[19px] h-[19px] border border-gray-500 rounded-full shadow-md transform transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span className="text-cBlue font-bold text-[14px]">Yearly</span>
            <button className="bg-cLSky text-cSky text-[12px] font-bold py-1 px-2 rounded-full w-[109px] h-[44px]">
              Save 25%
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-3 w-full max-w-[1000px] mx-auto mt-28 relative gap-0">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} ${
                card.id === 2
                  ? "h-[615px] -translate-y-8 z-10 pt-[69px]"
                  : "h-[550px]"
              } px-8 py-10 flex flex-col items-center justify-start gap-6 shadow-lg border border-cSky`}
            >
              {/* Heading */}
              <h3
                className={`${
                  card.id === 2 ? "text-white" : "text-cBlue"
                } font-bold text-[20px] leading-[30px] text-center`}
              >
                {card.heading}
              </h3>

              {/* Description */}
              <p
                className={`${
                  card.id === 2 ? "text-white" : "text-cBlue"
                } text-[14px] leading-[20px] text-center`}
              >
                {card.description[0]} <br /> {card.description[1]}
              </p>

              {/* Price */}
              <p className="text-cSky font-bold text-[32px] leading-[40px] text-center">
                {card.price}{" "}
                <span className="text-[14px]">
                  {isYearly ? "Per Year" : "Per Month"}
                </span>
              </p>

              {/* Features */}
              <ul className="text-center space-y-4">
                {card.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-start gap-4 font-normal text-[14px] leading-[20px] ${
                      card.id === 2 ? "text-white" : "text-cBlue"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 flex items-center justify-center rounded-full ${
                        index >= 3 ? "bg-gray-400" : "bg-green-500"
                      }`}
                    >
                      <span className="text-white">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`bg-cSky text-white font-bold text-[14px] leading-[24px] w-[180px] h-[50px] rounded-[5px] mt-4`}
              >
                <Link href="/">Try for free</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
