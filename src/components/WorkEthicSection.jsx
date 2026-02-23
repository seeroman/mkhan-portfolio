import workEthicImg from "../assets/home/work-ethic.jpg";

export default function WorkEthicSection() {
  return (
    <section className="bg-[#f4f4f4]">
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        {/* Label */}
        <p className="text-[18px] text-black/70">Work Ethic</p>

        {/* Heading */}
        <h2 className="mt-6 leading-[1.05]">
          <span className="block text-[48px] md:text-[54px] font-medium text-black/75">
            I’m known for product visuals
          </span>
          <span className="block text-[48px] md:text-[54px] font-light text-black/35">
            because I design with sales in mind.
          </span>
        </h2>

        {/* Card */}
        <div className="mt-14 bg-white rounded-[38px] shadow-[0_30px_90px_rgba(0,0,0,0.15)] p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-12 items-center">
            {/* Left image */}
            <div className="rounded-[26px] overflow-hidden bg-black/5">
              <img
                src={workEthicImg}
                alt=""
                className="w-full aspect-[1/1] object-center"
              />
            </div>

            {/* Right content */}
            <div className="relative">
              {/* right thin vertical line */}
              <div className="hidden lg:block absolute right-0 top-0 h-full w-px bg-black/25" />

              <div className="pr-0 lg:pr-10">
                <p className="text-[14px] tracking-[0.18em] uppercase text-black/35">
                  LISTING IMAGE
                </p>

                <h3 className="mt-4 text-[44px] md:text-[52px] font-medium text-black/80">
                  Gallery Image
                </h3>

                <div className="mt-6 h-px w-full bg-black/20" />

                <p className="mt-8 text-[18px] leading-[1.6] text-black/70 max-w-[560px]">
                  A curated collection of product visuals designed to highlight
                  features, communicate benefits, and guide viewers through the
                  product story. Each image is crafted with clarity,
                  consistency, and conversion in mind.
                </p>

                <button className="mt-10 inline-flex items-center justify-center px-10 h-[44px] rounded-xl border border-black/35 text-black/70 hover:border-black/60 transition-colors">
                  Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
