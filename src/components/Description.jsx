// import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa";

// function About() {
//   return (
//     <motion.div
//       // initial={{ opacity: 0, y: 50 }}
//       // whileInView={{ opacity: 1, y: 0 }}
//       // viewport={{ once: true, amount: 0.2 }}
//       // transition={{ duration: 1 }}
//       className="w-full flex justify-center bg-gradient-to-b bg-orange-100 "
//     >
//       {/* 🔶 Inner Glassy Orange Container */}
//       <div className="rounded-3xl overflow-hidden m-4 md:m-10 bg-gradient-to-r from-[#ff6e0c] via-[#ff823d] to-[#ff994f] backdrop-blur-md border border-white/30 shadow-2xl max-w-[90rem] w-full">
//         {/* First Section */}
//         <motion.section className="w-full px-6 md:px-12 py-14 text-white rounded-t-3xl">
//           {/* TOP: Mission & Vision */}
//           <div className="grid md:grid-cols-2 gap-6 mb-14">
//             {/* Mission */}
//             <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
//               <p className="text-sm uppercase tracking-wider text-white/80 mb-2">
//                 What We Aspire To Be
//               </p>
//               <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
//               <p className="text-white/90 leading-relaxed">
//                 By putting the customer first and delivering excellence through
//                 innovation, we aim to create impactful learning experiences that
//                 empower students with real-world skills and career confidence.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
//               <p className="text-sm uppercase tracking-wider text-white/80 mb-2">
//                 Who We Are, What We Do
//               </p>
//               <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
//               <p className="text-white/90 leading-relaxed">
//                 Create intelligent software solutions that drive business
//                 success, foster innovation, and build a future-ready workforce
//                 through technology-driven education.
//               </p>
//             </div>
//           </div>

//           {/* BOTTOM: Core Values */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//             {[
//               {
//                 title: "Be the Best",
//                 desc: "We strive for excellence in everything we do.",
//                 color: "from-blue-600 to-blue-400",
//               },
//               {
//                 title: "Empower Through Technology",
//                 desc: "Using tech as a force to enable growth.",
//                 color: "from-orange-500 to-orange-400",
//               },
//               {
//                 title: "Embrace Openness",
//                 desc: "Transparency, trust, and collaboration.",
//                 color: "from-pink-500 to-pink-400",
//               },
//               {
//                 title: "People First",
//                 desc: "Learners and mentors are at our core.",
//                 color: "from-purple-500 to-purple-400",
//               },
//               {
//                 title: "Deliver on Promise",
//                 desc: "We do what we commit, every time.",
//                 color: "from-indigo-500 to-indigo-400",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -8 }}
//                 className={`rounded-xl p-6 text-center shadow-xl bg-gradient-to-b ${item.color}`}
//               >
//                 <h4 className="font-bold text-lg mb-2">{item.title}</h4>
//                 <p className="text-sm text-white/90 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </div>
//     </motion.div>
//   );
// }

// export default About;



// import { motion } from "framer-motion";

// function About() {
//   return (
//     <motion.div className="w-full flex justify-center bg-gradient-to-b from-orange-50 to-orange-100 py-10">
//       {/* Glass Container */}
//       <div
//         className="
//           max-w-[90rem] w-full mx-4 md:mx-10
//           rounded-3xl overflow-hidden
//           bg-white/25 backdrop-blur-xl
//           border border-white/30 shadow-2xl
//         "
//       >
//         {/* ===================== MISSION & VISION ===================== */}
//         <section className="px-6 md:px-12 py-14">
//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             {/* Mission */}
//             <div className="relative bg-white/40 backdrop-blur-lg rounded-2xl p-8 border border-white/40 shadow-xl">
//               <span className="absolute -top-3 left-6 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
//                 WHAT WE ASPIRE TO BE
//               </span>

//               <h3 className="text-4xl font-extrabold text-black/90 mb-4">
//                 OUR MISSION
//               </h3>

//               <p className="text-black/80 leading-relaxed">
//                Our mission is to empower students and young professionals with industry-aligned, practical skills that prepare them for the real world. By offering a wide range of internship programs, technical bootcamps, and project-based training, we strive to ensure a seamless transition from classroom education to corporate employment. Our goal is to not just train, but to mentor and guide every learner toward meaningful, long-term career success.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="relative bg-white/40 backdrop-blur-lg rounded-2xl p-8 border border-white/40 shadow-xl">
//               <span className="absolute -top-3 left-6 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
//                 WHO WE ARE, WHAT WE DO
//               </span>

//               <h3 className="text-4xl font-extrabold text-black/90 mb-4">
//                 OUR VISION
//               </h3>

//               <p className="text-black/80 leading-relaxed">
//                At Glowlogics, our vision is to democratize access to quality education and skill development, making it both affordable and effective. We aim to be a catalyst for change in the education ecosystem by enabling individuals from all walks of life to harness their potential, adapt to evolving industries, and thrive in the digital age. Through strategic partnerships and real-time learning modules, we envision a future where no learner is left behind.
//               </p>
//             </div>
//           </div>

