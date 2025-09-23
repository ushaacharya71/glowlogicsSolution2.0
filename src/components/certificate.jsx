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
          <h2 className="font-semibold text-lg mb-4">Share Credential</h2>
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
            <h2 className="text-lg font-semibold mb-4">
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

                <div className="flex items-center gap-2 justify-center text-orange-400 font-medium mb-2">
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
                  { name: "ISO", logo: "", website: "https://www.iso.org/" },
                  { name: "MSME", logo: "", website: "https://msme.gov.in/" },
                  { name: "VTU", logo: "", website: "https://vtu.ac.in/" },
                ].map((issuer) => (
                  <div key={issuer.name} className="border-t pt-2 mb-2">
                    <div className="flex items-center gap-2 text-orange-400 text-sm mb-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>This issuer is verified by Accredible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={issuer.logo}
                        alt={issuer.name}
                        className="w-8 h-8 rounded-full border"
                      />
                      <div>
                        <p className="font-medium">{issuer.name}</p>
                        <a
                          href={issuer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-sm hover:underline"
                        >
                          Issuer&apos;s Website
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
