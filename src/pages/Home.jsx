import Hero from "../components/home/Hero";
import Collections from "../components/home/Collections";
import WhyMadhura from "../components/home/WhyMadhura";
import ProductSliderCTA from "../components/home/ProductSilderCTA";
import homeBg from "../assets/about/about-bg.png";

export default function Home(){
return(
<div
className="
relative
bg-cover
bg-center
bg-fixed
"
style={{
backgroundImage:`url(${homeBg})`
}}
>

<div className="
absolute
inset-0
bg-[#f7faf5]/70
pointer-events-none
"/>


<div className="
relative
z-10
">

<Hero/>
<Collections/>
<WhyMadhura/>
<ProductSliderCTA/>

</div>


</div>
);
}