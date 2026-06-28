import { useState } from "react";
import { motion } from "framer-motion";

import { products } from "../data/product.js";

import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";


export default function Products() {

  const [selectedProduct, setSelectedProduct] =
    useState(null);



  return (

    <section
      className="
        bg-[#eaeee8]
        min-h-screen
        py-8
        md:py-10
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          lg:px-8
        "
      >



        {/* HEADER */}


        <motion.div

          initial={{
            opacity:0,
            y:20,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:0.4,
          }}

          className="
            text-center
          "

        >



          <div

            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-green-100
              text-[10px]
              md:text-xs
              text-[var(--primary)]
              font-medium
              shadow-sm
            "

          >

            🌿 Our Products

          </div>





          <h1

            className="
              mt-3
              text-3xl
              md:text-5xl
              font-bold
              text-[var(--text)]
            "

          >

            Traditional Wellness,

            <span
              className="
                block
                text-[#cb1a0d]
              "
            >

              Crafted With Heritage

            </span>

          </h1>





          <p

            className="
              mt-3
              max-w-2xl
              mx-auto
              text-xs
              md:text-sm
              text-[var(--text-light)]
            "

          >

            Herbal wellness, authentic homemade flavors,
            and handcrafted creations inspired by
            generations of tradition.

          </p>





          <div
            className="
              mt-5
              flex
              justify-center
            "
          >

            <div

              className="
                h-[2px]
                w-20
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-[#5AA52D]
                to-transparent
              "

            />

          </div>



        </motion.div>







        {/* PRODUCT GRID */}


        <div

          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-3
            md:gap-6
            mt-8
            md:mt-10
          "

        >


          {
            products.map((product)=>(

              <ProductCard

                key={product.id}

                product={product}

                onClick={
                  setSelectedProduct
                }

              />

            ))
          }


        </div>



      </div>







      {/* PRODUCT MODAL */}


      {
        selectedProduct && (

          <ProductModal

            product={selectedProduct}

            onClose={()=>
              setSelectedProduct(null)
            }

          />

        )
      }



    </section>

  );

}