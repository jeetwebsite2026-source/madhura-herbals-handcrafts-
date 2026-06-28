import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";


export default function Checkout() {

  const navigate = useNavigate();


  const {
    cart,
    totalPrice,
    clearCart,
  } = useCart();



  const [formData,setFormData] = useState({

    name:"",
    phone:"",
    alternative:"",
    address:"",
    city:"",
    pincode:"",

  });



  const [errors,setErrors] = useState({});





  const handleChange=(e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };







  const validate=()=>{


    let newErrors={};



    if(!formData.name.trim()){

      newErrors.name="Name is required";

    }


    if(
      !/^[6-9]\d{9}$/.test(formData.phone)
    ){

      newErrors.phone="Enter valid mobile number";

    }


    if(formData.address.length < 10){

      newErrors.address="Enter complete address";

    }


    if(!formData.city.trim()){

      newErrors.city="City is required";

    }


    if(
      !/^[1-9][0-9]{5}$/.test(formData.pincode)
    ){

      newErrors.pincode="Enter valid pincode";

    }



    setErrors(newErrors);


    return Object.keys(newErrors).length===0;


  };








  const handleSubmit=(e)=>{

    e.preventDefault();


    if(!validate()) return;



    const orderData={

      customer:formData,

      items:cart,

      paymentMethod:"COD",

      totalAmount:totalPrice

    };


    console.log(orderData);


    /*
      Later send this data to Node.js API

      axios.post("/api/orders",orderData)

    */



    clearCart();


    navigate("/order-success");


  };








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
          max-w-6xl
          mx-auto
          px-4
          md:px-6
        "

      >





        {/* HEADER */}


        <motion.div

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.4
          }}

          className="
            text-center
            mb-8
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
            "

          >

            🛒 Checkout

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

            Complete Your Order

          </h1>


        </motion.div>










        <div

          className="
            grid
            md:grid-cols-2
            gap-6
          "

        >







          {/* FORM */}


          <motion.div

            initial={{
              opacity:0,
              x:-20
            }}

            animate={{
              opacity:1,
              x:0
            }}

            className="
              bg-[#F7FAF5]
              rounded-3xl
              p-5
              md:p-7
              shadow-sm
            "

          >


            <h2

              className="
                text-xl
                font-bold
                text-[var(--text)]
                mb-5
              "

            >

              Customer Details

            </h2>





            <form

              onSubmit={handleSubmit}

              className="
                space-y-4
              "

            >






              <Input

                label="Full Name"

                name="name"

                value={formData.name}

                onChange={handleChange}

                error={errors.name}

              />





              <Input

                label="Phone Number"

                name="phone"

                value={formData.phone}

                onChange={handleChange}

                error={errors.phone}

              />






              <Input

                label="Alternative Number (Optional)"

                name="alternative"

                value={formData.alternative}

                onChange={handleChange}

              />







              <div>

                <label className="text-sm font-medium">

                  Address

                </label>


                <textarea

                  name="address"

                  value={formData.address}

                  onChange={handleChange}

                  placeholder="House no, street, area"

                  rows="3"

                  className="
                    mt-1
                    w-full
                    rounded-xl
                    border
                    p-3
                    outline-none
                    focus:border-[#5AA52D]
                  "

                />


                {
                  errors.address &&
                  <p className="text-red-500 text-xs mt-1">

                    {errors.address}

                  </p>
                }


              </div>








              <div

                className="
                  grid
                  grid-cols-2
                  gap-3
                "

              >


                <Input

                  label="City"

                  name="city"

                  value={formData.city}

                  onChange={handleChange}

                  error={errors.city}

                />



                <Input

                  label="Pincode"

                  name="pincode"

                  value={formData.pincode}

                  onChange={handleChange}

                  error={errors.pincode}

                />



              </div>








              <button

                className="
                  w-full
                  mt-3
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

                Place Order - COD

              </button>



            </form>


          </motion.div>












          {/* ORDER SUMMARY */}


          <motion.div

            initial={{
              opacity:0,
              x:20
            }}

            animate={{
              opacity:1,
              x:0
            }}

            className="
              bg-white
              rounded-3xl
              p-5
              md:p-7
              h-fit
            "

          >


            <h2

              className="
                text-xl
                font-bold
              "

            >

              Order Summary

            </h2>





            <div

              className="
                mt-5
                space-y-4
              "

            >


            {
              cart.map(item=>(

                <div

                  key={`${item.id}-${item.pack}`}

                  className="
                    flex
                    justify-between
                    text-sm
                  "

                >

                  <div>

                    <p className="font-medium">

                      {item.name}

                    </p>

                    <p className="text-gray-500">

                      Qty: {item.quantity}

                    </p>

                  </div>


                  <p className="font-semibold">

                    ₹{item.price * item.quantity}

                  </p>


                </div>

              ))
            }


            </div>





            <div

              className="
                border-t
                mt-5
                pt-5
                flex
                justify-between
                font-bold
              "

            >

              <span>

                Total

              </span>


              <span className="text-[#5AA52D]">

                ₹{totalPrice}

              </span>


            </div>




            <div

              className="
                mt-5
                bg-[#F7FAF5]
                rounded-xl
                p-4
                text-sm
              "

            >

              💵 Cash on Delivery

              <p className="text-gray-500 mt-1">

                Pay after receiving your order.

              </p>


            </div>



          </motion.div>



        </div>


      </div>


    </section>

  );

}









function Input({

  label,
  name,
  value,
  onChange,
  error

}){


return (

<div>


<label className="text-sm font-medium">

{label}

</label>


<input

name={name}

value={value}

onChange={onChange}

className="
mt-1
w-full
rounded-xl
border
p-3
outline-none
focus:border-[#5AA52D]
"


/>


{
error &&
<p className="text-red-500 text-xs mt-1">

{error}

</p>
}


</div>

)

}