
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// // ✅ Logo Imports
// import logo1 from "../assets/logos/logo1.png";
// import logo2 from "../assets/logos/logo2.png";
// import logo3 from "../assets/logos/logo3.png";
// import logo4 from "../assets/logos/logo4.png";
// import logo5 from "../assets/logos/logo5.png";
// import logo6 from "../assets/logos/logo6.png";
// import logo7 from "../assets/logos/logo7.png";
// import logo8 from "../assets/logos/logo8.png";
// import logo9 from "../assets/logos/logo9.png";
// import logo10 from "../assets/logos/logo10.png";
// import logo11 from "../assets/logos/logo11.png";
// import logo12 from "../assets/logos/logo12.png";
// import logo13 from "../assets/logos/logo13.png";
// import logo14 from "../assets/logos/logo14.png";
// import logo15 from "../assets/logos/logo15.png";
// import logo16 from "../assets/logos/logo16.png";
// import logo17 from "../assets/logos/logo17.png";
// import logo18 from "../assets/logos/logo18.png";
// import logo19 from "../assets/logos/logo19.png";
// import logo20 from "../assets/logos/logo20.png";
// import logo21 from "../assets/logos/logo21.png";
// import logo22 from "../assets/logos/logo22.png";
// import logo23 from "../assets/logos/logo23.png";
// import logo24 from "../assets/logos/logo24.png";
// import logo25 from "../assets/logos/logo25.png";
// import logo26 from "../assets/logos/logo26.png";
// import logo27 from "../assets/logos/logo27.png";
// import logo28 from "../assets/logos/logo28.png";
// import logo29 from "../assets/logos/logo29.png";
// import logo30 from "../assets/logos/newlogo.svg";

// const logos = [
//   logo1,
//   logo2,
//   logo3,
//   logo4,
//   logo5,
//   logo6,
//   logo7,
//   logo8,
//   logo9,
//   logo10,
//   logo11,
//   logo12,
//   logo13,
//   logo14,
//   logo15,
//   logo16,
//   logo17,
//   logo18,
//   logo19,
//   logo20,
//   logo21,
//   logo22,
//   logo23,
//   logo24,
//   logo25,
//   logo26,
//   logo27,
//   logo28,
//   logo29,
//   logo30,
// ];

// export default function MarqueeSlider() {
//   const [speed, setSpeed] = useState(60);

//   useEffect(() => {
//     const isMobile = window.innerWidth < 768;
//     setSpeed(isMobile ? 90 : 60);
//   }, []);

//   return (
//     <section className="w-full bg-gradient-to-b from-orange-50 to-orange-100 py-16 px-4 text-center">
//       {/* Heading */}
//       <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
//         Top Companies Where Our Learners Currently Work
//       </h2>
//       <p className="text-sm md:text-base text-gray-600 mb-10">
//         Making an impact in their fields, our learners work at top companies all
//         around the world.
//       </p>

//       {/* ================= ROW 1 : LOGOS ================= */}
//       <div className="overflow-hidden mb-10">
//         <motion.div
//           className="flex w-max gap-12"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ ease: "linear", duration: speed, repeat: Infinity }}
//         >
//           {[...logos, ...logos].map((logo, index) => (
//             <div
//               key={`row1-${index}`}
//               className="flex items-center justify-center min-w-[120px] px-4"
//             >
//               <img
//                 src={logo}
//                 alt={`logo-${index}`}
//                 className="h-20 md:h-24 object-contain rounded-xl transition-transform duration-300 hover:scale-110"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* ================= ROW 2 : COMING SOON MARQUEE ================= */}
//       <div className="overflow-hidden bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl py-6 shadow-lg">
//         <motion.div
//           className="flex w-max gap-24 text-white font-semibold text-lg md:text-1xl tracking-wide font-['Inter']"
//           animate={{ x: ["-50%", "0%"] }}
//           transition={{ ease: "linear", duration: 30, repeat: Infinity }}
//         >
//           {[
//             "Gen AI & Prompt Engineering Program Coming Soon",
//             "Live Hackathons Launching Shortly",
//             "Internship Programs Are Live Now",
//             "AI & Emerging Tech Workshops Starting Soon",
//             "Global Placement Partnerships Expanding",
//           ]
//             .concat([
//               "Gen AI & Prompt Engineering Program Coming Soon",
//               "Live Hackathons Launching Shortly",
//               "Internship Programs Are Live Now",
//               "AI & Emerging Tech Workshops Starting Soon",
//               "Global Placement Partnerships Expanding",
//             ])
//             .map((text, index) => (
//               <span key={index} className="poppins whitespace-nowrap">
//                 {text}
//               </span>
//             ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaRobot,
  FaTrophy,
  FaUserGraduate,
  FaMicrochip,
  FaGlobe,
} from "react-icons/fa";

// ✅ Logo Imports
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.png";
import logo10 from "../assets/logos/logo10.png";
import logo11 from "../assets/logos/logo11.png";
import logo12 from "../assets/logos/logo12.png";
import logo13 from "../assets/logos/logo13.png";
import logo14 from "../assets/logos/logo14.png";
import logo15 from "../assets/logos/logo15.png";
import logo16 from "../assets/logos/logo16.png";
import logo17 from "../assets/logos/logo17.png";
import logo18 from "../assets/logos/logo18.png";
import logo19 from "../assets/logos/logo19.png";
import logo20 from "../assets/logos/logo20.png";
import logo21 from "../assets/logos/logo21.png";
import logo22 from "../assets/logos/logo22.png";
import logo23 from "../assets/logos/logo23.png";
import logo24 from "../assets/logos/logo24.png";
import logo25 from "../assets/logos/logo25.png";
import logo26 from "../assets/logos/logo26.png";
import logo27 from "../assets/logos/logo27.png";
import logo28 from "../assets/logos/logo28.png";
import logo29 from "../assets/logos/logo29.png";
import logo30 from "../assets/logos/newlogo.svg";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
];

const announcements = [
  { icon: <FaRobot />, text: "Gen AI & Prompt Engineering Program Coming Soon" },
  { icon: <FaTrophy />, text: "Live Hackathons Launching Shortly" },
  { icon: <FaUserGraduate />, text: "Internship Programs Are Live Now" },
  { icon: <FaMicrochip />, text: "AI & Emerging Tech Workshops Starting Soon" },
  { icon: <FaGlobe />, text: "Global Placement Partnerships Expanding" },
];

export default function MarqueeSlider() {
  const [speed, setSpeed] = useState(60);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setSpeed(isMobile ? 90 : 60);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-orange-100 py-16 px-4 text-center">

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
        Top Companies Where Our Learners Currently Work
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-10">
        Making an impact in their fields, our learners work at top companies all
        around the world.
      </p>

      {/* ================= ROW 1 : LOGOS ================= */}
      <div className="overflow-hidden mb-12">
        <motion.div
          className="flex w-max gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center justify-center min-w-[120px] px-4"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-20 md:h-24 object-contain rounded-xl transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= ROW 2 : ANNOUNCEMENT MARQUEE ================= */}
      <div className="overflow-hidden bg-gradient-to-r from-orange-700 to-orange-500 rounded-xl py-5 shadow-xl">
        <motion.div
          className="flex w-max gap-24 text-white font-semibold text-lg md:text-3xl tracking-wide font-['Inter']"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...announcements, ...announcements].map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-4 font-['DM Sans'] whitespace-nowrap"
            >
              <span className="text-xl md:text-2xl">
                {item.icon}
              </span>
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}