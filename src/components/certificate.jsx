import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CertificatePage() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleVerify = async () => {
    if (!certId) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/certificates/${certId}/`
      );
      setResult({ status: "found", data: res.data });
    } catch (err) {
      console.error("Verification error:", err);
      setResult({ status: "notfound" });
    }
    setLoading(false);
  };

  const url = typeof window !== "undefined" ? window.location.href : "";
  const title =
    "I just earned my ISO & AICTE verified certificate from GlowLogics Solutions! ";
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center p-20">
      {/* Header */}
      <div className="flex flex-col items-center p-6">
        <div className="w-full lg:w-1/2 mx-auto relative flex flex-col items-center border-4 border-orange-700">
          <img
            src="/Sample Internship Certificate- Glowlogics.pdf.png"
            alt=""
          />
        </div>

        <h1 className="text-5xl font-bold mb-4 p-8">Verify Certificate</h1>
        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={certId}
          onChange={(e) => setCertId(e.target.value)}
          className="border p-2 rounded w-80 mb-4"
        />
        <button
          onClick={handleVerify}
          className="bg-orange-400 text-white px-4 py-2 rounded"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {result && result.status === "found" && (
          <div className="mt-6 p-4 border rounded bg-orange-100 w-80">
            <h2 className="text-lg font-semibold text-orange-400">
              ✅ Verified
            </h2>
            <p> {result.data.certificate_id || result.data.id}</p>
          </div>
        )}

        {result && result.status === "notfound" && (
          <div className="mt-6 p-4 border rounded bg-red-100 w-80">
            <h2 className="text-lg font-semibold text-red-700">
              ❌ Certificate Not Found
            </h2>
          </div>
        )}
      </div>
      <header className="w-full max-w-6xl flex justify-between items-center border-b pb-4 mb-6">
        <a href="#" className="text-orange-400 font-bold text-2xl">
          Glowlogics Solutions
        </a>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <section className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-2">
            Verify & Authenticate Your Certificate
          </h1>
          <p className="text-gray-600 mb-4">
            Easily verify the authenticity of your GlowLogics Internship
            Certificate here. Enter your certificate ID to confirm your
            completion status and access detailed information about your
            achievement.
          </p>

          {/* User Info */}
          <div className="flex items-center mb-4 ">
            <div className="w-12 h-12 flex items-center justify-center  bg-white text-white ">
              <img src="/1.svg" alt="gl-logo" />
            </div>
            <div className="ml-3">
              <p className="font-semibold">Glowlogics Solutions</p>
              <a href="#" className="text-orange-400 text-sm">
                www.glowlogics.in
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Why This Certificate Matters</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "✅ ISO Certified Credential",
                "✅ VTU Verified",
                "✅ MSME & Startup India Affiliation",
                "✅ Partnership with IIT Bombay TechFest",
                "✅ Career Credibility",
                "✅ Easily Shareable",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 border rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Issue Info */}
          <div className="flex flex-wrap justify-between text-sm text-gray-600">
            <p>
              <strong>Verification Authority: </strong> Glowlogics Solutions
            </p>

            <p>
              <strong>Expires on: </strong> Does not expire
            </p>
          </div>
        </section>

        {/* Right Section */}
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
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.23.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.3 6.81 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.81 0 1.5-.3 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/>
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
      </main>
      <div className="mt-10 w-[380px] rounded-xl border shadow-md bg-white p-4 mx-auto text-center ml-[1080px]">
        {/* Small square button */}
        {!open && (
          <div className="flex flex-col items-center">
           <h2 className="text-lg font-semibold mb-4 flex items-center gap-3">
  {/* Animated Verified Icon */}
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="green"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.707 9.293l-6.364 6.364a1 1 0 01-1.414 0l-3.182-3.182a1 1 0 111.414-1.414l2.475 2.475 5.657-5.657a1 1 0 111.414 1.414z"/>
  </motion.svg>

  Credential Verification
</h2>
            <button
              onClick={() => setOpen(true)}
              className="w-64 py-3 bg-orange-400 text-white font-semibold rounded-xl shadow-md hover:bg-orange-500"
            >
              Verify Credential
            </button>
          </div>
        )}

        {/* Small square box (instead of full modal) */}
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-[600px] h-[400px] rounded-xl border shadow-md bg-white p-4 relative mx-auto"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {loading ? (
              <div className="flex flex-col justify-center items-center h-[250px]">
                <motion.div
                  className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <p className="mt-3 text-sm text-gray-500">
                  Verifying credential...
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="overflow-y-auto max-h-[320px] pr-2"
              >
                <h2 className="text-lg font-semibold mb-3 text-center">
                  Credential Verification
                </h2>

                <div className="flex items-center gap-2 justify-center text-green-500 font-medium mb-2">
                  <CheckCircle className="w-6 h-6" />
                  <span>
                    This <strong>Glowlogics Solution&apos;s Program</strong>{" "}
                    Credential is VERIFIED
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3 text-center">
                  This digital credential was securely issued via Accredible and
                  its information is valid.
                </p>

                {/* Issuers */}
                {[
                  { name: "ISO", logo: "data:image/png;base64,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", website: "https://www.iso.org/" },
                  { name: "MSME", logo: "data:image/png;base64,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", website: "https://msme.gov.in/" },
                  { name: "VTU", logo: "data:image/jpeg;base64,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", website: "https://vtu.ac.in/" },
                ].map((issuer) => (
                  <div key={issuer.name} className="border-t pt-2 mb-2">
                    <div className="flex items-center gap-2 text-green-500 text-sm mb-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>This issuer is verified by Accredible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={issuer.logo}
                        alt={issuer.name}
                        className="w-12 h-12 rounded-full border"
                      />
                      <div>
                        <p className="font-medium">{issuer.name}</p>
                        <a
                          href={issuer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 text-sm hover:underline"
                        >
                        Certified Issuer&apos;s Website
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
