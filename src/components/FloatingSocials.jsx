import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

const clickSound = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-fast-double-click-on-mouse-275.wav"
);

const icons = [
  {
    id: "googleform",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-5 h-5"
      >
        <path d="M3 2a1 1 0 0 1 1-1h11l6 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2zm13 1.5V8h4.5L16 3.5zM6 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H6zm0-3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H6zm0 6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H6z" />
      </svg>
    ),
    color: "bg-purple-600 hover:bg-purple-700",
    href: "https://forms.gle/YOUR_FORM_LINK", // <-- Replace with actual form URL
    label: "Help",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp />,
    color: "bg-green-500 hover:bg-green-600",
    href: "https://wa.me/+919620294767",
    label: "WhatsApp",
  },
  {
    id: "instagram",
    icon: <FaInstagram />,
    color:
      "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90",
    href: "https://instagram.com/glowlogics",
    label: "Instagram",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    color: "bg-blue-700 hover:bg-blue-800",
    href: "https://linkedin.com/company/glowlogics",
    label: "LinkedIn",
  },
];


const FloatingSocials = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    clickSound.play();
    setIsOpen((prev) => !prev);
  };

  const radius = 130; // more distance to prevent clipping

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <AnimatePresence>
          {isOpen &&
            icons.map((item, index) => {
              const angle = isMobile
  ? Math.PI / 4 + (index * Math.PI) / 5 // better vertical spread
  : Math.PI / 1.8 + (index * Math.PI) / 6.5;


              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * -radius;

              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  animate={{ x, y, opacity: 1, scale: [1, 1.2, 1] }}
                  exit={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    bounce: 0.4,
                    delay: index * 0.1,
                  }}
                  className={`absolute text-white p-3 rounded-full shadow-lg ${item.color} group`}
                >
                  <div className="relative">
                    {item.icon}
                    {/* Tooltip */}
                    <span className="absolute left-12 top-1/2 transform -translate-y-1/2 scale-0 group-hover:scale-100 origin-left bg-black text-white text-xs px-2 py-1 rounded transition-all duration-200 dark:bg-white dark:text-black shadow-md whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </motion.a>
              );
            })}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="relative bg-black dark:bg-white dark:text-black text-white p-4 rounded-full shadow-xl transition-all animate-bounce hover:scale-105"
          aria-label="Toggle social icons"
        >
          {/* Tooltip */}
          {!isOpen && (
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black  text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap dark:bg-white dark:text-black">
             <b>Connect with Us!</b>            </span>
          )}

          {/* Icon */}
          {isOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaPlus className="text-xl animate-pulse" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingSocials;
