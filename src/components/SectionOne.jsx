
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaEnvelope,} from "react-icons/fa";
import { MdOutlineDesktopMac } from "react-icons/md";

const SupportSection = () => {
  return (
    <section className="relative w-full px-4 md:px-12 lg:px-20 py-16 bg-orange-100">
      {/* Top Big Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full bg-white rounded-3xl shadow-xl p-8 flex flex-col lg:flex-row justify-between items-center gap-8 mb-16"
      >
        <div className="flex-1 space-y-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">Support</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Student Support <br className="hidden md:block" />
           Glowlogics Solutions
          </h2>
          <p className="text-gray-500 text-lg">

            Get better help from our best support help@glowlogics.in We’re here to guide you through every step.

          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/170/975/non_2x/support-of-help-to-solve-problem-manager-mentorship-or-coaching-to-help-team-success-leadership-to-guide-employee-to-achieve-goal-concept-giant-hand-help-business-people-cross-the-problem-gap-vector.jpg"
            alt="Support Agent"
            className="w-full max-w-md rounded-xl"
          />
        </div>
      </motion.div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
        >
          <p className="text-xs uppercase font-semibold text-gray-500 mb-2">Demo</p>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Request a free demo</h3>
          <div className="flex items-center gap-3 mt-6">
            <MdOutlineDesktopMac className="text-green-500 text-2xl" />
            <a href="#" className="text-green-600 font-medium hover:underline text-sm flex items-center">
              Request <FaArrowRight className="ml-1" />
            </a>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
        >
          <p className="text-xs uppercase font-semibold text-gray-500 mb-2">Call Us</p>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Have doubt? Call Us</h3>
          <div className="flex items-center gap-3 mt-6">
            <FaPhoneAlt className="text-blue-500 text-lg" />
            <a
              href="tel:+919"
              className="text-blue-600 font-medium hover:underline text-sm flex items-center"
            >
              +91 9620294767 <FaArrowRight className="ml-1" />
            </a>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
        >
          <p className="text-xs uppercase font-semibold text-gray-500 mb-2">Query</p>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Have query? Mail Us</h3>
          <div className="flex items-center gap-3 mt-6">
            <FaEnvelope className="text-purple-500 text-lg" />
            <a
              href="mailto:hr@glowlogics.in"
              className="text-blue-600 font-medium hover:underline text-sm flex items-center"
            >
            help@glowlogics.in <FaArrowRight className="ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
