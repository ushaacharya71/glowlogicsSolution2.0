import "./EventHub.css";
import { motion } from "framer-motion";

const languageIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
];

const EventHub = () => {
  return (
    <section className="eventhub-container">
      {/* LEFT SECTION */}
      <div className="eventhub-left">
        <motion.h1
          initial={{ opacity: 10, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold text-gray-100 leading-snug md:leading-tight"
        >
          Join our upcoming <br />
          <strong className="text-blue-800">Hackathons & Workshops</strong>{" "}
          <br />
          to learn, build, compete, and <br />
          <strong className="text-blue-800">grow together.</strong>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="eventhub-btn mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
        >
          Start Learning
        </motion.button>
      </div>

      {/* RIGHT SECTION */}
      <div className="eventhub-right">
        <div className="orbit-wrapper">
          <div className="central-text">
            <h2>20k+</h2>
            <p>Developers</p>
          </div>

          {/* Small Orbit */}
          <div className="orbit orbit-sm">
            <img src={languageIcons[0]} alt="icon" />
            <img src={languageIcons[1]} alt="icon" />
          </div>

          {/* Medium Orbit */}
          <div className="orbit orbit-md">
            <img src={languageIcons[2]} alt="icon" />
            <img src={languageIcons[3]} alt="icon" />
            <img src={languageIcons[4]} alt="icon" />
          </div>

          {/* Large Orbit */}
          <div className="orbit orbit-lg">
            <img src={languageIcons[5]} alt="icon" />
            <img src={languageIcons[6]} alt="icon" />
            <img src={languageIcons[7]} alt="icon" />
            <img src={languageIcons[8]} alt="icon" />
            <img src={languageIcons[9]} alt="icon" />
          </div>

          {/* Extra-Large Orbit */}
          <div className="orbit orbit-xl">
            <img src={languageIcons[10]} alt="icon" />
            <img src={languageIcons[11]} alt="icon" />
            <img src={languageIcons[12]} alt="icon" />
            <img src={languageIcons[13]} alt="icon" />
          </div>
        </div>
      </div>

      <div className="org-fullwidth-cards">
        <div className="org-card textured red relative">
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Upcoming
          </span>
          <h4>Hackathon</h4>
          <h2>AI Innovation Sprint</h2>
          <p>
            Join our upcoming 48-hour AI Hackathon to build real-world solutions
            with machine learning and LLMs.
          </p>
          <div className="org-footer">
            <span>⭐ 4.9</span>
            <span>July 25–27</span>
          </div>
        </div>

        <div className="org-card textured green relative">
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Upcoming
          </span>
          <h4>Workshop</h4>
          <h2>Cloud & DevOps Bootcamp</h2>
          <p>
            Hands-on workshop on deploying scalable apps using AWS, Docker,
            Jenkins & CI/CD.
          </p>
          <div className="org-footer">
            <span>⭐ 4.8</span>
            <span>Aug 10</span>
          </div>
        </div>

        <div className="org-card textured orange relative">
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Upcoming
          </span>
          <h4>Hackathon</h4>
          <h2>Cyber Security Challenge</h2>
          <p>
            Compete in live ethical hacking rounds and solve security
            vulnerabilities in real-time.
          </p>
          <div className="org-footer">
            <span>⭐ 5.0</span>
            <span>Open for Registration</span>
          </div>
        </div>

        <div className="org-card textured pink relative">
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Upcoming
          </span>
          <h4>Workshop</h4>
          <h2>UI/UX Design Lab</h2>
          <p>
            Explore Figma, wireframes & design systems through hands-on
            prototyping challenges.
          </p>
          <div className="org-footer">
            <span>⭐ 4.6</span>
            <span>Limited Seats</span>
          </div>
        </div>

        <div className="org-card textured blue relative">
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Upcoming
          </span>
          <h4>Hackathon</h4>
          <h2>Data Science Sprint</h2>
          <p>
            Solve real industry case studies using Python, Pandas, and machine
            learning models.
          </p>
          <div className="org-footer">
            <span>⭐ 4.7</span>
            <span>Upcoming in August</span>
          </div>
        </div>

        <div className="org-card textured bg-orange-400">
          <h4>Workshop</h4>
          <h2>Git & GitHub Mastery</h2>
          <p>
            Learn version control, branching, and contributing to open-source
            like a pro.
          </p>
          <div className="org-footer">
            <span>⭐ 4.5</span>
            <span>July 18</span>
          </div>
        </div>

        <div className="org-card textured bg-red-600 relative">
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Upcoming
          </span>
          <h4>Hackathon</h4>
          <h2>Startup Builder Hack</h2>
          <p>
            Turn your ideas into MVPs and pitch to a panel of mentors &
            investors.
          </p>
          <div className="org-footer">
            <span>⭐ 4.8</span>
            <span>Registrations Close July 20</span>
          </div>
        </div>

        <div className="org-card textured bg-pink-950">
          <h4>Workshop</h4>
          <h2>AI Prompt Engineering</h2>
          <p>
            Master the art of crafting effective prompts for ChatGPT, Claude,
            and LLM tools.
          </p>
          <div className="org-footer">
            <span>⭐ 4.9</span>
            <span>Free - Aug 3</span>
          </div>
        </div>

        <div className="org-card textured bg-purple-600">
          <h4>Workshop</h4>
          <h2>Resume & Portfolio Builder</h2>
          <p>
            Optimize your resume, GitHub, LinkedIn, and get ready for hiring
            season.
          </p>
          <div className="org-footer">
            <span>⭐ 4.6</span>
            <span>Placement Focused</span>
          </div>
        </div>
      </div>

     <div className="w-full flex justify-center">
  <div className="w-full max-w-6xl p-4 border border-gray-300 rounded-xl bg-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-center gap-6">
    {/* Card 1 */}
    <div className="relative w-[90%] md:w-[650px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 border border-gray-200">
      <a
        href="https://forms.gle/LcrGRk8FaSzgoqkV8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/Workshopp.png"
          alt="Workshop"
          className="w-full h-auto object-cover"
        />
        <button className="absolute bottom-4 left-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
          Register Now
        </button>
      </a>
    </div>

    {/* Card 2 */}
    <div className="relative w-[90%] md:w-[650px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 border border-gray-200">
      <a
        href="https://forms.gle/gNCR3tfDTEtkjZfx6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://media.istockphoto.com/id/1189767041/vector/hackathon-signs-round-design-template-thin-line-icon-concept-vector.jpg?s=612x612&w=0&k=20&c=DW-btIjpNjItFfk35N4KvrMkoGoqd1rEPwb_uV9IZEU="
          alt="Hackathon"
          className="w-full h-auto object-cover"
        />
        <button className="absolute bottom-4 left-4 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
          Register Now
        </button>
      </a>
    </div>
  </div>
</div>


      <div className="w-full h-screen overflow-hidden rounded-[40px] shadow-2xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/HackathonVideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" py-12 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-10 leading-snug">
          Admiration expressed by others regarding our presence.
        </h2>

        <div className="relative w-full space-y-8 overflow-x-hidden">
          <div className="flex w-max animate-marquee space-x-6 px-6 items-start">
            {[...Array(2)].flatMap(() =>
              [
                {
                  name: "Vrinda K",
                  title: "Dayalbagh Educational Institute",
                  text: "I had a great learning experience with Glow Logics while pursuing their cloud computing course. The curriculum was hands-on and project-focused, which helped me apply theoretical concepts to real-world scenarios. The projects I worked on not only deepened my understanding but also significantly strengthened my resume. I’m truly grateful for the practical exposure and support provided throughout the course.",
                  img: "/vrindaK.png",
                },
                {
                  name: "Smriti Mathuriya",
                  title: "Dayalbagh Educational Institute",
                  text: "Hello! My name is Smriti Mathuriya. I’m pursuing a B.Sc. from Dayalbagh Educational Institute and recently completed my internship at Glowlogics in the Data Science domain.",
                  img: "/Smrithi.png",
                },
                {
                  name: "Aan Narai",
                  title: "Alliance University",
                  text: "I'm Aan Narai, a third-year B.Tech student at Alliance University. I recently completed my UI/UX course from Glowlogics Solutions and received my certification. The training quality was excellent, the instructors were very helpful, and the learning environment was extremely user-friendly. Any issues I faced were resolved immediately. Thank you, Glowlogics!",
                  img: "/Aan.png",
                },
                {
                  name: "Kavya R",
                  title: "Bachelor's in Engineering",
                  text: "Hello everyone, I'm Kavya, currently pursuing my Bachelor's in Engineering with a focus on Computer Technology. I'm currently enrolled in the internship program at Glowlogics. My experience so far has been great—the projects are well-structured and easy to understand. Submitting projects and receiving certificates is seamless. Many students are also securing internships and getting placed in reputed companies through this program.",
                  img: "/Kavya.png",
                },
                {
                  name: "Kulsum Bano",
                  title: "MMICT&MB, 2nd Year",
                  text: "My name is Kulsum Bano, and I recently completed my UI/UX Training and Internship Program with Glowlogics. The sessions were highly interactive, engaging, relevant, and beginner-friendly. The mentors were very supportive, and I would definitely recommend this program to anyone looking to start their tech journey. Thank you, Glowlogics!",
                  img: "/Kulsum.png",
                },
                {
                  name: "Bollepally Jashwanth Varma",
                  title: "Sai Spurthi Institute of Technology, 3rd Year",
                  text: "I recently completed the Cybersecurity Ethical Hacking Internship at GlowLogics Solution and had an excellent experience. The course was well-structured, covering essential topics like penetration testing and vulnerability assessment. The instructors were knowledgeable and supportive. The practical projects gave me real-world exposure. I highly recommend it to aspiring ethical hackers!",
                  img: "/CyberUnknown.png",
                },
                {
                  name: "Tejaswini.K",
                  title: "Jayaraj Annapackiam College",
                  text: "Hello everyone, I am Tejaswini K. I study Computer Science at Jayaraj Annapackiam College. I recently completed the Artificial Intelligence course from Glowlogics. The course was well-organized and beginner-friendly. The instructors explained everything in a clear manner. I now feel confident working on AI projects, especially using Python. Thank you, Glowlogics!",
                  img: "/TejasvaniK.png",
                },
                {
                  name: "Thotakura Puneeth Sai",
                  title: "Anantha Lakshmi Institute of Technology, 3rd Year",
                  text: "Hi, I'm Thotakura Puneeth Sai, a 3rd-year B.Tech student at Anantha Lakshmi Institute of Technology and Sciences. I completed the Cybersecurity & Ethical Hacking course at Glowlogics, and it was an amazing experience. The instructors were supportive, and the hands-on classes were top-notch. I gained real-world skills essential in cybersecurity. Thank you, Glowlogics!",
                  img: "/Thotakura Puneeth Sai.png",
                },
                {
                  name: "Preetham",
                  title: "Navkis College of Engineering",
                  text: "Hello, I’m Preetham. I recently completed my Bachelor's in Engineering. In my final semester, I enrolled in a specialized VLSI course at Glowlogics. The course covered Verilog, FPGA, ASIC flow, and low-power techniques. I also did a Verilog design project that strengthened my hardware skills. This training has prepared me well for the semiconductor field.",
                  img: "/pritam.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow p-6 w-[320px] flex-shrink-0 flex flex-col"
                >
                  <svg
                    className="text-blue-500 text-xl mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path d="M464 32H320c-26.5 0-48 21.5-48 48v144c0 26.5 21.5 48 48 48h24v32c0 44.2-35.8 80-80 80-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16 88.4 0 160-71.6 160-160v-64c0-26.5-21.5-48-48-48H336V80h128v352h48V80c0-26.5-21.5-48-48-48z" />
                  </svg>
                  <p className="text-gray-700 text-sm mb-4">{item.text}</p>
                  <div className="flex items-center space-x-3 mt-auto">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHub;
