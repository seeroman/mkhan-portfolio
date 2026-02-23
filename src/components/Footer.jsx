import { Link } from "react-router-dom";
import logo from "../assets/logo/MKD Logo-02.png"; // change if needed

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b0b] overflow-hidden">
      {/* subtle vignette like other dark sections */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06)_0%,rgba(11,11,11,0.92)_60%,rgba(11,11,11,1)_100%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-4">
          {/* Left brand */}
          <div>
            <img
              src={logo}
              alt="MKD"
              className="w-[120px] md:w-[180px] h-auto select-none"
              draggable="false"
            />
            {/* <div className="mt-6 text-white text-[54px] md:text-[64px] font-light">
              mkdesigner
            </div> */}
          </div>

          {/* Right columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
            {/* WEBSITE */}
            <div>
              <div className="text-white text-[20px] tracking-wide uppercase">
                WEBSITE
              </div>
              <div className="mt-8 space-y-3 text-[18px]">
                <Link className="block text-white/90 hover:text-white" to="/">
                  Home
                </Link>
                <Link
                  className="block text-white/55 hover:text-white/90"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="block text-white/55 hover:text-white/90"
                  to="/work"
                >
                  Work
                </Link>
                <Link
                  className="block text-white/55 hover:text-white/90"
                  to="/service"
                >
                  Service
                </Link>
                <Link
                  className="block text-white/55 hover:text-white/90"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* LEGAL */}
            <div>
              <div className="text-white text-[20px] tracking-wide uppercase">
                LEGAL
              </div>
              <div className="mt-8 space-y-3 text-[18px]">
                <a className="block text-white/55 hover:text-white/90" href="#">
                  Terms &amp; Conditions
                </a>
                <a className="block text-white/55 hover:text-white/90" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <div className="text-white text-[20px] tracking-wide uppercase">
                SOCIAL
              </div>
              <div className="mt-8 space-y-3 text-[18px]">
                <a className="block text-white/55 hover:text-white/90" href="#">
                  Behance
                </a>
                <a className="block text-white/55 hover:text-white/90" href="#">
                  Facebook
                </a>
                <a className="block text-white/55 hover:text-white/90" href="#">
                  Instagram
                </a>
                <a className="block text-white/55 hover:text-white/90" href="#">
                  Youtube
                </a>
                <a className="block text-white/55 hover:text-white/90" href="#">
                  X
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <div className="text-white text-[20px] tracking-wide uppercase">
                CONTACT
              </div>
              <div className="mt-8 space-y-3 text-[18px]">
                <div className="text-white/55">contact@itsmkdcom</div>
                <div className="text-white/55">Dhaka, Bangladesh</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 text-center text-white/45 text-[16px]">
          © Mkdesigner. All rights reserved
        </div>
      </div>
    </footer>
  );
}
