import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const OfferBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/4 left-0 z-50">
      {/* Collapsed tab */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="bg-orange-400 text-white px-4 py-12 cursor-pointer flex items-center justify-center rounded-r-5xl shadow-lg rotate-180 [writing-mode:vertical-lr]"
        >
          <span className="font-semibold text-3xl flex items-center gap-2">
            33.33% OFF
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-orange-500 text-white p-2 rounded-full shadow transition"
            >
              <FaPlay
                size={14}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-180"
                }`}
              />
            </button>
          </span>
        </div>
      )}

      {/* Expanded offer card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white shadow-lg border border-gray-300 w-100 p-10 rounded-r-lg relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {/* Offer Content */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">Avail Offer</p>
              <h2 className="text-3xl font-bold text-orange-500">33.33% OFF</h2>

              <div className="mt-4 bg-orange-100 p-3 rounded-lg">
                <p className="font-semibold">
                  Offer Code: <span className="text-orange-500">GL3000</span>
                </p>
                <p className="text-xs text-black font-semibold">
                  Applicable on your First Enrollment
                </p>
              </div>

              <button className="mt-4 bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-orange-600">
                Enroll Now
              </button>

              <div className="flex justify-around mt-4 text-gray-600 text-xs">
                <div className="flex flex-col items-center text-black font-semibold">
                  ✅ Genuine Reviews.
                </div>
                <div className="flex flex-col items-cente text-black font-semibold">
                  ✅ Pay One Shot and Get 2 Domains.
                </div>
                <div className="flex flex-col items-center text-black font-semibold">
                  ✅ Industry Professional Experts
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OfferBanner;
