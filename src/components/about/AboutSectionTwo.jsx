import { motion } from "framer-motion";
import { Leaf, Palette, Flame } from "lucide-react";

export default function AboutSectionTwo() {
  return (
    <section className="bg-[#eaeee8] md:py-10 ">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading (NO DIVIDER ABOVE) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[var(--text)]">
            Three Traditions,
            <span className="text-[#cb1a0d] block">One Purpose</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="relative mt-10 md:mt-15">

          {/* 🌿 Vertical Divider Lines*/}
          <div className=" md:block absolute inset-0">
            <div className="absolute left-1/3 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#5AA52D]/40 to-transparent" />
            <div className="absolute left-2/3 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#5AA52D]/40 to-transparent" />
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-10 relative">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center px-2 md:px-4"
            >
              <Leaf className="mx-auto text-[var(--primary)]" size={30}  />

              <h3 className="mt-4 text-sm md:text-2xl lg:text-3xl font-bold text-[var(--text)]">
                Herbal Wellness
              </h3>

              <p className="mt-4 text-[10px] md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
                Traditional self-care essentials crafted with natural herbs,
                rich botanicals, and time-tested recipes.
              </p>

              <div className="mt-2 md:mt-5 space-y-2 text-[10px] md:text-sm text-[var(--text-light)]">
                <p>• Goat Milk & Nalangu Maavu Soap</p>
                <p>• Herbal Hair Oil</p>
                <p>• Shikakai Cleanser</p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center px-2 md:px-4"
            >
              <Palette className="mx-auto text-[var(--primary)]" size={30} />

              <h3 className="mt-4  text-sm md:text-2xl lg:text-3xl font-bold text-[var(--text)]">
                Handmade Crafts
              </h3>

              <p className="mt-4 text-[10px] md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
                Meaningful handmade creations designed with patience,
                creativity, and sustainable craftsmanship.
              </p>

              <div className="mt-6 md:mt-4 space-y-2 text-[10px] md:text-sm text-[var(--text-light)]">
                <p>• Thread Garlands</p>
                <p>• Art from Waste</p>
                <p>• Handmade Decor</p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center px-2 md:px-4"
            >
              <Flame className="mx-auto text-[var(--primary)]" size={30} />

              <h3 className="mt-4 text-sm md:text-2xl lg:text-3xl font-bold text-[var(--text)]">
                Traditional Spices
              </h3>

              <p className="mt-4 text-[10px] md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
                Authentic homemade flavors prepared using family recipes
                and traditional preparation methods.
              </p>

              <div className="mt-2 md:mt-3 space-y-2 text-[10px] md:text-sm text-[var(--text-light)]">
                <p>• Homemade Masalas</p>
                <p>• Traditional Podis</p>
                <p>• Pure Single Spices</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}