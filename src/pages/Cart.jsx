import { Link, useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

import { useCart } from "../context/CartContext";


export default function Cart() {

  const navigate = useNavigate();


  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();




  // EMPTY CART

  if(cart.length === 0){

    return (

      <section
        className="
          bg-[#eaeee8]
          min-h-screen
          py-10
        "
      >

        <div
          className="
            max-w-4xl
            mx-auto
            px-4
          "
        >

          <div
            className="
              text-center
              py-20
            "
          >

            <h1
              className="
                text-2xl
                md:text-4xl
                font-bold
                text-[var(--text)]
              "
            >

              Your Cart is Empty

            </h1>


            <p
              className="
                mt-3
                text-sm
                text-[var(--text-light)]
              "
            >

              Add some herbal products to continue.

            </p>



            <Link

              to="/products"

              className="
                inline-block
                mt-7
                px-6
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

              Explore Products

            </Link>


          </div>


        </div>


      </section>

    );

  }






  return (

    <section
      className="
        bg-[#eaeee8]
        min-h-screen
        py-8
      "
    >


      <div
        className="
          max-w-5xl
          mx-auto
          px-4
          md:px-6
        "
      >




        {/* HEADER */}


        <div
          className="
            text-center
          "
        >


          <div
            className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-green-100
              text-xs
              text-[var(--primary)]
              shadow-sm
            "
          >

            🛒 Your Cart

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

            Review Your Order

          </h1>


        </div>








        {/* CART ITEMS */}


        <div
          className="
            mt-8
            space-y-4
          "
        >



          {
            cart.map((item)=>(


              <div

                key={`${item.id}-${item.pack}`}

                className="
                  bg-[#F7FAF5]
                  rounded-2xl
                  p-4
                  border
                  border-green-100
                  shadow-sm
                "

              >


                <div
                  className="
                    flex
                    gap-4
                    items-center
                  "
                >




                  {/* IMAGE */}


                  <img

                    src={item.image}

                    alt={item.name}

                    className="
                      w-20
                      h-20
                      md:w-28
                      md:h-28
                      rounded-xl
                      bg-white
                      object-contain
                      p-1
                    "

                  />







                  {/* DETAILS */}


                  <div
                    className="
                      flex-1
                    "
                  >


                    <h2
                      className="
                        text-sm
                        md:text-lg
                        font-bold
                        text-[var(--text)]
                      "
                    >

                      {item.name}

                    </h2>



                    <p
                      className="
                        text-xs
                        text-[var(--text-light)]
                        mt-1
                      "
                    >

                      {item.pack}

                    </p>



                    <p
                      className="
                        mt-2
                        text-sm
                        font-semibold
                        text-[#5AA52D]
                      "
                    >

                      ₹{item.price}

                    </p>






                    {/* QUANTITY */}


                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        mt-3
                      "
                    >


                      <button

                        onClick={()=>decreaseQuantity(
                          item.id,
                          item.pack
                        )}

                        className="
                          w-8
                          h-8
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
                          font-semibold
                          text-sm
                        "
                      >

                        {item.quantity}

                      </span>





                      <button

                        onClick={()=>increaseQuantity(
                          item.id,
                          item.pack
                        )}

                        className="
                          w-8
                          h-8
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



                  </div>







                  {/* RIGHT SIDE */}


                  <div
                    className="
                      flex
                      flex-col
                      justify-between
                      items-end
                      h-24
                    "
                  >



                    <button

                      onClick={()=>removeFromCart(
                        item.id,
                        item.pack
                      )}

                      className="
                        text-red-600
                        cursor-pointer
                        hover:scale-110
                        transition
                      "

                    >

                      <Trash2 size={18}/>

                    </button>





                    <p
                      className="
                        font-bold
                        text-[var(--text)]
                      "
                    >

                      ₹{item.price * item.quantity}

                    </p>


                  </div>



                </div>



              </div>



            ))
          }



        </div>









        {/* SUMMARY */}


        <div

          className="
            mt-8
            bg-white
            rounded-3xl
            p-5
            shadow-sm
          "

        >



          <div
            className="
              flex
              justify-between
              font-bold
              text-lg
            "
          >

            <span>
              Total
            </span>


            <span
              className="
                text-[#5AA52D]
              "
            >

              ₹{totalPrice}

            </span>


          </div>






          <div
            className="
              flex
              gap-3
              mt-5
            "
          >



            <Link

              to="/products"

              className="
                flex-1
                py-3
                rounded-full
                border
                text-center
                text-sm
                font-medium
                cursor-pointer
                hover:bg-gray-100
                transition
              "

            >

              Continue Shopping

            </Link>





            <button

              onClick={()=>
                navigate("/checkout")
              }

              className="
                flex-1
                py-3
                rounded-full
                bg-[#5AA52D]
                hover:bg-[#cb1a0d]
                text-white
                text-sm
                font-medium
                cursor-pointer
                transition
              "

            >

              Proceed Checkout

            </button>



          </div>



        </div>




      </div>


    </section>


  );

}