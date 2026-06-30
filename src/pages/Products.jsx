import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/product.js";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

export default function Products() {

  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-[#eaeee8] py-10">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-center"
        >

          <div className="
            inline-flex
            px-4
            py-2
            rounded-full
            bg-white
            border
            border-green-100
            text-[11px]
            md:text-xs
            text-[var(--primary)]
            font-medium
            shadow-sm
          ">
            🌿 Madhura Products
          </div>

          <h1 className="
            mt-4
            text-3xl
            md:text-5xl
            font-bold
            text-[var(--text)]
          ">
            Pure Products From <span className="text-[#cb1a0d]">Nature</span>
          </h1>

          <p className="
            mt-4
            max-w-2xl
            mx-auto
            text-sm
            md:text-base
            text-[var(--text-light)]
          ">
            Explore our herbal wellness products, traditional food powders, and handmade crafts.
          </p>

        </motion.div>

        <div className="
          mt-10
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-3
          md:gap-5
        ">

          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelected(product)}
              className="cursor-pointer"
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </div>

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}

    </section>
  );
}