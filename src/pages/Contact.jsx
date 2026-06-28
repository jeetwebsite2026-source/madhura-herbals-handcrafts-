import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="bg-[#eaeee8] py-10 md:py-20">

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-green-100 text-[10px] md:text-xs text-[var(--primary)] font-medium shadow-sm">
            🌿 Contact Madhura
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)]">
            Let's
            <span className="text-[#cb1a0d]"> Connect</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-xs md:text-sm lg:text-base text-[var(--text-light)] leading-relaxed">
            Have questions about our herbal wellness products,
            traditional spices, or handmade crafts?
            Reach out through WhatsApp, phone, or email and
            we'll be happy to assist you.
          </p>
        </motion.div>

        {/* Contact Info */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
    mt-14
    grid grid-cols-3
    gap-4 md:gap-8
    text-center
    items-start
  "
>

  {/* WhatsApp */}
  <div className="relative">
    <FaWhatsapp className="mx-auto text-2xl md:text-3xl text-green-600" />

    <h3 className="mt-3 text-xs md:text-xl font-bold text-[var(--text)]">
      WhatsApp
    </h3>

    <p className="mt-2 text-[10px] md:text-sm text-[var(--text-light)]">
      8220434055
    </p>

    <a
      href="https://wa.me/918220434055?text=Hi%20Madhura,%20I%20am%20interested%20in%20your%20products.%20Can%20you%20suggest%20the%20right%20product%20for%20me?"
      target="_blank"
      rel="noreferrer"
      className="
        mt-4 inline-flex
        bg-[#5AA52D]
        text-white
        px-3 md:px-5
        py-2
        rounded-full
        text-[10px] md:text-sm
        font-medium
        hover:bg-[#4b8f26]
        transition
      "
    >
      Chat Now
    </a>

    {/* Divider */}
    <div className="hidden md:block absolute top-0 right-[-16px] h-full w-px bg-[#5AA52D]/20" />
  </div>

  {/* Phone */}
  <div className="relative">
    <FaPhoneAlt className="mx-auto text-xl md:text-2xl text-[var(--primary)]" />

    <h3 className="mt-3 text-xs md:text-xl font-bold text-[var(--text)]">
      Call Us
    </h3>

    <p className="mt-2 text-[10px] md:text-sm text-[var(--text-light)]">
      8870421846
    </p>

    <a
      href="tel:8870421846"
      className="
        mt-4 inline-flex
        border border-[var(--primary)]
        text-[var(--primary)]
        px-3 md:px-5
        py-2
        rounded-full
        text-[10px] md:text-sm
        font-medium
        hover:bg-[var(--primary)]
        hover:text-white
        transition
      "
    >
      Call Now
    </a>

    {/* Divider */}
    <div className="hidden md:block absolute top-0 right-[-16px] h-full w-px bg-[#5AA52D]/20" />
  </div>

  {/* Email */}
  <div>
    <FiMail className="mx-auto text-2xl md:text-3xl text-[var(--primary)]" />

    <h3 className="mt-3 text-xs md:text-xl font-bold text-[var(--text)]">
      Email
    </h3>

    <p className="mt-2 text-[10px] md:text-sm text-[var(--text-light)] break-all">
      llalithasubramanian1@gmail.com
    </p>

    <a
      href="mailto:llalithasubramanian1@gmail.com"
      className="
        mt-4 inline-flex
        border border-[var(--primary)]
        text-[var(--primary)]
        px-3 md:px-5
        py-2
        rounded-full
        text-[10px] md:text-sm
        font-medium
        hover:bg-[var(--primary)]
        hover:text-white
        transition
      "
    >
      Send Email
    </a>
  </div>

</motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-14 text-center"
        >
          <p className="text-xs md:text-sm text-[var(--text-light)] italic">
            🌿 Crafted with Nature • Shared with Care
          </p>
        </motion.div>

      </div>
    </section>
  );
}