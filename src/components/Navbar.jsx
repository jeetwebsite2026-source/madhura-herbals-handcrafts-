import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiShoppingCart,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";

import brandLogo from "../assets/logos/brand-logo.jpeg";
import brandName from "../assets/logos/brand-name.jpeg";


export default function Navbar() {


  const {
    cartCount
  } = useCart();



  const [isOpen,setIsOpen] =
    useState(false);



  const navLinks = [

    {
      name:"Home",
      path:"/"
    },

    {
      name:"About",
      path:"/about"
    },

    {
      name:"Products",
      path:"/products"
    },

    {
      name:"Contact",
      path:"/contact"
    },

  ];





  return (

    <>


      <header

        className="
          sticky
          top-0
          z-50
          bg-white/95
          backdrop-blur-md
          border-b
          border-green-100
          shadow-sm
        "

      >



        <div

          className="
            max-w-7xl
            mx-auto
            px-4
            md:px-6
          "

        >



          <div

            className="
              h-16
              md:h-20
              flex
              items-center
              justify-between
            "

          >





            {/* LOGO */}


            <NavLink

              to="/"

              className="
                flex
                items-center
                cursor-pointer
              "

            >

              <img

                src={brandLogo}

                alt="Brand Logo"

                className="
                  h-10
                  md:h-12
                  w-auto
                  object-contain
                "

              />


              <img

                src={brandName}

                alt="Brand Name"

                className="
                  h-7
                  md:h-9
                  -ml-2
                  w-auto
                  object-contain
                "

              />


            </NavLink>








            {/* DESKTOP MENU */}


            <nav

              className="
                hidden
                lg:flex
                items-center
                gap-8
              "

            >


              {
                navLinks.map((link)=>(

                  <NavLink

                    key={link.name}

                    to={link.path}


                    className={({isActive})=>

                      `
                      text-sm
                      font-medium
                      transition
                      duration-300
                      cursor-pointer

                      ${
                        isActive
                        ?
                        "text-[#5AA52D]"
                        :
                        "text-gray-800 hover:text-[#5AA52D]"
                      }

                      `

                    }

                  >

                    {link.name}


                  </NavLink>


                ))
              }


            </nav>








            {/* DESKTOP RIGHT */}


            <div

              className="
                hidden
                lg:flex
                items-center
                gap-5
              "

            >



              <NavLink

                to="/cart"

                className="
                  relative
                  cursor-pointer
                "

              >


                <FiShoppingCart

                  size={23}

                  className="
                    text-gray-800
                    hover:text-[#5AA52D]
                    transition
                  "

                />


                {

                  cartCount > 0 &&

                  <span

                    className="
                      absolute
                      -top-2
                      -right-2
                      bg-[#5AA52D]
                      text-white
                      text-[10px]
                      w-5
                      h-5
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "

                  >

                    {cartCount}

                  </span>

                }



              </NavLink>





              <NavLink

                to="/products"

                className="
                  bg-[#5AA52D]
                  hover:bg-[#cb1a0d]
                  text-white
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  font-medium
                  cursor-pointer
                  transition
                "

              >

                Shop Now

              </NavLink>



            </div>









            {/* MOBILE CONTROLS */}


            <div

              className="
                flex
                lg:hidden
                items-center
                gap-4
              "

            >



              <NavLink

                to="/cart"

                className="
                  relative
                  cursor-pointer
                "

              >


                <FiShoppingCart

                  size={22}

                  className="
                    text-gray-800
                  "

                />



                {

                  cartCount > 0 &&

                  <span

                    className="
                      absolute
                      -top-2
                      -right-2
                      bg-[#5AA52D]
                      text-white
                      text-[10px]
                      w-5
                      h-5
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "

                  >

                    {cartCount}

                  </span>

                }



              </NavLink>





              <button

                onClick={()=>
                  setIsOpen(!isOpen)
                }

                className="
                  text-[#5AA52D]
                  cursor-pointer
                "

              >

                {
                  isOpen
                  ?
                  <FiX size={27}/>
                  :
                  <FiMenu size={27}/>
                }


              </button>




            </div>



          </div>


        </div>


      </header>









      {/* MOBILE MENU */}


      <div

        className={

          `
          lg:hidden
          fixed
          top-16
          left-0
          w-full
          bg-white
          z-40
          shadow-md
          border-t
          border-green-100
          transition-all
          duration-300


          ${
            isOpen

            ?

            "opacity-100 translate-y-0"

            :

            "opacity-0 -translate-y-3 pointer-events-none"

          }

          `

        }

      >



        <div

          className="
            px-5
            py-4
            flex
            flex-col
          "

        >



          {
            navLinks.map((link)=>(


              <NavLink

                key={link.name}

                to={link.path}

                onClick={()=>
                  setIsOpen(false)
                }


                className={({isActive})=>

                  `
                  py-3
                  border-b
                  border-gray-100
                  text-sm
                  font-medium
                  cursor-pointer
                  transition

                  ${
                    isActive
                    ?
                    "text-[#5AA52D]"
                    :
                    "text-gray-800 hover:text-[#5AA52D]"
                  }

                  `

                }

              >

                {link.name}


              </NavLink>


            ))
          }






          <NavLink

            to="/products"

            onClick={()=>
              setIsOpen(false)
            }

            className="
              mt-5
              bg-[#5AA52D]
              hover:bg-[#cb1a0d]
              text-white
              py-3
              rounded-full
              text-center
              font-medium
              cursor-pointer
              transition
            "

          >

            Shop Now

          </NavLink>



        </div>


      </div>


    </>

  );

}