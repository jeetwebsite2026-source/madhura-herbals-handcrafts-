import HerbalWellnessSection from "../components/about/HerbalWellnessSection";
import AboutSectionTwo from "../components/about/FoodProductsSection";
import AboutSectionThree from "../components/about/AboutSectionThree";
import aboutBg from "../assets/about/about-bg.png";

export default function About(){
return(
<div
className="
relative
bg-cover
bg-center
bg-fixed
"
style={{
backgroundImage:`url(${aboutBg})`
}}
>

<div className="
absolute
inset-0
bg-[#f7faf5]/70
pointer-events-none
"/>

<div className="relative z-10">

<HerbalWellnessSection/>
<AboutSectionTwo/>
<AboutSectionThree/>

</div>

</div>
);
}