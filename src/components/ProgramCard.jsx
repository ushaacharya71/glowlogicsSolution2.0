import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = ["All", "BTech", "Graduates", "Masters", "Crash Course"];

const programData = [
  // Program data remains unchanged for brevity
  // <----------------------------THIS IS CRASH COURSE---------------------->

  {
    id: 1,
    title: "UI/UX",
    slug: "UIUX",
    category: "Crash Course",
    author: "📅 This Batch Is Now Live",
    date: "20 June 25",
    image:
      "https://img.freepik.com/premium-vector/modern-3d-illustration-landing-page-ui-design_145666-1960.jpg",
    desc: "Design apps and websites people love to use.",
    details:
      "Learn UI/UX skills like wireframing, prototyping, user flow creation, and real-world design projects. No coding needed — just creativity and curiosity.",
    popupTitle: "Start Your UI/UX Design Journey Today!",
  },

  {
    id: 3,
    title: "Advance Excel",
    slug: "AdvancedExcel",
    category: "Crash Course",
    author: "Selfbased",
    date: "",
    image:
      "https://img.freepik.com/premium-photo/spreadsheet-document-information-financial-startup-concept-snugly_31965-600877.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master Excel for data analysis, reporting & automation.",
    details:
      "Learn formulas, pivot tables, dashboards, macros, and more through a self-paced program. Build skills to handle real-world business data confidently",
    popupTitle: "Learn Advanced Excel at Your Own Pace",
  },

  {
    id: 4,
    title: "Digital Marketing",
    slug: "DigitalMarketing",
    category: "Crash Course",
    author: "📅 This Batch Is Now Live",
    date: "7 June 25",
    image:
      "https://img.freepik.com/premium-photo/search-engine-marketing-composition-design_23-2150923510.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master Digital Marketing: SEO, Social Media, Ads & Analytics",
    details:
      "Learn live from experts through interactive sessions covering SEO, Google Ads, social media marketing, content strategy, and real-world projects to build your portfolio.",
    popupTitle: "Join Our Live Digital Marketing Program",
  },
  {
    id: 5,
    title: "Java Fullstack",
    slug: "JavaFullstack",
    category: "Crash Course",
    author: "📅 This Batch Is Now Live",
    date: "2 June 25",
    image:
      "https://img.freepik.com/premium-photo/writing-code-creating-website-dashboards-programming-help-technology-website-upkeep_27634-1240.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master Java, Spring, SQL & Full Stack Web Development",
    details:
      "Learn frontend and backend development using Java, Spring Boot, SQL, HTML, CSS, and more. Build complete web applications with live projects and expert mentorship.",
    popupTitle: "Become a Full Stack Java Developer",
  },
  {
    id: 6,
    title: "Data Science",
    slug: "DataSciences",
    category: "Crash Course",
    author: "📅 This Batch Is Now Live",
    date: "9 June 25",
    image:
      "https://img.freepik.com/premium-photo/businessman-working-with-business-analytics-data-management-system-computer-online-document-management-metrics-connected-database-corporate-strategy-finance-operations-salesx9_661047-4235.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master Data Science: Python, Machine Learning & Analytics.",
    details:
      "Learn Python, data analysis, machine learning, visualization, and real-world project building. Gain job-ready skills with live classes and industry mentorship.",
    popupTitle: "Become a Certified Data Scientist",
  },
  {
    id: 7,
    title: "App Development",
    slug: "AppDevelopment",
    category: "Crash Course",
    author: "📅 This Batch Is Now Live",
    date: "8 June 25",
    image:
      "https://img.freepik.com/free-photo/man-working-with-computer-side-view_23-2149930994.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Mobile App Development with Android & Flutter.",
    details:
      "Build real-world Android and cross-platform apps using Java, Kotlin, and Flutter. Master UI/UX basics, backend integration, and app deployment with expert guidance.",
    popupTitle: "Become a Professional App Developer",
  },

  // Tech
  {
    id: 8,
    title: "Full-Stack Web Development",
    slug: "webDev", // I Added the slug for routing
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "09 Jun 25",
    image:
      "https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323528.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn HTML, CSS, JavaScript, React & Backend.",
    details:
      "Master web development from scratch with frontend, backend, databases, APIs, deployment, and real-world projects.",
    popupTitle: "Become a Web Developer",
  },
  {
    id: 9,
    title: "Artificial Intelligence",
    slug: "AI",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "2 June 25",
    image:
      "https://img.freepik.com/free-vector/ai-futuristic-technology-background_53876-97391.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn AI concepts, Python, Machine Learning & NLP.",
    details:
      "Master artificial intelligence with Python, machine learning models, deep learning, computer vision, and AI project deployment.",
    popupTitle: "Become an AI Professional",
  },
  {
    id: 10,
    title: "Data Science",
    slug: "DataSciences",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "9 June 25",
    image:
      "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169861.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master Data Science: Python, Machine Learning & Analytics.",
    details:
      "Learn Python, data analysis, machine learning, visualization, and real-world project building. Gain job-ready skills with live classes and industry mentorship.",
    popupTitle: "Become a Certified Data Scientist",
  },
  {
    id: 11,
    title: "Cyber Security",
    slug: "CyberSecurity",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "1 June 25",
    image:
      "https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637765.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Ethical Hacking, Network Security & Cyber Laws",
    details:
      "Master cybersecurity fundamentals, ethical hacking, penetration testing, network defense, encryption, and securing real-world systems.",
    popupTitle: "Become a Certified Cyber Security Expert",
  },

  {
    id: 12,
    title: "UI/UX",
    slug: "UIUX",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "20 June 25",
    image:
      "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Design apps and websites people love to use.",
    details:
      "Learn UI/UX skills like wireframing, prototyping, user flow creation, and real-world design projects. No coding needed — just creativity and curiosity.",
    popupTitle: "Start Your UI/UX Design Journey Today!",
  },
  {
    id: 13,
    title: "Cloud Computing",
    slug: "CloudComputing",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "3 June 25",
    image:
      "https://img.freepik.com/premium-photo/creative-square-circuit-button-hologram-with-cloud-icon-dark-wallpaper-technology-cloud-computing-concept-3d-rendering_670147-96675.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Cloud Platforms, AWS, Azure & Virtualization.",
    details:
      "Master cloud computing essentials including cloud services, deployment models, storage, networking, and real-world project implementation.",
    popupTitle: "Become a Cloud Computing Specialist",
  },
  {
    id: 14,
    slug: "VLSI",
    title: "VLSI",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "2 July 25",
    image:
      "https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlbWljb25kdWN0b3J8ZW58MHx8MHx8fDA%3D",
    desc: "Learn VLSI Design, Verilog, RTL Simulation & FPGA",
    details:
      "Master VLSI concepts with digital design, RTL coding, ASIC/FPGA implementation, synthesis, and timing analysis using industry-standard tools.",
    popupTitle: "Become a Certified VLSI Engineer",
  },
  {
    id: 15,
    title: "IOT",
    slug: "IOT",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "4 June 25",
    image:
      "https://img.freepik.com/premium-vector/internet-things-iot_35632-74.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn IoT Systems, Sensors, Arduino & Cloud Integration.",
    details:
      "Master Internet of Things with hands-on projects using IoT devices, sensor data collection, cloud storage, real-time monitoring, and automation.",
    popupTitle: "Become an IoT Specialist",
  },
  {
    id: 16,
    title: "AutoCAD",
    slug: "AutoCAD",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "5 June 25",
    image:
      "https://img.freepik.com/free-photo/tired-woman-architect-working-modern-cad-program-overtime-sitting-desk-start-up-office-industrial-female-engineer-studying-prototype-idea-pc-showing-cad-software-device-display_482257-13399.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn 2D & 3D Drafting, Modeling, and Design with AutoCAD.",
    details:
      "Master technical drawing, blueprint creation, and real-world architectural and mechanical design projects using AutoCAD software.",
    popupTitle: "Become a Certified AutoCAD Designer",
  },
  {
    id: 17,
    title: "Fullstack Java",
    slug: "JavaFullstack",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "2 June 25",
    image:
      "https://img.freepik.com/premium-photo/business-man-pushing-touch-screen-interface-java-programming-concept-virtual-machine_1085052-2842.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Java, Spring Boot, SQL & Full Stack Development",
    details:
      "Master frontend and backend development using Java, Spring Framework, SQL, HTML, CSS, and real-world project building with live mentorship.",
    popupTitle: "Become a Full Stack Java Developer",
  },
  {
    id: 18,
    title: "App Development",
    slug: "AppDevelopment",
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "8 June 25",
    image:
      "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169839.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Android, Flutter & Cross-Platform App Development.",
    details:
      "Master mobile app creation using Java, Kotlin, Flutter, backend integration, UI/UX fundamentals, and live deployment techniques.",
    popupTitle: "Become a Professional App Developer",
  },

  // Marketing  to >> Graduate..
  {
    id: 19,
    title: "Digital Marketing",
    slug: "DigitalMarketing",
    category: "Graduates",
    author: "📅 This Batch Is Now Live",
    date: "7 June 25",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    desc: "Google Ads, SEO, branding—all in one course.",
    details:
      "Master Google Ads, SEO, social media marketing, analytics & email campaigns for high-converting funnels.",
    popupTitle: "Become a Digital Marketer",
  },
  {
    id: 20,
    title: "Power BI",
    slug: "PowerBi",
    category: "Graduates",
    author: "📅 Next Batch Starting Soon",
    date: "August 2025",
    image:
      "https://img.freepik.com/premium-photo/businessman-hand-pressing-keyboard-with-mock-up-chart-slide-show-presentation-display-laptop_281691-370.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Turn data into powerful insights with Power BI",
    details:
      "Learn data visualization, dashboards, DAX formulas, and real-time reporting. Build projects that help businesses make smarter decisions using data.",
    popupTitle: "Become a Certified Power BI Analyst",
  },
  {
    id: 21,
    title: "HRM & Finance",
    slug: "HRM",
    category: "Graduates",
    author: "📅 This Batch Is Now Live",
    date: "5 May 25",
    image:
      "https://img.freepik.com/free-photo/three-business-people-meeting_23-2147626533.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Core HR Practices, Payroll, and Financial Management",
    details:
      "Master HR operations, recruitment, payroll, employee management, finance basics, and business accounting through a self-paced program designed for career growth.",
    popupTitle: "Become Skilled in HRM & Finance",
  },

  {
    id: 22,
    title: "Leadership & Managment",
    slug: "Leadership",
    category: "Crash Course",
    author: "Selfbased",
    date: "",
    image:
      "https://img.freepik.com/premium-photo/business-teamwork-meeting-success-achievement-goal_42957-2564.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Develop Leadership Skills, Team Management & Business Strategies.",
    details:
      "Learn essential management skills like team handling, decision-making, conflict resolution, project leadership, and business growth strategies through a self-paced learning program.",
    popupTitle: "Grow as a Leader with Management Skills",
  },
  {
    id: 23,
    title: "Advance Excel",
    slug: "AdvancedExcel",
    category: "Graduates",
    author: "Selfbased",
    date: "",
    image:
      "https://img.freepik.com/premium-photo/spreadsheet-document-information-financial-startup-concept-snugly_31965-600877.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master Excel for data analysis, reporting & automation.",
    details:
      "Learn formulas, pivot tables, dashboards, macros, and more through a self-paced program. Build skills to handle real-world business data confidently",
    popupTitle: "Learn Advanced Excel at Your Own Pace",
  },

  {
    id: 24,
    title: "Accounting",
    slug: "Accounting",
    category: "Graduates",
    author: "Glowlogics Solutions",
    date: "28 Aug 25",
    image:
      "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Business Accounting, Taxation & Financial Reporting.",
    details:
      "Master core accounting concepts including balance sheets, profit and loss statements, GST, TDS, and real-world finance handling through live interactive classes and guided projects.",
    popupTitle: "Become a Certified Accounting Professional",
  },
  {
    id: 25,
    title: "Entrepreneurship",
    // slug: "Entrepreneurship",
    category: "Graduates",
    author: "Batch will be Live Soon!",
    date: "",
    image:
      "https://img.freepik.com/free-photo/businessmen-closing-deal-with-handshake_1098-3793.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Startup Building, Business Strategy & Growth Planning.",
    details:
      "Master the essentials of launching and growing a business, including idea validation, funding, marketing, and scaling — all through a structured, self-paced program.",
    popupTitle: "Start Your Journey as an Entrepreneur",
  },
  {
    id: 26,
    title: "Business Law",
    // slug: "Blaw",
    category: "Graduates",
    author: "Batch will be Live Soon!",
    date: "",
    image:
      "https://img.freepik.com/premium-photo/justice-law-concept-legal-counsel-presents-client-signed-contract-with-gavel-legal-law-legal-having-team-meeting-law-firm-background_265022-79598.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Understand Legal Basics for Business & Corporate Compliance.",
    details:
      "Learn contracts, company law, intellectual property, and legal frameworks that protect businesses. Perfect for students looking to understand business operations legally.",
    popupTitle: "Learn Business Law Essentials",
  },
  {
    id: 27,
    title: "Business Communication",
    // slug: "BusinessCommunication",
    category: "Graduates",
    author: "Glowlogics Solutions",
    date: "28 Aug 25",
    image:
      "https://img.freepik.com/premium-photo/justice-law-concept-legal-counsel-presents-client-signed-contract-with-gavel-legal-law-legal-having-team-meeting-law-firm-background_265022-79598.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master Professional Communication, Presentation & Negotiation Skills.",
    details:
      "Develop effective communication strategies, from writing emails and reports to public speaking and client negotiations — essential for any career path.",
    popupTitle: "Upgrade Your Business Communication Skills",
  },

  // Soft Skills >>>> now i converted to Masters okay
  {
    id: 28,
    title: "Digital Marketing",
    slug: "DigitalMarketing",
    category: "Masters",
    author: "📅 This Batch Is Now Live",
    date: "7 June 25",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    desc: "Master Digital Marketing: SEO, Social Media, Ads & Analytics",
    details:
      "Learn live from experts through interactive sessions covering SEO, Google Ads, social media marketing, content strategy, and real-world projects to build your portfolio.",
    popupTitle: "Join Our Live Digital Marketing Program",
  },
  {
    id: 29,
    title: "HRM & Finance",
    slug: "HRM",
    category: "Masters",
    author: "📅 This Batch Is Now Live",
    date: "5 May 25",
    image:
      "https://img.freepik.com/free-photo/three-business-people-meeting_23-2147626533.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Core HR Practices, Payroll, and Financial Management",
    details:
      "Master HR operations, recruitment, payroll, employee management, finance basics, and business accounting through a self-paced program designed for career growth.",
    popupTitle: "Become Skilled in HRM & Finance",
  },
  {
    id: 30,
    title: "Advance Excel",
    slug: "AdvancedExcel",
    category: "Masters",
    author: "Selfbased",
    date: "",
    image:
      "https://img.freepik.com/premium-photo/spreadsheet-document-information-financial-startup-concept-snugly_31965-600877.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master Excel for data analysis, reporting & automation.",
    details:
      "Learn formulas, pivot tables, dashboards, macros, and more through a self-paced program. Build skills to handle real-world business data confidently",
    popupTitle: "Learn Advanced Excel at Your Own Pace",
  },

  // {
  //   id: 31,
  //   title: "Power BI",
  //   slug: "PowerBi",
  //   category: "Masters",
  //   author: "📅 Next Batch Starting Soon",
  //   date: "August 2025",
  //   image:
  //     "https://img.freepik.com/free-photo/busy-woman-working-night-front-computer-taking-notes-writing-notebook-annual-reports-checking-financial-project-focused-employee-using-technology-network-wireless-doing-overtime-job_482257-13382.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
  //   desc: "Turn data into powerful insights with Power BI",
  //   details:
  //     "Learn data visualization, dashboards, DAX formulas, and real-time reporting. Build projects that help businesses make smarter decisions using data.",
  //   popupTitle: "Become a Certified Power BI Analyst",
  // },
  {
    id: 32,
    title: "Entrepreneurship",
    category: "Masters",
    author: "Batch will be Live Soon!",
    date: "",
    image:
      "https://img.freepik.com/free-photo/businessmen-closing-deal-with-handshake_1098-3793.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn Startup Building, Business Strategy & Growth Planning.",
    details:
      "Master the essentials of launching and growing a business, including idea validation, funding, marketing, and scaling — all through a structured, self-paced program.",
    popupTitle: "Start Your Journey as an Entrepreneur",
  },

  {
    id: 33,
    title: "Business Law",
    // slug: "Blaw",
    category: "Masters",
    author: "Batch will be Live Soon!",
    date: "20 Sep 25",
    image:
      "https://img.freepik.com/free-photo/business-advisor-working-with-documentation_1098-15366.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Understand Legal Basics for Business & Corporate Compliance.",
    details:
      "Learn contracts, company law, intellectual property, and legal frameworks that protect businesses. Perfect for students looking to understand business operations legally.",
    popupTitle: "Learn Business Law Essentials",
  },
  {
    id: 34,
    title: "Business Communication",
    // slug: "BusinessCommunication",
    category: "Masters",
    author: "Batch will be Live Soon!",
    date: "",
    image:
      "https://img.freepik.com/premium-photo/cooperation-action-group-young-modern-people-smart-casual-wear-working-together_425904-9440.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master Professional Communication, Presentation & Negotiation Skills.",
    details:
      "Develop effective communication strategies, from writing emails and reports to public speaking and client negotiations — essential for any career path.",
    popupTitle: "Upgrade Your Business Communication Skills",
  },
];

