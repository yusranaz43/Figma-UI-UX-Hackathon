import Image from "next/image";

const cardsData = [
  { src: "/images/cover1.jpg", title: "CLOTHS", items: "5 Items" },
  { src: "/images/cover2.jpg", title: "CLOTHS", items: "5 Items" },
  { src: "/images/cover3.jpg", title: "CLOTHS", items: "5 Items" },
  { src: "/images/cover4.jpg", title: "CLOTHS", items: "5 Items" },
  { src: "/images/cover5.jpg", title: "CLOTHS", items: "5 Items" },
];

export default function Cards() {
  return (
    <section className="w-full flex flex-wrap justify-center gap-3 mt-8">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="relative w-full sm:w-[200px] h-auto sm:h-[216px] overflow-hidden"
        >
          <div className="relative w-full h-full">
            <Image
              src={card.src}
              alt={card.title}
              layout="responsive"
              width={200}
              height={216}
              objectFit="contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h6 className="text-white font-bold text-[16px] leading-[24px] tracking-[0.1px]">
              {card.title}
            </h6>
            <h6 className="text-white font-normal text-[14px] leading-[20px] tracking-[0.2px] mt-1">
              {card.items}
            </h6>
          </div>
        </div>
      ))}
    </section>
  );
}
