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
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 mb-16 px-4">
        {[
          {
            title: "Google",
            img: "data:image/jpeg;base64,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",
            rating: "4.6/5 – reviews",
            platform: "Google Map",
          },
          {
            title: "Team",
            img: "data:image/png;base64,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",
            rating: "Team",
            platform: "Team work and more",
          },
          {
            title: "AmbitionBox",
            img: "data:image/png;base64,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",
            rating: "4.0/5 – reviews",
            platform: "AmbitionBox",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="w-64 h-64 rounded-full overflow-hidden shadow-lg bg-white flex flex-col"
          >
            <div className="h-1/2 w-full relative">
              <img
                src={feature.img}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="h-1/2 flex flex-col justify-center items-center px-4 text-center text-sm">
              <p className="font-semibold">{feature.rating}</p>
              <p className="text-gray-500 text-xs mt-1">{feature.platform}</p>
            </div>
          </div>
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
