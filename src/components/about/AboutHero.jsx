import { motion } from "framer-motion";
import aboutHero from "../../assets/about/abouthero.png";

export default function AboutHero() {
  return (
    <section className="bg-[#eaeee8] py-10 md:py-12">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT IMAGE (HIDDEN ON MOBILE + PREMIUM BLEND) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden md:block"
          >

            {/* soft glow background */}
            <div className="absolute -inset-4 bg-green-200/20 blur-3xl rounded-full" />

            {/* image wrapper for blending */}
            <div className="relative overflow-hidden rounded-3xl">

              <img
                src={aboutHero}
                alt="Madhura Story"
                className="
                  w-full
                  h-[450px]
                  lg:h-[520px]
                  object-cover
                  scale-105
                  opacity-95
                  mix-blend-multiply
                "
              />

              {/* top fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#eaeee8]/30 via-transparent to-[#eaeee8]/20" />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-green-100 text-[10px] md:text-xs text-[var(--primary)] font-medium shadow-sm">
              🌿 Our Story
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] leading-tight">
              Rooted in Tradition,
              <span className="block">
                <span className="text-[#cb1a0d]">Crafted</span> with Care
              </span>
            </h2>

            {/* Content */}
            <p className="mt-6 text-xs md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
              At Madhura, we believe the best products come from nature, tradition,
              and mindful craftsmanship. Our journey began with a simple mission 
              to bring authentic herbal wellness products, handmade creations, and
              traditional homemade spices into modern homes without compromising purity or quality.
            </p>

            <p className="mt-4 text-xs md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
              Every product we create reflects generations of knowledge, carefully
              selected ingredients, and a deep respect for traditional methods.
              From herbal care to handcrafted decor and aromatic spice blends,
              everything is made with patience and love.
            </p>

            {/* Trust Pills */}
            <div className="mt-6 flex flex-wrap gap-3">

              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-[10px] md:text-xs">
                ✓ Small Batch Production
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-[10px] md:text-xs">
                ✓ Traditional Recipes
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-[10px] md:text-xs">
                ✓ Handmade with Care
              </span>

              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-[10px] md:text-xs">
                ✓ Natural Ingredients
              </span>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}