import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const VtuCertificateVerification = () => {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // ⭐ Your VTU verification script URL (DO NOT add ?id here)
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-100 p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8">

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

                <p><b>Name:</b> {result.name}</p>
                <p><b>Course:</b> {result.course}</p>
                <p><b>Batch:</b> {result.batch}</p>
                <p><b>Issue Date:</b> {result.issueDate}</p>
                <p><b>Internship ID:</b> {result.internshipId}</p>
                <p><b>Course Completion ID:</b> {result.courseCompletionId}</p>
                <p><b>Email:</b> {result.email}</p>
                <p><b>Phone:</b> {result.phone}</p>

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
    </div>
  );
};

export default VtuCertificateVerification;
