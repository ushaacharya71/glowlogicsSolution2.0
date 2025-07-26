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
];


export default function Testimonials() {
  const loopTestimonials = [...testimonials, ...testimonials]; // Doubled for seamless scroll

  return (
    <div className="bg-orange-100 py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 leading-snug">
        Admiration expressed by others regarding our presence.
      </h2>

      <div className="relative w-full space-y-8 overflow-x-hidden">
        {/* Marquee row */}
        <div className="flex w-max animate-marquee space-x-6 px-6 items-start">
          {loopTestimonials.map((item, index) => (
            <Card key={`row1-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable card component
function Card({ item }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow p-6 w-[320px] flex-shrink-0 flex flex-col">
      <FaQuoteLeft className="text-blue-500 text-xl mb-2" />
      <p className="text-gray-700 text-sm mb-4">{item.text}</p>
      <div className="flex items-center space-x-3 mt-auto">
        <img src={item.img} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
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
