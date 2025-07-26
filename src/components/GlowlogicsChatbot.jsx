import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const chatbotFlow = {
  step1: {
    message: "👋 Welcome to Glowlogics! Ready to explore career-building opportunities?",
    options: [
      { label: "Yes, show me programs", next: "step2_programs" },
      { label: "I'm looking for mentorship", next: "step2_mentorship" },
    ],
  },
  step2_programs: {
    message: "🌟 We offer UI/UX, Data Science, Java Fullstack & more. Want to check details?",
    options: [
      { label: "Yes, show details", next: "step3_contact" },
      { label: "Tell me about duration", next: "step3_duration" },
    ],
  },
  step2_mentorship: {
    message: "👨‍🏫 Our mentors guide you 1:1 — want to connect with one?",
    options: [
      { label: "Yes, book a slot", next: "step3_contact" },
      { label: "Explore other options", next: "step2_programs" },
    ],
  },
  step3_contact: {
    message: "📩 Drop us a message via socials or use the form below to connect instantly!",
    options: [],
  },
  step3_duration: {
    message: "📆 Most programs are 8–12 weeks. Custom fast-tracks available.",
    options: [
      { label: "Connect with team", next: "step3_contact" },
      { label: "Go back", next: "step2_programs" },
    ],
  },
};

export default function Chatbot() {
  const [chatHistory, setChatHistory] = useState([
    { from: "bot", text: chatbotFlow.step1.message },
  ]);
  const [currentStep, setCurrentStep] = useState("step1");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setChatHistory((prev) => [
      ...prev,
      { from: "user", text: option.label },
      { from: "bot", text: chatbotFlow[option.next]?.message },
    ]);
    setCurrentStep(option.next);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-20 right-6 z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {!isOpen ? (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="bg-orange-500 text-white p-4 rounded-full shadow-lg animate-bounce"
          >
            💬
          </motion.button>
        ) : (
          <div className="w-80 bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-orange-100">
              <div className="flex items-center gap-2">
                <img
                  src="/favicon.ico"
                  alt="Glowlogics"
                  className="w-8 h-8 rounded-full"
                />
                <h3 className="text-sm font-semibold text-orange-700">Glowlogics</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500">
                <FaTimes />
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.from === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-xl text-sm ${
                      msg.from === "bot"
                        ? "bg-orange-100 text-gray-800"
                        : "bg-orange-400 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Options */}
            <div className="p-4 border-t space-y-2">
              {chatbotFlow[currentStep]?.options?.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  className="w-full bg-orange-200 hover:bg-orange-300 text-orange-900 text-sm px-3 py-2 rounded-md transition"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
