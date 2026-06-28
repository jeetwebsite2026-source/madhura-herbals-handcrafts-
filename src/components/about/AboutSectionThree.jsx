import { motion } from "framer-motion";
import { Sparkles, Leaf, HandHeart } from "lucide-react";

export default function AboutSectionThree() {
  return (
    <section className="bg-[#eaeee8] py-10">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[var(--text)]">
            The Madhura
            <span className="text-[#cb1a0d] block">Promise</span>
          </h2>

          {/* GREEN DIVIDER (same style as Section 2) */}
          <div className="mt-5 flex justify-center">
            <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-[#5AA52D] to-transparent rounded-full" />
          </div>
        </motion.div>

        
       {/* GRID */}
<div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-10 mt-10 md:mt-13">

           
          {/* CARD 1 — HERBAL BENEFITS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center px-2 md:px-4"
          >
            <Leaf className="mx-auto text-[var(--primary)]" size={30} />

            <h3 className="mt-4 text-base md:text-2xl lg:text-3xl font-bold text-[var(--text)]">
              Herbal Wellness
            </h3>

            <p className="mt-4 text-[11px] md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
              Natural care that supports your skin and hair gently and effectively.
            </p>

            <div className="mt-5 space-y-2 text-[11px] md:text-sm text-[var(--text-light)]">
              <p>✓ Herbal Hair Oil helps strengthen roots & reduce hair fall</p>
              <p>✓ Goat Milk Soap helps brighten skin & reduce dullness</p>
              <p>✓ Nalangu Maavu reduces pigmentation & impurities naturally</p>
            </div>
          </motion.div>

          {/* CARD 2 — SPICES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
           className="text-center px-2 md:px-4"
          >
            <Sparkles className="mx-auto text-[var(--primary)]" size={30} />

            <h3 className="mt-4 text-base md:text-2xl lg:text-3xl font-bold text-[var(--text)]">
              Traditional Spices
            </h3>

            <p className="mt-4 text-[11px] md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
              Pure homemade ingredients that bring real taste and health together.
            </p>

            <div className="mt-5 space-y-2 text-[11px] md:text-sm text-[var(--text-light)]">
              <p>✓ 100% natural ingredients with no preservatives</p>
              <p>✓ Sun-dried & stone-ground for real aroma</p>
              <p>✓ Fresh homemade masalas & podis daily prepared</p>
            </div>
          </motion.div>

          {/* CARD 3 — HANDMADE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center px-2 md:px-4"
          >
            <HandHeart className="mx-auto text-[var(--primary)]" size={30} />

            <h3 className="mt-4 text-base md:text-2xl lg:text-3xl font-bold text-[var(--text)]">
              Handmade Crafts
            </h3>

            <p className="mt-4 text-[11px] md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
              Every creation carries patience, care, and human touch.
            </p>

            <div className="mt-5 space-y-2 text-[11px] md:text-sm text-[var(--text-light)]">
              <p>✓ Fully handmade  no machine production</p>
              <p>✓ Eco-friendly materials & sustainable methods</p>
              <p>✓ Each piece is unique and made with care</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}