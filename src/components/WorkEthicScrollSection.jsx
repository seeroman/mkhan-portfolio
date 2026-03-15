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
    <section
      id="workethics"
      ref={sectionRef}
      className="bg-white text-black pb-40"
    >
      <div className="h-[260vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* HEADER */}
          <div className="relative mx-auto max-w-[1400px] px-6 pt-16 sm:px-8 lg:px-10 lg:pt-20">
            <p className="text-[16px] text-black/55 md:text-[18px]">
              Work Ethic
            </p>

            <h2 className="mt-2 text-[40px] font-light leading-[1.05] md:text-[56px] lg:text-[64px]">
              Designed for <span className="font-medium">progress</span>
            </h2>

            <div className="mt-8 flex max-w-[520px] gap-4 md:mt-10">
              {slides.map((_, i) => {
                const width =
                  i < active ? 100 : i === active ? activeFill * 100 : 0;

                return (
                  <div
                    key={i}
                    className="h-[4px] flex-1 overflow-hidden rounded-full bg-black/10"
                  >
                    <div
                      className="h-full rounded-full bg-black/80 transition-[width] duration-150"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* STAGE */}
          <div className="relative mt-8 flex h-[calc(100vh-210px)] items-center md:mt-10">
            {/* dotted background */}
            <div className="absolute inset-0 flex justify-center">
              <div
                className="h-full w-[88%] rounded-[36px]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            {/* soft ambient */}
            <div className="pointer-events-none absolute left-[8%] top-[10%] h-[240px] w-[240px] rounded-full bg-[#ff7a2f]/[0.05] blur-3xl" />
            <div className="pointer-events-none absolute right-[10%] bottom-[8%] h-[220px] w-[220px] rounded-full bg-black/[0.04] blur-3xl" />

            <div
              ref={trackRef}
              className="absolute left-0 top-0 flex h-full will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {slides.map((s, i) => (
                <div key={i} className="h-full w-screen px-6 sm:px-8 lg:px-10">
                  <div className="mx-auto flex h-full max-w-[1400px] items-center">
                    <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[680px_1fr] lg:gap-16">
                      {/* IMAGE */}
                      <div className="relative">
                        {/* premium back plate */}
                        <div className="absolute -left-6 -top-6 h-[88%] w-[92%] rounded-[40px] border border-black/5 bg-white/70 shadow-[0_30px_80px_rgba(0,0,0,0.06)]" />

                        {/* soft shape under image */}
                        <div className="pointer-events-none absolute -bottom-8 left-10 h-[120px] w-[300px]">
                          <div
                            className="absolute inset-0 bg-black/[0.07] blur-[42px]"
                            style={{
                              borderRadius: "62% 38% 55% 45% / 42% 58% 40% 60%",
                              transform: "rotate(-8deg)",
                            }}
                          />
                          <div
                            className="absolute left-10 top-5 h-[82px] w-[220px] border border-white/40 bg-white/55 backdrop-blur-md"
                            style={{
                              borderRadius:
                                "44px 60px 38px 62px / 42px 48px 58px 46px",
                              transform: "rotate(-7deg)",
                            }}
                          />
                        </div>

                        {/* main image card */}
                        <div className="relative -translate-y-4 overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-[0_35px_90px_rgba(0,0,0,0.14)]">
                          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/70" />
                          <img
                            src={s.img}
                            alt={s.title}
                            className="block w-full aspect-[16/10] object-cover"
                          />
                        </div>
                      </div>

                      {/* TEXT */}
                      <div className="relative max-w-[560px]">
                        {/* top luxury ambient blob */}
                        <div className="pointer-events-none absolute -left-20 -top-4 h-[340px] w-[380px]">
                          <div
                            className="absolute inset-0 bg-black/[0.05] blur-3xl"
                            style={{
                              borderRadius: "58% 42% 45% 55% / 44% 56% 48% 52%",
                              transform: "rotate(-14deg)",
                            }}
                          />
                          <div
                            className="absolute left-[16%] top-[12%] h-[74%] w-[72%] bg-[#ff7a2f]/[0.05] blur-2xl"
                            style={{
                              borderRadius: "44% 56% 63% 37% / 41% 39% 61% 59%",
                              transform: "rotate(18deg)",
                            }}
                          />
                        </div>

                        {/* curved stroke accent */}
                        <svg
                          className="pointer-events-none absolute -right-10 top-0 h-[240px] w-[240px] opacity-50"
                          viewBox="0 0 240 240"
                          fill="none"
                        >
                          <path
                            d="M30 170C55 120 108 94 165 108C195 116 213 139 216 172"
                            stroke="rgba(0,0,0,0.12)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M18 194C52 135 110 104 176 121"
                            stroke="rgba(255,122,47,0.16)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>

                        {/* premium shape under content */}
                        <div className="pointer-events-none absolute -left-2 -bottom-14 h-[170px] w-[390px]">
                          {/* deep shadow base */}
                          <div
                            className="absolute inset-0 bg-black/[0.08] blur-[45px]"
                            style={{
                              borderRadius: "62% 38% 58% 42% / 42% 58% 38% 62%",
                              transform: "rotate(-9deg)",
                            }}
                          />

                          {/* main soft plate */}
                          <div
                            className="absolute left-6 top-6 h-[120px] w-[300px] border border-white/50 bg-white/60 shadow-[0_24px_70px_rgba(0,0,0,0.08)] backdrop-blur-md"
                            style={{
                              borderRadius:
                                "38px 64px 42px 70px / 44px 52px 58px 46px",
                              transform: "rotate(-7deg)",
                            }}
                          />

                          {/* glossy highlight */}
                          <div
                            className="absolute left-12 top-10 h-[2px] w-[180px] bg-white/80 blur-[1px]"
                            style={{
                              borderRadius: "999px",
                              transform: "rotate(-7deg)",
                            }}
                          />

                          {/* tinted accent */}
                          <div
                            className="absolute left-[170px] top-[52px] h-[56px] w-[120px] border border-white/35 bg-[#ff7a2f]/[0.08] backdrop-blur-sm"
                            style={{
                              borderRadius: "46% 54% 63% 37% / 38% 42% 58% 62%",
                              transform: "rotate(14deg)",
                            }}
                          />
                        </div>

                        {/* far small accent */}
                        <div className="pointer-events-none absolute right-0 bottom-10 h-[140px] w-[140px] rounded-[40px] bg-black/[0.03] blur-2xl rotate-[18deg]" />

                        <div className="relative z-10">
                          <p className="text-[13px] uppercase tracking-[0.22em] text-black/40 md:text-[14px]">
                            {s.kicker}
                          </p>

                          <h3 className="mt-4 text-[28px] font-medium md:text-[40px]">
                            {s.title}
                          </h3>

                          <div className="mt-6 h-px bg-gradient-to-r from-black/20 via-black/10 to-transparent" />

                          <p className="mt-8 text-[17px] leading-[1.8] text-black/68 md:text-[18px]">
                            {s.text}
                          </p>

                          <div className="mt-8 space-y-5">
                            {s.bullets?.map((b, idx) => (
                              <div key={idx} className="flex gap-4">
                                <span className="mt-[9px] h-2.5 w-2.5 rounded-full bg-[#ff7a2f]/80 shadow-[0_0_0_4px_rgba(255,122,47,0.10)]" />
                                <p className="text-[16px] text-black/72">{b}</p>
                              </div>
                            ))}
                          </div>

                          <button className="mt-10 inline-flex h-[50px] items-center rounded-2xl border border-black/10 bg-white/80 px-10 text-[15px] font-medium text-black shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-[1px] hover:border-black/20 hover:shadow-[0_24px_55px_rgba(0,0,0,0.10)]">
                            Case Studies
                          </button>
                        </div>
                      </div>
                      {/* END TEXT */}
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
