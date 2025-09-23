import { FaQuoteLeft } from "react-icons/fa";
import PropTypes from "prop-types";
// Testimonial data
const testimonials = [
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
    img: "Manasa.png",
  },

  {
    name: "Srijib Dey",
    title: "Working as a Employee",
    text: "I have been doing a VLSI course from GlowLogics for the last 6 months. This course provided me with valuable exposure to the fundamentals and advanced concepts of VLSI design, including practical insights into design methodologies, simulation class techniques, and industry tools. The structured training, combined with hands-on tasks, helped me enhance my technical knowledge and problem-solving skills. ",
    img: "Sri.png",
  },
  {
    name: "Jating Kola",
    title: "Gandhi Institute of Technology and Management",
    text: " I’m Jatin Kola, a third-year Computer Science student at GITAM (Gandhi Institute of Technology and Management), Visakhapatnam. I recently completed the UI/UX course at GlowLogics, and it was a great experience overall. The way they teach is very clear and practical. The trainers don’t just stick to theory—they focus on real-time projects and hands-on learning, which helped me understand how UI/UX works in actual product design. They also guided us with useful tools and tips that are relevant in the industry. What I liked most is that they make even beginners feel comfortable. Whether you are from a design background or not, they break down the concepts in a very simple way. Thankyou so much Glowlogics ✨ ",
    img: "jatin.png",
  },
  {
    name: "Sandip SB",
    title: " MS Engineering College",
    text: "Hi everyone! I'm Sandeep S. B., pursuing Electronics and Communication Engineering at MS Engineering College (Santiniketan of Technology). My internship at GlowLogics has been a great learning experience. The projects are well-structured and easy to follow, and the certification process is smooth and professional. Many students, including myself, have greatly benefited from this program. Special thanks to my IoT mentor, Mr. Digeesh, for his excellent guidance. I highly recommend this internship to students who are looking to build real-world skills!",
    img: "Sandip.png",
  },
  {
    name: "Dhanush",
    title: "RR Institute of Technology",
    text: "I'm Dhanush from Bengaluru, currently in my fourth year of BE in Computer Science and Engineering at R R Institute of Technology, Bengaluru.I recently completed the Web Development course at Glowlogic Solutions, which was an excellent learning experience. The course content was well-structured, covering both fundamental and advanced topics in a clear, step-by-step manner. The mentors were highly knowledgeable, approachable, and always willing to clarify doubts with practical examples. Their guidance made even complex concepts easy to understand. The hands-on projects and real-world examples helped me gain confidence in applying what I learned. This course strengthened my skills in frontend development (HTML, CSS) and backend development (MongoDB, APIs, and full-stack development). I now feel more confident creating new projects and interfaces. I am sincerely thankful to the team for their guidance and support throughout this journey. ",
    img: "dhanush.png",
  },
  {
    name: " PALAKURLA SAI TEJA",
    title: "Sree Dattha Group of Engineering ",
    text: "I am PALAKURLA SAI TEJA and I am pursuing B-tech in Sree Dattha group of engineering and science I'm happy to take training in Glowlogics solutions for the domain of App development and thankyou for your training session. It helped me enhance my skills and gain more practical knowledge over App development  Thanks to team glowlogics for all the support and knowledge",
    img: "PALAKURLA.png",
  },
  {
    name: "Nahiza Khanum,",
    title: "Gandhi Institute of Technology and Management",
    text: "Myself Nahiza Khanum, a final-year Engineering student from Bangalore. I recently completed my Cybersecurity and Ethical Hacking course, and the experience has been truly transformative. The program not only deepened my understanding of core cybersecurity concepts but also gave me hands-on exposure to penetration testing, threat analysis, and advanced ethical hacking techniques. The trainers were highly knowledgeable, always encouraging us to think critically and apply concepts to real-world scenarios. This course has strengthened my technical skills and boosted my confidence in navigating the dynamic field of cybersecurity. I’m extremely grateful for the guidance and support I received throughout this journey, and I’m excited to apply these skills as I step forward in my career.",
    img: "nahiziya.png",
  },
  {
    name: "Fija Latif Mahat",
    title: "MIT",
    text: "I'm Fija Latif Mahat,From Pune. Currently I'm studying in Second year of BSC Animation at MIT Arts Commerce and Science College Alandi, Pune. I recently completed the UI/UX design course at Glowlogic Solutions, and it was a great learning experience. The course content was well-structured and easy to understand, covering both design theory and practical tools like Figma. The trainer was very supportive and explained each topic clearly with real-life examples. This course helped me build a strong foundation in UI/UX, and I feel more confident in designing user-friendly interfaces now. I’m thankful to the team for their guidance and support throughout the journey.",
    img: "Fija.png",
  },
  {
    name: "S.Naresh Narayanan",
    title: "MIT",
    text: "Glowlogics was very supportive and explained everything clearly. They guided me step by step and made sure I understood each part of the project. Whenever I had doubts, they were quick to help and gave useful suggestions. Their teaching style was easy to follow, and it made learning more enjoyable and confident for me. Thank you glowlogics✨",
    img: "Naresh.png",
  },

  {
    name: "Shashank S",
    title: "Canara Engineering College",
    text: " I am truly grateful for the opportunity to undergo internship training at Glowlogic Solutions in the field of Cybersecurity. This experience has deepened my understanding of network security, ethical hacking, and real-world threat mitigation techniques. I sincerely thank the team at Glowlogic for their guidance, support, and for providing a hands-on learning environment that has strengthened both my technical skills and professional outlook in this critical domain.",
    img: "u.png",
  },

  {
    name: "Hudha Shahista",
    title: "MIT",
    text: "I enrolled in the online VLSI course at Glowlogic and had a great learning experience. The sessions were well-structured, starting from basics and moving to advanced topics with clear explanations. The trainers are highly knowledgeable, approachable, and made the online classes interactive. Hands-on practice with tools was provided, which gave real industry exposure even in an online format. Doubt-clearing and mentorship were excellent, and career guidance was also very supportive. Overall, it’s a very effective online course for anyone aspiring to enter the VLSI field.",
    img: "h.png",
  },
];

export default function Testimonials() {
  const loopTestimonials = [...testimonials, ...testimonials]; // here i doubled for seamless scroll

  return (
    <div className="bg-orange-100 py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 leading-snug">
        Admiration expressed by others regarding our presence
      </h2>

      <div className="relative w-full space-y-8 overflow-x-hidden">
        {/* Marquee row */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] space-x-6 px-6 items-start">
          {loopTestimonials.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable card component for all the newly entered data..
function Card({ item }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow p-6 w-[320px] flex-shrink-0 flex flex-col">
      <FaQuoteLeft className="text-blue-500 text-xl mb-2" />
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
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
