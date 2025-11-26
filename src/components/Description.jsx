import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, amount: 0.2 }}
      // transition={{ duration: 1 }}
      className="w-full flex justify-center bg-gradient-to-b bg-orange-100 "
    >
      {/* 🔶 Inner Glassy Orange Container */}
      <div className="rounded-3xl overflow-hidden m-4 md:m-10 bg-gradient-to-r from-[#ff6e0c] via-[#ff823d] to-[#ff994f] backdrop-blur-md border border-white/30 shadow-2xl max-w-[90rem] w-full">
        {/* First Section */}
        <motion.section
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, amount: 0.2 }}
          // transition={{ duration: 1 }}
          className="w-full px-6 md:px-12 py-12 md:py-20 text-white space-y-16 rounded-t-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center drop-shadow-md">
            Learn from Experts at Top MNCs
          </h2>

          {/* Approach, Vision, Mission Cards */}
          <div className="space-y-10">
            {[
              {
                title: "Who We Are",
                text: "Glowlogics Solutions is a government-recognized MSME and proudly certified under the Startup India initiative. We offer ISO-certified internship and training programs designed to bridge the gap between academic knowledge and industry demands. As official collaborators with Techfest, IIT Bombay, and E-Cell, IIT Hyderabad, we actively conduct nationwide hackathons, workshops, and innovation challenges to equip students with cutting-edge skills. Our commitment is to deliver practical, hands-on learning experiences that not only enhance technical know-how but also build confidence and job-readiness among today’s youth.",
                img: "https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
              },
              {
                title: "Our Vision",
                text: "At Glowlogics, our vision is to democratize access to quality education and skill development, making it both affordable and effective. We aim to be a catalyst for change in the education ecosystem by enabling individuals from all walks of life to harness their potential, adapt to evolving industries, and thrive in the digital age. Through strategic partnerships and real-time learning modules, we envision a future where no learner is left behind.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60",
              },
              {
                title: "Our Mission",
                text: "Our mission is to empower students and young professionals with industry-aligned, practical skills that prepare them for the real world. By offering a wide range of internship programs, technical bootcamps, and project-based training, we strive to ensure a seamless transition from classroom education to corporate employment. Our goal is to not just train, but to mentor and guide every learner toward meaningful, long-term career success.",
                img: "https://img.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-white/90">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/80 hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="md:w-1/2 h-56 rounded-2xl overflow-hidden shadow-2xl border border-white/40"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/GlowLogics.pdf"
            download
            className="inline-flex gap-3 items-center px-8 py-3 bg-gradient-to-r from-zinc-900 via-black to-zinc-800 rounded-full text-white font-semibold shadow-lg hover:from-[#6b9e17] hover:to-[#8ac926] transition-all duration-300"
          >
            <FaDownload />
            Download Brochure
          </motion.a>
        </motion.section>

        {/* Second Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-[#ff823d] to-[#ff994f] text-white py-16 px-6 md:px-12 rounded-b-3xl"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="border-t-2 border-white/60 mb-12 origin-left"
          ></motion.div>

          <div className="grid md:grid-cols-[1fr_3fr_2fr] gap-10 md:gap-16 text-base md:text-lg items-start">
            <div className="font-semibold text-xl md:text-2xl">
              What You’ll Experience with Glowlogics ✨
            </div>

            {/* POINTS */}
            <div className="space-y-6 text-justify">
              {[
                {
                  heading: "→ Collaborative Learning Environment",
                  desc: "Learn alongside passionate students, professionals, and industry mentors...",
                },
                {
                  heading: "→ Skills You Can Actually Use",
                  desc: "Our programs focus on practical, real-world applications not just theory...",
                },
                {
                  heading: "→ Guidance from Industry Experts",
                  desc: "Gain insights from experienced professionals and mentors from top MNCs...",
                },
                {
                  heading: "→ Career-Driven Training",
                  desc: "Everything you do with us is designed with employability in mind...",
                },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="space-y-1"
                >
                  <p className="font-semibold text-white">{point.heading}</p>
                  <p className="leading-relaxed text-white/80">{point.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Blogs + Image */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold">Our Blogs 📚</p>
                <ul className="space-y-2 underline text-base md:text-lg text-white/90">
                  {[
                    "Latest Trends",
                    "Career Tips",
                    "Industry Insights",
                    "Learning Resources",
                  ].map((blog, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {blog}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-40 h-auto rounded-xl overflow-hidden shadow-lg border border-white/40"
              >
                <img
                  src="https://images.unsplash.com/photo-1627556704243-5f0771d90783?w=500&auto=format&fit=crop&q=60"
                  alt="Blog Preview"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default About;
