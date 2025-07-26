import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1668383778557-d71c562fdb4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1607004468138-e7e23ea26947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFib3V0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXQlMjBjb21wYW55fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXQlMjBjb21wYW55fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1676276376140-a4030cc596a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJvdXQlMjBjb21wYW55fGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/896831694/photo/late-evening-business-meeting.jpg?s=612x612&w=0&k=20&c=kfJKxeqoDypu-5CnKlJIN5-JhCBnSnHlZNTVF7oPgZk=",
  "https://img.freepik.com/free-photo/young-employees-sitting-office-table-using-laptop-team-work-brainstorming-meeting-concept_146671-15624.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
  "https://media.istockphoto.com/id/1263990765/photo/long-term-growth-is-always-the-goal.jpg?s=612x612&w=0&k=20&c=sDn_AXtxsaAUspz1Lf0BBfrBxHhF-TRDetmjrNgNcdE=",
  "https://media.istockphoto.com/id/626956870/photo/action-plan-concept-the-meeting-at-the-white-office-table.jpg?s=612x612&w=0&k=20&c=vWRfFguamyKJhMXa456HJOCoc1RlG3vB3cEjl-qCXJU=",
  "https://media.istockphoto.com/id/1491247578/photo/a-mid-adult-man-a-hazop-facilitator-conducting-a-study-of-an-oil-gas-plant-in-a-meeting-room.jpg?s=612x612&w=0&k=20&c=k01UrSDHeUP92eDR-RX8_zxYLCilPYqaW7zeSJvJl9s=",
  // Add more unique images if you want
];

// const placementData = [
//   {
//     name: "Harsh",
//     company: "Glowlogics",
//     placed: "6 Students",
//     img: "/pasportsize.jpg",
//   },
//   {
//     name: "Harsh",
//     company: "Glowlogics",
//     placed: "6 Students",
//     img: "/pasportsize.jpg",
//   },
//   {
//     name: "Harsh",
//     company: "Glowlogics",
//     placed: "6 Students",
//     img: "/pasportsize.jpg",
//   },
//   {
//     name: "Harsh",
//     company: "Glowlogics",
//     placed: "6 Students",
//     img: "/pasportsize.jpg",
//   },
//   {
//     name: "Harsh",
//     company: "Glowlogics",
//     placed: "6 Students",
//     img: "/pasportsize.jpg",
//   },
//   {
//     name: "Harsh",
//     company: "Glowlogics",
//     placed: "6 Students",
//     img: "/pasportsize.jpg",
//   },
//   {
//     name: "Harsh",
//     company: "Glowlogics",
//     placed: "6 Students",
//     img: "/pasportsize.jpg",
//   },
//   {
//     name: "Harsh",
//     company: "Glowlogics",
//     placed: "6 Students",
//     img: "/pasportsize.jpg",
//   },

// ];

