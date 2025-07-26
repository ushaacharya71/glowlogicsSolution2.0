import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaBriefcase,
  FaBullseye,
  FaUsers,
} from "react-icons/fa";
import { MdPeopleAlt, MdCalendarMonth } from "react-icons/md";

export default function GlowlogicsUltimate() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      cursor.animate(
        {
          transform: `translate(${e.clientX}px, ${e.clientY}px)`,
        },
        { duration: 300, fill: "forwards" }
      );
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row justify-center items-start gap-12 p-10 bg-orange-100 overflow-hidden">
      {/* Subtle Glass Background Shadow */}
      <div className="absolute inset-0 bg-gradient-to-br"></div>

      {/* Heading Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:w-1/3 w-full z-10"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Why <span className="text-[#ff6e0c]">Glowlogics Solutions</span>?
        </h2>
        <p className="text-black text-lg leading-relaxed">
          At Glowlogics, we help students, graduates, and working professionals
          turn skills into real careers. Our ISO- and MSME-certified programs
          are designed to bridge the gap between learning and hiring. Whether
          you are aiming for IT, electronics, or business roles, our training is
          built around what companies actually look for.
        </p>

        <ul className="list-disc pl-6 text-black mt-4 space-y-2 text-base">
          <li>
            Industry-Certified Programs: ISO & MSME-recognized certifications
            trusted by employers.
          </li>
          <li>
             Live Projects & Case Studies: Build real-world skills with
            portfolio-worthy projects.
          </li>
          <li>
             Dedicated Career Support: Resume building, LinkedIn profile
            guidance, mock interviews, and placement help.
          </li>
          <li>
             Lifetime Learning Access: Stay updated with evolving tech through
            lifetime course access.
          </li>
          <li>
             National Hackathons & Workshops: Exclusive events in
            collaboration with E-Cell IIT Hyderabad & Techfest IIT Bombay.
          </li>
          <li>
             Flexible Programs: Options for engineering students, graduates.
          </li>
          <li>
             Strong Learner Community: Connect with mentors, peers, and hiring
            companies.
          </li>
        </ul>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative lg:w-2/3 backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="cursor-pointer group bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex justify-center items-center mb-6">
              <div
                className={`text-5xl ${item.color} group-hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.3)] transition`}
              >
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2 text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-700 text-center text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Smooth Magnetic Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 rounded-full bg-black opacity-80 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
  );
}

const data = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Learn from Industry Experts",
    desc: "Live sessions led by professionals from top MNCs.",
    color: "text-red-500",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Hands-On Projects",
    desc: "Build real-world projects for your portfolio.",
    color: "text-yellow-500",
  },
  {
    icon: <FaBriefcase />,
    title: "ISO-Certified Programs",
    desc: "Get recognized certifications that add value to your resume.",
    color: "text-blue-500",
  },
  {
    icon: <FaBullseye />,
    title: "Career Support",
    desc: "Resume building, mock interviews, and placement guidance.",
    color: "text-green-500",
  },
  {
    icon: <FaUsers />,
    title: "Flexible Learning Options",
    desc: "Choose live, online, or self-paced formats.",
    color: "text-purple-500",
  },
  {
    icon: <MdCalendarMonth />,
    title: "Hackathons & Workshops",
    desc: "Access national-level events through our collaborations.",
    color: "text-pink-500",
  },
  {
    icon: <MdPeopleAlt />,
    title: "30,000+ Students",
    desc: "A growing community learning and getting hired across industries.",
    color: "text-indigo-500",
  },
];
