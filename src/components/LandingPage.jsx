import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import colabImage from "../assets/images/Colab.png";

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const HeroSection = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const tutors = [
    {
      name: "Harsh Jaiswal",
      role: "Chemistry Teacher",
      university: "University of Oxford, UK",
      img: "https://plus.unsplash.com/premium_photo-1691962725086-d1590e379139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZSUyMHN0dWRlbnRzfGVufDB8fDB8fHww",
      rating: "★★★★★",
    },
    {
      name: "Tutor A",
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZSUyMHN0dWRlbnRzfGVufDB8fDB8fHww",
    },
    {
      name: "Tutor B",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGxlZ2UlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Tutor C",
      img: "https://www.learning.com/wp-content/uploads/2021/02/Children-Learning-Online.jpg",
    },
  ];

  const technicalCourses = [
    "Artificial Intelligence",
    "Data Science with MI",
    "Cyber Security & Ethical Hacking",
    "Web Development full Stack",
    "Full Stack JAVA",
    "Cloud Computing",
    "App Development",
    "UI/UX",
    "VLSI",
    "IOT",
    "AutoCAD with Self‑paced MATLAB",
  ];
  const nonTechnicalCourses = [
    "Digital Marketing",
    "HRM and Finance",
    "Leadership and Management",
    "Advanced Excel with Power BI",
    "Accounting",
  ];
  const otherCourses = ["Placement Training with Certificate"];
  const allCourses = [...technicalCourses, ...nonTechnicalCourses, ...otherCourses];

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen bg-white px-6 md:px-20 pt-[160px] lg:pt-[200px] pb-20 flex flex-col-reverse lg:flex-row items-start justify-between gap-12 relative overflow-hidden"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="show"
        className="relative w-full lg:w-1/2 flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          <div className="relative grid grid-cols-2 gap-6 items-center">
            <motion.div className="row-span-2 relative" variants={childVariants}>
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="rounded-[2rem] shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
              >
                <img
                  src={tutors[0].img}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-80 h-[26rem] object-cover rounded-[2rem] transition-opacity duration-700 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  alt={tutors[0].name}
                />
                <div className="p-6 text-center bg-white">
                  <h3 className="text-2xl font-bold text-gray-900">{tutors[0].name}</h3>
                  <p className="text-gray-600 text-sm">{tutors[0].role}</p>
                  <p className="text-gray-500 text-sm">{tutors[0].university}</p>
                  <div className="mt-1 text-yellow-500 text-lg">{tutors[0].rating}</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.07 }} className="absolute top-6 -left-32 bg-white p-5 rounded-xl shadow-xl w-56">
                <p className="font-semibold text-gray-800 text-base">Academic Success</p>
                <p className="text-sm text-gray-500 mt-1">Build a strong foundation.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.07 }} className="absolute bottom-6 -left-32 bg-white p-5 rounded-xl shadow-xl w-56">
                <p className="font-semibold text-gray-800 text-base">Career Guidance</p>
                <p className="text-sm text-gray-500 mt-1">Mentorship for your goals.</p>
              </motion.div>
            </motion.div>
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                variants={childVariants}
                className="relative w-60 h-48 rounded-[2rem] overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <img
                  src={tutors[i].img}
                  alt={tutors[i].name}
                  className="w-full h-full object-cover rounded-[2rem] group-hover:brightness-110 group-hover:scale-105 transition duration-300 ease-in-out"
                />
              </motion.div>
            ))}
            <div className="absolute left-[46%] top-[46%] -translate-x-1/2 -translate-y-1/2 bg-purple-500 px-6 py-2 rounded-full text-white font-bold shadow-md z-10">
              ◯◯◯◯
            </div>
            <div className="absolute -top-4 left-1/4 transform -translate-x-1/2 rotate-[175deg] z-10">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="absolute top-[10%] left-[10%] w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-[12%] right-[15%] w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
          <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }} className="mt-6">
            <img
              src={colabImage}
              alt="Collaboration Logos"
              className="w-[70%] max-w-3xl h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" animate="show" className="w-full lg:w-[45%] text-left space-y-6">
        <motion.h1 variants={childVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Find The <span className="text-[#8BCA1E] drop-shadow-sm">Best Tutors</span> <br />
          Around The Globe <br />
          For Your Career Success.
        </motion.h1>
        <motion.p variants={childVariants} className="text-base sm:text-lg text-gray-500 max-w-md">
          Learn from world‑class educators across Technical and Non‑Technical domains. Certification included.
        </motion.p>
        <motion.div variants={childVariants} className="bg-white border border-gray-200 text-black p-4 rounded-xl w-full max-w-md shadow-sm">
          <p className="text-base font-semibold mb-2">Want to upskill myself on..</p>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            <select
              className="rounded-full px-4 py-2 text-sm text-black w-full outline-none border border-gray-300"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Select Courses</option>
              {allCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <button className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition">
              Start Learning
            </button>
          </div>
        </motion.div>
        <motion.div variants={childVariants} className="flex flex-wrap gap-4 items-center mt-6">
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">Join now</button>
          <button className="flex items-center text-black font-medium">
            <FaPlay className="text-orange-500 mr-2" /> Watch Demo
          </button>
        </motion.div>
        <motion.div variants={childVariants} className="flex items-center gap-2 mt-6">
          {tutors.slice(0, 4).map((t, index) => (
            <img
              key={index}
              src={t.img}
              className="w-9 h-9 rounded-full border-2 border-white -ml-2 first:ml-0"
              alt="tutor-avatar"
            />
          ))}
          <p className="text-sm text-gray-600 ml-2">More Than 2k+ Tutors</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;