import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaBriefcase,
  FaBullseye,
  FaUsers,
} from "react-icons/fa";
import { MdPeopleAlt, MdCalendarMonth, MdAssignment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function GlowlogicsUltimate() {
  const cursorRef = useRef(null);
  const navigate = useNavigate();

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
          bridge the gap between learning and hiring.
        </p>

        <ul className="list-disc pl-6 text-black mt-4 space-y-2 text-base">
          <li>ISO & MSME-recognized certifications trusted by employers.</li>
          <li>Portfolio-building live projects and case studies.</li>
          <li>Placement support with resume & LinkedIn guidance.</li>
          <li>Lifetime access to updated learning materials.</li>
          <li>Hackathons with IIT Hyderabad & IIT Bombay.</li>
          <li>Flexible programs for students & graduates.</li>
          <li>Strong learner community & hiring network.</li>
        </ul>
      </motion.div>

      {/* Main Cards Section */}
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
            onClick={item.onClick ? () => item.onClick(navigate) : null}
            className={`
              cursor-pointer group rounded-2xl p-8
              backdrop-blur-lg bg-white/30 transition-all duration-500
              shadow-lg hover:shadow-2xl
              ${item.glow
                ? "border-2 border-orange-400 shadow-[0_0_12px_rgba(255,140,0,0.5)] hover:shadow-[0_0_18px_rgba(255,140,0,0.8)]"
                : "border border-white/30"
              }
            `}
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

      {/* Custom Cursor */}
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
    desc: "Live sessions by professionals from top MNCs. Build real-world projects.",
    color: "text-red-500",
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
    desc: "Resume building, mock interviews, and placement preparation.",
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
    desc: "Participate in national-level events and tech workshops.",
    color: "text-pink-500",
  },
  {
    icon: <MdPeopleAlt />,
    title: "30,000+ Learners",
    desc: "A growing community learning and getting hired across industries.",
    color: "text-indigo-500",
  },

  // 🔥 Verification Cards With Glowing Orange Border
  {
    icon: <MdAssignment />,
    title: "Certificate Verification",
    desc: "Verify your Glowlogics certificate instantly using your unique ID.",
    color: "text-orange-500",
    glow: true,
    onClick: (navigate) => navigate("/certificate-verification"),
  },
  {
    icon: <MdAssignment />,
    title: "Placement Training Certificate Verification",
    desc: "Verify your placement training completion recognized by recruiters.",
    color: "text-green-500",
    glow: true,
    onClick: (navigate) => navigate("/placement-verification"),
  },
  {
    icon: <MdAssignment />,
    title: "VTU Internship Certificate Verification",
    desc: "Verify your VTU-approved internship certificate authenticity.",
    color: "text-yellow-500",
    glow: true,
    onClick: (navigate) => navigate("/vtu-verification"),
  },
];
