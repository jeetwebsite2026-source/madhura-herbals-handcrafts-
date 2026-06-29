import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import contactBg from "../assets/about/about-bg.png";

export default function ContactSection(){
const contacts=[
{
icon:<FaWhatsapp/>,
title:"WhatsApp",
detail:"8220434055",
button:"Chat Now",
link:"https://wa.me/918220434055?text=Hi%20Madhura,%20I%20am%20interested%20in%20your%20products."
},
{
icon:<FaPhoneAlt/>,
title:"Call Us",
detail:"8870421846",
button:"Call Now",
link:"tel:8870421846"
},
{
icon:<FiMail/>,
title:"Email",
detail:"llalithasubramanian1@gmail.com",
button:"Send Email",
link:"mailto:llalithasubramanian1@gmail.com"
}
];

return(
<section
className="relative py-10 md:py-16 bg-cover bg-center"
style={{backgroundImage:`url(${contactBg})`}}
>

<div className="absolute inset-0 bg-[#f7faf5]/70"/>

<div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">

<motion.div
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5}}
className="text-center"
>

<div className="inline-flex px-4 py-2 rounded-full bg-white border border-green-100 text-[11px] md:text-xs text-[var(--primary)] font-medium shadow-sm">
🌿 Contact Madhura
</div>

<h1 className="mt-4 text-3xl md:text-5xl font-bold text-[var(--text)]">
Let's <span className="text-[#cb1a0d]">Connect</span> With Nature
</h1>

<p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[var(--text-light)] leading-relaxed">
Have questions about our herbal wellness products,
traditional spices, or handmade crafts?
Reach out to us through WhatsApp, phone, or email.
</p>

</motion.div>


<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.6}}
className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
>

{
contacts.map((item,index)=>(
<div key={item.title} className="relative">

<div className="
bg-white/90
backdrop-blur-md
rounded-3xl
border border-green-100
shadow-sm
p-6
text-center
transition
duration-300
hover:-translate-y-2
hover:shadow-lg
">

<div className="
mx-auto
w-14 h-14
rounded-full
bg-[#eaeee8]
flex
items-center
justify-center
text-2xl
text-[#5AA52D]
">
{item.icon}
</div>

<h2 className="mt-4 text-xl font-bold text-[var(--text)]">
{item.title}
</h2>

<p className="mt-2 text-sm text-[var(--text-light)] break-all">
{item.detail}
</p>

<a
href={item.link}
target={item.title==="WhatsApp"?"_blank":undefined}
rel="noreferrer"
className="
inline-flex
mt-5
px-5
py-2.5
rounded-full
bg-[#5AA52D]
hover:bg-[#cb1a0d]
text-white
text-sm
font-medium
transition
"
>
{item.button}
</a>

</div>


{index!==2&&(
<div className="
hidden md:block
absolute
top-10
right-[-12px]
h-[80%]
w-px
bg-gradient-to-b
from-transparent
via-[#5AA52D]/30
to-transparent
"/>
)}

</div>
))
}

</motion.div>


<motion.p
initial={{opacity:0}}
whileInView={{opacity:1}}
viewport={{once:true}}
transition={{delay:.2}}
className="mt-12 text-center text-sm italic text-[var(--text-light)]"
>
🌿 Crafted with Nature • Shared with Care
</motion.p>


</div>

</section>
);
}