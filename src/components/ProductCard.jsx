import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";


export default function ProductCard({product}){


const isCraft=product.category==="Craft";

const price=!isCraft
?product.variants[0].price
:null;


return(

<motion.div
initial={{opacity:0,y:15}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.3}}
className="
bg-white
rounded-2xl
overflow-hidden
border border-green-100
shadow-sm
hover:shadow-lg
transition
"
>


<div className="
h-32
sm:h-40
md:h-48
bg-[#f7faf5]
overflow-hidden
">

<img
src={product.image}
alt={product.name}
className="
w-full
h-full
object-contain
hover:scale-105
transition
duration-300
"
/>

</div>



<div className="
p-2
sm:p-3
text-center
">


<h3 className="
text-xs
sm:text-sm
md:text-base
font-bold
line-clamp-2
text-[var(--text)]
">
{product.name}
</h3>



{
isCraft
?
<span className="
mt-2
inline-block
px-4
py-1
rounded-full
text-[#5AA52D]
font-semibold
text-sm
">
Custom
</span>

:

<p className="
mt-2
text-[#5AA52D]
font-bold
text-lg
">
₹{price}

<span className="
text-xs 
text-gray-500 
ml-1
">
({product.variants[0].size})
</span>

</p>

}



<button

className="
mt-3
mx-auto
flex
items-center
justify-center
bg-[#5AA52D]
text-white
py-1.5
sm:py-2
px-5
rounded-full
text-[10px]
sm:text-xs
font-medium
"
>

<FaWhatsapp className="mr-1"/>

WhatsApp

</button>



</div>


</motion.div>

)

}