import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import soap from "../../assets/hero/soap.png";
import hairOil from "../../assets/hero/hair-oil.png";
import bathingPowder from "../../assets/hero/bathing-powder.png";
import podi from "../../assets/hero/podi.png";
import crafts from "../../assets/hero/crafts.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#5AA52D 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Blur Effects */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#5AA52D]/10 blur-3xl" />

      <div className="absolute bottom-10 left-10 h-60 w-60 rounded-full bg-[#5AA52D]/10 blur-3xl" />

     <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 md:pt-12 min-h-[90vh] flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            {/* Badge */}
            <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-green-100 text-[11px] md:text-xs text-[var(--primary)] font-medium shadow-sm"
>
  🌿 Since Generations

</motion.div>

            {/* Heading */}
            <motion.h1
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] leading-tight"
>
  Pure Traditions,
  <span className="block text-[var(--primary)]">
    <span className="text-[#cb1a0d]">Crafted</span> for Modern Living
  </span>
</motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xs md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Discover handcrafted herbal wellness products,
              stone-ground homemade podis, authentic masalas,
              and unique artisanal creations inspired by
              generations of traditional knowledge.
            </motion.p>

            {/* Heritage Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-sm text-[var(--primary)] font-medium italic"
            >
              Inspired by recipes and traditions passed down through generations.
            </motion.p>

          {/* Button */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.6 }}
  className="mt-8 flex justify-center md:justify-start"
>
  <motion.div
    whileHover={{
      scale: 1.05,
      y: -4,
    }}
    whileTap={{
      scale: 0.96,
    }}
    transition={{
      duration: 0.2,
    }}
  >
    <NavLink
      to="/products"
      className="bg-[#5AA52D] text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:bg-red-700 transition-colors duration-300"
    >
      Explore Collections →
    </NavLink>
  </motion.div>
</motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }} className="
  flex flex-wrap
  justify-center md:justify-start
  gap-3 md:gap-5
  mt-8
"
              
            >
              <span className="bg-white px-3 py-2 rounded-full text-[11px] md:text-xs shadow-sm">
                ✓ 100% Natural Ingredients
              </span>

              <span className="bg-white px-3 py-2 rounded-full text-[11px] md:text-xs shadow-sm">
                ✓ Traditional Handmade Products
              </span>

              <span className="bg-white px-3 py-2 rounded-full text-[11px] md:text-xs shadow-sm">
                ✓ Cash on Delivery Available
              </span>
            </motion.div>

          </div>

          {/* RIGHT IMAGES - Hidden on Mobile */}
          <div className="relative h-[550px] hidden md:block">

            {/* Center Soap */}
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              src={soap}
              alt="Soap"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 lg:w-80 h-72 lg:h-80 h-80 object-cover rounded-3xl shadow-2xl"
            />

            {/* Hair Oil */}
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              src={hairOil}
              alt="Hair Oil"
              className="absolute top-0 left-10 w-40 h-40 object-cover rounded-2xl shadow-lg"
            />

            {/* Bath Powder */}
            <motion.img
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              src={bathingPowder}
              alt="Bath Powder"
              className="absolute top-0 right-10 w-40 h-40 object-cover rounded-2xl shadow-lg"
            />

            {/* Podi */}
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
              }}
              src={podi}
              alt="Podi"
              className="absolute bottom-0 left-12 w-44 h-44 object-cover rounded-2xl shadow-lg"
            />

            {/* Crafts */}
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              src={crafts}
              alt="Crafts"
              className="absolute bottom-0 right-12 w-44 h-44 object-cover rounded-2xl shadow-lg"
            />

          </div>

        </div>
      </div>
    </section>
  );
}