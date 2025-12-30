import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

// 🎆 Cracker Spark Effect (only once)
const Crackers = () => {
  const sparks = Array.from({ length: 20 });
  const colors = ["#FFD700", "#FF6B00", "#FF3D00", "#FFF176", "#FFF"];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-40">
      {sparks.map((_, i) => {
        const angle = (i / sparks.length) * 2 * Math.PI;
        const distance = 150 + Math.random() * 100;
        const delay = Math.random() * 0.5;

        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-10 origin-bottom rounded-full"
            style={{
              background: `linear-gradient(to top, ${
                colors[i % colors.length]
              }, transparent)`,
              top: "50%",
              left: "50%",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scaleY: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2 + Math.random() * 0.3,
              delay,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
};

// 🪔 Shimmer Border Tab
const RunningLightTab = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer rotate-180 [writing-mode:vertical-lr] rounded-r-2xl shadow-2xl"
    >
      {/* Glowing gradient border animation */}
      <div className="p-1 py-12 bg-gradient-to-b from-orange-500 via-yellow-400 to-orange-500 text-white font-bold text-1xl flex items-center justify-center gap-2 animate-pulse">

        <button className="bg-white text-orange-600 p-2 rounded-3xl shadow-inner">
          <span className="inline-block transform rotate-180 transition-transform duration-500 hover:rotate-0">
            <FaPlay size={15} />
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
  const [showCrackers, setShowCrackers] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowCrackers(true);
      // crackers disappear after animation
      setTimeout(() => setShowCrackers(false), 0);
    }, 0);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowCrackers(false);
  };

  return (
    <div className="fixed top-1/4 left-0 z-50">
      {showCrackers && <Crackers />}

      {!isOpen && <RunningLightTab onClick={handleOpen} />}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="offer-card"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 shadow-2xl w-96 p-6 rounded-r-2xl overflow-hidden border-4 border-orange-400"
          >
            {/* Glow border shimmer */}
            <motion.div
              className="absolute inset-0 rounded-r-2xl border-2 border-yellow-300"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>

            {/* Offer Content */}
            <div className="relative text-center z-10">
              <p className="text-gray-600 text-sm mb-1">✨ New Year Offer ✨</p>
              <h2 className="text-4xl font-extrabold text-orange-600 animate-pulse">
                33.33% OFF
              </h2>

              <div className="mt-4 bg-white p-3 rounded-lg shadow-inner border border-orange-200">
                <p className="font-semibold text-black">
                  Offer Code:{" "}
                  <span className="text-orange-600 font-bold">GL3000</span>
                </p>
                <p className="text-xs text-gray-600 font-semibold">
                  Applicable on your First Enrollment
                </p>
              </div>

              <a
                href="https://forms.gle/wUo2nSVz72nWQaxN8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300"
              >
                Enroll Now
              </a>

              <div className="flex flex-col gap-2 mt-4 text-black text-sm font-semibold">
                <span>✅ Genuine Reviews</span>
                <span>✅ Get 2 Domains on One Enrollment</span>
                <span>✅ Industry Professional Experts</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OfferBanner;
