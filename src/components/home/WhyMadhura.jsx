import { motion } from "framer-motion";
import {
  Leaf,
  Mountain,
  HandHeart,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Traditional Herbal Care",
    content:
      "Our Goat Milk Soap, Nalangu Maavu Bathing Powder, Herbal Hair Oil, and Shikakai Cleanser are inspired by trusted home remedies practiced across generations.",
  },
  {
    icon: Mountain,
    title: "Stone-Ground Authenticity",
    content:
      "Many of our podis and spice blends follow traditional preparation methods, helping preserve the natural aroma, texture, and authentic taste loved by our elders.",
  },
  {
    icon: HandHeart,
    title: "Handmade With Meaning",
    content:
      "From thread garlands and poojai crafts to creative handmade decor, every piece reflects patience, craftsmanship, and attention to detail.",
  },
  {
    icon: Sparkles,
    title: "Heritage In Every Creation",
    content:
      "We continue the traditions passed down by earlier generations, bringing natural wellness, authentic flavors, and handcrafted artistry into modern homes.",
  },
];

export default function WhyMadhura() {
  return (
    <section className="relative py-7  overflow-hidden">



      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F7FAF5] border border-green-100 text-[10px] md:text-xs text-[var(--primary)] font-medium shadow-sm">
            🌿 Why Madhura
          </div>

          <h2 className="mt-4 text-2xl md:text-4xl lg:text-6xl font-bold text-[var(--text)]">
            Traditions Preserved,
            <span className="block text-[var(--primary)]">
              <span className="text-[#cb1a0d]">Naturally</span> Crafted
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-xs md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
            From herbal wellness products to stone-ground podis and handmade crafts,
            every Madhura creation reflects the knowledge, care, and authenticity passed down through generations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-14">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -6 }}
                className="
                  bg-[#F7FAF5]
                  border
                  border-[#5AA52D]/10
                  rounded-3xl
                  p-6 md:p-8
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-green-100 flex items-center justify-center text-[var(--primary)]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-base md:text-2xl lg:text-3xl font-bold text-[var(--text)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[11px] md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}