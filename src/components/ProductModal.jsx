import {motion,AnimatePresence} from "framer-motion";
import {X} from "lucide-react";
import {useState} from "react";

export default function ProductModal({product,onClose}){

const isCraft=product.category==="Craft";

const [variant,setVariant]=useState(
!isCraft?product.variants[0]:null
);

const [qty,setQty]=useState(1);


const whatsapp=`https://wa.me/918220434055?text=${encodeURIComponent(
`Hi Madhura,
I am interested in ${product.name}.
${variant?`Pack: ${variant.size}
Price: ₹${variant.price}`:""}
Quantity: ${qty}
Please share order details.`
)}`;


return(
<AnimatePresence>

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="
fixed
inset-0
z-50
bg-black/50
backdrop-blur-sm
flex
items-center
justify-center
p-4
"
>

<motion.div
initial={{scale:.95}}
animate={{scale:1}}
className="
relative
bg-[#f7faf5]
rounded-3xl
max-w-4xl
w-full
max-h-[85vh]
overflow-y-auto
shadow-xl
"
>


<button
onClick={onClose}
className="
absolute
right-4
top-4
z-10
bg-white
rounded-full
w-9
h-9
flex
items-center
justify-center
"
>
<X size={18}/>
</button>


<div className="
grid
md:grid-cols-2
gap-5
p-4
md:p-5
"
>


<div className="
bg-white
rounded-2xl
h-44
md:h-[430px]
overflow-hidden
"
>

<img
src={product.image}
className="
w-full
h-full
object-contain
"
/>

</div>



<div className="
flex
flex-col

"
>
<h2 className="
text-xl
md:text-3xl
font-bold
text-[var(--text)]
">
{product.name}
</h2>

{
isCraft && product.description && (
<p className="
mt-4
text-sm
md:text-base
text-gray-600
leading-relaxed
">
{product.description}
</p>
)
}
{!isCraft&&(
<>
<p className="
mt-3
text-xl
font-bold
text-[#5AA52D]
">
₹{variant.price}
</p>


<div className="mt-4">

<h3 className="font-bold">
Select Pack
</h3>

<div className="flex gap-2 mt-2 flex-wrap">

{
product.variants.map(v=>(
<button
key={v.size}
onClick={()=>setVariant(v)}
className={`
px-4 py-2 rounded-full border text-sm
${
variant.size===v.size
?"bg-[#5AA52D] text-white"
:"bg-white"
}
`}
>
{v.size}
</button>
))
}

</div>

</div>
</>
)}



{
product.ingredients&&(
<p className="mt-3 text-sm">
<b>Ingredients:</b> {product.ingredients}
</p>
)
}


{
product.benefits&&(
<div className="mt-3 text-sm">
<b>Benefits</b>
{
product.benefits.map(item=>
<p key={item}>• {item}</p>
)
}
</div>
)
}



{!isCraft&&(
<div className="
mt-5
flex
items-center
gap-3
">

<button
onClick={()=>setQty(Math.max(1,qty-1))}
className="w-8 h-8 rounded-full bg-white border"
>
-
</button>

<span className="font-bold">
{qty}
</span>

<button
onClick={()=>setQty(qty+1)}
className="w-8 h-8 rounded-full bg-white border"
>
+
</button>

</div>
)}

<a
href={whatsapp}
target="_blank"
rel="noreferrer"
className="
mt-5
mx-auto
w-fit
px-8
bg-[#5AA52D]
hover:bg-[#cb1a0d]
text-white
text-center
py-3
rounded-full
font-medium
"
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