

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
