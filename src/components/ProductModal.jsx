import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { useCart } from "../context/CartContext";


export default function ProductModal({
  product,
  onClose,
}) {

  const { addToCart } = useCart();


  const [quantity,setQuantity] = useState(1);


  const variant = product.variants[0];



  const handleAddToCart = () => {

    addToCart(
      product,
      variant,
      quantity
    );

    onClose();

  };




  return (

    <AnimatePresence>


      <motion.div

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        exit={{
          opacity:0
        }}

        className="
          fixed
          inset-0
          z-50
          bg-black/50
          backdrop-blur-sm
          flex
          items-center
          justify-center
          p-3
        "

      >





        <motion.div


          initial={{
            opacity:0,
            scale:0.95
          }}


          animate={{
            opacity:1,
            scale:1
          }}


          exit={{
            opacity:0,
            scale:0.95
          }}


          transition={{
            duration:0.25
          }}


         className="
  relative
  w-full
  max-w-4xl
  max-h-[90vh]
  bg-[#F7FAF5]
  rounded-3xl
  overflow-y-auto
  shadow-xl
">






          {/* CLOSE BUTTON */}


          <button

            onClick={onClose}

            className="
              absolute
              top-3
              right-3
              z-20
              bg-white
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              shadow
              cursor-pointer
              hover:bg-gray-100
              transition
            "

          >

            <X size={20}/>

          </button>







<div
 className="
   grid
   grid-cols-1
   md:grid-cols-2
   gap-5
   p-4
   md:p-6
 "
>






            {/* IMAGE SECTION */}


            <div

              className="

                bg-white

                rounded-2xl

                flex

                items-center

                justify-center

                h-40
                md:h-[500px]

                overflow-hidden

              "

            >


              <img

                src={product.image}

                alt={product.name}

                className="

                  w-full

                  h-full

                  object-contain

                  p-3

                "

              />


            </div>









            {/* CONTENT SECTION */}


            <div

              className="

                flex

                flex-col

                justify-center

              "

            >




              {/* NAME */}


              <h2

                className="

                  text-2xl

                  md:text-4xl

                  font-bold

                  text-[var(--text)]

                "

              >

                {product.name}

              </h2>







              {/* PRICE */}


              <p

                className="

                  mt-2

                  text-xl

                  md:text-2xl

                  font-semibold

                  text-[#5AA52D]

                "

              >

                ₹{variant.price}

              </p>







              {/* PACK */}


              <p

                className="

                  mt-1

                  text-sm

                  text-[var(--text-light)]

                "

              >

                Pack: {variant.size}

              </p>









              {/* DESCRIPTION */}


              <p

                className="

                  mt-4

                  text-sm

                  md:text-base

                  leading-relaxed

                  text-[var(--text-light)]

                  line-clamp-3

                "

              >

                {product.description}

              </p>









              {/* BENEFITS */}


              <div

                className="

                  mt-4

                "

              >


                <h3

                  className="

                    font-bold

                    text-[var(--text)]

                  "

                >

                  Benefits

                </h3>



               <div
 className="
   mt-2
   space-y-1
   text-sm
   text-[var(--text-light)]
   max-h-28
   overflow-y-auto
 "
>

                  {
                    product.benefits.map(

                      (benefit)=>(

                        <p

                          key={benefit}

                        >

                          ✓ {benefit}

                        </p>

                      )

                    )
                  }


                </div>


              </div>









              {/* QUANTITY */}


              {
                product.orderType === "cod" && (

                  <div

                    className="

                      mt-5

                      flex

                      items-center

                      gap-4

                    "

                  >



                    <button

                      onClick={()=>setQuantity(
                        Math.max(
                          1,
                          quantity-1
                        )
                      )}

                      className="

                        w-10

                        h-10

                        rounded-full

                        bg-white

                        border

                        cursor-pointer

                        hover:bg-[#5AA52D]

                        hover:text-white

                        transition

                      "

                    >

                      -

                    </button>





                    <span

                      className="
                        font-bold
                      "

                    >

                      {quantity}

                    </span>





                    <button

                      onClick={()=>setQuantity(
                        quantity+1
                      )}

                      className="

                        w-10

                        h-10

                        rounded-full

                        bg-white

                        border

                        cursor-pointer

                        hover:bg-[#5AA52D]

                        hover:text-white

                        transition

                      "

                    >

                      +

                    </button>



                  </div>

                )
              }









              {/* ADD CART */}


              {
                product.orderType === "cod" && (

                  <button


                    onClick={handleAddToCart}


                    className="

                      mt-5

                      w-full

                      py-3

                      rounded-full

                      bg-[#5AA52D]

                      hover:bg-[#cb1a0d]

                      text-white

                      font-medium

                      cursor-pointer

                      transition

                    "

                  >

                    Add To Cart

                  </button>

                )
              }







              {
                product.orderType === "whatsapp" && (

                  <a

                    href={`https://wa.me/918220434055?text=${encodeURIComponent(
                      `Hi Madhura, I am interested in ${product.name}`
                    )}`}


                    target="_blank"

                    rel="noreferrer"


                    className="

                      mt-5

                      w-full

                      py-3

                      rounded-full

                      bg-[#25D366]

                      text-white

                      text-center

                      font-medium

                      cursor-pointer

                    "

                  >

                    Book Through WhatsApp

                  </a>

                )
              }





            </div>




          </div>





        </motion.div>



      </motion.div>



    </AnimatePresence>

  );

}