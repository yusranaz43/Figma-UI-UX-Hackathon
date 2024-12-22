import Image from "next/image";

export default function OurTeam() {
  const teamMembers = [
    {
      image: "/images/team-1.jpg",
      username: "Username",
      profession: "Profession",
    },
    {
      image: "/images/team-2.jpg",
      username: "Username",
      profession: "Profession",
    },
    {
      image: "/images/team-3.jpg",
      username: "Username",
      profession: "Profession",
    },
  ];

  return (
    <section className="w-full h-auto bg-white py-16">
      <div>
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-cBlue font-bold text-[40px] leading-[50px] tracking-[0.2px] w-[316px] h-[50px] text-center">
            Meet Our Team
          </h2>
          <p className="text-customGrey2 font-bold text-[14px] leading-[20px] tracking-[0.2px] w-[469px] h-[40px] text-center mt-2">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 py-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full max-w-[316px] h-[383px] bg-white shadow-md mx-auto"
            >
              <Image
                src={member.image}
                alt={`Image of ${member.username}`}
                width={316}
                height={231}
                className="w-full"
              />
              <div className="w-full h-[152px] py-7">
                <div className="px-4">
                  <h5 className="text-cBlue font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center">
                    {member.username}
                  </h5>
                  <h6 className="text-customGrey2 font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center pt-1.5">
                    {member.profession}
                  </h6>
                </div>
                <div className="flex pt-3.5 gap-4 items-center justify-center">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook icon"
                    width={22}
                    height={18}
                  />
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram icon"
                    width={22}
                    height={18}
                  />
                  <Image
                    src="/images/twitter.png"
                    alt="Twitter icon"
                    width={22}
                    height={18}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
