import { motion } from "framer-motion";
import aboutBg from "../../assets/about/abouthero.png";

export default function FoodProductsSection(){
const products=[
{title:"Traditional Masalas",icon:"🌶️",text:"Our homemade masala blends are crafted to bring authentic South Indian flavors to your cooking. Carefully balanced spices create rich aroma, perfect taste, and traditional depth for curries, gravies, and everyday recipes."},
{title:"Traditional Podi Blends",icon:"🌿",text:"From classic Idly Podi to comforting rice-mixing powders, our traditional podis are prepared with perfectly selected ingredients and traditional methods. Enjoy them with hot rice, idly, dosa, ghee, or sesame oil."},
{title:"Pure Spice Quality",icon:"🌱",text:"Every ingredient is processed with care using traditional methods. Natural sun-drying and slow preparation help retain essential oils, freshness, aroma, and authentic homemade taste."}
];

return(
<section>

<div className="
flex items-center justify-center
py-6
">
<div className="h-px w-24 bg-[#5AA52D]/30"/>
<span className="mx-3 text-[#5AA52D]">🌿</span>
<div className="h-px w-24 bg-[#5AA52D]/30"/>
</div>

<div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

<motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-center">

<div className="inline-flex px-4 py-2 rounded-full bg-white border border-green-100 text-[11px] md:text-xs text-[var(--primary)] font-medium shadow-sm">
🌶️ Madhura Food Products
</div>

<h2 className="mt-4 text-3xl md:text-5xl font-bold text-[var(--text)]">
Authentic Taste From <span className="text-[#cb1a0d]">Traditional Kitchens</span>
</h2>

<p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-[var(--text-light)] leading-relaxed">
Bring the rich flavors of a traditional Tamil kitchen into your everyday meals. Madhura Food Products are prepared using authentic family recipes passed down through generations. We carefully select premium ingredients, naturally sun-dry them, and traditionally process each blend to preserve the original aroma, taste, and nutritional value.
</p>

</motion.div>


<div className="mt-10 grid md:grid-cols-3 gap-6">

{products.map((item,index)=>(

<motion.div
key={item.title}
initial={{opacity:0,y:25}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*.1,duration:.5}}
className="
bg-white/70
backdrop-blur-xl
rounded-3xl
p-6
border border-white/60
shadow-[0_20px_50px_rgba(0,0,0,0.08)]
hover:-translate-y-2
transition-all
duration-300
"
>

<div className="
w-12 h-12
rounded-full
bg-[#5AA52D]/10
flex items-center justify-center
text-xl
mb-4
group-hover:bg-[#5AA52D]/20
transition
">
{item.icon}
</div>

<h3 className="text-lg md:text-xl font-bold text-[var(--text)]">
{item.title}
</h3>

<p className="mt-3 text-sm md:text-base text-[var(--text-light)] leading-relaxed">
{item.text}
</p>

</motion.div>

))}

</div>


<motion.div
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.6}}
className="
mt-8
rounded-3xl
p-6 md:p-8
text-center
bg-gradient-to-r from-[#5AA52D]/10 to-[#cb1a0d]/10
border border-green-100
shadow-sm
"
>

<div className="text-2xl">🌟</div>

<h3 className="mt-3 text-lg md:text-xl font-bold text-[var(--text)]">
Our Food Promise
</h3>

<p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-[var(--text-light)] leading-relaxed">
At Madhura Food Products, we follow traditional preparation methods to deliver pure and hygienic food products. Our ingredients are naturally sun-dried, traditionally pounded, and prepared without artificial colors or chemical preservatives. Every pack carries the authentic taste, aroma, and care of homemade cooking.
</p>

<div className="mt-5 flex flex-wrap justify-center gap-3 text-xs md:text-sm">

<span className="px-4 py-2 rounded-full bg-white border border-green-100">
☀️ Sun Dried
</span>

<span className="px-4 py-2 rounded-full bg-white border border-green-100">
🌿 No Preservatives
</span>

<span className="px-4 py-2 rounded-full bg-white border border-green-100">
🏡 Homemade Recipe
</span>

</div>

</motion.div>

</div>
</section>
);
}