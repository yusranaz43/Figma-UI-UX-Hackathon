import Image from "next/image";

export default function PricingFaqs() {
  return (
    <section className="w-full h-auto bg-white my-16">
      <div className="py-[45px]">
        {/* Pricing FAQs Heading */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-cBlue font-bold text-[40px] leading-[50px] tracking-[0.2px] w-[262px] text-center">
            Pricing FAQs
          </h2>
          <h4 className="text-customGrey2 font-normal text-[20px] leading-[30px] tracking-[0.2px] w-[552px] text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </h4>
        </div>

        {/* Pricing FAQs Questions */}
        <div className="flex flex-wrap justify-between px-[100px] gap-y-[40px] mt-28">
          
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex w-[437px] items-start gap-[15px]"
            >
              
              <Image src="/images/arrow.png" alt="Arrow" width={9} height={16} />

              {/* Question and Answer */}
              <div>
                <h5 className="text-cBlue font-bold text-[16px] leading-[24px] tracking-[0.1px]">
                  the quick fox jumps over the lazy dog
                </h5>
                <h6 className="text-customGrey2 font-normal text-[14px] leading-[20px] tracking-[0.2px]">
                  <span className="block">Met minim Mollie non desert Alamo est sit cliquey</span>
                  <span className="block">
                    dolor do met sent. RELIT official consequent door ENIM
                  </span>
                  <span className="block">
                    RELIT Mollie. Excitation venial consequent sent
                  </span>
                  <span className="block">nostrum met.</span>
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 flex flex-col items-center">
          <h4 className="text-customGrey2 font-normal text-[20px] leading-[30px] tracking-[0.2px] w-[552px] h-[30px] text-center">
            Haven’t got your answer? Contact our support
          </h4>
        </div>
      </div>
    </section>
  );
}
