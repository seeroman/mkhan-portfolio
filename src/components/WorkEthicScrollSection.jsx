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
  const [p01, setP01] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = sectionRef.current;
      const track = trackRef.current;
      if (!el || !track) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const total = el.offsetHeight - vh;
      const scrolled = clamp(-rect.top, 0, total);
      const p = total > 0 ? scrolled / total : 0;

      setP01(p);

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

  const n = slides.length;
  const active = clamp(Math.floor(p01 * n), 0, n - 1);
  const activeFill = clamp(p01 * n - active, 0, 1);

  return (
    <section ref={sectionRef} className="bg-white text-black pb-40">
      <div className="h-[260vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* HEADER */}
          <div className="relative max-w-[1400px] mx-auto px-10 pt-20">
            <p className="text-black/60 text-[18px]">Work Ethic</p>

            <h2 className="mt-2 text-[48px] md:text-[64px] leading-[1.05] font-light">
              Designed for <span className="font-medium">progress</span>
            </h2>

            {/* progress */}
            <div className="mt-10 flex gap-4 max-w-[520px]">
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
                      style={{ width: `${width}%` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* CENTER DOTTED STAGE */}
          <div className="relative mt-10 h-[calc(100vh-220px)] flex items-center">
            <div className="absolute inset-0 flex justify-center">
              <div
                className="w-[85%] h-full rounded-[32px]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(0,0,0,0.10) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            {/* horizontal track */}
            <div
              ref={trackRef}
              className="absolute left-0 top-0 h-full flex will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {slides.map((s, i) => (
                <div key={i} className="w-screen h-full px-10">
                  <div className="max-w-[1400px] mx-auto h-full flex items-center">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-[680px_1fr] gap-16 items-center">
                      {/* IMAGE */}
                      {/* IMAGE (floating, no frame, no white edge) */}
                      <div className="relative -translate-y-6 rounded-[28px] overflow-hidden shadow-[rgba(0,0,0,0.18)]">
                        <img
                          src={s.img}
                          alt=""
                          className="block w-full aspect-[16/10] object-contain scale-[1.05]"
                        />
                      </div>

                      {/* TEXT */}
                      <div className="max-w-[560px]">
                        <p className="text-[14px] tracking-[0.18em] uppercase text-black/40">
                          {s.kicker}
                        </p>

                        <h3 className="mt-4 text-[28px] md:text-[40px] font-medium">
                          {s.title}
                        </h3>

                        <div className="mt-6 h-px bg-black/15" />

                        <p className="mt-8 text-[18px] leading-[1.7] text-black/70">
                          {s.text}
                        </p>

                        <div className="mt-8 space-y-5">
                          {s.bullets?.map((b, idx) => (
                            <div key={idx} className="flex gap-4">
                              <span className="mt-[8px] h-2 w-2 rounded-full bg-black/60" />
                              <p className="text-black/70">{b}</p>
                            </div>
                          ))}
                        </div>

                        <button className="mt-10 px-10 h-[46px] rounded-xl border border-black/30 hover:border-black/60">
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