export default function ProgramShowcase() {
  const [active, setActive] = useState("BTech");
  const [hoveredId, setHoveredId] = useState(null);
  const [popupDirection, setPopupDirection] = useState("right");
  const containerRef = useRef();
  const navigate = useNavigate();

  const filtered =
    active === "All"
      ? programData
      : programData.filter((p) => p.category === active);

  const handleHover = (e, id) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const spaceRight = containerRect.right - cardRect.right;

    if (spaceRight < 320) {
      setPopupDirection("left");
    } else {
      setPopupDirection("right");
    }
    setHoveredId(id);
  };

  return (
    <div
      className="bg-orange-100 py-16 px-6 md:px-20 relative"
      ref={containerRef}
    >
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-black leading-snug">
          Transform Your Career with{" "}
          <span className="text-[#ff6e0c]">Top-Tier Programs</span>
        </h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-[#ff6e0c] text-white shadow-md"
                  : "bg-white text-black border border-black hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((prog, idx) => (
            <div
              key={prog.id}
              className="relative group"
              onMouseEnter={(e) => handleHover(e, prog.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 35px rgba(0,0,0,0.2)",
                }}
                className="bg-white rounded-xl shadow-sm transition-transform duration-200 p-4 cursor-pointer block"
              >
                <div
                  onClick={() =>
                    prog.slug && navigate(`/programs/${prog.slug}`)
                  }
                  className="relative mb-4 h-48 w-full cursor-pointer"
                >
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="rounded-lg h-full w-full object-cover"
                  />
                  {[
                    "Entrepreneurship",
                    "Business Law",
                    "Business Communication",
                  ].includes(prog.title) ? (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      COMING SOON
                    </span>
                  ) : (
                    ["BTech", "Masters", "Graduates"].includes(
                      prog.category
                    ) && (
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        LIVE
                      </span>
                    )
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-1">{prog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{prog.desc}</p>
                <div className="text-sm text-gray-700 mt-auto">
                  <span className="font-medium">{prog.author}</span> •{" "}
                  {prog.date}
                </div>
              </motion.div>

              <AnimatePresence>
                {hoveredId === prog.id && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: popupDirection === "left" ? -50 : 50,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{
                      opacity: 0,
                      x: popupDirection === "left" ? -50 : 50,
                    }}
                    className={`absolute top-0 w-72 bg-white text-black shadow-xl rounded-lg p-5 z-50 ${
                      popupDirection === "left"
                        ? "right-full mr-5"
                        : "left-full ml-5"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-black">
                      {prog.popupTitle}
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">{prog.details}</p>
                    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                      <li>Lifetime Access</li>
                      <li>Certificate of Completion</li>
                      <li>Community Support</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
