import { motion } from "framer-motion";

import t1 from "../assets/home/testimonials/t1.jpg";
import t2 from "../assets/home/testimonials/t2.jpg";
import t3 from "../assets/home/testimonials/t3.jpg";
import t4 from "../assets/home/testimonials/t4.jpg"; // selected (Sarah)
import t5 from "../assets/home/testimonials/t5.jpg";
import t6 from "../assets/home/testimonials/t6.jpg";
import t7 from "../assets/home/testimonials/t7.jpg";

import b1 from "../assets/home/brands/gadgetbd.png";
import b2 from "../assets/home/brands/adov.png";
import b3 from "../assets/home/brands/aunek.png";
import b4 from "../assets/home/brands/romix.png";

const avatars = [
  { src: t1, size: 64, x: -420, y: 30 },
  { src: t2, size: 82, x: -260, y: 90 },
  { src: t3, size: 70, x: -120, y: 10 },
  { src: t4, size: 96, x: 0, y: 60, selected: true },
  { src: t5, size: 70, x: 160, y: 10 },
  { src: t6, size: 74, x: 290, y: 95 },
  { src: t7, size: 70, x: 430, y: 35 },
];

export default function TestimonialBrandsSection() {
  return (
    <section className="relative bg-[#0b0b0b] overflow-hidden">
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07)_0%,rgba(11,11,11,0.92)_60%,rgba(11,11,11,1)_100%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-10 pt-16 pb-10">
        {/* Label */}
        <p className="text-white/50 text-[16px]">Testimonial</p>

        {/* Headings */}
        <h2 className="mt-6 text-white font-medium leading-[1.05] text-[48px] md:text-[54px]">
          Good design speaks for itself.
        </h2>

        <div className="mt-2 select-none pointer-events-none text-[48px] md:text-[54px] leading-[1.05] font-light text-white/[0.12]">
          Here’s what clients say about working with
          <br />
          me.
        </div>

        {/* Avatar orbit */}
        <div className="relative mt-10 h-[230px]">
          <div className="absolute inset-0">
            {avatars.map((a, idx) => (
              <motion.div
                key={idx}
                className="absolute"
                style={{
                  left: `calc(50% + ${a.x}px)`,
                  top: `${a.y}px`,
                }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, delay: 0.05 * idx }}
              >
                <div
                  className={[
                    "rounded-full overflow-hidden bg-white/10 -translate-x-1/2 -translate-y-1/2",
                    a.selected
                      ? "ring-2 ring-[#ff7a2f] ring-offset-4 ring-offset-[#0b0b0b]"
                      : "",
                  ].join(" ")}
                  style={{ width: a.size, height: a.size }}
                >
                  <img
                    src={a.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}

            {/* Selected name */}
            <div className="absolute left-1/2 top-[120px] -translate-x-1/2 text-center">
              <div className="text-white/90 font-medium">Sarah L.</div>
              <div className="text-white/45 text-sm mt-1">
                Amazon Seller—USA
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <p className="mt-2 text-center text-white/85 text-[18px] leading-[1.55] max-w-[520px] mx-auto">
          Mofijul is an exceptional designer! His Amazon product images
          completely transformed my listings — sales increased and customers
          loved the clean, modern look.
        </p>

        {/* Brands */}
        <div className="mt-20">
          <p className="text-white/40 text-[16px]">Brands</p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 items-center gap-10">
            <img src={b1} alt="Gadgetbd" className="h-14 w-auto opacity-95" />
            <img src={b2} alt="ADOV" className="h-12 w-auto opacity-95" />
            <img src={b3} alt="AUNEK" className="h-12 w-auto opacity-95" />
            <img src={b4} alt="ROMIX" className="h-12 w-auto opacity-95" />
          </div>
        </div>
      </div>
    </section>
  );
}
