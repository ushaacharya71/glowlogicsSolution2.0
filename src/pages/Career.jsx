import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaBuilding } from "react-icons/fa";

const jobOpenings = [
  {
    id: 1,
    title: "Inside Sales Representative",
    location: "Bangalore, Bangalore, Kolkata",
    category: "Sales",
    company: "Glowlogics",
    companyLevel: "Mid-Level",
    exp: "Freshers, 1-3 years",
    ctc: "₹4-6 LPA",
    description:
      "Responsible for inbound / outbound sales calls, product demos, and closing leads.",
  },
  {
    id: 2,
    title: "Marketing Specialist",
    location: "Bangalore, Bangalore,",
    category: "Marketing",
    company: "Glowlogics",
    companyLevel: "Entry-Level",
    exp: "0-2 years",
    ctc: "₹3-5 LPA",
    description:
      "Assist in executing campaigns, managing SEO/SEM, and analyzing market trends.",
  },
  {
    id: 3,
    title: "Brand Marketing",
    location: "Work from Home",
    category: "Marketing",
    company: "Glowlogics",
    companyLevel: "Mid-Level",
    exp: "0-2 years",
    ctc: "₹4.5-7 LPA",
    description:
      "Develop and execute branding strategies to increase product visibility and equity.",
  },
  {
    id: 4,
    title: "Manager Sales",
    location: "Bangalore",
    category: "Sales",
    company: "Glowlogics",
    companyLevel: "Senior-Level",
    exp: "5+ years",
    ctc: "₹10-15 LPA",
    description:
      "Lead the sales team, drive KPIs, manage strategic clients and revenue pipelines.",
  },
  {
    id: 5,
    title: "Manager Marketing",
    location: "Bangalore, Kolkata, Bangalore",
    category: "Marketing",
    company: "Glowlogics",
    companyLevel: "Senior-Level",
    exp: "5+ years",
    ctc: "₹10-14 LPA",
    description:
      "Head the marketing team, define GTM strategy, monitor performance.",
  },
  {
    id: 6,
    title: "Campus Ambassador",
    location: "Work from Home",
    category: "Marketing",
    company: "Glowlogics",
    companyLevel: "Internship",
    exp: "Fresher",
    ctc: "Performance Based",
    description:
      "Represent Glowlogics in your college, promote workshops, and onboard new users.",
  },
  {
    id: 7,
    title: "B2B Sales",
    location: "Bangalore and Bangalore",
    category: "Sales",
    company: "Glowlogics",
    companyLevel: "Mid-Level",
    exp: "2-4 years",
    ctc: "₹5-8 LPA",
    description:
      "Build and manage client relationships, pitch enterprise solutions.",
  },
];

