import { Link } from "react-router-dom";
import logo from "../assets/logo/MKD Logo-02.png";

const nav = [
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
  { label: "Ethics", to: "#workethics" },
  { label: "Testimonial", to: "#testimonial" },
  { label: "Process", to: "#workprocess" },
  { label: "FAQS", to: "#faqs" },
  { label: "Contact", to: "#contact" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MKD Designer"
            className="h-10 w-auto select-none"
            draggable="false"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {nav.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className="text-[15px] font-medium text-white/85 hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
