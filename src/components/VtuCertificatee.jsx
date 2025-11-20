import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const VtuCertificateVerification = () => {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  //  Your VTU verification script URL (DO NOT add ?id here)
  const apiURL =
    "https://script.google.com/macros/s/AKfycby6J76RMEGBBRAvjRhnDQM6BHzeK2sIS0Vlkfw5Klqu7ffBckdo_6NCloadoHEL2PQw/exec?id=";

  // Get ?id= from URL when QR is scanned
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const qrId = params.get("id");

    if (qrId) {
      setCertId(qrId);
      verifyCertificate(qrId);
    }
  }, [location.search]);

  // MAIN verify function
  const verifyCertificate = async (idToVerify) => {
    if (!idToVerify.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(apiURL + encodeURIComponent(idToVerify));
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Verification error:", error);
      setResult({ valid: false, message: "Something went wrong!" });
    }

    setLoading(false);
  };

  const handleVerify = () => verifyCertificate(certId);

  return (
    <div className="min-h-screen bg-orange-100 p-8 flex flex-col items-center pt-32">

      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 mb-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500">
          VTU Certificate Verification
        </h1>

        {/* Input box */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
            placeholder="Enter Certificate ID"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={handleVerify}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            {loading ? "Checking..." : "Verify"}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div>
            {result.valid ? (
              <div className="p-6 rounded-xl bg-green-50 border border-green-300">
                <h2 className="text-xl font-semibold text-green-700 mb-4">
                  ✔ Certificate Verified Successfully
                </h2>

                <p>
                  <b>Name:</b> {result.name}
                </p>
                <p>
                  <b>Course:</b> {result.course}
                </p>
                <p>
                  <b>Batch:</b> {result.batch}
                </p>
                <p>
                  <b>Issue Date:</b> {result.issueDate}
                </p>
                <p>
                  <b>Internship ID:</b> {result.internshipId}
                </p>
                <p>
                  <b>Course Completion ID:</b> {result.courseCompletionId}
                </p>
                <p>
                  <b>Email:</b> {result.email}
                </p>
                <p>
                  <b>Phone:</b> {result.phone}
                </p>

                {/* Download Buttons */}
                <div className="mt-5 flex flex-col gap-3">
                  {result.internshipLink && (
                    <a
                      href={result.internshipLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center hover:bg-orange-600"
                    >
                      Download Internship Certificate
                    </a>
                  )}

                  {result.courseCompletionLink && (
                    <a
                      href={result.courseCompletionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center hover:bg-orange-600"
                    >
                      Download Course Completion Certificate
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-red-50 border border-red-300 text-red-700">
                ❌ {result.message}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

        {/* LEFT BIG BOX */}
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Verify & Authenticate Your Certificate</h2>
          <p className="text-gray-600 mb-4">
            Easily verify the authenticity of your GlowLogics Certificate here.
            Enter your certificate ID to confirm your completion status and
            access detailed information about your achievement.
          </p>

          {/* Profile */}
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/profile.png"
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
        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="font-semibold mb-4">Share Credential</h2>

          <p className="text-gray-600 text-sm mb-3">
            Show this credential on your social network
          </p>

          <div className="flex gap-3 mb-4">
            <img src="/linkedin.png" className="w-8 cursor-pointer" />
            <img src="/facebook.png" className="w-8 cursor-pointer" />
            <img src="/x.png" className="w-8 cursor-pointer" />
            <img src="/whatsapp.png" className="w-8 cursor-pointer" />
          </div>

          <button className="bg-orange-500 text-white w-full py-2 rounded-lg mb-5 hover:bg-orange-600">
            Add to My LinkedIn Profile
          </button>

          <h3 className="font-semibold mb-2">Continue Learning…</h3>

          <p className="text-sm mb-2">
            <b>ISO Verified</b> – Meets international quality standards.
          </p>
          <p className="text-sm mb-2">
            <b>MSME & Startup India Affiliation</b> – Government-supported.
          </p>
          <p className="text-sm">
            <b>Affiliated with VTU</b> – Recognized academic standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VtuCertificateVerification;
