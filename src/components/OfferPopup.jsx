import { useEffect, useState } from "react";

const OfferPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5 * 60 * 1000); // 5 minutes = 300,000 milliseconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-4xl w-full relative flex flex-col md:flex-row overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black dark:text-white">
            Referral Offer 💸
          </h2>

          <p className="text-sm md:text-base mb-4 text-gray-700 dark:text-gray-300">
            <strong>New here?</strong> Sign up now and enjoy{" "}
            <strong>33% off</strong> on your first enrollment.
          </p>

          <h3 className="text-lg font-semibold mt-4 text-black dark:text-white">
            Earn ₹500 Cashback
          </h3>
          <p className="text-sm md:text-base mb-4 text-gray-700 dark:text-gray-300">
            Refer <strong>3 friends</strong> and get{" "}
            <strong>₹500 cashback</strong> after their successful sign-up. Your
            friends will also get <strong>One complementary</strong> program on
            their first enrollment.
          </p>

          <div className="flex items-start gap-2 mb-4">
            <input type="checkbox" id="subscribe" className="mt-1" />
            <label
              htmlFor="subscribe"
              className="text-xs md:text-sm text-gray-600 dark:text-gray-400"
            >
              I want to join the mailing list and receive exclusive offers.
            </label>
          </div>

          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-2 border rounded-md mb-4 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition">
            Get My 33% Off
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="https://img.freepik.com/free-vector/business-person-using-social-media-referral-strategy-online-getting-new-product-consumers-through-internet-customer-review-interaction-management-flat-illustration_74855-20465.jpg"
            alt="Welcome Offer"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-black dark:text-white bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default OfferPopup;
