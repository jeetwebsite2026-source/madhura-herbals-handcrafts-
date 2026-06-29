import { motion } from "framer-motion";

export default function AboutSectionThree(){

const crafts=[
{
title:"Handcrafted Creations",
icon:"🎨",
text:"At Madhura Handcrafts, we create beautiful handmade products including pooja decorations, golu dolls, glass paintings, wall hanging torans, photo frames, and unique decorative crafts. Every piece is carefully designed with creativity and traditional touch."
},
{
title:"Perfect For Special Occasions",
icon:"🎁",
text:"Our handcrafted creations are made to celebrate life's special moments like weddings, house warming functions, birthdays, ear-piercing ceremonies, and traditional puberty functions. Custom gifts that preserve emotions and family traditions."
},
{
title:"Memories & Quality Craftsmanship",
icon:"✨",
text:"Our custom photo frames and laminated creations help preserve precious memories for years. From elegant home décor to bulk return gifts, every product is thoughtfully finished with attention to detail and premium craftsmanship."
}
];

return(
<section className="py-10">

<div className="
flex items-center justify-center
py-3
">
<div className="h-px w-24 bg-[#5AA52D]/30"/>
<span className="mx-3 text-[#5AA52D]">🌿</span>
<div className="h-px w-24 bg-[#5AA52D]/30"/>
</div>


<div className="max-w-6xl mx-auto px-4 md:px-6">

<motion.div
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.5}}
className="text-center"
>

<div className="
inline-flex
px-4
py-2
rounded-full
bg-white/80
backdrop-blur-md
border
border-green-100
text-[11px]
md:text-xs
text-[var(--primary)]
font-medium
shadow-sm
">
🌸 Madhura Handcrafts
</div>


<h2 className="
mt-4
text-3xl
md:text-5xl
font-bold
text-[var(--text)]
">
Crafted With <span className="text-[#cb1a0d]">Love & Tradition</span>
</h2>


<p className="
mt-4
max-w-3xl
mx-auto
text-sm
md:text-base
text-[var(--text-light)]
leading-relaxed
">
From traditional decorations to personalised gifts, Madhura Handcrafts creates
unique handmade products that add beauty, emotion, and memories to every
special occasion.
</p>

</motion.div>



<div className="
mt-10
grid
md:grid-cols-3
gap-6
">


{
crafts.map((item,index)=>(

<motion.div

key={item.title}

initial={{opacity:0,y:25}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}

transition={{
delay:index*.1,
duration:.5
}}

className="
bg-white/70
backdrop-blur-xl
rounded-3xl
p-6
border
border-white/60
shadow-[0_20px_50px_rgba(0,0,0,0.08)]
hover:-translate-y-2
transition-all
duration-300
"

>

<div className="
w-12
h-12
rounded-full
bg-[#5AA52D]/10
flex
items-center
justify-center
text-xl
mb-4
">

{item.icon}

</div>


<h3 className="
text-lg
md:text-xl
font-bold
text-[var(--text)]
">

{item.title}

</h3>


<p className="
mt-3
text-sm
md:text-base
text-[var(--text-light)]
leading-relaxed
">

{item.text}

</p>


</motion.div>

))

}

</div>


<motion.div

initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.6}}

className="
mt-8
rounded-3xl
p-6
md:p-8
text-center
bg-gradient-to-r
from-[#5AA52D]/10
to-[#cb1a0d]/10
border
border-green-100
shadow-sm
"

>

<div className="text-2xl">
🌿
</div>


<h3 className="
mt-3
text-lg
md:text-xl
font-bold
text-[var(--text)]
">
Handmade With Care
</h3>


<p className="
mt-3
max-w-3xl
mx-auto
text-sm
md:text-base
text-[var(--text-light)]
leading-relaxed
">
Each custom creation is made with patience, creativity, and care. 
Images and personalised details can be shared through WhatsApp for
custom orders and special requirements.
</p>


</motion.div>


</div>

</section>
);

}