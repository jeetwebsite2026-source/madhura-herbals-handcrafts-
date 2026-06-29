// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { CheckCircle } from "lucide-react";


// export default function OrderSuccess() {


//   return (

//     <section

//       className="
//         bg-[#eaeee8]
//         min-h-screen
//         flex
//         items-center
//         justify-center
//         px-4
//         py-10
//       "

//     >


//       <motion.div

//         initial={{
//           opacity:0,
//           y:30
//         }}

//         animate={{
//           opacity:1,
//           y:0
//         }}

//         transition={{
//           duration:0.5
//         }}


//         className="
//           max-w-md
//           w-full
//           bg-[#F7FAF5]
//           rounded-3xl
//           p-8
//           text-center
//           shadow-sm
//         "

//       >




//         {/* ICON */}


//         <div

//           className="
//             flex
//             justify-center
//           "

//         >

//           <CheckCircle

//             size={70}

//             className="
//               text-[#5AA52D]
//             "

//           />

//         </div>







//         <h1

//           className="
//             mt-5
//             text-3xl
//             font-bold
//             text-[var(--text)]
//           "

//         >

//           Order Placed!

//         </h1>






//         <p

//           className="
//             mt-3
//             text-sm
//             text-[var(--text-light)]
//             leading-relaxed
//           "

//         >

//           Thank you for ordering from Madhura.
//           We will contact you soon and deliver
//           your products with care.

//         </p>







//         {/* ORDER ID PLACEHOLDER */}


//         <div

//           className="
//             mt-6
//             bg-white
//             rounded-2xl
//             p-4
//             border
//             border-green-100
//           "

//         >

//           <p

//             className="
//               text-xs
//               text-gray-500
//             "

//           >

//             Order ID

//           </p>



//           <p

//             className="
//               mt-1
//               font-bold
//               text-[#5AA52D]
//             "

//           >

//             #MD1001

//           </p>


//         </div>







//         <Link

//           to="/products"

//           className="
//             inline-block
//             mt-7
//             w-full
//             py-3
//             rounded-full
//             bg-[#5AA52D]
//             hover:bg-[#cb1a0d]
//             text-white
//             font-medium
//             cursor-pointer
//             transition
//           "

//         >

//           Continue Shopping

//         </Link>




//       </motion.div>



//     </section>

//   );

// }