//           {/* ===================== CORE VALUES ===================== */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
//             {[
//               {
//     title: "EXCELLENCE IN OUTCOMES",
//     desc: "We focus on real results — skills, confidence, and career readiness that truly matter.",
//     color: "from-blue-500/90 to-blue-300/90",
//   },
//   {
//     title: "LEARNING THROUGH TECHNOLOGY",
//     desc: "We use modern tools and platforms to make learning practical, engaging, and effective.",
//     color: "from-orange-500/90 to-orange-300/90",
//   },
//   {
//     title: "TRANSPARENCY & TRUST",
//     desc: "Clear guidance, honest support, and no false promises — your growth comes first.",
//     color: "from-pink-500/90 to-pink-300/90",
//   },
//   {
//     title: "STUDENTS AT THE CENTER",
//     desc: "Every program is designed around student needs, learning pace, and career goals.",
//     color: "from-purple-500/90 to-purple-300/90",
//   },
//   {
//     title: "COMMITMENT TO YOUR FUTURE",
//     desc: "We stand by our learners, supporting them beyond training toward long-term success.",
//     color: "from-indigo-500/90 to-indigo-300/90",
//   },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -10 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//                 className={`
//                   relative min-h-[280px] rounded-2xl p-6 pt-14
//                   text-center text-white shadow-xl
//                   bg-gradient-to-b ${item.color}
//                 `}
//               >
//                 {/* Icon Placeholder */}
//                 <div className="absolute top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center font-bold shadow">
//                   ★
//                 </div>

//                 <h4 className="font-extrabold uppercase tracking-wide text-lg mb-3">
//                   {item.title}
//                 </h4>

//                 <p className="text-sm leading-relaxed text-white/90">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </motion.div>
//   );
// }

// export default About;


import { motion } from "framer-motion";

function About() {
  return (
    <section className="w-full bg-[#fff3e6] py-20 flex justify-center">
      {/* Main Glass Wrapper */}
      <div className="max-w-[90rem] w-full mx-4 md:mx-10 rounded-3xl bg-white/60 border border-white/40 shadow-2xl">

        {/* ===================== MISSION & VISION ===================== */}
        <section className="px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-2 gap-10 mb-20">

            {/* Mission */}
            <div className="relative bg-white rounded-2xl p-10 shadow-lg">
              <span className="absolute -top-3 left-6 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                WHAT WE ASPIRE TO BE
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed text-base">
                Our mission is to empower students and young professionals with
                industry-aligned, practical skills that prepare them for the
                real world. Through internships, bootcamps, and project-based
                learning, we ensure a smooth transition from education to
                meaningful careers.
              </p>
            </div>

            {/* Vision */}
            <div className="relative bg-white rounded-2xl p-10 shadow-lg">
              <span className="absolute -top-3 left-6 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                WHO WE ARE, WHAT WE DO
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed text-base">
                Our vision is to make quality education accessible, affordable,
                and effective for every learner. We aim to create an ecosystem
                where students can continuously learn, adapt, and grow with
                confidence in an ever-evolving digital world.
              </p>
            </div>
          </div>

          {/* ===================== CORE VALUES ===================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {[
            {
    title: "Excellence in Outcomes",
    desc: "We focus on real skills, confidence, and career readiness that truly matter. Our programs are designed to deliver practical outcomes that students can apply immediately in academic, professional, and real-world environments.",
    gradient: "from-[#7aaeff] to-[#b6d2ff]",
  },
  {
    title: "Learning Through Technology",
    desc: "Modern tools and platforms make learning practical, engaging, and effective. We integrate industry-relevant technologies to ensure students stay updated with current trends and digital workflows.",
    gradient: "from-[#ff9f5a] to-[#ffd1ad]",
  },
  {
    title: "Transparency & Trust",
    desc: "Clear guidance, honest support, and no false promises at any stage. We believe trust is built through open communication, realistic expectations, and consistent mentorship.",
    gradient: "from-[#ff8fc7] to-[#ffd0e6]",
  },
  {
    title: "Students at the Center",
    desc: "Every program is designed around student needs and career goals. From curriculum planning to mentorship, learner growth and comfort remain our top priority.",
    gradient: "from-[#c59bff] to-[#e4d3ff]",
  },
  {
    title: "Commitment to Your Future",
    desc: "We support learners beyond training toward long-term success. Our guidance continues through career planning, skill refinement, and professional growth opportunities.",
    gradient: "from-[#8f9bff] to-[#c6ccff]",
  },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180 }}
                className={`relative min-h-[320px] rounded-2xl px-6 py-10 pt-16
                  text-center text-white shadow-lg bg-gradient-to-b ${item.gradient}`}
              >

                <h4 className="font-extrabold text-sm uppercase tracking-wide mb-3">
                  {item.title}
                </h4>

                <p className="text-sm leading-relaxed text-gray-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
