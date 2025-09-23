import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

// 🎇 Fireworks Component (OUTSIDE banner)
// 🎇 Fireworks Component (OUTSIDE banner)
const Fireworks = () => {
  const sparks = Array.from({ length: 40 }); // more sparks
  const colors = ["#FF5722", "#FFC107", "#FFEB3B", "#F44336", "#FFFFFF", "#9C27B0", "#4CAF50"];

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-visible"> {/* z-50 to be on top */}
      {sparks.map((_, i) => {
        const angle = (i / sparks.length) * 2 * Math.PI;
        const distance = 150 + Math.random() * 100; // random distance

        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{ backgroundColor: colors[i % colors.length], top: "50%", left: "50%" }}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{
              x: [0, Math.cos(angle) * distance, 0],
              y: [0, Math.sin(angle) * distance, 0],
              scale: [1, 0.5, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};



// ✨ Running Light Border Tab
const RunningLightTab = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer rotate-180 [writing-mode:vertical-lr] rounded-r-2xl shadow-lg"
    >
      {/* running light bg */}
      <div className="p-1 py-12 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400  text-white font-semibold text-2xl flex items-center justify-center gap-2">
        Dussehra Offers
       <button className="bg-orange-500 text-white p-2 rounded-2xl shadow">
  <span className="inline-block transform rotate-180 transition-transform duration-500 hover:rotate-0">
    <FaPlay size={14} />
  </span>
</button>
      </div>
    </div>
  );
};

RunningLightTab.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// 🎉 Offer Banner
const OfferBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fireworkStart, setFireworkStart] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setFireworkStart(true), 300);
  };

  const handleClose = () => {
    setFireworkStart(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div className="fixed top-1/4 left-0 z-50">
      {/* Fireworks behind everything */}
      {fireworkStart && <Fireworks />}

      {/* Collapsed tab with running lights */}
      {!isOpen && <RunningLightTab onClick={handleOpen} />}

      {/* Expanded offer card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="offer-card"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white shadow-lg w-96 p-6 rounded-r-lg relative z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
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

              <div className="flex flex-col gap-2 mt-4 text-black text-sm font-semibold">
                ✅ Genuine Reviews.
                ✅ Pay One Shot and Get 2 Domains.
                ✅ Industry Professional Experts.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OfferBanner;
