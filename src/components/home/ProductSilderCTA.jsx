import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import soap from "../../assets/products/herbals/soap.png";
import hairOil from "../../assets/products/herbals/hair-oil.jpeg";
import bathingPowder from "../../assets/products/herbals/nalangu-maavu.jpeg";
import sambar from "../../assets/products/podis/sambar-powder.png";
import Idli from "../../assets/products/podis/idly-powder.png";
import gollu from "../../assets/products/crafts/gollu.png";
import arts from  "../../assets/products/crafts/arts-from-waste.png";
import threads from "../../assets/products/crafts/threads.png";
const products = [
  { name: "Herbal Soap", image: soap },
  {name:" golu dolls", image:gollu }, 
  { name: "Hair Oil", image: hairOil },
  {name: "Arts from waste", image: arts},
  { name: "Bath Powder", image: bathingPowder },
  { name: "Sambar Podi", image: sambar },
{name:"Handmade Threads", image: threads},
  {name:"Idly Podi", image:Idli}
];

export default function ProductSliderCTA() {

  return (
    <section className=" relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-300/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 🔴 Badge with red pulse dot */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-green-100 text-xs text-[var(--primary)] shadow-sm">
      
            🌿 Curated Herbal Picks
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[var(--text)]">
            Discover What Your{" "}
            <span className="text-[#cb1a0d]">Body</span> Loves
          </h2>

          <p className="mt-4 text-sm md:text-base text-[var(--text-light)] max-w-2xl mx-auto">
            Simple, traditional and naturally crafted essentials chosen with care.
          </p>
        </motion.div>

        {/* 🔥 CLEAN INFINITE SLIDER */}
        <div className="mt-12 overflow-hidden">
<div className="flex gap-6 w-max animate-product-scroll">

{[...products,...products].map((item,index)=>(

<div
key={index}
className="
group
relative
flex-shrink-0
w-[160px]
md:w-[200px]
h-[180px]
md:h-[220px]
rounded-2xl
overflow-hidden
shadow-sm
border
border-green-100
bg-white
cursor-pointer
"
>

<img
src={item.image}
alt={item.name}
className="
w-full
h-full
object-contain
transition
duration-500
group-hover:scale-110
"
/>


<div
className="
absolute
inset-0
bg-black/40
opacity-0
group-hover:opacity-100
transition
duration-300
flex
items-end
justify-center
pb-5
"
>

<p
className="
text-white
text-sm
md:text-base
font-semibold
text-center
px-2
"
>
{item.name}
</p>

</div>


</div>

))}

</div>
</div>
        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 mb-7 flex justify-center"
        >
          <div className="text-center bg-white border border-green-100 rounded-3xl px-8 py-8 shadow-md w-full max-w-xl">

            <div className="flex justify-center text-green-600 text-4xl">
              <FaWhatsapp />
            </div>

            <h3 className="mt-4 text-xl md:text-2xl font-bold text-[var(--text)]">
              Need help choosing the right product?
            </h3>

            <p className="mt-2 text-sm text-[var(--text-light)]">
              Chat with us instantly on WhatsApp for personal recommendations.
            </p>

            {/* 🔥 WhatsApp prefilled CTA */}
            <a
              href="https://wa.me/918220434055?text=Hi%20👋%20I%20am%20interested%20in%20your%20products.%20Can%20you%20suggest%20me%20the%20right%20product%20for%20me%3F"
              target="_blank"
              rel="noreferrer"
              className="
                mt-5 inline-flex items-center gap-2
                bg-green-600 hover:bg-green-700
                text-white px-6 py-3
                rounded-full
                font-medium
                shadow-md
                transition-all
                hover:shadow-[0_0_20px_rgba(203,26,13,0.25)]
              "
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}