import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { powderContent, herbalContent } from "../data/productContent";

export default function ProductModal({ product, onClose }) {
  const isCraft = product.category === "Craft";
  const isPowder = product.category === "Powder";
  const isHerbal = product.category === "Herbal";

  const [variant, setVariant] = useState(
    !isCraft ? product.variants[0] : null
  );

  const [qty, setQty] = useState(1);

  /* ================= SAFE CONTENT HANDLING ================= */

  const content = (() => {
    if (isHerbal) {
      return herbalContent?.[product.name] || product.description || "";
    }

    if (isPowder) {
      return powderContent?.[product.name] || product.description || "";
    }

    return product.description || "";
  })();

  const whatsapp = `https://wa.me/918220434055?text=${encodeURIComponent(
    `Hi Madhura,
I am interested in ${product.name}.
${
  variant
    ? `Pack: ${variant.size}
Price: ₹${variant.price}`
    : ""
}
Quantity: ${qty}
Please share order details.`
  )}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 md:p-6"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="
            relative bg-[#f7faf5]
            w-full h-[100vh] md:h-[95vh]
            max-w-7xl
            rounded-none md:rounded-2xl
            overflow-hidden shadow-xl
          "
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow"
          >
            <X size={18} />
          </button>

          {/* GRID */}
          <div className="grid md:grid-cols-2 h-full">

            {/* IMAGE FIXED */}
            <div className="bg-white flex items-center justify-center p-4">
              <img
                src={product.image}
                className="max-h-[45vh] md:max-h-[80vh] object-contain"
              />
            </div>

            {/* SCROLL CONTENT */}
            <div className="flex flex-col overflow-y-auto p-4 md:p-6">

              {/* NAME */}
              <h2 className="text-xl md:text-3xl font-bold">
                {product.name}
              </h2>

              {/* PRICE + VARIANTS */}
              {!isCraft && (
                <>
                  <p className="mt-2 text-xl font-bold text-[#5AA52D]">
                    ₹{variant?.price}
                  </p>

                  <div className="mt-3 flex gap-2 flex-wrap">
                    {product.variants.map((v) => (
                      <button
                        key={v.size}
                        onClick={() => setVariant(v)}
                        className={`px-4 py-1 rounded-full border text-sm ${
                          variant?.size === v.size
                            ? "bg-[#5AA52D] text-white"
                            : "bg-white"
                        }`}
                      >
                        {v.size}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* CONTENT */}
              <div className="mt-4 text-sm leading-relaxed whitespace-pre-line">
                {content}
              </div>

              {/* QTY */}
              {!isCraft && (
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-8 h-8 border rounded-full"
                  >
                    -
                  </button>
                  <span className="font-bold">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-8 h-8 border rounded-full"
                  >
                    +
                  </button>
                </div>
              )}

              {/* WHATSAPP */}
              <div className="mt-6">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    block text-center
                    bg-[#5AA52D] hover:bg-[#cb1a0d]
                    text-white py-3 rounded-full
                    font-medium
                  "
                >
                  Book Through WhatsApp
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}