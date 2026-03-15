import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import t1 from "../assets/home/testimonials/t1.jpg";
import t2 from "../assets/home/testimonials/t2.jpg";
import t3 from "../assets/home/testimonials/t3.jpg";
import t4 from "../assets/home/testimonials/t4.jpg";
import t5 from "../assets/home/testimonials/t5.jpg";
import t6 from "../assets/home/testimonials/t6.jpg";
import t7 from "../assets/home/testimonials/t7.jpg";

import b1 from "../assets/home/brands/gadgetbd.png";
import b2 from "../assets/home/brands/adov.png";
import b3 from "../assets/home/brands/aunek.png";
import b4 from "../assets/home/brands/romix.png";
import b5 from "../assets/home/brands/kuyia.png";
import b6 from "../assets/home/brands/styleteck.png";

const testimonials = [
  {
    src: t1,
    size: 64,
    x: -420,
    y: 30,
    name: "Emma T.",
    role: "Amazon Seller—UK",
    quote:
      "Working with Mofijul made our product visuals much stronger. The images looked premium, clear, and helped us present our brand much better.",
  },
  {
    src: t2,
    size: 82,
    x: -260,
    y: 90,
    name: "David R.",
    role: "E-commerce Brand—Canada",
    quote:
      "He understands how to design visuals that are not only beautiful but also conversion-focused. The final result felt polished and professional.",
  },
  {
    src: t3,
    size: 70,
    x: -120,
    y: 10,
    name: "Aisha M.",
    role: "Shop Owner—Germany",
    quote:
      "Very smooth communication and strong attention to detail. The product listing images were clean, modern, and exactly what we needed.",
  },
  {
    src: t4,
    size: 96,
    x: 0,
    y: 60,
    name: "Sarah L.",
    role: "Amazon Seller—USA",
    quote:
      "Mofijul is an exceptional designer! His Amazon product images completely transformed my listings — sales increased and customers loved the clean, modern look.",
  },
  {
    src: t5,
    size: 70,
    x: 160,
    y: 10,
    name: "Michael K.",
    role: "Startup Founder—UAE",
    quote:
      "The designs instantly made our products feel more trustworthy. He has a great eye for layout, hierarchy, and strong product storytelling.",
  },
  {
    src: t6,
    size: 74,
    x: 290,
    y: 95,
    name: "Nina S.",
    role: "Private Label Brand—Australia",
    quote:
      "I was impressed by how strategic the designs were. It was not just decoration — every visual felt purposeful and built for better customer response.",
  },
  {
    src: t7,
    size: 70,
    x: 430,
    y: 35,
    name: "Daniel P.",
    role: "Online Store Owner—Sweden",
    quote:
      "Fast, creative, and reliable. The final visuals gave our listings a more premium look and helped communicate the product benefits much more clearly.",
  },
];

const brands = [
  { src: b1, alt: "Gadgetbd" },
  { src: b2, alt: "ADOV" },
  { src: b3, alt: "AUNEK" },
  { src: b4, alt: "ROMIX" },
  { src: b5, alt: "Kuyia" },
  { src: b6, alt: "Styleteck" },
];

export default function TestimonialBrandsSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonial" className="relative bg-black overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-12">
        <p className="text-white/50 text-[16px]">Testimonial</p>

        <h2 className="mt-6 text-white font-medium leading-[1.05] text-[42px] md:text-[54px]">
          Good design speaks for itself.
        </h2>

        <div className="mt-2 select-none pointer-events-none text-[42px] md:text-[54px] leading-[1.05] font-light text-white/[0.12]">
          Here’s what clients say about working with
          <br />
          me.
        </div>

        <div
          className="relative mt-10 h-[320px] md:h-[300px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0">
            {testimonials.map((a, idx) => {
              const isActive = idx === activeIndex;

              return (
                <motion.div
                  key={idx}
                  className="absolute cursor-pointer"
                  style={{
                    left: `calc(50% + ${a.x}px)`,
                    top: `${a.y}px`,
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.6, delay: 0.05 * idx }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.08 : 1,
                      opacity: isActive ? 1 : 0.75,
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                  >
                    <div
                      className={[
                        "rounded-full overflow-hidden bg-white/10 transition-all duration-300",
                        isActive
                          ? "ring-2 ring-[#ff7a2f] ring-offset-4 ring-offset-black shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_40px_rgba(0,0,0,0.4)]"
                          : "",
                      ].join(" ")}
                      style={{ width: a.size, height: a.size }}
                    >
                      <img
                        src={a.src}
                        alt={a.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {isActive && (
                      <motion.div
                        key={`meta-${idx}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-3 text-center whitespace-nowrap"
                      >
                        <div className="text-white text-sm font-medium">
                          {a.name}
                        </div>
                        <div className="text-white/45 text-xs mt-0.5">
                          {a.role}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <motion.div
            key={`quote-card-${activeIndex}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-[760px] rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm px-6 md:px-10 py-7 md:py-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-start gap-4">
              <div className="text-white/20 text-[42px] leading-none font-serif">
                “
              </div>

              <div className="flex-1">
                <p className="text-center text-white/88 text-[18px] md:text-[20px] leading-[1.7]">
                  {active.quote}
                </p>

                <div className="mt-5 flex items-center justify-center gap-3">
                  {/* <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-white/10">
                    <img
                      src={active.src}
                      alt={active.name}
                      className="w-full h-full object-cover"
                    />
                  </div> */}

                  <div className="text-center">
                    {/* <div className="text-white/90 text-sm font-medium">
                      {active.name}
                    </div> */}
                    {/* <div className="text-white/45 text-xs">{active.role}</div> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <p className="text-white/40 text-[16px]">Brands</p>

          <div className="mt-10 overflow-hidden">
            <div className="brand-marquee-track flex gap-16 items-center">
              {[...brands, ...brands].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center min-w-[180px]"
                >
                  <img
                    src={b.src}
                    alt={b.alt}
                    className="h-12 w-auto opacity-95"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
