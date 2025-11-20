import React, { useState } from "react";

const PlacementVerification = () => {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiURL = "https://script.google.com/macros/s/AKfycbzki8tuNz01QAvA9BeCwWKZecnUXOSg0dE8KY89L1mIWRqm_qdy9ekXK_C7FF2D8K43mw/exec?id="; // <--- Replace this

  const handleVerify = async () => {
    if (!certId.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(apiURL + encodeURIComponent(certId));
      const data = await res.json();
      setResult(data);
    } catch (error) {
  console.error("Verification error:", error);
  setResult({ valid: false, message: "Something went wrong!" });
}

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-100 p-8">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500">
          Placement Certificate Verification
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
            onClick={handleVerify}
            className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div>
            {result.valid ? (
              <div className="p-5 rounded-xl bg-green-50 border border-green-300">
                <h2 className="text-xl font-semibold text-green-700 mb-3">
                  ✔ Certificate Verified
                </h2>

                <p><b>Name:</b> {result.name}</p>
                <p><b>Issue Date:</b> {result.issueDate}</p>
                <p><b>Certificate ID:</b> {result.certificateId}</p>
                <p><b>Email:</b> {result.email ? result.email : "Not available"}</p>

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
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacementVerification;
