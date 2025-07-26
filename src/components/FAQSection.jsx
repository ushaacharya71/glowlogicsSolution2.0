import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What is Glowlogics Solutions?",
    answer:
      "Glowlogics is an ISO and MSME-certified Software training company offering industry-relevant training programs, internships, and placement assistance in both technical and non-technical domains..",
  },
  {
    question: "Who can join these Programs?",
    answer:
      "Engineering, management, commerce, and general degree students from 1st year to final year, as well as working professionals looking to upskill, can enroll.",
  },
  {
    question: "Are Glowlogics Certificates valid?",
    answer:
      "Yes. Glowlogics certifications are ISO and MSME-recognized, which means they hold value for placements, higher studies, and professional growth. ",
  },
  {
    question: "What is your Refund policy?",
    answer:
      "Glowlogics follows a no-refund policy once the program has been initiated, as per ISO compliance. We encourage all students to review program details carefully before registering.",
  },
  {
    question: "Do you provide Live classes or only Recorded content?",
    answer:
      "We offer both options: Live interactive classes with mentors for select programs, Self-paced learning with mentor support for others.",
  },
  {
    question: "How does Placement Assistance work?",
    answer:
      "Placement assistance includes:Resume building,LinkedIn profile optimization,Direct referrals to hiring partners and MNCs, While we assist with placement, job offers depend on the student’s performance and skills.",
  },
  {
    question: "Are the Mentors Industry Professionals?",
    answer:
      "Yes. Our mentors come from companies like TCS, Cognizant, Capgemini, and other leading organizations, ensuring practical exposure and real-world insights.",
  },
  {
    question: "How do I Register for a Program?",
    answer:
      "You can register using our official Registration link or through Company QR Code only",
  },
  {
    question: "Do I get Internship Opportunities through Glowlogics?",
    answer:
      "Yes. Most of our programs include an internship component with real-world projects, weekly mentor guidance, and project submission requirements.",
  },
  {
    question: "What are the Payment methods available?",
    answer:
      "You can pay via UPI, Google Pay, PhonePe, Paytm, or direct bank transfer. Company QR code and account details are shared after registration.",
  },
  {
    question: "Can I Enroll while studying in college?",
    answer:
      "Absolutely. Our programs are structured keeping students' academic schedules in mind, making them flexible for both college students and working professionals.",
  },
];

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState([]);
  const [toggleAll, setToggleAll] = useState(false);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightText = (text, term) => {
    if (!term) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <mark key={i} className="bg-[#ff6e0c] px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const handleToggle = (index) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleExpandCollapseAll = () => {
    if (toggleAll) {
      setExpanded([]);
    } else {
      setExpanded(filteredFaqs.map((_, i) => i));
    }
    setToggleAll(!toggleAll);
  };

  return (
    <section className="w-full  bg-orange-100">
      <div className="text-center mb-10">
        <p className="text-sm font-medium bg-orange-100 uppercase"></p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-gray-600">
          Have questions? We are here to help.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="🔍 Search..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#ff6e0c] transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleExpandCollapseAll}
            className="px-4 py-2 bg-[#ff6e0c] text-white rounded hover:bg-[#ff6e0c] transition"
          >
            {toggleAll ? "Collapse All" : "Expand All"}
          </button>
        </div>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto px-4 py-16">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900 focus:outline-none"
              >
                <span>{highlightText(faq.question, searchTerm)}</span>
                {expanded.includes(index) ? (
                  <FaMinus className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {expanded.includes(index) && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-gray-600 text-base">
                      {highlightText(faq.answer, searchTerm)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>

      {/*  */}
    </section>
  );
}
