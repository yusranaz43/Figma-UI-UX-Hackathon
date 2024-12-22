import Image from "next/image";
import Link from "next/link";

const featuredPosts = [
  {
    id: 1,
    image: "/images/featuredpost1.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 2,
    image: "/images/featuredpost2.png", 
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    id: 3,
    image: "/images/featuredpost3.png",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
];

export default function Blog() {
  return (
    <section className="w-full h-auto py-10 my-10 max-w-[1200px] mx-auto">
     
      <div className="text-center mb-10">
        <h6 className="pb-2 text-cSky font-bold text-[14px] leading-[24px] tracking-[0.2px]">
          Practice Advice
        </h6>
        <h2 className="text-cBlue font-bold text-[40px] leading-[50px] tracking-[0.2px] mb-3">
          Featured Posts
        </h2>
        <p className="text-customGrey2 font-normal text-[14px] leading-[20px] tracking-[0.2px] mx-auto max-w-[469px]">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mr-16 ml-16 max-w-[1200px] mt-16 ">
        {featuredPosts.map((post) => (
          <div
            key={post.id}
            className="relative w-[348px] h-auto bg-white shadow-md mx-auto">
        
            <div className="relative">
              <Image
                src={post.image}
                alt={`Featured Post ${post.id}`}
                width={348}
                height={300}
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-cRed text-white text-center rounded-[3px] px-3 py-1 text-[12px] font-bold shadow-sm">
                NEW
              </div>
            </div>

            
            <div className="p-5">
              <h5 className="mb-2 text-[12px] font-semibold">
                <span className="mr-3 text-cLightSky">Google</span>
                <span className="mr-5 text-customGrey2">Trending</span>
                <span className="text-customGrey2">New</span>
              </h5>
              <h4 className="text-cBlue font-bold text-[20px] leading-[30px] mb-2">
                {post.title}
              </h4>
              <p className="text-customGrey2 text-[14px] leading-[20px] mb-4">
                {post.description}
              </p>
              <div className="flex items-center text-customGrey2 text-[12px] my-4">
                <Image
                  src="/images/clock.png"
                  alt="clock-icon"
                  width={12.94}
                  height={13.14}
                  className="ml-0.1 mr-1.5"
                />
                <p className="mr-[114px]">{post.date}</p>

                <Image
                  src="/images/comment.png"
                  alt="comment-icon"
                  width={16}
                  height={14.67}
                  className="ml-1.5 mr-1.5"
                />
                <Link href="#">{post.comments}</Link>
              </div>

              <div className="flex items-center text-customGrey2 font-bold text-[14px] mt-5">
                Learn More
                <Image
                  src="/images/arrow.png"
                  alt="arrow-icon"
                  width={8}
                  height={14}
                  className="ml-1.5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
