import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

const PlacementVerification = () => {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const apiURL =
    "https://script.google.com/macros/s/AKfycby0h2aw7pUCCCXF40RVTIST3s68yTROE_I7v-f2JDMec6boV-ZH9-Tvdzb9eIMb0E69NQ/exec?id=";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idFromURL = params.get("id");

    if (idFromURL) {
      setCertId(idFromURL);
      handleVerify(idFromURL);
    }
  }, [location.search]);
  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleVerify = async (manualId) => {
    const finalId = manualId || certId;

    if (!finalId.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(apiURL + encodeURIComponent(finalId));
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Verification error:", error);
      setResult({ valid: false, message: "Something went wrong!" });
    }

    setLoading(false);
  };
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title =
    "I just earned my ISO & AICTE verified certificate from GlowLogics Solutions! ";

  return (
    <div className="min-h-screen bg-orange-100 p-8 flex flex-col items-center pt-32">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 mb-10">
        {/* Title */}
        <h1 className="text-4xl font-bold font-[Poppins] text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500">
          Placement Training Certificate Verification
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
            placeholder="Enter Certificate ID"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={() => handleVerify()}
            className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </div>

        {/* Result Box */}
        {result && (
          <>
            {result.valid ? (
              <div className="p-5 rounded-xl bg-green-50 border border-green-300">
                <h2 className="text-xl font-semibold text-green-700 mb-3">
                  ✔ Certificate Verified
                </h2>

                <p>
                  <b>Name:</b> {result.name}
                </p>
                <p>
                  <b>Issue Date:</b> {result.issueDate}
                </p>
                <p>
                  <b>Certificate ID:</b> {result.certificateId}
                </p>
                <p>
                  <b>Email:</b> {result.email || "Not available"}
                </p>

                {result.certificateLink && (
                  <a
                    href={result.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                  >
                    Download Certificate
                  </a>
                )}
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-red-50 border border-red-300 text-red-700">
                ❌ {result.message}
              </div>
            )}
          </>
        )}
      </div>

      {/* =================================================================================== */}
      {/* 🔥 BELOW SECTION (Matches Your Screenshot EXACTLY) */}
      {/* =================================================================================== */}

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {/* LEFT BIG BOX */}
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">
            Verify & Authenticate Your Certificate
          </h2>
          <p className="text-gray-600 mb-4">
            Easily verify the authenticity of your GlowLogics Certificate here.
            Enter your certificate ID to confirm your completion status and
            access detailed information about your achievement.
          </p>

          {/* Profile */}
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/1.svg"
              alt="Glowlogics"
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-semibold">Glowlogics Solutions</p>
              <a
                href="https://www.glowlogics.in"
                target="_blank"
                className="text-orange-600 text-sm"
              >
                www.glowlogics.in
              </a>
            </div>
          </div>

          {/* Why This Certificate Matters */}
          <h3 className="font-semibold mb-2">Why This Certificate Matters</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "ISO Certified Credential",
              "VTU Verified",
              "MSME & Startup India Affiliation",
              "Partnership with IIT Bombay TechFest",
              "Career Credibility",
              "Easily Shareable",
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-lg flex items-center gap-1"
              >
                ✔ {tag}
              </span>
            ))}
          </div>

          <p>
            <b>Verification Authority:</b> Glowlogics Solutions
          </p>
          <p>
            <b>Expires On:</b> Does not expire
          </p>
        </div>

        {/* RIGHT BOX - SOCIAL SHARE */}
        <aside className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    {/* Share Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.23.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.3 6.81 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.81 0 1.5-.3 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                    Share Credential
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">
                    Show this credential on your social network
                  </p>
                  <div className="flex space-x-3 mb-4">
                    {/* LinkedIn */}
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

                    {/* Facebook */}
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

                    {/* Twitter (X) */}
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

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        `${title} ${url}`
                      )}`}
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
                      // LinkedIn sharing URL for a certificate page
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          certUrl
                        )}`,
                        "_blank"
                      );
                    }}
                    className="w-full bg-orange-400 text-white py-2 rounded-lg"
                  >
                    Add to My LinkedIn Profile
                  </button>

                  <div className="mt-8">
                    <h3 className="font-semibold mb-3">Continue Learning...</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="border-b pb-2">
                        <strong>ISO Verified</strong> – Meets international quality
                        standards
                      </li>

                      <li>
                        <strong>MSME & Startup India Affiliation </strong> –
                        Government-supported initiative
                      </li>
                      <li>
                        <strong>Affiliated with VTU </strong> – We are proudly
                        affiliated with Visvesvaraya Technological University (VTU),
                        ensuring quality education and recognized academic standards.
                      </li>
                    </ul>
                  </div>
                </aside>
      </div>
      <div className=" max-w-6xl w-full rounded-xl border shadow-md bg-white p-5 mx-auto text-center">
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
};

export default PlacementVerification;
