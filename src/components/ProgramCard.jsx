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
    id: 9,
    title: "DSA in JAVA",
    slug: "dsajava", // I Added the slug for routing
    category: "BTech",
    author: "📅 This Batch Is Now Live",
    date: "09 Jun 25",
    image:
      "data:image/jpeg;base64,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",
    desc: "Learn HTML, CSS, JavaScript, React & Backend.",
    details:
      "Master Data Structures and Algorithms in Java with problem-solving techniques, coding patterns, and real-world applications.",
    popupTitle: "DSA in Java",
  },
  {
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