export default function About3DMarquee() {
  const [speed, setSpeed] = useState(35);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setSpeed(isMobile ? 50 : 35);
  }, []);

  return (
    <section className="bg-orange-100 w-full text-black">
      {/* === Top Header Section === */}
      <div className="py-24 px-4 text-center overflow-hidden relative">
        <div className="max-w-4xl mx-auto mb-14">
          <p className="text-sm text-orange-600 font-semibold uppercase tracking-widest mb-2">
            Joined over 90,000 happy students
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Where Ambition Meets Opportunity
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Join thousands of learners transforming their careers with modern,
            industry-relevant education—accessible anytime, anywhere.
          </p>
        </div>

        {/* === Marquee Track === */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: speed, repeat: Infinity }}
          >
            {[...images, ...images].map((img, idx) => (
              <motion.div
                key={idx}
                className="w-[230px] h-[320px] rounded-2xl shadow-xl overflow-hidden bg-white"
                whileHover={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={img}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* === OUR STORY SECTION === */}
      <div className="bg-white-orange-100 px-4 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Headings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
               Our mission is simple: help you build projects and skills that aren’t just for marks, but for real impact.
              </h2>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Our core strength</h4>
              <p className="text-gray-600">
                From hidden potential to industry ready professionals,we guide every step.
              </p>
              <p className="text-gray-600">
                At Glowlogics, we’re here to help students like you unlock skills that match today’s industry needs.
              </p>
            </div>
          </div>

          {/* Video & Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <div className="space-y-4">
              <h5 className="font-semibold text-lg text-gray-800">
                Our story ↓
              </h5>
              <p className="text-gray-600">
              Glowlogics Solutions was created to make learning feel real again. We saw too many students finish courses but feel lost when facing actual industry challenges. That’s why we designed programs that focus not just on teaching but on building real skills, real portfolios, and real confidence.
              From our first batch of learners to now partnering with institutions like E-Cell IIT Hyderabad, our focus has always been the same: help individuals grow, get hired, and stay relevant in an ever-changing job market.
              At Glowlogics, it’s not just about certificates it’s about creating real stories of growth, success, and transformation.
              </p>
             <a
  href="https://www.youtube.com/@Glowlogics"
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-500 font-semibold mt-2 hover:underline inline-block"
>
  Read more →
</a>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/uIQ29DOWm6k?si=6e92M0VfowBX-QLT"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 py-8 px-4 rounded-xl shadow">
              <h3 className="text-4xl font-bold mb-2">7000+</h3>
              <p className="text-gray-600">Students already enrolled</p>
            </div>
            <div className="bg-gray-50 py-8 px-4 rounded-xl shadow">
              <h3 className="text-4xl font-bold mb-2">28000+</h3>
              <p className="text-gray-600">Delivered projects</p>
            </div>
            <div className="bg-gray-50 py-8 px-4 rounded-xl shadow">
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-gray-600">Customer satisfaction</p>
            </div>
          </div>

          {/* <div className="w-full  py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
              🎓 Our Placed Students
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {placementData.map((student, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden relative hover:shadow-2xl transition duration-300"
                  initial={{ y: index % 2 === 0 ? -20 : 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{student.name}</h2>
                    <p className="text-sm text-gray-600">
                      Placed at <strong>{student.company}</strong>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {student.placed}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}

          <div className="mt-20">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row items-center">
              {/* Text Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <div className="mb-4">
                  <img
                    src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740" // Replace with your logo if needed
                    alt="Glowlogics"
                    className="w-25 h-20 mb-2"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Want to be part of something that changes how people learn?
                  </h3>
                  <p className="text-gray-600 mb-6">
                   Collaborate with a skilled, enthusiastic team building a platform used by learners worldwide.
                  </p>
                  <button className="px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-900 transition">
                    Join us now!
                  </button>
                </div>
              </div>

              {/* Background Image */}
              <div className="w-full md:w-1/2 h-72 md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto p-6 pt-20 my-20 shadow-xl border border-gray-300 bg-white hover:shadow-2xl transition duration-500 ease-in-out rounded-xl flex flex-col md:flex-row items-center gap-10">
        {/* Floating Poster Image - increased size */}
        <div className="absolute -top-14 left-6 w-48 md:w-60 shadow-lg rounded-lg bg-white p-2 hover:scale-95 transition-transform duration-300">
          <img
            src="/1.png" // Replace with your actual image path
            alt="Collaboration Poster"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Placeholder for spacing */}
        <div className="hidden md:block md:w-60" />

        {/* Center Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
            Glowlogics × E-Cell IIT Hyderabad
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We’ve partnered with{" "}
            <span className="font-semibold text-black">
              E-Cell IIT Hyderabad
            </span>{" "}
            to promote innovation, entrepreneurship, and industry-relevant
            learning.{" "}
            <span className="font-semibold">
              {" "}
              This collaboration will open doors for impactful events,{" "}
            </span>{" "}
            and{" "}
            <span className="font-semibold">
              mentorship, and growth opportunities for students across India.
            </span>
            .
          </p>
        </div>

        {/* Right Logo - increased size */}
        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 shadow-md rounded-lg p-2 bg-white hover:scale-95 transition-transform duration-300 flex items-center justify-center self-center">
          <img
            src="/eCell.png"
            alt="ICFAI University Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto p-6 pt-20 my-20 shadow-xl border border-gray-300 bg-white hover:shadow-2xl transition duration-500 ease-in-out rounded-xl flex flex-col md:flex-row items-center gap-10">
        {/* Floating Poster Image - increased size */}
        <div className="absolute -top-14 left-6 w-48 md:w-60 shadow-lg rounded-lg bg-white p-2 hover:scale-95 transition-transform duration-300">
          <img
            src="/2.png" // Replace with your actual image path
            alt="Collaboration Poster"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Placeholder for spacing */}
        <div className="hidden md:block md:w-60" />

        {/* Center Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
            Glowlogics × IIT Bombay Techfest
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Excited to announce our collaboration with{" "}
            <span className="font-semibold text-black">
              IIT Bombay Techfest!
            </span>{" "}
            Together, we aim to foster{" "}
            <span className="font-semibold">
              {" "}
              innovation, boost skill development,{" "}
            </span>{" "}
            and{" "}
            <span className="font-semibold">
              and unlock new career opportunities for students and tech
              enthusiasts across India.
            </span>
            .
          </p>
        </div>

        {/* Right Logo - increased size */}
        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 shadow-md rounded-lg p-2 bg-white hover:scale-95 transition-transform duration-300 flex items-center justify-center self-center">
          <img
            src="/33.png"
            alt="ICFAI University Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto p-6 pt-20 my-20 shadow-xl border border-gray-300 bg-white hover:shadow-2xl transition duration-500 ease-in-out rounded-xl flex flex-col md:flex-row items-center gap-10">
        {/* Floating Poster Image - increased size */}
        <div className="absolute -top-14 left-6 w-48 md:w-60 shadow-lg rounded-lg bg-white p-2 hover:scale-95 transition-transform duration-300">
          <img
            src="/3.png" // Replace with your actual image path
            alt="Collaboration Poster"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Placeholder for spacing */}
        <div className="hidden md:block md:w-60" />

        {/* Center Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
            Glowlogics × Canara Engineering College
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We’re proud to announce our official collaboration with
            <span className="font-semibold text-black">
               Canara Engineering College, Managlore
            </span>
              through a signed MoU. Together, we aim to empower and educate 1000+ students with
            industry-relevant skills, real-world projects, and career-focused training designed
            to bridge the gap between {" "}
            <span className="font-semibold">academics and </span> and{" "}
            <span className="font-semibold">professional success.</span>.
          </p>
        </div>

        {/* Right Logo - increased size */}
        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 shadow-md rounded-lg p-2 bg-white hover:scale-95 transition-transform duration-300 flex items-center justify-center self-center">
          <img
            src="/22.jpeg"
            alt="ICFAI University Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
