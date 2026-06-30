
import hairOil from "../assets/products/herbals/hair-oil.jpeg";
import nalangu from "../assets/products/herbals/nalangu-maavu.jpeg";
import shikakai from "../assets/products/herbals/shikakai.jpeg";

import sambar from "../assets/products/podis/sambar-powder.png";
import rasam from "../assets/products/podis/rasam-powder.png";
import idly from "../assets/products/podis/idly-powder.png";
import curry from "../assets/products/podis/curryleaf-powder.png";
import paruppu from "../assets/products/podis/paruppu-powder.png";
import chicken from "../assets/products/podis/chicken-powder.png";

import thalaiyatti from "../assets/products/crafts/thalaiyatti.png";
import golu from "../assets/products/crafts/gollu.png";
import waste from "../assets/products/crafts/arts-from-waste.png";
import poojai from "../assets/products/crafts/poojai.png";
import threads from "../assets/products/crafts/threads.png";


export const products=[

/* HERBAL */

{
id:1,
category:"Herbal",
name:"Madhura Hair Oil",
image:hairOil,
variants:[
{size:"100ml",price:100},
{size:"200ml",price:200},
{size:"500ml",price:480}
],
description:"A powerful Ayurvedic hair oil prepared with 25 rare herbs and natural oils to nourish the scalp and support healthy hair growth.",
ingredients:"Hibiscus, Henna, Aloe Vera, Karisalankanni, Bringaraj, Small Onions, Fenugreek, Rosemary, Olive Oil, Almond Oil, Coconut Oil, Castor Oil",
benefits:[
"Reduces Hair Fall",
"Promotes New Hair Growth",
"Enhances Natural Shine",
"Improves Overall Hair Health"
],

content: `
<strong>Description:</strong><br/>
Our custom-formulated hair oil is prepared by using 25 rare Ayurvedic herbs and ingredients. It contains natural extracts such as hibiscus, henna, aloe vera, false daisy (karisalankanni), bringaraj, small onions, fenugreek, and rosemary, which are infused into high-quality base oils like olive oil, almond oil, coconut oil, and castor oil. These ingredients are meticulously processed to create a pure and authentic formulation.

<br/><br/>

<strong>How to Use:</strong><br/>

<strong>Application:</strong>
Take a sufficient amount of the oil and apply it directly onto your scalp and hair. <br>

<strong>Massaging:</strong>
Gently massage it into your scalp using your fingertips to ensure deep penetration. <br>

<strong>Routine:</strong>
For best results, use this oil regularly as part of your hair care routine.

<br/><br/>

<strong>Benefits:</strong><br/>

<strong>Reduces Hair Fall:</strong>
It significantly controls and reduces hair fall. <br>

<strong>Promotes New Growth:</strong>
It stimulates the hair follicles to promote the growth of new hair strands. <br>

<strong>Enhances Shine:</strong>
It leaves your hair naturally soft, smooth, and vibrant. <br>

<strong>Improves Overall Hair Health:</strong>
Many users have tried this oil and experienced excellent, long-lasting benefits for their hair health.
`
},
{
id:2,
category:"Herbal",
name:"Madhura Nalangu Maavu",
image:nalangu,
variants:[
{size:"100g",price:120},
{size:"200g",price:240}
],
description:"A traditional Ayurvedic herbal bath powder made with carefully selected skin nourishing herbs.",
ingredients:"Vetiver, Adhimadhuram, Green Gram, Orange Peel, Rose Petals, Bengal Gram, Kasthuri Manjal",
benefits:[
"Helps Improve Skin Texture",
"Reduces Skin Irritation",
"Controls Body Odour",
"Enhances Natural Glow"
],

content: `
<strong>Description & Ingredients:</strong><br/>
Nalangu Maavu is a traditional formulation made from a blend of Ayurvedic herbs. It contains rare and beneficial ingredients such as vetiver (khus), Adhimadhuram (licorice), green gram, orange peel, rose petals, Bengal gram, and wild turmeric (kasthuri manjal). These skin-enhancing ingredients are carefully shade-dried and traditionally hand-pounded to create the powder.

<br/><br/>

<strong>How to Use:</strong><br/>

<strong>Application:</strong>
Mix the powder with water to form a paste and apply it smoothly all over your body while bathing.<br>

<strong>Duration:</strong>
Leave the herbal paste on your skin for 5 minutes to allow the nutrients to absorb. <br>

<strong>Rinsing:</strong>
Wash it off thoroughly with water.

<br/><br/>

<strong>Benefits:</strong><br/>

<strong>Treats Skin Issues:</strong>
It helps cure severe skin diseases and irritation.<br>

<strong>Removes Unwanted Hair:</strong>
Regular use helps eliminate unwanted body hair over time.<br>

<strong>Eliminates Odour:</strong>
It acts as a natural deodorant to banish body odour. <br>

<strong>Enhances Glow:</strong>
It adds a natural shine, radiance, and brightness to both the face and body.<br>

<strong>History & Quality:</strong><br/>
In ancient times, this bathing powder was exclusively used by royal families, and later the general public also used it, after that this tradition gradually faded away. Today, there is an effort to bring back and to revive this rich heritage. This product is prepared by <strong>Our Madhura Herbal</strong> in a manner that is 100% pure, hygienic, and authentically Ayurvedic.
`
},
{
id:3,
category:"Herbal",
name:"Madhura Shikkakai Powder",
image:shikakai,
variants:[
{size:"100g",price:90},
{size:"200g",price:180}
],
description:"Premium Shikakai powder prepared by blending 36 natural ingredients and herbs, traditionally processed for healthy hair care.",
ingredients:"36 Natural Herbal Ingredients, Shikakai, Traditional Hair Cleansing Herbs",
benefits:[
"Promotes Hair Growth",
"Increases Hair Density",
"Reduces Dandruff and Lice",
"Improves Hair Texture",
"Reduces Hair Breakage"
],

content: `
<strong>Description:</strong><br/>
We prepare this premium Shikakai powder by blending of 36 types of natural ingredients and herbs. These ingredients are carefully sun-dried, processed, and ground or pounded to create a high-quality formulation.

<br/><br/>

<strong>How to Use:</strong><br/>

<strong>Application:</strong>
Take a sufficient amount of Madhura Shikkakai Powder mix it with water, apply directly onto your hair and scalp.<br>

<strong>Washing:</strong>
Massage gently while bathing and rinse it off thoroughly with water.

<br/><br/>

<strong>Benefits:</strong><br/>

<strong>Promotes Hair Growth:</strong>
It effectively stimulates and promotes healthy hair growth. <br>

<strong>Increases Hair Density:</strong>
Regular use helps make your hair noticeably thicker and denser. <br>


<strong>Eliminates Dandruff and Lice:</strong>
It relieves scalp irritation by completely preventing dandruff and lice issues. <br>

<strong>Enhances Texture:</strong>
It leaves your hair naturally soft, smooth, and beautifully shiny. <br>

<strong>Prevents Greying:</strong>
It helps prevent premature greying of the hair. <br>


<strong>Reduces Hair Breakage:</strong>
It strengthens the hair strands to minimize and repair hair breakage.
`
},
{
id:4,
category:"Powder",
name:"Madhura Sambar Powder",
image:sambar,
variants:[{size:"100g",price:65}],
description:"Traditional South Indian sambar powder prepared with sun-dried ingredients and authentic homemade methods.",
ingredients:"Coriander Seeds, Red Chilies, Toor Dal, Chana Dal, Fenugreek Seeds, Cumin Seeds, Black Pepper, Turmeric, Asafoetida",
benefits:[
"100% Sun Dried",
"No Added Colors",
"No Preservatives"
],

content: `
<strong>Description:</strong><br/>

<strong>Madhura Masala Powder</strong><br/>
Bring the Heritage of Tamil Nadu to Your Kitchen! <br>


At MADHURA FOOD PRODUCTS, we believe that great food starts with authentic ingredients. Our range of traditional spice blends and powders including Idly Powder, Sambar Powder, Rasam Powder, Chicken Powder, Paruppu Powder and Curry Leaf (Karuvepillai) Powder are made just like how it's done at home.

<br/><br/>

<strong>Why Our Masalas Taste Better:</strong><br/>

<strong>Sun-Dried to Perfection:</strong>
Instead of artificial roasting or machine drying, we dry our ingredients under the natural sun to preserve their health benefits. <br>

<strong>Traditionally Pounded:</strong>
We use traditional stone mortars (urals) to pound our spices. This slow, heat-free process prevents the essential oils from evaporating, giving you an unmatched aroma and rich flavor.<br>

<strong>Our Pure Food Promise:</strong>
We absolutely do not use any artificial food colors or chemical preservatives. What you get is 100% pure, clean, and safe for your entire family. <br>


<strong>Hygienically Packed:</strong>
Manufactured under strict sanitary conditions to ensure premium quality in every single pack. <br>


<strong>Ingredients:</strong>
Coriander Seeds, Red Chilies, Toor Dal, Chana Dal, Fenugreek Seeds, Cumin Seeds, Black Pepper, Turmeric, Asafoetida. <br>


<strong>Directions for Use:</strong>
Cook vegetables with dhal. Add 2-3 teaspoons of Madhura Sambar Powder along with tamarind extract, boil well, and temper with mustard seeds and curry leaves. <br>

<strong>Our Promise:</strong>
100% Sun-Dried & Traditionally Pounded • No Added Colors • No Preservatives. <br>

<strong>Shelf Life:</strong>
Best Before: 3 months from Mfg.
`
},
{
id:5,
category:"Powder",
name:"Madhura Rasam Powder",
image:rasam,
variants:[{size:"100g",price:65}],
description:"Authentic rasam powder prepared using traditional spice combinations for rich aroma and taste.",
ingredients:"Coriander Seeds, Black Pepper, Cumin Seeds, Red Chilies, Toor Dal, Turmeric, Asafoetida",
benefits:[
"Traditional Homemade Taste",
"Sun Dried Ingredients",
"No Preservatives"
],

content: `
<strong>Description:</strong><br/>

<strong>Madhura Masala Powder</strong><br/>
Bring the Heritage of Tamil Nadu to Your Kitchen! <br>


At MADHURA FOOD PRODUCTS, we believe that great food starts with authentic ingredients. Our range of traditional spice blends and powders—including Idly Powder, Sambar Powder, Rasam Powder, Chicken Powder, Paruppu Powder and Curry Leaf (Karuvepillai) Powder are made just like how it's done at home.

<br/><br/>

<strong>Why Our Masalas Taste Better:</strong><br/>

<strong>Sun-Dried to Perfection:</strong>
Instead of artificial roasting or machine drying, we dry our ingredients under the natural sun to preserve their health benefits. <br>


<strong>Traditionally Pounded:</strong>
We use traditional stone mortars (urals) to pound our spices. This slow, heat-free process prevents the essential oils from evaporating, giving you an unmatched aroma and rich flavor. <br>


<strong>Our Pure Food Promise:</strong>
We absolutely do not use any artificial food colors or chemical preservatives. What you get is 100% pure, clean, and safe for your entire family. <br>


<strong>Hygienically Packed:</strong>
Manufactured under strict sanitary conditions to ensure premium quality in every single pack. <br>


<strong>Ingredients:</strong>
Coriander Seeds, Black Pepper, Cumin Seeds, Red Chilies, Toor Dal, Turmeric, Asafoetida. <br>


<strong>Directions for Use:</strong>
Extract tamarind juice, add chopped tomatoes, garlic, and 1-2 teaspoons of Madhura Rasam Powder. Boil for 5 minutes. Temper with ghee, mustard seeds, and cumin. <br>


<strong>Our Promise:</strong>
100% Sun-Dried & Traditionally Pounded • No Added Colors • No Preservatives. <br>


<strong>Shelf Life:</strong>
Best Before: 3 months from Mfg.
`
},
{
id:6,
category:"Powder",
name:"Madhura Curry Leaf Powder",
image:curry,
variants:[{size:"100g",price:60}],
description:"Traditional Karuvepillai podi prepared with fresh curry leaves and selected spices.",
ingredients:"Fresh Curry Leaves, Chana Dal, Urad Dal, Red Chilies, Black Pepper, Cumin Seeds, Salt, Asafoetida",
benefits:[
"Rich Natural Aroma",
"Traditional Preparation",
"No Added Colors"
],

content: `
<strong>Description:</strong><br/>

<strong>Madhura Masala Powder</strong><br/>
Bring the Heritage of Tamil Nadu to Your Kitchen!  <br>
At MADHURA FOOD PRODUCTS, we believe that great food starts with authentic ingredients. Our range of traditional spice blends and powders including Idly Powder, Sambar Powder, Rasam Powder, Chicken Powder, Paruppu Powder and Curry Leaf (Karuvepillai) Powder are made just like how it's done at home.

<br/><br/>

<strong>Why Our Masalas Taste Better:</strong><br/>

<strong>Sun-Dried to Perfection:</strong>
Instead of artificial roasting or machine drying, we dry our ingredients under the natural sun to preserve their health benefits. <br>


<strong>Traditionally Pounded:</strong>
We use traditional stone mortars (urals) to pound our spices. This slow, heat-free process prevents the essential oils from evaporating, giving you an unmatched aroma and rich flavor. <br>


<strong>Our Pure Food Promise:</strong>
We absolutely do not use any artificial food colors or chemical preservatives. What you get is 100% pure, clean, and safe for your entire family. <br>


<strong>Hygienically Packed:</strong>
Manufactured under strict sanitary conditions to ensure premium quality in every single pack. <br>


<strong>Ingredients:</strong>
Fresh Curry Leaves, Chana Dal, Urad Dal, Red Chilies, Black Pepper, Cumin Seeds, Salt, Asafoetida. <br>


<strong>Directions for Use:</strong>
Mix 1-2 spoons of Madhura Karuvepillai Powder with hot steamed rice and a spoonful of sesame oil (Nallennai) or ghee. Can also be used as a side dish for Idly/Dosa. <br>


<strong>Our Promise:</strong>
100% Sun-Dried & Traditionally Pounded • No Added Colors • No Preservatives. <br>


<strong>Shelf Life:</strong>
Best Before: 3 months from Mfg.
`
},
{
id:7,
category:"Powder",
name:"Madhura Paruppu Powder",
image:paruppu,
variants:[{size:"100g",price:65}],
description:"Comforting traditional podi prepared with roasted dals and aromatic spices.",
ingredients:"Roasted Toor Dal, Roasted Gram, Red Chilies, Black Pepper, Cumin Seeds, Garlic, Salt, Asafoetida",
benefits:[
"Protein Rich Blend",
"Traditional Taste",
"No Preservatives"
],

content: `
<strong>Description:</strong><br/>

<strong>Madhura Masala Powder</strong><br/>
Bring the Heritage of Tamil Nadu to Your Kitchen! <br>


At MADHURA FOOD PRODUCTS, we believe that great food starts with authentic ingredients. Our range of traditional spice blends and powders—including Idly Powder, Sambar Powder, Rasam Powder, Chicken Powder, Paruppu Powder and Curry Leaf (Karuvepillai) Powder are made just like how it's done at home.

<br/><br/>

<strong>Why Our Masalas Taste Better:</strong><br/>

<strong>Sun-Dried to Perfection:</strong>
Instead of artificial roasting or machine drying, we dry our ingredients under the natural sun to preserve their health benefits. <br>


<strong>Traditionally Pounded:</strong>
We use traditional stone mortars (urals) to pound our spices. This slow, heat-free process prevents the essential oils from evaporating, giving you an unmatched aroma and rich flavor. <br>

<strong>Our Pure Food Promise:</strong>
We absolutely do not use any artificial food colors or chemical preservatives. What you get is 100% pure, clean, and safe for your entire family. <br>

<strong>Hygienically Packed:</strong>
Manufactured under strict sanitary conditions to ensure premium quality in every single pack.<br>

<strong>Ingredients:</strong>
Roasted Toor Dal, Roasted Gram (Pottukadalai), Red Chilies, Black Pepper, Cumin Seeds, Garlic, Salt, Asafoetida. <br>


<strong>Directions for Use:</strong>
Serve with hot steamed rice along with a generous dollop of ghee or sesame oil. It makes a quick, comforting, and nutritious meal. <br>


<strong>Our Promise:</strong>
100% Sun-Dried & Traditionally Pounded • No Added Colors • No Preservatives. <br>


<strong>Shelf Life:</strong>
Best Before: 3 months from Mfg.
`
},
{
id:8,
category:"Powder",
name:"Madhura Chicken Powder",
image:chicken,
variants:[{size:"100g",price:80}],
description:"Authentic South Indian chicken masala blend prepared with aromatic spices.",
ingredients:"Coriander Seeds, Red Chilies, Cumin Seeds, Black Pepper, Fennel Seeds, Cloves, Cinnamon, Cardamom, Star Anise, Turmeric, Curry Leaves",
benefits:[
"Rich Spicy Flavor",
"Traditional Masala Blend",
"No Artificial Colors"
],

content: `
<strong>Description:</strong><br/>

<strong>Madhura Masala Powder</strong><br/>
Bring the Heritage of Tamil Nadu to Your Kitchen! <br>


At MADHURA FOOD PRODUCTS, we believe that great food starts with authentic ingredients. Our range of traditional spice blends and powders—including Idly Powder, Sambar Powder, Rasam Powder, Chicken Powder, Paruppu Powder and Curry Leaf (Karuvepillai) Powder are made just like how it's done at home.

<br/><br/>

<strong>Why Our Masalas Taste Better:</strong><br/>

<strong>Sun-Dried to Perfection:</strong>
Instead of artificial roasting or machine drying, we dry our ingredients under the natural sun to preserve their health benefits. <br>


<strong>Traditionally Pounded:</strong>
We use traditional stone mortars (urals) to pound our spices. This slow, heat-free process prevents the essential oils from evaporating, giving you an unmatched aroma and rich flavor. <br>


<strong>Our Pure Food Promise:</strong>
We absolutely do not use any artificial food colors or chemical preservatives. What you get is 100% pure, clean, and safe for your entire family.<br>

<strong>Hygienically Packed:</strong>
Manufactured under strict sanitary conditions to ensure premium quality in every single pack. <br>

<strong>Ingredients:</strong>
Coriander Seeds, Red Chilies, Cumin Seeds, Black Pepper, Fennel Seeds, Cloves, Cinnamon, Cardamom, Star Anise, Turmeric, Curry Leaves. <br>


<strong>Directions for Use:</strong>
Use 2-3 tablespoons of Madhura Chicken Powder for 500g of chicken to make authentic South Indian style chicken gravy, dry fry, or semi-gravy. <br>


<strong>Our Promise:</strong>
100% Sun-Dried & Traditionally Pounded • No Added Colors • No Preservatives. <br>


<strong>Shelf Life:</strong>
Best Before: 3 months from Mfg.
`
},
{
id:9,
category:"Powder",
name:"Madhura Idly Powder",
image:idly,
variants:[{size:"100g",price:50}],
description:"Traditional Idly podi prepared as a perfect spicy companion for hot idly and dosa.",
ingredients:"Urad Dal, Chana Dal, Sesame Seeds, Red Chilies, Salt, Asafoetida, Curry Leaves",
benefits:[
"Perfect With Idly And Dosa",
"Traditional Taste",
"No Preservatives"
],

content: `
<strong>Description:</strong><br/>

<strong>Madhura Masala Powder</strong><br/>
Bring the Heritage of Tamil Nadu to Your Kitchen! <br>


At MADHURA FOOD PRODUCTS, we believe that great food starts with authentic ingredients. Our range of traditional spice blends and powders—including Idly Powder, Sambar Powder, Rasam Powder, Chicken Powder, Paruppu Powder and Curry Leaf (Karuvepillai) Powder are made just like how it's done at home.

<br/><br/>

<strong>Why Our Masalas Taste Better:</strong><br/>

<strong>Sun-Dried to Perfection:</strong>
Instead of artificial roasting or machine drying, we dry our ingredients under the natural sun to preserve their health benefits. <br>


<strong>Traditionally Pounded:</strong>
We use traditional stone mortars (urals) to pound our spices. This slow, heat-free process prevents the essential oils from evaporating, giving you an unmatched aroma and rich flavor. <br>


<strong>Our Pure Food Promise:</strong>
We absolutely do not use any artificial food colors or chemical preservatives. What you get is 100% pure, clean, and safe for your entire family. <br>


<strong>Hygienically Packed:</strong>
Manufactured under strict sanitary conditions to ensure premium quality in every single pack. <br>

<strong>Ingredients:</strong>
Urad Dal, Chana Dal, Sesame Seeds (Ellu), Red Chilies, Salt, Asafoetida, Curry Leaves. <br>

<strong>Directions for Use:</strong>
Mix Madhura Idly Powder with sesame oil (Nallennai) or melted ghee. Serve as a perfect spicy side dish for hot Idlies and crispy Dosas. <br>

<strong>Our Promise:</strong>
100% Sun-Dried & Traditionally Pounded • No Added Colors • No Preservatives. <br>


<strong>Shelf Life:</strong>
Best Before: 3 months from Mfg.
`
},
{
id:10,
category:"Craft",
name:"Thalaiyatti Bommai",
image:thalaiyatti,
description:"Beautiful traditional handmade Thalaiyatti Bommai crafted for home decoration and cultural gifting.",

content: `
<strong>Description:</strong><br/>
Beautiful traditional handmade Thalaiyatti Bommai crafted for home decoration and cultural gifting.
`
},
{
id:11,
category:"Craft",
name:"Kolu Bommai",
image:golu,
description:"Traditional handmade dolls perfect for Navaratri Golu decoration and festive collections.",

content: `
<strong>Description:</strong><br/>
Traditional handmade dolls perfect for Navaratri Golu decoration and festive collections.
`
},
{
id:12,
category:"Craft",
name:"Art From Waste",
image:waste,
description:"Creative handmade decorative products crafted using recycled materials.",

content: `
<strong>Description:</strong><br/>
Creative handmade decorative products crafted using recycled materials.
`
},
{
id:13,
category:"Craft",
name:"Poojai Decoration",
image:poojai,
description:"Beautiful handmade pooja decorations designed for traditional occasions.",

content: `
<strong>Description:</strong><br/>
Beautiful handmade pooja decorations designed for traditional occasions.
`
},
{
id:14,
category:"Craft",
name:"Handmade Threads",
image:threads,
description:"Colorful handmade thread crafts created with traditional artistic detailing.",

content: `
<strong>Description:</strong><br/>
Colorful handmade thread crafts created with traditional artistic detailing.
`
}]