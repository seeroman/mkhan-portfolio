import { useEffect, useMemo, useRef, useState } from "react";

import img1 from "../assets/home/work-ethic.jpg";
import img2 from "../assets/home/work-ethic2.jpg";
import img3 from "../assets/home/work-ethic3.jpg";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function WorkEthicScrollSection() {
  // ✅ 3 slides (duplicate content for now)
  const slides = useMemo(
    () => [
      {
        kicker: "LISTING IMAGE",
        title: "Gallery Image",
        text: "A curated collection of product visuals designed to highlight features, communicate benefits, and guide viewers through the product story. Each image is crafted with clarity, consistency, and conversion in mind.",
        img: img1,
      },
      {
        kicker: "A+ CONTENT",
        title: "Enhanced Visual Content",
        text: "A curated collection of product visuals designed to highlight features, communicate benefits, and guide viewers through the product story. Each image is crafted with clarity, consistency, and conversion in mind.",
        img: img2,
      },
      {
        kicker: "BRAND GRAPHIC",
        title: "Marketing Visuals",
        text: "A curated collection of product visuals designed to highlight features, communicate benefits, and guide viewers through the product story. Each image is crafted with clarity, consistency, and conversion in mind.",
        img: img3,
      },
    ],
    [],
  );

  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress 0..1 while the section scrolls through viewport
      const total = el.offsetHeight - vh;
      const scrolled = clamp(-rect.top, 0, total);
      const progress = total > 0 ? scrolled / total : 0;

      // map progress to slide index
      const idx = clamp(
        Math.floor(progress * slides.length),
        0,
        slides.length - 1,
      );
      setActive(idx);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slides.length]);

  const s = slides[active];

  return (
    <section ref={sectionRef} className="bg-[#f4f4f4]">
      {/* This height controls how long it stays pinned (Apple-like) */}
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
      </div>

      {/* Pinned stage: give the whole section more scroll length */}
      <div className="relative max-w-[1400px] mx-auto px-10 pb-28">
        {/* Make the scroll area tall so you get 3 "slides" while pinned */}
        <div className="h-[180vh]">
          {/* Sticky card */}
          <div className="sticky top-24">
            <div className="bg-white rounded-[38px] shadow-[0_30px_90px_rgba(0,0,0,0.15)] p-10 md:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-[640px_1fr] gap-12 items-center">
                {/* Left image (switches with slide) */}
                <div className="rounded-[26px] overflow-hidden bg-black/5">
                  <img
                    src={s.img}
                    alt=""
                    className="w-full aspect-[1/1] object-center"
                  />
                </div>

                {/* Right content (switches with slide) */}
                <div className="relative">
                  <div className="hidden lg:block absolute right-0 top-0 h-full w-px bg-black/25" />

                  <div className="pr-0 lg:pr-10">
                    <p className="text-[14px] tracking-[0.18em] uppercase text-black/35">
                      {s.kicker}
                    </p>

                    <h3 className="mt-4 text-[28px] md:text-[38px] font-medium text-black/80">
                      {s.title}
                    </h3>

                    <div className="mt-6 h-px w-full bg-black/20" />

                    <p className="mt-8 text-[18px] leading-[1.6] text-black/70 max-w-[560px]">
                      {s.text}
                    </p>

                    <button className="mt-10 inline-flex items-center justify-center px-10 h-[44px] rounded-xl border border-black/35 text-black/70 hover:border-black/60 transition-colors">
                      Case Studies
                    </button>

                    {/* slide indicators (like subtle Apple progress) */}
                    <div className="mt-10 flex gap-2">
                      {slides.map((_, i) => (
                        <div
                          key={i}
                          className={[
                            "h-[3px] w-10 rounded-full transition-opacity",
                            i === active
                              ? "bg-black/60 opacity-100"
                              : "bg-black/20 opacity-60",
                          ].join(" ")}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional: fade hint */}
            <div className="mt-6 text-center text-black/40 text-sm">
              Scroll to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
