import { motion } from "framer-motion";
import aboutBg from "../../assets/about/about-bg.png";

export default function HerbalWellnessSection() {
  const products=[
    {
      title:"Goat Milk & Nalangu Maavu Soap",
      text:"A luxurious natural cleanser combining pure goat milk nourishment with traditional Nalangu Maavu herbs. It gently exfoliates, helps improve skin texture, reduces blemishes, and keeps skin soft with a refreshing natural fragrance."
    },
    {
      title:"Nalangu Maavu Bathing Powder",
      text:"A heritage Ayurvedic blend made with traditional wedding herbs and roots like vetiver, adhimadhuram, green gram, orange peel, rose petals, Bengal gram, and kasthuri manjal. Shade-dried and traditionally prepared to support natural skin care."
    },
    {
      title:"Herbal Hair Oil",
      text:"A powerful Ayurvedic hair oil prepared with 25 rare herbs including hibiscus, henna, aloe vera, karisalankanni, bringaraj, rosemary, small onions, and natural oils to nourish the scalp and support healthy hair growth."
    },
    {
      title:"Shikakai Powder",
      text:"A traditional natural hair cleanser prepared with 36 herbal ingredients. It gently cleanses the scalp, maintains natural moisture, reduces hair breakage, and leaves hair soft, smooth, and naturally shiny."
    }
  ];

  return(
    <section className="py-10">

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.5}}
          className="text-center"
        >

          <div className="inline-flex px-4 py-2 rounded-full bg-white border border-green-100 text-[11px] md:text-xs text-[var(--primary)] font-medium shadow-sm">
            🌿 Herbal Wellness
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[var(--text)]">
            Traditional Care From <span className="text-[#cb1a0d]">Nature</span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-[var(--text-light)] leading-relaxed">
            We bring you pure traditional wellness rituals crafted with natural herbs,
            rich botanicals, and time-tested recipes. Every product is prepared in
            small batches without harsh chemicals, giving your skin and hair gentle
            nature-inspired nourishment.
          </p>

        </motion.div>


        <div className="mt-10 grid md:grid-cols-2 gap-6">

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
              w-12
              h-12
              rounded-full
              bg-[#5AA52D]/10
              flex
              items-center
              justify-center
              text-xl
              mb-4
              group-hover:bg-[#5AA52D]/20
              transition
              ">
                🌿
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
            🌱
          </div>

          <h3 className="mt-3 text-lg md:text-xl font-bold text-[var(--text)]">
            Our Herbal Promise
          </h3>

          <p className="mt-3 text-sm md:text-base text-[var(--text-light)] leading-relaxed max-w-3xl mx-auto">
            Inspired by ancient wellness traditions, Madhura Herbal products are
            prepared with purity, hygiene, and authentic Ayurvedic methods.
            Our goal is to revive natural self-care practices and bring safe,
            effective herbal solutions for everyday beauty and wellness.
          </p>

        </motion.div>


      </div>

    </section>
  );
}