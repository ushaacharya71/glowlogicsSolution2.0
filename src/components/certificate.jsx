import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CertificatePage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  ///////////////////////////////////////////////////////////////////////////////////
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Replace with your real Google Apps Script URL
  const apiURL =
    "https://script.google.com/macros/s/AKfycbwyd9G-DoprZ2yBqZogM2QBHFi4C545qat_vEKNrLzbHaPrS21Ezbmw_0yt6zDxJ6nrYA/exec";

  const handleVerify = async () => {
    if (!certId.trim()) {
      alert("Please enter a Certificate ID");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`${apiURL}?id=${certId}`);
      const data = await res.json();

      if (data.valid) {
        setResult({ status: "found", data });
      } else {
        setResult({ status: "notfound" });
      }
    } catch (error) {
      console.error("Error verifying certificate:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const url = typeof window !== "undefined" ? window.location.href : "";
  const title =
    "I just earned my ISO & AICTE verified certificate from GlowLogics Solutions! ";
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center p-20">
      {/* Header */}
      <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br">
        <div className="w-full lg:w-1/2 mx-auto relative flex flex-col items-center border-4 border-orange-700 rounded-xl shadow-md overflow-hidden">
          <img
            src="/Sample Internship Certificate- Glowlogics.pdf.png"
            alt="Glowlogics Certificate Sample"
            className="object-contain"
          />
        </div>

        <h1 className="text-5xl font-bold mb-4 p-8 text-orange-600">
          Verify Certificate
        </h1>

        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={certId}
          onChange={(e) => setCertId(e.target.value)}
          className="border-2 border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 p-3 rounded-lg w-80 mb-4 outline-none text-center"
        />

        <button
          onClick={handleVerify}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {result && result.status === "found" && (
          <div className="mt-8 p-5 border rounded-lg bg-orange-50 w-full max-w-md shadow-inner">
            <h2 className="text-lg font-semibold text-orange-600 mb-3">
              ✅ Certificate Verified
            </h2>
            <div className="text-sm text-gray-800 space-y-1">
              <p>
                <b>Certificate ID:</b> {result.data.certificateId}
              </p>
              <p>
                <b>Name:</b> {result.data.name}
              </p>
              <p>
                <b>Course:</b> {result.data.course}
              </p>
              <p>
                <b>Batch:</b> {result.data.batch}
              </p>
              <p>
                <b>Issue Date:</b> {result.data.issueDate}
              </p>
              <p>
                <b>Phone:</b> {result.data.phone}
              </p>
              <p>
                <b>Email:</b> {result.data.email}
              </p>
              <a
                // href={result.data.link}
                target="_blank"
                rel="noreferrer"
                className="text-orange-600  font-medium mt-2 inline-block"
              >
                Download Certificate : Comming Soon...
              </a>
            </div>
          </div>
        )}

        {result && result.status === "notfound" && (
          <div className="mt-8 p-5 border rounded-lg bg-red-100 w-full max-w-md shadow-inner">
            <h2 className="text-lg font-semibold text-red-700">
              ❌ Certificate Not Found
            </h2>
            <p className="text-sm text-gray-700 mt-2">
              Please check the Certificate ID and try again.
            </p>
          </div>
        )}
      </div>

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
                          "https://vtu.internyet.in/internships/435-data-science",
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
