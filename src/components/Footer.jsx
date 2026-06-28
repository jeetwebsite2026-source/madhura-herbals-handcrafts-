import { NavLink } from "react-router-dom";

import brandLogo from "../assets/logos/brand-logo.jpeg";
import brandName from "../assets/logos/brand-name.jpeg";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">

        {/* Brand */}
        <div className="flex justify-center items-center mb-8">
          <img
            src={brandLogo}
            alt="Madhura Logo"
            className="h-12 md:h-14 object-contain"
          />

          <img
            src={brandName}
            alt="Madhura"
            className="h-8 md:h-10 object-contain -ml-2"
          />
        </div>
{/* Main Footer */}
<div className="grid grid-cols-3 gap-4 md:gap-8 text-center md:text-left">

  {/* Left */}
  <div>
    <h4 className="text-xs md:text-sm font-semibold text-[var(--text)] mb-2 md:mb-3">
      Our Promise  
    </h4>

    <p className="text-[10px] md:text-sm text-[var(--text-light)]">
      Crafted with Nature Rooted in Tradition
    </p>

   
  </div>

  {/* Center */}
  <div>
    <h4 className="text-xs md:text-sm font-semibold text-[var(--text)] mb-2 md:mb-3">
      Quick Links
    </h4>

    <div className="flex flex-col gap-1 md:gap-2">
      <NavLink
        to="/"
        className="text-[10px] md:text-sm text-[var(--text-light)] hover:text-[var(--primary)] transition"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="text-[10px] md:text-sm text-[var(--text-light)] hover:text-[var(--primary)] transition"
      >
        About
      </NavLink>

      <NavLink
        to="/products"
        className="text-[10px] md:text-sm text-[var(--text-light)] hover:text-[var(--primary)] transition"
      >
        Products
      </NavLink>

      <NavLink
        to="/contact"
        className="text-[10px] md:text-sm text-[var(--text-light)] hover:text-[var(--primary)] transition"
      >
        Contact
      </NavLink>
    </div>
  </div>

  {/* Right */}
  <div>
    <h4 className="text-xs md:text-sm font-semibold text-[var(--text)] mb-2 md:mb-3">
      Collections
    </h4>

    <div className="flex flex-col gap-1 md:gap-2">
      <p className="text-[10px] md:text-sm text-[var(--text-light)]">
        🌿 Herbal Wellness
      </p>

      <p className="text-[10px] md:text-sm text-[var(--text-light)]">
        🫙 Traditional Masalas
      </p>

      <p className="text-[10px] md:text-sm text-[var(--text-light)]">
        🎨 Handmade Crafts
      </p>
    </div>
  </div>

</div>

        {/* Bottom */}
        <div className="border-t border-gray-100 mt-8 pt-4">
          <p className="text-center text-[10px] md:text-xs text-[var(--text-light)]">
            © 2026 Madhura. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}