export default function Career() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeId, setActiveId] = useState(null);

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleFilterChange = (title) => {
    setSelectedFilter(title);
    setDropdownOpen(false);
  };

  const filteredJobs = jobOpenings
    .filter((job) => selectedFilter === "All" || job.title === selectedFilter)
    .filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const uniqueTitles = ["All", ...new Set(jobOpenings.map((job) => job.title))];

  return (
    <div className="min-h-screen bg-orange-100 py-10 px-4 overflow-hidden pt-28">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20 px-4">
        <div>
          <h1 className="text-5xl font-extrabold text-black leading-snug">
            <span className="bg-yellow-300 px-2 inline-block rotate-[-2deg]">
              Shift
            </span>{" "}
            your career for{" "}
            <span className="bg-orange-400 px-2 inline-block rotate-[-2deg]">
              better outcomes
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-gray-700">
            Unlock your potential with New-Path — a smarter way to navigate your
            career. From learning to applying, we bring every essential action
            into one seamless platform. Whether you are starting out or leveling
            up, streamline your journey and make meaningful progress toward your
            goals, all in one place.
          </p>
          <a
            href="https://forms.gle/H933dZDTiavzL5Fa8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition w-fit">
              Apply Now →
            </button>
          </a>
        </div>
      </div>

      {/* Feature Circles */}
      {/* Feature Circles */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 mb-16 px-5">
  {[
    {
      title: "Google",
      img: "/googlemap.jpeg",
      rating: "4.6/5 – reviews",
      platform: "Google Map",
      link: "https://www.google.com/maps/place/Glowlogics+Solutions/@12.9163113,77.632504,17z/data=!4m18!1m9!4m8!1m6!1m2!1s0x3bae15005309cf71:0x2f15b757ea19a355!2sGround+Floor,+Glowlogics+Solutions,+Outer+Ring+Road,+Jakkasandra,+1st+Block+Koramangala,+HSR+Layout+5th+Sector,+Bengaluru,+Karnataka!2m2!1d77.6350789!2d12.9163061!1m0!3m7!1s0x3bae15005309cf71:0x2f15b757ea19a355!8m2!3d12.9163061!4d77.6350789!9m1!1b1!16s%2Fg%2F11wqn_ds03?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D", // your URL
    },
    {
      title: "Glassdoor",
      img: "/glassdoor.png",
      rating: "4.6/5 – reviews",
      platform: "Glassdoor",
      link: "https://www.glassdoor.co.in/Overview/Working-at-GlowLogics-Solutions-EI_IE10427430.11,31.htm",
    },
    {
      title: "AmbitionBox",
      img: "/review.png",
      rating: "4.2/5 – reviews",
      platform: "AmbitionBox",
      link: "https://www.ambitionbox.com/reviews/glowlogics-solutions-reviews",
    },
  ].map((feature, i) => (
    <a
      key={i}
      href={feature.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-64 bg-white rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="h-40 w-full relative">
        <img
          src={feature.img}
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <h3 className="text-white font-bold text-lg">{feature.title}</h3>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center text-center">
        <p className="font-semibold text-gray-800">{feature.rating}</p>
        <p className="text-gray-500 text-sm mt-1">{feature.platform}</p>
      </div>
    </a>
  ))}
</div>
      {/* Search & Filter */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row items-center gap-4 px-2">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:flex-1 p-4 text-lg rounded-lg shadow-md outline-none focus:ring-4 ring-yellow-300 transition"
        />
        <div className="relative w-full md:w-72">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <span>{selectedFilter}</span>
            {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-full max-h-60 overflow-y-auto"
              >
                {uniqueTitles.map((title, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleFilterChange(title)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {title}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Job Listings */}
      <div className="w-full max-w-6xl mx-auto space-y-6 px-2">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-transparent hover:border-orange-400 hover:shadow-[0_0_0_2px_rgba(139,92,246,0.4)] hover:scale-[1.015] transition-all duration-300 ease-in-out"
          >
            <div
              onClick={() => toggleDropdown(job.id)}
              className="cursor-pointer flex justify-between items-center p-6 hover:bg-gray-50 transition"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-700">
                  {job.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {activeId === job.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {activeId === job.id && (
                <motion.div
                  className="px-6 pb-6 text-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mb-2">
                    <strong>Company:</strong> {job.company}
                  </p>
                  <p className="mb-2 flex items-center gap-2">
                    <FaBuilding className="text-gray-400" />
                    {job.companyLevel}
                  </p>
                  <p className="mb-2">
                    <strong>Experience:</strong> {job.exp}
                  </p>
                  <p className="mb-2">
                    <strong>CTC:</strong> {job.ctc}
                  </p>
                  <p className="mb-2">
                    <strong>Description:</strong> {job.description}
                  </p>
                  <a
                    href="https://forms.gle/H933dZDTiavzL5Fa8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-orange-600 transition w-fit">
                      Apply Now →
                    </button>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <p className="text-white text-center mt-10 text-lg">
            No job openings found.
          </p>
        )}
      </div>
    </div>
  );
}
