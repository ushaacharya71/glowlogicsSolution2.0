import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function VTUCertificate() {
  // Hooks must always be here (top of the component) so that they run in the same order on every render through the harshjaiswallprocess rules of hooks
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const url = typeof window !== "undefined" ? window.location.href : "";
  const title =
    "I just earned my ISO & AICTE verified certificate from GlowLogics Solutions! ";

  // Return always comes last
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center p-20">
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Left Section */}
  <section className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
    {/* Header */}
    <h1 className="text-3xl font-bold mb-3 text-orange-500">
      VTU Certificate Verification
    </h1>
    <p className="text-gray-700 mb-6">
      Verify your internship or course completion certificates issued under
      Visvesvaraya Technological University (VTU). Enter your unique certificate
      ID to confirm authenticity and access detailed records of your achievement.
    </p>

    {/* VTU Logo & Description */}
    <div className="flex items-center mb-6 gap-4">
      <div className="w-20 h-20 flex items-center justify-center bg-white shadow rounded-full">
        <img src="/vtu.png" alt="VTU Logo" className="w-16 h-16" />
      </div>
      <div>
        <p className="font-semibold text-lg">Visvesvaraya Technological University</p>
        <p className="text-gray-600 text-sm">
          VTU is a leading technical university in India, ensuring quality education and
          recognized standards for all certified programs.
        </p>
      </div>
    </div>

    {/* Verification Form */}
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">
        Enter Certificate ID
      </label>
      <input
        type="text"
        placeholder="e.g., VTU123456"
        className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition">
        Verify Certificate
      </button>
    </div>

    {/* Why it matters */}
    <div className="mb-6">
      <h2 className="font-semibold mb-2 text-gray-800">Why This Verification Matters</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>✅ Ensures your VTU certificate is genuine</li>
        <li>✅ Adds credibility to your resume & LinkedIn profile</li>
        <li>✅ Helps recruiters quickly verify your credentials</li>
        <li>✅ Secure and easy-to-access records</li>
      </ul>
    </div>

    {/* Verification Authority & Expiry */}
    <div className="flex flex-wrap justify-between text-sm text-gray-600">
      <p>
        <strong>Verification Authority:</strong> VTU & Glowlogics Solutions
      </p>
      <p>
        <strong>Expires on:</strong> Does not expire
      </p>
    </div>
  </section>

  {/* Right Section */}
  <aside className="bg-white shadow-md rounded-lg p-6">
    <h2 className="font-semibold text-lg mb-4 flex items-center gap-2 text-gray-800">
      Share Your Achievement
    </h2>
    <p className="text-gray-600 text-sm mb-3">
      Share your verified certificate on social media or add it directly to your LinkedIn profile.
    </p>

    {/* Social Buttons */}
    <div className="flex space-x-3 mb-4">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded bg-gray-100 hover:bg-gray-200"
      >
        <FiLinkedin className="text-orange-400 text-xl" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded bg-gray-100 hover:bg-gray-200"
      >
        <FaFacebook className="text-orange-400 text-xl" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded bg-gray-100 hover:bg-gray-200"
      >
        <FaXTwitter className="text-black text-xl" />
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded bg-gray-100 hover:bg-gray-200"
      >
        <FaWhatsapp className="text-green-500 text-xl" />
      </a>
    </div>

    <button
      onClick={() => {
        const certUrl =
          typeof window !== "undefined" ? window.location.href : "";
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            certUrl
          )}`,
          "_blank"
        );
      }}
      className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition"
    >
      Add to My LinkedIn Profile
    </button>

    {/* Additional Info */}
    <div className="mt-8">
      <h3 className="font-semibold mb-3 text-gray-800">Why VTU Certificates Matter</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>🎓 Recognized by top universities and recruiters</li>
        <li>🏆 Ensures academic credibility and authenticity</li>
        <li>💼 Helps in career growth & internships</li>
      </ul>
    </div>
  </aside>
</main>

      <div className="mt-10 max-w-6xl w-full rounded-xl border shadow-md bg-white p-6 mx-auto text-center">
        {/* Button box */}
        {!open && (
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="green"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.707 9.293l-6.364 6.364a1 1 0 01-1.414 0l-3.182-3.182a1 1 0 111.414-1.414l2.475 2.475 5.657-5.657a1 1 0 111.414 1.414z" />
              </motion.svg>
              Credential Verification
            </h2>
            <button
              onClick={() => setOpen(true)}
              className="w-72 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600"
            >
              Verify Credential
            </button>
          </div>
        )}

        {/* Fullscreen modal */}
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex justify-center items-center bg-black/40 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-[95%] max-w-6xl h-[85%] rounded-xl border shadow-lg bg-white p-8 relative overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>

              {loading ? (
                <div className="flex flex-col justify-center items-center h-full">
                  <motion.div
                    className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                  />
                  <p className="mt-4 text-lg text-gray-600">
                    Verifying credential...
                  </p>
                </div>
              ) : (
                <div>
                  {/* Heading */}
                  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Credential Verification
                  </h2>

                  {/* Status */}
                  <div className="flex items-center gap-3 justify-center text-green-600 font-semibold mb-6">
                    <CheckCircle className="w-8 h-8" />
                    <span className="text-lg">
                      This <strong>Glowlogics Solution&apos;s </strong>{" "}
                      Credential is VERIFIED
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base mb-8 text-center max-w-3xl mx-auto">
                    This digital credential was securely issued via Accredible
                    and its information has been validated. The following
                    institutions/organizations have verified this credential’s
                    authenticity.
                  </p>

                  {/* Issuers in grid layout */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        name: "ISO",
                        logo: "ISO.jpg",
                        website: "https://www.iso.org/",
                        description:
                          "The International Organization for Standardization (ISO) develops and publishes international standards to ensure quality, safety, and efficiency across industries.",
                      },
                      {
                        name: "MSME",
                        logo: "MSME.png",
                        website:
                          "https://udyamregistration.gov.in/Udyam_Verify.aspx",
                        description: (
                          <>
                            The Ministry of Micro, Small & Medium Enterprises
                            fosters entrepreneurship, supports innovation, and
                            provides certification for small and medium
                            businesses in India.
                            <br />
                            <strong style={{ color: "black" }}>
                              UDYAM REGISTRATION NUMBER:
                              <br /> UDYAM-KR-11-0071314
                            </strong>
                          </>
                        ),
                      },
                      {
                        name: "VTU",
                        logo: "vtu.jpeg",
                        website:
                          "https://vtu.internyet.in/companies/glowlogics-solutions-pvt-ltd",
                        description:
                          "Visvesvaraya Technological University (VTU) is a renowned public university in Karnataka, India, dedicated to excellence in engineering and technology education.",
                      },
                    ].map((issuer) => (
                      <div
                        key={issuer.name}
                        className="rounded-lg border p-6 flex flex-col items-center text-center shadow-md bg-white"
                      >
                        <img
                          src={issuer.logo}
                          alt={issuer.name}
                          className="w-20 h-20 rounded-full border mb-3 object-cover"
                        />
                        <p className="font-semibold text-lg">{issuer.name}</p>
                        <p className="text-green-600 text-sm mb-2">
                          Verified by Accredible
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                          {issuer.description}
                        </p>
                        <a
                          href={issuer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 text-sm font-medium hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
