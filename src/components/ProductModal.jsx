import { motion,AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function ProductModal({product,onClose}){

const [selectedVariant,setSelectedVariant]=useState(product.variants[0]);
const [quantity,setQuantity]=useState(1);

const whatsappLink=`https://wa.me/918220434055?text=${encodeURIComponent(
`Hi Madhura,

I am interested in ${product.name}.

Pack: ${selectedVariant.size}
Price: ₹${selectedVariant.price}
Quantity: ${quantity}

Please share the order details.`
)}`;

return(
<AnimatePresence>
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3"
>

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:20}}
transition={{duration:.25}}
className="relative w-full max-w-6xl max-h-[90vh] bg-[#F7FAF5] rounded-3xl overflow-y-auto shadow-xl"
>

<button
onClick={onClose}
className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
>
<X size={18}/>
</button>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-3 sm:p-4 md:p-8">

<div className="bg-white rounded-2xl h-[260px] sm:h-[320px] md:h-[520px] flex items-center justify-center overflow-hidden">
<img src={product.image} alt={product.name} className="w-full h-full object-contain p-3"/>
</div>

<div className="flex flex-col justify-start md:justify-center">

<h2 className="text-lg md:text-4xl font-bold text-[var(--text)]">
{product.name}
</h2>

<p className="mt-2 text-base md:text-2xl font-semibold text-[#5AA52D]">
₹{selectedVariant.price}
</p>

<p className="mt-1 text-xs md:text-sm text-[var(--text-light)]">
Pack: {selectedVariant.size}
</p>

<div className="mt-3">
<h3 className="text-sm md:text-base font-bold text-[var(--text)]">
Select Pack
</h3>

<div className="flex flex-wrap gap-2 mt-2">
{
product.variants.map((item)=>(
<button
key={item.size}
onClick={()=>setSelectedVariant(item)}
className={`px-3 py-1.5 rounded-full text-xs md:text-sm border cursor-pointer transition ${
selectedVariant.size===item.size
?"bg-[#5AA52D] text-white border-[#5AA52D]"
:"bg-white hover:bg-[#5AA52D] hover:text-white"
}`}
>
{item.size}
</button>
))
}
</div>
</div>

<p className="mt-3 text-xs md:text-sm leading-relaxed text-[var(--text-light)] line-clamp-3">
{product.description}
</p>

<div className="mt-2 md:mt-3">

<h3 className="font-bold text-sm md:text-base text-[var(--text)]">
Benefits
</h3>

<div className="mt-1 text-xs md:text-sm text-[var(--text-light)]">
{
product.benefits.slice(0,3).map((item)=>(
<p key={item}>✓ {item}</p>
))
}
</div>

</div>

<div className="mt-4 flex items-center gap-3">

<button
onClick={()=>setQuantity(Math.max(1,quantity-1))}
className="w-8 h-8 rounded-full bg-white border cursor-pointer hover:bg-[#5AA52D] hover:text-white transition"
>
-
</button>

<span className="font-bold">
{quantity}
</span>

<button
onClick={()=>setQuantity(quantity+1)}
className="w-8 h-8 rounded-full bg-white border cursor-pointer hover:bg-[#5AA52D] hover:text-white transition"
>
+
</button>

</div>

<a
href={whatsappLink}
target="_blank"
rel="noreferrer"
className="mt-4 w-full py-2.5 rounded-full bg-[#5AA52D] hover:bg-[#cb1a0d] text-white text-center text-sm font-medium cursor-pointer transition"
>
Book Through WhatsApp
</a>

</div>

</div>

</motion.div>
</motion.div>
</AnimatePresence>
);
}