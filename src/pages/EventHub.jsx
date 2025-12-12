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
          className="eventhub-btn mt-6 px-6 py-3 bg-blue-600 text-black rounded-lg text-lg font-bold shadow-md hover:bg-blue-700 transition-all"
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
            <span>Registration started soon</span>
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
            <span>Upcoming in December</span>
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
            <span>Jan 18</span>
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
            <span>Free - Jan 3</span>
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
          <source src="/HackathonVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" py-12 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-10 leading-snug">
          Admiration expressed by others regarding our presence.
        </h2>

        <div className="relative w-full space-y-8 overflow-x-hidden group">
          <div className="flex w-max animate-marquee space-x-6 px-6 items-start animation-running hover:[animation-play-state:paused]">
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
    name: "Naziya",
    title: "KNS Institute of Technology",
    text: "This is Naziya from Bengaluru, currently studying in the 3rd year of BE in the ECE branch at Dr. AIT, Bengaluru. I recently completed a Full Stack Java course at Glowlogic Solutions, and it was a great learning experience. It was one of the best learning platforms for me, as it covered all the topics thoroughly and helped me become confident in Java. The schedule was very flexible and cooperative, allowing me to balance both my college work and the Java classes. The trainer was highly supportive and knowledgeable, explaining every concept clearly with practical examples. This course helped me build a strong foundation in Java and enhanced my skills significantly. I am truly thankful to the team for their continuous guidance and support throughout this wonderful journey.",
    img: "/Naziya.png",
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
  {
    name: "Khusi M",
    title: " University of Visvesvaraya College of Engineering ",
    text: "I'm really grateful to GlowLogics Solutions for such a great learning experience in VLSI Design. The training was super well-organized, and the instructors were not just knowledgeable but also really patient and supportive throughout. The hands-on sessions and real-time project work helped me understand the concepts much better and boosted my confidence a lot. Big thanks for the guidance and opportunity — it’s definitely going to help me in the future!",
    img: "/khushi.png",
  },
  {
    name: "Dusa Abhiram ",
    title: "University of Visvesvaraya College of Engineering ",
    text: "I am greatful and thankful to the Glowlogics Solutions team for my internship programme on VLSI, gaining valuable insights into digital circuit design and simulation. During the training, I worked with Verilog and tools like icarus verilog and  Xilinx Hands-on projects helped me understand the VLSI design flow effectively. The experience boosted my technical and problem-solving skills. Overall, it was a great learning journey that deepened my interest in semiconductor technology.",
    img: "/Dusa.png",
  },
  {
    name: "Jeshwanth Basutkar ",
    title: "Kommuri Pratap Reddy Institute of Technology",
    text: "I am extremely thankful to GlowLogics Solutions for providing an exceptional learning experience in Data Science. The training was well-structured with a perfect balance of theory and practical sessions, allowing me to gain real-time project exposure and industry-relevant skills. The instructors were highly knowledgeable, supportive, and always approachable, which made the learning process smooth and engaging. This training has greatly enhanced my confidence and equipped me with the right tools to take the next step in my data science career.",
    img: "/Jeshwanth.png",
  },
  {
    name: "Sanjana Anand Patil",
    title: "M.S. RAMAIAH INSTITUTE OF TECHNOLOGY",
    text: "I am truly grateful to GlowLogics Solutions for providing me with an excellent learning experience in VLSI design. The training was well-structured, and the instructors were knowledgeable, patient, and supportive throughout. The hands-on approach and real-time project exposure significantly enhanced my understanding and confidence in the field. I sincerely appreciate the opportunity and guidance I received, which will definitely help me in my future endeavors.",
    img: "/Sanjana.png",
  },

  {
    name: " Vindhya NS",
    title: "Sanatan Dharma College",
    text: "My name is Vindhya N.S., and I’m from Puttur. I am currently in the second year of my MBA, specializing in Human Resource and Finance at SDIT College. Recently, I completed certification courses in HR and Finance, which provided me with valuable insights and practical knowledge. The training was engaging and well-structured, with a clear focus on both theoretical concepts and their real-world applications. The instructors made learning easy through their approachable teaching style and relevant examples. These courses have helped me build a strong understanding of HR and Finance functions, and I now feel more confident and prepared to take on future professional challenges. I sincerely appreciate the support and guidance I received during the course.",
    img: "/Vindhya.png",
  },

  {
    name: "Tharani P",
    title: "Sri Krishna College of Technology (SKCT)",
    text: "I had the opportunity to participate in a 3-month online internship with GlowLogicss , Bangalore.,under the VLSI Design course. This program provided me with valuable exposure to the fundamentals and advanced concepts of VLSI design, including practical insights into design methodologies, simulation techniques, and industry tools. The structured training, combined with hands-on tasks, helped me enhance my technical knowledge and problem-solving skills. I am grateful to Glow Logistics for offering this learning platform and for the guidance provided throughout the internship.",
    img: "/Tharani P.png",
  },

  {
    name: "M.Harsha Vardhan",
    title: "Sri Krishna College of Technology (SKCT)",
    text: "I had an excellent experience learning VLSI Design with Glowslogics Solution. The training was well-structured, covering both theoretical foundations and hands-on practical aspects of VLSI. The instructors were knowledgeable, patient, and always ready to clarify doubts. I especially appreciated the real-world examples and industry-relevant projects, which helped me gain confidence in applying concepts. The learning environment was supportive, and the resources provided were up-to-date with current industry standards. I would highly recommend Glowslogics Solution to anyone looking to build a strong career in VLSI design. I am truly grateful to Glowslogics Solution, Bangalore, for offering this learning platform and for the constant guidance provided throughout the internship.",
    img: "/M.Harsha Vardhan.png",
  },

  {
    name: "Faizan Ul Hassan",
    title: "Netaji Subhash University",
    text: "Truly speaking, it is a very good course and the mentors are excellent in terms of cooperation. Whenever I ask something, they immediately respond and clear my doubts with real-life examples and guidance on how to avoid mistakes, which I truly appreciate. The entire team is also very supportive—whenever I had any doubt, they personally called me and gave their time to explain everything clearly. The fees are also genuine, especially considering the quality of training provided. Overall, it has been a very good experience with Glowlogics Solutions. Thank you so much, Team Glowlogics Solutions!✨",
    img: "/Faizan Ul Hassan.png",
  },

  {
    name: "Tejaswini.K",
    title: "JSS College Mysore",
    text: "My name is Tejaswini K. from Karadahalli, and I am currently in the second year of my M.Sc. in Computer Science at JSS College, Mysore. I recently completed a certification course in Artificial Intelligence and had a great learning experience. The course content was well-structured and beginner-friendly, and the instructor explained the concepts clearly with practical examples. Overall, it was a valuable learning opportunity for me.",
    img: "/Tejswani.png",
  },

  {
    name: "Manasa.C",
    title: "Cambridge College",
    text: "My name is Manasa C, and I’m from Bangalore. I am currently in the third year of my B.E., specializing in Information Science and Engineering at Cambridge College. Recently, I completed certification courses in Web Development, which provided me with valuable insights and practical knowledge. The training was engaging and well-organized, with a clear focus on both theoretical concepts and real-world applications. The instructors made learning easy with their approachable teaching style and relevant examples. These courses have helped me build a strong understanding of websites, and I now feel more equipped to take on future professional challenges. I sincerely appreciate the support and guidance I received during the course from Glowlogics Solutions.",
    img: "/Manasa.png",
  },

  {
    name: "Srijib Dey",
    title: "Working as a Employee",
    text: "I have been doing a VLSI course from GlowLogics for the last 6 months. This course provided me with valuable exposure to the fundamentals and advanced concepts of VLSI design, including practical insights into design methodologies, simulation class techniques, and industry tools. The structured training, combined with hands-on tasks, helped me enhance my technical knowledge and problem-solving skills. ",
    img: "/Sri.png",
  },
  {
    name: "Jatin Kola",
    title: "Gandhi Institute of Technology and Management",
    text: " I’m Jatin Kola, a third-year Computer Science student at GITAM (Gandhi Institute of Technology and Management), Visakhapatnam. I recently completed the UI/UX course at GlowLogics, and it was a great experience overall. The way they teach is very clear and practical. The trainers don’t just stick to theory—they focus on real-time projects and hands-on learning, which helped me understand how UI/UX works in actual product design. They also guided us with useful tools and tips that are relevant in the industry. What I liked most is that they make even beginners feel comfortable. Whether you are from a design background or not, they break down the concepts in a very simple way. Thankyou so much Glowlogics ✨ ",
    img: "/jatin.png",
  },
  {
    name: "Sandip SB",
    title: " MS Engineering College",
    text: "Hi everyone! I'm Sandeep S. B., pursuing Electronics and Communication Engineering at MS Engineering College (Santiniketan of Technology). My internship at GlowLogics has been a great learning experience. The projects are well-structured and easy to follow, and the certification process is smooth and professional. Many students, including myself, have greatly benefited from this program. Special thanks to my IoT mentor, Mr. Digeesh, for his excellent guidance. I highly recommend this internship to students who are looking to build real-world skills!",
    img: "/Sandip.png",
  },
  {
    name: "Dhanush",
    title: "RR Institute of Technology",
    text: "I'm Dhanush from Bengaluru, currently in my fourth year of BE in Computer Science and Engineering at R R Institute of Technology, Bengaluru.I recently completed the Web Development course at Glowlogic Solutions, which was an excellent learning experience. The course content was well-structured, covering both fundamental and advanced topics in a clear, step-by-step manner. The mentors were highly knowledgeable, approachable, and always willing to clarify doubts with practical examples. Their guidance made even complex concepts easy to understand. The hands-on projects and real-world examples helped me gain confidence in applying what I learned. This course strengthened my skills in frontend development (HTML, CSS) and backend development (MongoDB, APIs, and full-stack development). I now feel more confident creating new projects and interfaces. I am sincerely thankful to the team for their guidance and support throughout this journey. ",
    img: "/dhanush.png",
  },
   {
    name: " PALAKURLA SAI TEJA",
    title: "Sree Dattha Group of Engineering ",
    text: "I am PALAKURLA SAI TEJA and I am pursuing B-tech in Sree Dattha group of engineering and science I'm happy to take training in Glowlogics solutions for the domain of App development and thankyou for your training session. It helped me enhance my skills and gain more practical knowledge over App development  Thanks to team glowlogics for all the support and knowledge",
    img: "/PALAKURLA.png",
  },
   {
    name: "Nahiza Khanum,",
    title: "Gandhi Institute of Technology and Management",
    text: "Myself Nahiza Khanum, a final-year Engineering student from Bangalore. I recently completed my Cybersecurity and Ethical Hacking course, and the experience has been truly transformative. The program not only deepened my understanding of core cybersecurity concepts but also gave me hands-on exposure to penetration testing, threat analysis, and advanced ethical hacking techniques. The trainers were highly knowledgeable, always encouraging us to think critically and apply concepts to real-world scenarios. This course has strengthened my technical skills and boosted my confidence in navigating the dynamic field of cybersecurity. I’m extremely grateful for the guidance and support I received throughout this journey, and I’m excited to apply these skills as I step forward in my career.",
    img: "/nahiziya.png",
  },
   {
    name: "Fija Latif Mahat",
    title: "MIT",
    text: "I'm Fija Latif Mahat,From Pune. Currently I'm studying in Second year of BSC Animation at MIT Arts Commerce and Science College Alandi, Pune. I recently completed the UI/UX design course at Glowlogic Solutions, and it was a great learning experience. The course content was well-structured and easy to understand, covering both design theory and practical tools like Figma. The trainer was very supportive and explained each topic clearly with real-life examples. This course helped me build a strong foundation in UI/UX, and I feel more confident in designing user-friendly interfaces now. I’m thankful to the team for their guidance and support throughout the journey.",
    img: "/Fija.png",
  },
   {
    name: "S. Naresh Narayanan",
    title: "MIT",
    text: "Glowlogics was very supportive and explained everything clearly. They guided me step by step and made sure I understood each part of the project. Whenever I had doubts, they were quick to help and gave useful suggestions. Their teaching style was easy to follow, and it made learning more enjoyable and confident for me. Thank you glowlogics✨",
    img: "/Naresh.png",
  },

   {
    name: "Shashank S",
    title: "Canara Engineering College",
    text: " I am truly grateful for the opportunity to undergo internship training at Glowlogic Solutions in the field of Cybersecurity. This experience has deepened my understanding of network security, ethical hacking, and real-world threat mitigation techniques. I sincerely thank the team at Glowlogic for their guidance, support, and for providing a hands-on learning environment that has strengthened both my technical skills and professional outlook in this critical domain.",
    img: "/u.png",
  },

   {
    name: "Hudha Shahista",
    title: "MIT",
    text: "I enrolled in the online VLSI course at Glowlogic and had a great learning experience. The sessions were well-structured, starting from basics and moving to advanced topics with clear explanations. The trainers are highly knowledgeable, approachable, and made the online classes interactive. Hands-on practice with tools was provided, which gave real industry exposure even in an online format. Doubt-clearing and mentorship were excellent, and career guidance was also very supportive. Overall, it’s a very effective online course for anyone aspiring to enter the VLSI field.",
    img: "/h.png",
  },

   {
    name: "Bhoomika MN",
    title: "BGSIT",
    text: "My experience at GlowLogics Solutions while learning Data Science has been exceptionally positive. I had a really great experience with the Data Science course. When I joined, I wasn’t completely sure what to expect, but the training turned out to be much better than I imagined. The classes were clear, well-organized, and easy to follow, even when the topics were advanced. What I liked most was the balance between theory and practical work. We didn’t just learn the concepts we actually worked on real-time projects, which helped me understand how data science is used in real situations. The instructors were very supportive and explained everything with patience. They made sure we understood each topic before moving forward, and they were always available to clear doubts. Because of this course, I feel much more confident in my skills. I gained hands-on experience, learned useful tools, and now I feel ready to take the next step toward a career in data science.",
    img: "Bhoomika MN.png",
  },


   {
    name: "Bhoomika MN",
    title: "Mepco Schlenk Engineering Cx`ollege ",
    text: "I am truly grateful to GlowLogics Solutions for providing me with a highly valuable learning experience in Artificial Intelligence. The training was well-structured, balancing both theoretical concepts and practical hands-on sessions. The instructors were knowledgeable, supportive, and always approachable, which made the learning process smooth and engaging. Working on real-time datasets helped me understand AI models more clearly and improved my confidence in coding, data preprocessing, and model building. This certification has strengthened my technical skills and motivated me to continue my journey in AI and Data Science. I sincerely appreciate the opportunity, guidance, and support I received throughout the course, which will definitely help me in my future endeavors.",
    img: "S.Manoj Kumar.png",
  },

   {
    name: "Thrisha K S",
    title: "S.E.A College of Engineering and Technology ",
    text: "The AI online classes were very helpful for me to understand the basics of Python, machine learning, and libraries like NumPy and Seaborn. The sessions were clear and well-structured, which made it easier to learn step by step. This training improved my confidence in programming and gave me practical knowledge that I can use in my projects and future career. I am thankful for the guidance and support provided during the course.",
    img: "Thrisha.png",
  },

   {
    name: "Manya",
    title: "BMS",
    text: "I'm Manya umesh, from banglore,Currently, I’m studying in 3rd year of Bachelor of computer applications, at BMS college of Commerce and Management I recently completed the Artificial Intelligence course at Glowlogic Solutions, and it was a great learning experience. The course content was well-structured and easy to understand, covering both AI concepts and practical applications. The trainer was very supportive and explained each topic clearly with real-life examples. This course helped me build a strong foundation in AI, and I feel more confident in working with intelligent systems and problem-solving approaches now. I’m thankful to the team for their guidance and support throughout the journe",
    img: "Manya.png",
  },

  {
    name: "Sharath H D",
    title: "Government Engineering College, Challakere, Chitradurga",
    text: "My name is Sharath H D. I have taken the Full Stack Java and Cyber Security & Ethical Hacking courses at Glowlogics Company. All the mentors supported me a lot and explained every concept clearly. They clarified all my doubts in a way that I could easily understand. The recorded classes were also very useful, and I have learned many things from them. I have also received the certificates. I would like to express my heartfelt gratitude.",
    img: "Sharath.png",
  },
  {
    name: "Kaunain Fathima",
    title: "KNS Institute of Technology",
    text: "I'm  Kaunain Fathima , from Bangalore.Pursuing Information Science & Engineering in KNS Institute of Technology.During my final year of Engineering, I had the chance to dive into Cybersecurity and Ethical Hacking through a specialized course. It wasn’t just theory , I got to practice real-world techniques like ethical hacking and threat detection. The instructors focused on critical thinking and real scenarios, which really helped me connect what I learned with actual cyber defense challenges. I’m grateful for the opportunity and excited to build on these skills as I enter the tech industry.",
    img: "Kaunain Fathima.png",
  },

   {
    name: " Tejaswini.K",
    title: " JSS College.",
    text: "My name is Tejaswini.K and I am from karadahalli.I m currently in the second year of my MSC in computer science at Jss college Mysore. Recently I completed certification course in Artificial intelligence and had a great learning experience the course content was well structured and beginner - friendly and the instructor explained concepts clearly with practical example. Thank you for providing such a valuable learning opportunit",
    img: "Tejswani.png",
  },

   {
    name: "Teja S",
    title: "S.E.A college of Engineering and Technology ",
    text: "I had a very good learning experience with Glow Logics AI online classes. The trainers explained concepts clearly with practical examples, and the course was well-structured and easy to follow. Overall, it was a great platform to build AI knowledge.",
    img: "Teja.png",
  },

    {
    name: "THARANI P",
    title: "Sri Krishna College of Technology",
    text: "I had the opportunity to participate in a 3-month online internship with Glow Logistics , Bangalore.,under the VLSI Design course. This program provided me with valuable exposure to the fundamentals and advanced concepts of VLSI design, including practical insights into design methodologies, simulation techniques, and industry tools. The structured training, combined with hands-on tasks, helped me enhance my technical knowledge and problem-solving skills. I am grateful to Glowlogics for offering this learning platform and for the guidance provided throughout the internship.",
    img: "TARA.png",
  },
    {
    name: "V.SWETHA",
    title: "AVC COLLEGE OF ENGINEERING,MAYILADUTHURAI",
    text: "I am truly grateful to glowlogics solutions for providing me with an excellent learning experience in full stack web development . The training was well structured ,and the instructors were knowledgeable ,supportive throughout .This training was greatly enhanced my confidence . I sincerely appreciate the support and guidance I received during the course.The curriculum covered real-world concepts instead of just theory, which actually helped me understand how full-stack development works in practical projects.Each module was delivered in a clear and organized manner, making it easier to follow even the more complex topics.",
    img: "/SWETHA.png",
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
                      <p className="font-semibold text-sm text-gray-900">
                        {item.name}
                      </p>
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
