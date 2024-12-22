import Image from "next/image";

export default function Clients() {
  return (
    <section className="py-24 w-full bg-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-cBlue font-bold text-[40px] leading-[50px] tracking-[0.2px] max-w-[496px]">
            Big Companies Are Here
          </h2>
          <p className="text-customGrey2 font-normal text-[14px] leading-[20px] tracking-[0.2px] max-w-[547px] pt-5">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Clients Logos Section */}
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 items-center justify-items-center gap-8 pt-16 px-32">
          <Image
            src="/images/Vector.png"
            alt="Client partner1"
            width={103}
            height={34}
          />
          <Image
            src="/images/col-md-1.png"
            alt="Client partner2"
            width={83}
            height={59}
          />
          <Image
            src="/images/col-md-2.png"
            alt="Client partner3"
            width={102}
            height={74.84}
          />
          <Image
            src="/images/col-md-3.png"
            alt="Client partner4"
            width={102.98}
            height={14.98}
          />
          <Image
            src="/images/col-md-4.png"
            alt="Client partner5"
            width={103.68}
            height={61.75}
          />
          <Image
            src="/images/col-md-5.png"
            alt="Client partner6"
            width={75.75}
            height={71.86}
          />
        </div>
      </div>
    </section>
  );
}
