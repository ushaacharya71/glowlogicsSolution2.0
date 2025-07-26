import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="w-full flex justify-center bg-orange-100" // Outer white background
    >
      {/* 🔶 Inner Glassy Orange Container */}
      <div className="rounded-3xl overflow-hidden m-4 md:m-10 bg-[#ff6e0c] backdrop-blur-md border border-white/30 shadow-xl max-w-[90rem] w-full">
        {/* First Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="w-full px-6 md:px-12 py-12 md:py-20 text-black space-y-16 rounded-t-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold border-t-[1px] pt-10 border-[#a1b562]">
            Learn from Experts at Top MNCs:
          </h2>

          {/* Approach, Vision, Mission Cards */}
          <div className="space-y-12">
            {[
              {
                title: "Who We Are",
                text: "Glowlogics Solutions is a government-recognized MSME and proudly certified under the Startup India initiative. We offer ISO-certified internship and training programs designed to bridge the gap between academic knowledge and industry demands. As official collaborators with Techfest, IIT Bombay, and E-Cell, IIT Hyderabad, we actively conduct nationwide hackathons, workshops, and innovation challenges to equip students with cutting-edge skills. Our commitment is to deliver practical, hands-on learning experiences that not only enhance technical know-how but also build confidence and job-readiness among today’s youth.",
                img: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlfGVufDB8fDB8fHww",
              },
              {
                title: "Our Vision",
                text: "At Glowlogics, our vision is to democratize access to quality education and skill development, making it both affordable and effective. We aim to be a catalyst for change in the education ecosystem by enabling individuals from all walks of life to harness their potential, adapt to evolving industries, and thrive in the digital age. Through strategic partnerships and real-time learning modules, we envision a future where no learner is left behind.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D",
              },
              {
                title: "Our Mission",
                text: "Our mission is to empower students and young professionals with industry-aligned, practical skills that prepare them for the real world. By offering a wide range of internship programs, technical bootcamps, and project-based training, we strive to ensure a seamless transition from classroom education to corporate employment. Our goal is to not just train, but to mentor and guide every learner toward meaningful, long-term career success.",
                img: "https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=FbH7i1I3oCXoRfZKFvGj3jMXnsljD8mPmDmvY4IxQuA=",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Text Left */}
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-base leading-relaxed">{item.text}</p>
                </div>

                {/* Image Right */}
                <div className="md:w-1/2 h-48 md:h-56 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
  href="/GlowLogics.pdf"
  download
  className="inline-flex uppercase gap-2 items-center px-6 py-2 bg-zinc-900 rounded-full text-white shadow-lg hover:bg-[#6b9e17] transition-all duration-300 group"
>
  Brochure
  <span className="w-2 h-2 bg-orange-100 rounded"></span>
</a>
        </motion.section>

        {/* Second Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="bg-[#ff6e0c] text-black py-16 px-6 md:px-12 rounded-b-3xl"
        >
          <div className="border-t border-black mb-12"></div>

          <div className="grid md:grid-cols-[1fr_3fr_2fr] gap-10 md:gap-16 text-base md:text-lg items-start">
            <div className="font-semibold text-xl md:text-2xl">
              What You’ll Experience with Glowlogics
            </div>

            {/* POINTS AS BOLD LIST ITEMS */}
            <div className="space-y-6 text-justify">
              {[
                {
                  heading: "→ Collaborative Learning Environment",
                  desc: "Learn alongside passionate students, professionals, and industry mentors committed to growth in today’s digital-first world.",
                },
                {
                  heading: "→ Skills You Can Actually Use",
                  desc: "Our programs focus on practical,real-world applications not just theory. Build skills and projects that directly apply to your career.",
                },
                {
                  heading: "→ Guidance from Industry Experts",
                  desc: "Gain insights from experienced professionals and mentors from top MNCs, ensuring you learn what’s relevant and in-demand.",
                },
                {
                  heading: "→ Career-Driven Training",
                  desc: "Everything you do with us from Training to projects is designed with employability in mind, helping you stand out in interviews and job placements.",
                },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="space-y-1"
                >
                  <p className="font-semibold">{point.heading}</p>
                  <p className="leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Blog List and Image */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold">Our Blogs:</p>
                <ul className="space-y-2 underline text-base md:text-lg text-zinc-800">
                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-950 transition-colors"
                    >
                      Latest Trends
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-950 transition-colors"
                    >
                      Career Tips
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-950 transition-colors"
                    >
                      Industry Insights
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-950 transition-colors"
                    >
                      Learning Resources
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-40 h-auto rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1627556704243-5f0771d90783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXZlcnNpdHklMjBzdHVkZW50fGVufDB8fDB8fHww"
                  alt="Blog Preview"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default About;
