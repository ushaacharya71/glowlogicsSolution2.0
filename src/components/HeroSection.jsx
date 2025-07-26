import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import '../index.css';


import colabImage from "../assets/images/Colab.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";

// ✅ Image cards
const imageCards = [
  { img: img1, size: "large" },
  { img: img2, size: "medium" },
  { img: img3, size: "small" },
  { img: img4, size: "medium" },
  { img: img5, size: "large" },
];

// ✅ Map course names to routes
const courseRoutes = {
  "Artificial Intelligence": "/programs/Ai",
  "Data Science with MI": "/programs/DataSciences",
  "Cyber Security & Ethical Hacking": "/programs/CyberSecurity",
  "Web Development full Stack": "/programs/webDev",
  "Full Stack JAVA": "/programs/JavaFullstack",
  "Cloud Computing": "/programs/CloudComputing",
  "App Development": "/programs/AppDevelopment",
  "UI/UX": "/programs/UIUX",
  "VLSI": "/programs/VLSI",
  "IOT": "/programs/IOT",
  "AutoCAD with Self -paced MATLAB": "/programs/AutoCAD",
  "Digital Marketing": "/programs/DigitalMarketing",
  "HRM and Finance": "/programs/HRM",
  "Leadership and Management": "/programs/Leadership",
  "Advanced Excel with Power BI": "/programs/AdvancedExcel",
  "Accounting": "/programs/Accounting",
};

// ✅ Motion variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};
const imageCardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

// ✅ Hero Section-
export default function HeroSection() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleStartClick = () => {
    const path = courseRoutes[selectedCourse];
    if (path) {
      navigate(path);
    } else {
      alert("Please select a course to continue.");
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.section
        id="home"
        key="hero"
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-orange-100 px-4 pt-36 pb-20 font-sans"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center"
        >
          <motion.h1
            variants={fadeUpVariant}
            className=" sm:text-4xl md:text-5xl text-lg text-gray-900 leading-tight relative group"
          >
            <span className="relative z-10">
              Tired of Just Learning? <br />
              It’s Time to Build and{" "}
              <span className="text-[#ff6e0c] group-hover:underline">
                Get Career-Ready!
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl mx-auto font-medium"
          >
            Glowlogics gives you hands-on training, live projects, and a path to
            paid work. No fluff. Just results.
          </motion.p>

          {/* ✅ Dropdown & Start button */}
          <motion.div
            variants={fadeUpVariant}
            className="mt-6 w-full max-w-md bg-white border border-gray-200 rounded-full flex items-center justify-between px-3 py-1 shadow-md"
          >
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="bg-transparent text-sm text-gray-700 outline-none w-full h-8 font-medium"
            >
              <option value="">Select Courses</option>
              {Object.keys(courseRoutes).map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <button
              onClick={handleStartClick}
              className="bg-[#FFC107] text-black text-xs font-semibold px-4 py-1 rounded-full ml-2 hover:bg-[#e8b200] transition h-8"
            >
              Start
            </button>
          </motion.div>

          {/* ✅ Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center"
          >
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-[#FFA500] hover:ring-offset-2">
              <a
                href="https://forms.gle/jhJhFcEiMQrGgdub6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join now
              </a>
            </button>
            <button className="flex items-center gap-2 text-black hover:text-[#FFA500] font-medium transition-all duration-300 hover:scale-105">
              <FaPlay className="text-[#FFA500]" />
              <a href="https://www.youtube.com/@Glowlogics">Watch Demo</a>
            </button>
          </motion.div>
        </motion.div>

        {/* ✅ Mobile Pyramid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-4 mt-12 w-full px-4 sm:hidden"
        >
          <motion.div variants={imageCardVariant} className="w-[140px] h-[180px]">
            <img src={imageCards[2].img} className="rounded-xl shadow-md object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
          </motion.div>
          <div className="flex gap-4">
            {[1, 3].map((index) => (
              <motion.div key={index} variants={imageCardVariant} className="w-[160px] h-[200px]">
                <img src={imageCards[index].img} className="rounded-xl shadow-md object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
              </motion.div>
            ))}
          </div>
          <div className="flex gap-4">
            {[0, 4].map((index) => (
              <motion.div key={index} variants={imageCardVariant} className="w-[180px] h-[220px]">
                <img src={imageCards[index].img} className="rounded-xl shadow-md object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ✅ Grid Layout */}
        <motion.div
          className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12 w-full max-w-7xl px-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {imageCards.map((card, index) => (
            <motion.div
              key={index}
              variants={imageCardVariant}
              className={`group relative overflow-hidden rounded-xl shadow-md mx-auto transform transition-all duration-500 hover:scale-[1.04] ${
                card.size === "large"
                  ? "w-[220px] h-[270px]"
                  : card.size === "medium"
                  ? "w-[200px] h-[230px]"
                  : "w-[180px] h-[210px]"
              }`}
            >
              <img
                src={card.img}
                alt="Visual"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 scale-150 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ Collab Image */}
        <motion.div
          className="w-full flex justify-center mt-12 px-4"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={colabImage}
            alt="Collaboration Logos"
            className="w-full max-w-4xl h-auto object-contain transition-all duration-300"
            whileHover={{ scale: 1.03, filter: "brightness(1.05)" }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
