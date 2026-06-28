import { motion } from "framer-motion";

export default function ProductCard({
  product,
  onClick,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
      }}
      whileHover={{
        y: -4,
      }}
      onClick={() => onClick(product)}
      className="
        cursor-pointer
        group
      "
    >

      <div
        className="
          bg-[#F7FAF5]
          rounded-2xl
          overflow-hidden
          border
          border-[#5AA52D]/10
          shadow-sm
          hover:shadow-md
          transition-all
          duration-300
        "
      >


        {/* Product Image */}

        <div
          className="
            h-36
            sm:h-44
            md:h-48
            overflow-hidden
            bg-white
          "
        >

          <img

            src={product.image}

            alt={product.name}

            className="
              w-full
              h-full
              object-contain
              p-2
              transition-transform
              duration-500
              group-hover:scale-105
            "

          />

        </div>



        {/* Product Content */}

        <div
          className="
            px-3
            py-3
            md:px-4
            md:py-4
          "
        >


          {/* Category */}

          <p
            className="
              text-[10px]
              md:text-xs
              uppercase
              tracking-wide
              text-[var(--primary)]
              font-medium
            "
          >
            {product.category}
          </p>



          {/* Name */}

          <h3
            className="
              mt-1
              text-sm
              md:text-base
              font-bold
              text-[var(--text)]
              line-clamp-1
            "
          >
            {product.name}
          </h3>



          {/* Price */}

          <p
            className="
              mt-1
              text-xs
              md:text-sm
              text-[var(--text-light)]
            "
          >
            ₹{product.variants[0].price}
          </p>



          {/* Accent Line */}

          <div
            className="
              mt-3
              h-[2px]
              w-8
              bg-[#cb1a0d]
              transition-all
              duration-300
              group-hover:w-14
            "
          />

        </div>

      </div>

    </motion.div>
  );
}