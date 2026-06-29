import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import herbalBg from "../../assets/hero/overlay-herbal1.png";
import craftsBg from "../../assets/hero/crafts.png";
import podisBg from "../../assets/hero/overlay-podis1.png";

const collections = [
  {
    title: "HERBAL WELLNESS",
    image: herbalBg,
    content:
      "Traditional herbal formulations crafted with natural ingredients including Goat Milk Soap, Nalangu Maavu Bathing Powder, Herbal Hair Oil, and Shikakai Cleanser.",
    button: "Explore Wellness",
  },
  {
    title: "HANDMADE CRAFTS",
    image: craftsBg,
    content:
      "Thoughtfully handcrafted creations including thread garlands, poojai crafts, art from waste, and unique decorative pieces made with creativity and care.",
    button: "View Crafts",
  },
  {
    title: "HOMEMADE SPICES",
    image: podisBg,
    content:
      "Authentic homemade masalas and traditional podis prepared using age-old methods, including stone-ground spice blends inspired by generations of heritage cooking.",
    button: "Shop Spices",
  },
];

export default function Collections() {
  return (
    <section
      id="collections"
      className="py-10 "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-green-100 text-[10px] md:text-xs text-[var(--primary)] font-medium shadow-sm">
  🌿 Our Collections
</div>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-6xl font-bold text-[var(--text)]">
            Explore Our <span className="text-[#cb1a0d]">  Collections</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-xs md:text-sm lg:text-base text-[var(--text-light)]">
            Thoughtfully crafted products inspired by tradition,
            nature, and creativity.
          </p>
        </motion.div>

        {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 lg:gap-14 mt-12 md:mt-14 max-w-6xl mx-auto">
          {collections.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
             whileHover={{
  y: -6,
  scale: 1.01
}}
         className={`
group relative overflow-hidden rounded-2xl md:rounded-3xl
border border-white/20 shadow-lg w-full
h-[200px] sm:h-[240px] md:h-[380px] lg:h-[420px] 
aspect-auto

${index === 2 ? "col-span-2 md:col-span-1 flex justify-center" : ""}
`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
absolute
inset-0
w-full
h-full
object-cover
object-center
transition-all
duration-700
group-hover:scale-105 
"
              />

              {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Content */}
             <div className="relative z-10 h-full flex flex-col justify-end p-3 md:p-8">

                <h3 className="text-white text-sm sm:text-base md:text-2xl lg:text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-2 md:mt-4 text-white/90 text-[9px] md:text-sm lg:text-base leading-relaxed">
                  {item.content}
                </p>

                 {/* CTA with RED dot */}
                  <NavLink
                    to="/products"
                    className="mt-5 md:mt-6 inline-flex items-center gap-2 w-fit bg-white text-[var(--primary)] px-4 md:px-5 py-2 md:py-3 rounded-full text-[10px] md:text-sm font-medium transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cb1a0d]"></span>
                    {item.button}
                  </NavLink>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}