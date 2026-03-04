import { useEffect, useMemo, useRef, useState } from "react";

import img1 from "../assets/home/work-ethic.jpg";
import img2 from "../assets/home/work-ethic2.jpg";
import img3 from "../assets/home/work-ethic3.jpg";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function WorkEthicHorizontalSticky() {
  const slides = useMemo(
    () => [
      {
        kicker: "LISTING IMAGE",
        title: "Gallery Image",
        text: "A curated collection of product visuals designed to highlight features, communicate benefits, and guide viewers through the product story.",
        img: img1,
        bullets: [
          "Build listing visuals that improve CTR",
          "Consistent lighting, angle, and framing",
        ],
      },
      {
        kicker: "A+ CONTENT",
        title: "Enhanced Visual Content",
        text: "Modular A+ visuals for product storytelling—benefits, comparisons, and feature callouts.",
        img: img2,
        bullets: [
          "A+ layouts for Amazon/Shopify",
          "Icon system + typography hierarchy",
        ],
      },
      {
        kicker: "BRAND GRAPHIC",
        title: "Marketing Visuals",
        text: "Marketing creatives designed for campaigns: ads, banners, social, and landing visuals.",
        img: img3,
        bullets: [
          "Conversion-focused creative sets",
          "Brand-consistent graphic language",
        ],
      },
    ],
    [],
  );

  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // progress across the section: 0..1
  const [p01, setP01] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = sectionRef.current;
      const track = trackRef.current;
      if (!el || !track) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Scrollable distance of this section
      const total = el.offsetHeight - vh;
      const scrolled = clamp(-rect.top, 0, total);
      const p = total > 0 ? scrolled / total : 0;

      setP01(p);

      // Total horizontal distance to travel: (track width - viewport width)
      const maxX = track.scrollWidth - window.innerWidth;
      const x = -maxX * p;

      track.style.transform = `translate3d(${x}px,0,0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // active index for progress bars
  const n = slides.length;
  const active = clamp(Math.floor(p01 * n), 0, n - 1);
  const activeFill = clamp(p01 * n - active, 0, 1);

  return (
    <section ref={sectionRef} className="bg-white text-black pb-16">
      {/* Give vertical scroll length = enough to move all horizontal panels */}
      {/* tweak this: more panels => bigger vh */}
      <div className="h-[260vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* subtle dotted background */}
          <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                backgroundPosition: "0 0",
              }}
            />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-10 pt-20">
            <p className="text-black/60 text-[18px]">Work Ethic</p>

            <div className="mt-2 flex items-end justify-between gap-10">
              <h2 className="text-[48px] md:text-[64px] leading-[1.05] font-light text-black">
                Designed for <span className="font-medium">progress</span>
              </h2>
            </div>

            {/* top progress bars */}
            <div className="mt-8 flex gap-4 max-w-[520px]">
              {slides.map((_, i) => {
                const width =
                  i < active ? 100 : i === active ? activeFill * 100 : 0;
                return (
                  <div
                    key={i}
                    className="h-[4px] flex-1 rounded-full bg-black/15 overflow-hidden"
                  >
                    <div
                      className="h-full bg-black/80"
                      style={{
                        width: `${width}%`,
                        transition: "width 80ms linear",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Horizontal track */}
          <div className="relative mt-2 h-[calc(100vh-220px)]">
            <div
              ref={trackRef}
              className="absolute left-0 top-0 h-full flex will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {slides.map((s, i) => (
                <div key={i} className="w-screen h-full px-10">
                  <div className="max-w-[1400px] mx-auto h-full flex items-center">
                    {/* Panel layout */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-[680px_1fr] gap-16 items-center">
                      {/* Image */}
                      <div className="rounded-[22px] overflow-hidden bg-black/[0.03] border border-black/10">
                        <img
                          src={s.img}
                          alt=""
                          className="w-full aspect-[16/11] object-cover"
                        />
                      </div>

                      {/* Text */}
                      <div className="max-w-[560px]">
                        <p className="text-[14px] tracking-[0.18em] uppercase text-black/40">
                          {s.kicker}
                        </p>

                        <h3 className="mt-4 text-[28px] md:text-[40px] font-medium text-black">
                          {s.title}
                        </h3>

                        <div className="mt-6 h-px w-full bg-black/15" />

                        <p className="mt-8 text-[18px] leading-[1.7] text-black/70">
                          {s.text}
                        </p>

                        <div className="mt-8 space-y-5">
                          {s.bullets?.map((b, idx) => (
                            <div key={idx} className="flex gap-4">
                              <span className="mt-[8px] h-2 w-2 rounded-full bg-black/60" />
                              <p className="text-black/70 leading-[1.7]">{b}</p>
                            </div>
                          ))}
                        </div>

                        <button className="mt-10 inline-flex items-center justify-center px-10 h-[46px] rounded-xl border border-black/30 text-black/80 hover:border-black/60 transition-colors">
                          Case Studies
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
