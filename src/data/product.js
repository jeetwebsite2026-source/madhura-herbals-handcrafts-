
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
]
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
]
},

{
id:3,
category:"Herbal",
name:"Madhura Shikakai Powder",
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
]
},



/* FOOD POWDER */

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
]
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
]
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
]
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
]
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
]
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
]
},



/* CRAFTS */

{
id:10,
category:"Craft",
name:"Thalaiyatti Bommai",
image:thalaiyatti,
description:"Beautiful traditional handmade Thalaiyatti Bommai crafted for home decoration and cultural gifting."
},

{
id:11,
category:"Craft",
name:"Kolu Bommai",
image:golu,
description:"Traditional handmade dolls perfect for Navaratri Golu decoration and festive collections."
},

{
id:12,
category:"Craft",
name:"Art From Waste",
image:waste,
description:"Creative handmade decorative products crafted using recycled materials."
},

{
id:13,
category:"Craft",
name:"Poojai Decoration",
image:poojai,
description:"Beautiful handmade pooja decorations designed for traditional occasions."
},

{
id:14,
category:"Craft",
name:"Handmade Threads",
image:threads,
description:"Colorful handmade thread crafts created with traditional artistic detailing."
}

];