import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function PaymentPopup() {
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef(null);

  // GSAP animation when QR popup opens
  useEffect(() => {
    if (showQR && qrRef.current) {
      gsap.fromTo(
        qrRef.current,
        { scale: 0.5, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [showQR]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
      <div className="flex gap-10">
        {/* Left Box - UPI */}
        <div className="w-80 h-80 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 text-white">
          <img
            src="image-removebg-preview.png"
            alt="UPI"
            className="h-25"
          />
          <p className="text-black text-lg font-semibold text-center">
            Pay using <br /> UPI QR Code
          </p>
          <button
            className="px-6 py-2 bg-gray-800 rounded-full shadow hover:bg-gray-700 transition"
            onClick={() => setShowQR(true)}
          >
            Open QR
          </button>
        </div>

        {/* Right Box - Razorpay */}
        <div className="w-80 h-80 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 text-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
            alt="Razorpay"
            className="h-12"
          />
          <p className="text-lg font-semibold text-black text-center">
             Pay securely with <br /> Razorpay
          </p>
          <button
            className="px-6 py-2 bg-gray-800 rounded-full shadow hover:bg-gray-700 transition"
            onClick={() =>
              window.open("https://rzp.io/rzp/GL9k", "_blank")
            }
          >
            Pay Now
          </button>
        </div>
      </div>

      {/* Full-Screen QR Popup */}
      {showQR && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/50 z-50">
          <div className="relative flex flex-col items-center">
            {/* QR Image with GSAP animation */}
            <img
              ref={qrRef}
              src="barcode.jpg" // <-- Replace with your QR code image path
              alt="UPI QR Code"
              className="max-w-[50%] max-h-[70%] object-contain rounded-xl shadow-2xl border-4 border-white"
            />

            {/* Close Button just below/right of QR */}
            <button
              onClick={() => setShowQR(false)}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
