import { useState } from "react";
import { FaCheckCircle, FaStar, FaUserFriends } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
// import { FaQuoteLeft } from "react-icons/fa";

const FullStackCourse = () => {
  const [openSection, setOpenSection] = useState(null);

  const roleLogos = {
    "Digital Marketing Executive –  Starting Salary (India): ₹3 – ₹5.5 LPA": [
      "data:image/png;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mfxOyRFkqOsS2bqbAv6Jme5aZst5647elBXv3sNokwJNbq3Wohed1XLWWg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjl7XELiAxlFFuJltyWm6Th6inOxlVzxc7MMrSSbAJyYiszxgXSb41DDrv8Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPR10Fz15vjWryAGF7LWpwGCBpDyAiBOpgW5o3r--4GHkybcmtt0q5FI7cavs&s",
    ],
    "Social Media Manager - Starting Salary (India): ₹3.5 – ₹6 LPA": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSdO7qhiIhfW64Jzgkz4Cj7q0QULsDwlU1aoDKHgzoOwE7zTdiQXABFQI2Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUnTw99fm9fVevBAnkSKTEI5XV_T9LbhKusHHYOdxLt2w6vvDTX-15ZO6uw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpsGe5iEJob0dcSB5w9P5aWFjriI1hp0gyk5BlsAn303UpqPqoxUUqNhUuZ0&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJWrxnzTPiaRgGMzwh2fyV6kD15A-ihppe3wEcKFGD8pj1znEEBk1RytrrA&s",
    ],
    "SEO Specialist – Starting Salary (India): ₹3 – ₹5.5 LPA": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9K8eaqkEKLNFWf7fzbQAca3McYHsdkvpKMtXwLKgEB_hDmtMn61N2v0DEgA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKP2CNJ_0aX4DAuhMIOmzxvMXUE8adsc5v8z44BExycJHV6oFEDsB1a1HmNA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXESL8W6aoDD3CHdJhAz5rmb-MbmKKvvuatyvydeY-fxSHcDheXyKvmYG2W0A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD75Ew8D4llFJk_ZTfQVFS8PwxlhVYwES4SOUQqTcmZtHPw5Pz42sC1coMWQ&s",
    ],
    "Performance Marketing Analyst – Starting Salary (India): ₹4 – ₹7 LPA": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_P85o6q5b2clTlqYUhvgVMIdgUu6MqvzfBISHBirSsS0R7uJwK3u1Fd1bB-U&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQ2ed2DEYUtBqM5QFnRlUDyMc6naNQ7ZqTLQ3pdl1WOk8NHom7ffKz3ub-g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ywGfT6BXzPfdxnmFPHu9WagIC7E_Dz9XlHiCyKOO0jjcX-iktawn2T41-4Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSze0EO7gJyuZJ7-LbrCiBH60WrvWTeLenF82OZdK0kaNvhnmmReIiMQFZvRg&s",
    ],
  };

  const [activeRole, setActiveRole] = useState(Object.keys(roleLogos)[0]);

    const [showPayment, setShowPayment] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef(null);
///////////////////////////////////////////////////////////////////////////////////////////////
  // GSAP animation when QR shows
  useEffect(() => {
    if (showQR && qrRef.current) {
      gsap.fromTo(
        qrRef.current,
        { scale: 0.5, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [showQR]);


  ////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {/* Full-Stack Web Dev Section */}
      <div className="bg-white text-black px-6 pt-20 pb-0 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Digital Marketing
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Become a job-ready digital marketer | Master SEO, Google Ads, Social
            Media Marketing, Analytics & Content Strategy
          </p>

          {/* Benefits */}
          <ul className="space-y-3 text-gray-800 mb-6">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Work on real-world digital marketing campaigns from scratch
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Master SEO, Google Ads, Meta Ads, Analytics & Content Strategy
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Career mentorship with hands-on portfolio and case studies
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Includes resume review, mock interviews & LinkedIn optimization
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Guaranteed live cohorts starting within the next 90 days
            </li>
          </ul>

          {/* CTA Buttons */}
          <div>
            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 mb-4">
              {/* Enroll Button opens payment popup */}
              <button
                onClick={() => setShowPayment(true)}
                className="bg-[#ff6e0c] border-black text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
              >
                Enroll now
              </button>

              {/* Brochure Download */}
              <a href="/ProgramsPDF/DigitalMarketingGlowlogics.pdf" download>
                <button className="border border-black text-black px-6 py-2 rounded-lg hover:bg-white transition">
                  Download brochure
                </button>
              </a>
            </div>

            {/* Payment Popup */}
            {showPayment && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                <div className="bg-orange-100 rounded-2xl shadow-2xl p-8 max-w-5xl w-full mx-4 relative animate-fadeIn">
                  {/* Close payment popup */}
                  <button
                    onClick={() => setShowPayment(false)}
                    className="absolute top-3 right-3 text-xl text-gray-600 hover:text-red-500"
                  >
                    ✕
                  </button>

                  {/* Payment Options Row */}
                  <div className="flex flex-wrap gap-10 justify-center">
                    {/* UPI Box */}
                   <div className="relative">
  {/* Small Heading */}
  <h3 className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-orange-500 font-semibold text-lg">
     Trusted UPI QR Payment
  </h3>

  {/* Animated Border Wrapper */}
  <div className="relative w-80 h-80 p-[3px] rounded-2xl bg-gradient-to-r from-orange-400 via-transparent to-orange-400 bg-[length:200%_200%] animate-border-run">
    <div className="w-full h-full bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4">
      <img
       src="data:image/jpeg;base64,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4ha0+r8TqDRkUsUbqipmYXPLQXhsjnVVQAeAIBB6URZ/jDbXxNt0iybdu/E3PdmLHoVd6Y0LE7SDKanoqeeGmgdI6AlscQkqX5PzBBdaI9q5un6eI1babxOEtZA2mjjxNFNBU1OKU4nWyNmixAzPSgth8oG8gdJAXrHAi4II5+CrOq0Q59XDSmnZpAUNFHG8SvDWGSU+ecQNzhj6sS+et+n44YxR07oqUUrGTPjZezpWuEjaVhaLW3uccvyjibNC0SsI6hjgS1zXAbyCCB02UUr3iurmUrnHxdtM2pewEjbmRxEbXEZljQ0kjcSRda2uOh6elop3UsMcM07W0jdmMOLbPawXAyvne5CKmrJ2nIOaeggr6KL6oaEZAXO8Rp6N2FrA6N7XveOOIhotmB03UoUBERAREQEREEan1JpXOkN6hrJXl8kLZntp3uPnF0YPHiNxXUi0RE2o8YAIeIhA0fkawOxWa3hnbsC6KIOZXaChkdI8tLXywmB72mzyw8L844FeUmgoY5Y5WhwMUAp2C/JbGCDkOc2GfsXURByqvQMUkssrjJilg8XJDrWju4nB6JJcc+haMGqETYXwbWrdHJEYMDpiWtYQBZgtyTYWvzKRogj9DqjBG9j3OqJzFbZiaV0jGECwc1h5IIG42uOC6WmNGMqYTDLiwOLSQDYnC4OAJ5iQLhbyIOfVaKjkmimficYcRY2/9MOcLY8PFwFwDwuUfoqM1IqeUJBEYcjyS0uDsxxIO4+0roIg4rNWoBSspP6myY9r7YuU8tftLPP5gXZkcVuHRUW3dUYBtXxiIv44AXENHNm493Mt5EEYGpMA2WCSrjMUIgYWSlpwA3sSBmb/ACC6tLoaNk/jAMjpNiyC7nYuQwlw/USSSeOS6SINNmjImzuqA0CV7BG543ua0ktB6L71oDVin8TNGQ8xElx5REmIv2mPGLHFjzuu2iDlaH0DFTFz2mR8j7B0sj3SSuDfNbiduaLnIZZlfLSGrcMzqhz9pephbA8h1rRtxHCzLk3xOufau0iDSrNFRS05p5GB0TmYC0+iBYW5iMs/YsJdExumhlOLFAHCMX5AxgNJI4mwt1ldBEHAqdVY31D6gS1cb5MGMRyljTgFmiwG4C/aVlVarU8jahrg8+MyNme7Fyw9gaGGM/lw4G26+dd1EHOotEsifNI0vxzlrnuJubtYGNw5ZAAXtzkrGi0HDFTGmaDgcHhxJu95kvjc53FxJJuumiCPTao07mQAGdjqdgijlZI5kwYABhc8ecMhkUqNUIHQtixVIwy7fHtXGZ0gFg50jrk2G4cLDmUhRBp6KoBAzAHzSZk4pXl78+GI8PYtxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z"
        alt="UPI"
        className="h-28"
      />
      <p className="text-black text-lg font-semibold text-center">
        Pay using <br /> UPI QR Code
      </p>
      <button
        className="px-6 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
        onClick={() => setShowQR(true)}
      >
        Open QR
      </button>
    </div>
  </div>
</div>


                    {/* Razorpay Box */}
                    <div className="w-80 h-80 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                        alt="Razorpay"
                        className="h-12"
                      />
                      <p className="text-lg font-semibold text-black text-center">
                        Pay securely with <br /> Razorpay
                      </p>
                      <button
                        className="px-6 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
                        onClick={() =>
                          window.open("https://rzp.io/rzp/GL9k", "_blank")
                        }
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Full-Screen QR Popup */}
            {showQR && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
                onClick={() => setShowQR(false)} // close when clicking outside
              >
                <div
                  className="relative flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                >
                  <img
                    ref={qrRef}
                    src="/barcode.jpg" // <-- Replace with your QR code
                    alt="UPI QR Code"
                    className="max-w-[80%] max-h-[80%] object-contain rounded-xl shadow-2xl border-4 border-white"
                  />

                  {/* Close button */}
                  <button
                    onClick={() => setShowQR(false)}
                    className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
                  >
                    Close ✕
                  </button>
                </div>
              </div>
            )}
          </div>


          {/* Rating & Learners */}
          <div className="flex items-center gap-6 mt-6 text-gray-700">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold">4.7</span>
              <span>(42,500 Ratings)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserFriends />
              <span>132.8K Learners</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center max-w-2xl">
          <img
            src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169839.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740"
            alt="Full Stack Web Dev"
            className="rounded-2xl shadow-xl max-w-xl w-full"
          />
        </div>
      </div>

      {/*Digital Marketing Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-gray-800">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Digital Marketing Certification Course{" "}
          <span className="font-bold text-black">Overview</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          The Glowlogics Digital Marketing training course is designed to equip
          learners with the core skills needed to create and manage impactful
          digital marketing campaigns across various platforms. The course
          covers essential topics including SEO, Google Ads, Meta (Facebook &
          Instagram) Ads, content marketing, email marketing, and web analytics.
          With a strong focus on industry-relevant tools like Google Analytics,
          Canva, and HubSpot, the program prepares you to drive traffic,
          generate leads, and optimize ROI for real-world businesses. Whether
          you are aiming for agency roles, freelance projects, or in-house
          marketing positions, this course will help you become a job-ready
          digital marketer.
        </p>

        {/* Key Features */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-semibold">
              Digital Marketing Course Key Features
            </h3>
            <span className="text-green-700 text-sm bg-green-100 border border-green-400 rounded-full px-4 py-1 flex items-center gap-2">
              ✅ 100% ISO Verified Internship
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-700">
            {[
              "Get Ahead and Stay Ahead With 50+ Hours of Dynamic, Live Virtual Learning",
              "3 Portfolio-Driven Capstone Projects for Real-World Readiness",
              "Flexible Course Access for Working Professionals and Students",
              "Get Certified with a Course Completion Certificate, Internship Certificate, and Placement Training Certificate – All Included!",
              "Live Mentorship by Seasoned Industry Professionals",
              "Assigned Learning Manager for Personalized Support",
              "Unlimited Lifetime Access to Course Materials",
              "Globally Validated Certification – Backed by ISO & MSME",
              "Access All Course Content for an Entire Year",
              "Comprehensive Career Guidance & Assistance",
              "Career Prospects Across Industries and Roles",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Covered */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Skills Covered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-gray-700">
            {[
              "Search Engine Optimization (SEO)",
              "Google Ads & Pay-Per-Click (PPC) Advertising",
              "Social Media Marketing (Facebook, Instagram, LinkedIn)",
              "Content Marketing Strategy & Copywriting",
              "Email Marketing & Automation Tools",
              "Google Analytics & Data-Driven Insights",
              "Meta Ads Manager (Facebook & Instagram Ads)",
              "Influencer & Affiliate Marketing",
              "Landing Page Optimization & A/B Testing",
              "Marketing Funnel Creation & Lead Generation",
              "E-commerce Marketing Strategies",
              "Campaign Tracking & ROI Measurement",
              "Marketing Automation Tools (HubSpot, Mailchimp, etc.)",
              "Canva & Visual Content Creation",
              "Digital Marketing Strategy & Brand Positioning",
            ].map((skill, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-[#ff6e0c] text-xl">✔</span>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white text-gray-800">
        <h2 className="text-3xl font-semibold mb-2">Benefits</h2>
        <p className="mb-8 text-gray-600 max-w-4xl">
          The Digital Marketing<sup>®</sup> certification offers a wide range of
          benefits for aspiring marketers and professionals looking to advance
          their careers. It empowers you with in-demand skills in SEO, Google
          Ads, Meta Ads, content creation, email marketing, and analytics—making
          you job-ready for roles in IT, e-commerce, healthcare, fintech, and
          more. With a globally recognized credential, you will gain a
          competitive edge in the job market, unlock freelance and remote work
          opportunities, and build a strong personal brand. The certification
          also enhances your ability to drive measurable results for businesses,
          ultimately leading to faster career growth and increased earning
          potential.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
          {/* Designation Column */}
          <div className="flex flex-col divide-y border-r">
            {Object.keys(roleLogos).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`text-left px-6 py-4 hover:bg-blue-50 transition-all ${
                  activeRole === role
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-800"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Hiring Companies */}
          <div className="flex flex-col justify-center items-center px-6 py-4 gap-4">
            <div className="grid grid-cols-2 gap-4">
              {(roleLogos[activeRole] || []).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Company Logo"
                  className="h-10 object-contain max-w-[100px]"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Source: Glowlogics Solutions
            </p>
          </div>
        </div>

        <div className="bg-white text-gray-800 p-6 space-y-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold">
            Digital Marketing elopment Certification Course{" "}
            <span className="font-bold">Curriculum</span>
          </h2>

          {/* Eligibility */}

          {/* Course Content */}
          <div className="mt-8 space-y-3">
            <h3 className="text-xl font-semibold mb-4">Course Content</h3>

            {[
              {
                title: "Section 01: Course Introduction",
                lessons: [
                  {
                    name: "Lesson 01: Course Introduction",
                    time: "09:49",
                    preview: "#",
                  },
                ],
              },
              {
                title: "Section 02: Business Environment",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Section 03: Start the Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Section 04: Plan the Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Section 05: Lead the Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Section 05: Lead the Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Section 05: Lead the Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Section 05: Lead the Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Section 05: Lead the Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Section 05: Lead the Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Section 05: Lead the Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenSection(openSection === index ? null : index)
                  }
                  className="w-full px-4 py-3 font-medium flex justify-between items-center border-b hover:bg-blue-100 transition"
                >
                  <span>{section.title}</span>
                  <span className="text-xl">
                    {openSection === index ? "−" : "+"}
                  </span>
                </button>
                {openSection === index && (
                  <div className="px-6 py-3">
                    {section.lessons.map((lesson, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center text-sm py-1"
                      >
                        <span>{lesson.name}</span>
                        {/* <div className="flex items-center gap-4">
                          <a
                            href={lesson.preview}
                            className="text-blue-600 font-medium"
                          >
                            Preview
                          </a>
                          {lesson.time && (
                            <span className="text-gray-500">{lesson.time}</span>
                          )}
                        </div> */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: FAQ Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-semibold mb-6">
              FAQ <span className="text-black">related to </span>
            </h2>
            <div className="bg-white border rounded-lg shadow-md divide-y">
              {[
                {
                  q: "Who can join this Digital Marketing Certification Program?",
                  a: "Engineering, management, and degree students from any year or background can join. No prior marketing experience is required.",
                },
                {
                  q: "Do I need any specific background before enrolling?",
                  a: "No. This program is designed for beginners and covers both the fundamentals and advanced concepts of digital marketing step by step.",
                },
                {
                  q: "How long is the Digital Marketing certification valid for?",
                  a: "The Digital Marketing Certification from Glowlogics is ISO- and MSME-recognized and valid for a lifetime.",
                },
                {
                  q: "What skills will I learn in this course?",
                  a: "You’ll learn social media marketing, SEO, Google Ads, content marketing, email marketing, analytics, and how to manage real-world marketing campaigns.",
                },
                {
                  q: "How long is the course, and what is the learning mode?",
                  a: "The course runs for 1–2 months with 30+ hours of live interactive classes, weekly doubt-clearing sessions, and project-based learning.",
                },
                {
                  q: "Will I get a certificate after completing the course?",
                  a: "Yes. You’ll receive an ISO- and MSME-recognized Digital Marketing Certification after successfully completing training and submitting your project work.",
                },
                {
                  q: "Is there any placement guarantee?",
                  a: "We provide placement assistance, including interview preparation and resume support. Final job offers depend on individual performance and interview results.",
                },
                {
                  q: "How do I register and pay the course fee?",
                  a: "You can register through our official form link or Company QR Code. Payment details will be shared after registration confirmation.",
                },
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <button
                    className="w-full text-left px-6 py-4 font-medium flex justify-between items-center hover:bg-blue-50 transition"
                    onClick={() =>
                      setOpenSection(openSection === idx ? null : idx)
                    }
                  >
                    {item.q}
                    <span className="text-xl">
                      {openSection === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openSection === idx && (
                    <div className="px-6 pb-4 text-sm text-gray-700">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certificates */}
          <div className="w-full lg:w-1/2 mx-auto relative flex flex-col items-center">
   <div className="bg-[#f9fbff] rounded-xl shadow-md p-8 max-w-md mx-auto text-center border border-orange-600 mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Live Batch Updates 📅
              </h3>

              <ul className="text-gray-800 space-y-3 text-left list-disc list-inside">
                <li>
                  Current Batch:{" "}
                  <span className="text-black font-bold">1 Sep 2025</span>
                </li>
                <li>
                  Upcoming Batch:{" "}
                  <span className="text-black font-bold">Nov 2025</span>
                </li>
                {/* <li>
                  Upcoming Batch:{" "}
                  <span className="text-black font-bold">Jan 2025</span>
                </li> */}
              </ul>
            </div>

  {/* Certificate Image with Hover Zoom */}
  <div
    id="cert-container"
    className="border rounded-lg shadow-md overflow-hidden w-full"
    onMouseMove={(e) => {
      const img = document.getElementById("cert-img");
      if (img) {
        const rect = img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
      }
    }}
    onMouseLeave={() => {
      const img = document.getElementById("cert-img");
      if (img) {
        img.style.transformOrigin = "center center";
      }
    }}
  >
    <img
      id="cert-img"
      src="/CourseCompletionGlowlogics.png"
      alt="Certificate 1"
      data-index="0"
      className="w-full h-auto object-contain p-2 transition-transform duration-300 ease-in-out scale-100 hover:scale-[2.5] cursor-zoom-in"
      onClick={() => {
        const modal = document.getElementById("cert-modal");
        modal.style.display = "flex";
      }}
    />
  </div>

  {/* Certificate Navigation Buttons */}
  <div className="flex gap-6 mt-4">
              <button
                onClick={() => {
                  const certificates = [
                    "/VTUInternship.png",
                    "/CourseCompletionGlowlogics.png",
                    "/InternshipGlowlogics.png",
                    "/PlacementGlowlogics.png",
                  ];
                  let currentIndex =
                    parseInt(
                      document
                        .getElementById("cert-img")
                        .getAttribute("data-index")
                    ) || 0;
                  currentIndex =
                    (currentIndex - 1 + certificates.length) %
                    certificates.length;
                  const img = document.getElementById("cert-img");
                  img.src = certificates[currentIndex];
                  img.setAttribute("alt", `Certificate ${currentIndex + 1}`);
                  img.setAttribute("data-index", currentIndex);
                  document.getElementById("modal-img").src =
                    certificates[currentIndex];
                }}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
              >
                ◀
              </button>

              <button
                onClick={() => {
                  const certificates = [
                    "/CourseCompletionGlowlogics.png",
                    "/InternshipGlowlogics.png",
                    "/PlacementGlowlogics.png",
                     "/VTUInternship.png",
                  ];
                  let currentIndex =
                    parseInt(
                      document
                        .getElementById("cert-img")
                        .getAttribute("data-index")
                    ) || 0;
                  currentIndex = (currentIndex + 1) % certificates.length;
                  const img = document.getElementById("cert-img");
                  img.src = certificates[currentIndex];
                  img.setAttribute("alt", `Certificate ${currentIndex + 1}`);
                  img.setAttribute("data-index", currentIndex);
                  document.getElementById("modal-img").src =
                    certificates[currentIndex];
                }}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
              >
                ▶
              </button>
            </div>

  {/* Fullscreen Popup Modal */}
  <div
    id="cert-modal"
    className="fixed inset-0 bg-black bg-opacity-80 z-50 hidden items-center justify-center p-4"
    style={{ display: "none" }}
  >
    <div className="relative max-w-4xl w-full">
      <button
        onClick={() => {
          document.getElementById("cert-modal").style.display = "none";
        }}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full px-3 py-1 text-sm font-semibold"
      >
        ✕ Close
      </button>
      <img
        id="modal-img"
        src="/CourseCompletionGlowlogics.png"
        alt="Full Certificate"
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
</div>

        </div>
        <div className=" py-12 overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-10 leading-snug">
            Admiration expressed by others regarding our presence.
          </h2>

          <div className="relative w-full space-y-8 overflow-x-hidden group">
            <div className="flex w-max animate-marquee space-x-6 px-6 items-start animation-running hover:[animation-play-state:paused]">
             {[...Array(2)].flatMap(() =>
                [
                 {
    name: "Vrinda K",
    title: "Dayalbagh Educational Institute",
    text: "I had a great learning experience with Glow Logics while pursuing their cloud computing course. The curriculum was hands-on and project-focused, which helped me apply theoretical concepts to real-world scenarios. The projects I worked on not only deepened my understanding but also significantly strengthened my resume. I’m truly grateful for the practical exposure and support provided throughout the course.",
    img: "/vrindaK.png",
  },
  {
    name: "Smriti Mathuriya",
    title: "Dayalbagh Educational Institute",
    text: "Hello! My name is Smriti Mathuriya. I’m pursuing a B.Sc. from Dayalbagh Educational Institute and recently completed my internship at Glowlogics in the Data Science domain.",
    img: "/Smrithi.png",
  },
  {
    name: "Aan Narai",
    title: "Alliance University",
    text: "I'm Aan Narai, a third-year B.Tech student at Alliance University. I recently completed my UI/UX course from Glowlogics Solutions and received my certification. The training quality was excellent, the instructors were very helpful, and the learning environment was extremely user-friendly. Any issues I faced were resolved immediately. Thank you, Glowlogics!",
    img: "/Aan.png",
  },
  {
    name: "Kavya R",
    title: "Bachelor's in Engineering",
    text: "Hello everyone, I'm Kavya, currently pursuing my Bachelor's in Engineering with a focus on Computer Technology. I'm currently enrolled in the internship program at Glowlogics. My experience so far has been great—the projects are well-structured and easy to understand. Submitting projects and receiving certificates is seamless. Many students are also securing internships and getting placed in reputed companies through this program.",
    img: "/Kavya.png",
  },
  {
    name: "Kulsum Bano",
    title: "MMICT&MB, 2nd Year",
    text: "My name is Kulsum Bano, and I recently completed my UI/UX Training and Internship Program with Glowlogics. The sessions were highly interactive, engaging, relevant, and beginner-friendly. The mentors were very supportive, and I would definitely recommend this program to anyone looking to start their tech journey. Thank you, Glowlogics!",
    img: "/Kulsum.png",
  },
  {
    name: "Naziya",
    title: "KNS Institute of Technology",
    text: "This is Naziya from Bengaluru, currently studying in the 3rd year of BE in the ECE branch at Dr. AIT, Bengaluru. I recently completed a Full Stack Java course at Glowlogic Solutions, and it was a great learning experience. It was one of the best learning platforms for me, as it covered all the topics thoroughly and helped me become confident in Java. The schedule was very flexible and cooperative, allowing me to balance both my college work and the Java classes. The trainer was highly supportive and knowledgeable, explaining every concept clearly with practical examples. This course helped me build a strong foundation in Java and enhanced my skills significantly. I am truly thankful to the team for their continuous guidance and support throughout this wonderful journey.",
    img: "/Naziya.png",
  },
  {
    name: "Bollepally Jashwanth Varma",
    title: "Sai Spurthi Institute of Technology, 3rd Year",
    text: "I recently completed the Cybersecurity Ethical Hacking Internship at GlowLogics Solution and had an excellent experience. The course was well-structured, covering essential topics like penetration testing and vulnerability assessment. The instructors were knowledgeable and supportive. The practical projects gave me real-world exposure. I highly recommend it to aspiring ethical hackers!",
    img: "/CyberUnknown.png",
  },
  {
    name: "Tejaswini.K",
    title: "Jayaraj Annapackiam College",
    text: "Hello everyone, I am Tejaswini K. I study Computer Science at Jayaraj Annapackiam College. I recently completed the Artificial Intelligence course from Glowlogics. The course was well-organized and beginner-friendly. The instructors explained everything in a clear manner. I now feel confident working on AI projects, especially using Python. Thank you, Glowlogics!",
    img: "/TejasvaniK.png",
  },
  {
    name: "Thotakura Puneeth Sai",
    title: "Anantha Lakshmi Institute of Technology, 3rd Year",
    text: "Hi, I'm Thotakura Puneeth Sai, a 3rd-year B.Tech student at Anantha Lakshmi Institute of Technology and Sciences. I completed the Cybersecurity & Ethical Hacking course at Glowlogics, and it was an amazing experience. The instructors were supportive, and the hands-on classes were top-notch. I gained real-world skills essential in cybersecurity. Thank you, Glowlogics!",
    img: "/Thotakura Puneeth Sai.png",
  },
  {
    name: "Preetham",
    title: "Navkis College of Engineering",
    text: "Hello, I’m Preetham. I recently completed my Bachelor's in Engineering. In my final semester, I enrolled in a specialized VLSI course at Glowlogics. The course covered Verilog, FPGA, ASIC flow, and low-power techniques. I also did a Verilog design project that strengthened my hardware skills. This training has prepared me well for the semiconductor field.",
    img: "/pritam.png",
  },
  {
    name: "Khusi M",
    title: " University of Visvesvaraya College of Engineering ",
    text: "I'm really grateful to GlowLogics Solutions for such a great learning experience in VLSI Design. The training was super well-organized, and the instructors were not just knowledgeable but also really patient and supportive throughout. The hands-on sessions and real-time project work helped me understand the concepts much better and boosted my confidence a lot. Big thanks for the guidance and opportunity — it’s definitely going to help me in the future!",
    img: "/khushi.png",
  },
  {
    name: "Dusa Abhiram ",
    title: "University of Visvesvaraya College of Engineering ",
    text: "I am greatful and thankful to the Glowlogics Solutions team for my internship programme on VLSI, gaining valuable insights into digital circuit design and simulation. During the training, I worked with Verilog and tools like icarus verilog and  Xilinx Hands-on projects helped me understand the VLSI design flow effectively. The experience boosted my technical and problem-solving skills. Overall, it was a great learning journey that deepened my interest in semiconductor technology.",
    img: "/Dusa.png",
  },
  {
    name: "Jeshwanth Basutkar ",
    title: "Kommuri Pratap Reddy Institute of Technology",
    text: "I am extremely thankful to GlowLogics Solutions for providing an exceptional learning experience in Data Science. The training was well-structured with a perfect balance of theory and practical sessions, allowing me to gain real-time project exposure and industry-relevant skills. The instructors were highly knowledgeable, supportive, and always approachable, which made the learning process smooth and engaging. This training has greatly enhanced my confidence and equipped me with the right tools to take the next step in my data science career.",
    img: "/Jeshwanth.png",
  },
  {
    name: "Sanjana Anand Patil",
    title: "M.S. RAMAIAH INSTITUTE OF TECHNOLOGY",
    text: "I am truly grateful to GlowLogics Solutions for providing me with an excellent learning experience in VLSI design. The training was well-structured, and the instructors were knowledgeable, patient, and supportive throughout. The hands-on approach and real-time project exposure significantly enhanced my understanding and confidence in the field. I sincerely appreciate the opportunity and guidance I received, which will definitely help me in my future endeavors.",
    img: "/Sanjana.png",
  },

  {
    name: " Vindhya NS",
    title: "Sanatan Dharma College",
    text: "My name is Vindhya N.S., and I’m from Puttur. I am currently in the second year of my MBA, specializing in Human Resource and Finance at SDIT College. Recently, I completed certification courses in HR and Finance, which provided me with valuable insights and practical knowledge. The training was engaging and well-structured, with a clear focus on both theoretical concepts and their real-world applications. The instructors made learning easy through their approachable teaching style and relevant examples. These courses have helped me build a strong understanding of HR and Finance functions, and I now feel more confident and prepared to take on future professional challenges. I sincerely appreciate the support and guidance I received during the course.",
    img: "/Vindhya.png",
  },

  {
    name: "Tharani P",
    title: "Sri Krishna College of Technology (SKCT)",
    text: "I had the opportunity to participate in a 3-month online internship with GlowLogicss , Bangalore.,under the VLSI Design course. This program provided me with valuable exposure to the fundamentals and advanced concepts of VLSI design, including practical insights into design methodologies, simulation techniques, and industry tools. The structured training, combined with hands-on tasks, helped me enhance my technical knowledge and problem-solving skills. I am grateful to Glow Logistics for offering this learning platform and for the guidance provided throughout the internship.",
    img: "/Tharani P.png",
  },

  {
    name: "M.Harsha Vardhan",
    title: "Sri Krishna College of Technology (SKCT)",
    text: "I had an excellent experience learning VLSI Design with Glowslogics Solution. The training was well-structured, covering both theoretical foundations and hands-on practical aspects of VLSI. The instructors were knowledgeable, patient, and always ready to clarify doubts. I especially appreciated the real-world examples and industry-relevant projects, which helped me gain confidence in applying concepts. The learning environment was supportive, and the resources provided were up-to-date with current industry standards. I would highly recommend Glowslogics Solution to anyone looking to build a strong career in VLSI design. I am truly grateful to Glowslogics Solution, Bangalore, for offering this learning platform and for the constant guidance provided throughout the internship.",
    img: "/M.Harsha Vardhan.png",
  },

  {
    name: "Faizan Ul Hassan",
    title: "Netaji Subhash University",
    text: "Truly speaking, it is a very good course and the mentors are excellent in terms of cooperation. Whenever I ask something, they immediately respond and clear my doubts with real-life examples and guidance on how to avoid mistakes, which I truly appreciate. The entire team is also very supportive—whenever I had any doubt, they personally called me and gave their time to explain everything clearly. The fees are also genuine, especially considering the quality of training provided. Overall, it has been a very good experience with Glowlogics Solutions. Thank you so much, Team Glowlogics Solutions!✨",
    img: "/Faizan Ul Hassan.png",
  },

  {
    name: "Tejaswini.K",
    title: "JSS College Mysore",
    text: "My name is Tejaswini K. from Karadahalli, and I am currently in the second year of my M.Sc. in Computer Science at JSS College, Mysore. I recently completed a certification course in Artificial Intelligence and had a great learning experience. The course content was well-structured and beginner-friendly, and the instructor explained the concepts clearly with practical examples. Overall, it was a valuable learning opportunity for me.",
    img: "/Tejswani.png",
  },

  {
    name: "Manasa.C",
    title: "Cambridge College",
    text: "My name is Manasa C, and I’m from Bangalore. I am currently in the third year of my B.E., specializing in Information Science and Engineering at Cambridge College. Recently, I completed certification courses in Web Development, which provided me with valuable insights and practical knowledge. The training was engaging and well-organized, with a clear focus on both theoretical concepts and real-world applications. The instructors made learning easy with their approachable teaching style and relevant examples. These courses have helped me build a strong understanding of websites, and I now feel more equipped to take on future professional challenges. I sincerely appreciate the support and guidance I received during the course from Glowlogics Solutions.",
    img: "/Manasa.png",
  },

  {
    name: "Srijib Dey",
    title: "Working as a Employee",
    text: "I have been doing a VLSI course from GlowLogics for the last 6 months. This course provided me with valuable exposure to the fundamentals and advanced concepts of VLSI design, including practical insights into design methodologies, simulation class techniques, and industry tools. The structured training, combined with hands-on tasks, helped me enhance my technical knowledge and problem-solving skills. ",
    img: "/Sri.png",
  },
  {
    name: "Jatin Kola",
    title: "Gandhi Institute of Technology and Management",
    text: " I’m Jatin Kola, a third-year Computer Science student at GITAM (Gandhi Institute of Technology and Management), Visakhapatnam. I recently completed the UI/UX course at GlowLogics, and it was a great experience overall. The way they teach is very clear and practical. The trainers don’t just stick to theory—they focus on real-time projects and hands-on learning, which helped me understand how UI/UX works in actual product design. They also guided us with useful tools and tips that are relevant in the industry. What I liked most is that they make even beginners feel comfortable. Whether you are from a design background or not, they break down the concepts in a very simple way. Thankyou so much Glowlogics ✨ ",
    img: "/jatin.png",
  },
  {
    name: "Sandip SB",
    title: " MS Engineering College",
    text: "Hi everyone! I'm Sandeep S. B., pursuing Electronics and Communication Engineering at MS Engineering College (Santiniketan of Technology). My internship at GlowLogics has been a great learning experience. The projects are well-structured and easy to follow, and the certification process is smooth and professional. Many students, including myself, have greatly benefited from this program. Special thanks to my IoT mentor, Mr. Digeesh, for his excellent guidance. I highly recommend this internship to students who are looking to build real-world skills!",
    img: "/Sandip.png",
  },
  {
    name: "Dhanush",
    title: "RR Institute of Technology",
    text: "I'm Dhanush from Bengaluru, currently in my fourth year of BE in Computer Science and Engineering at R R Institute of Technology, Bengaluru.I recently completed the Web Development course at Glowlogic Solutions, which was an excellent learning experience. The course content was well-structured, covering both fundamental and advanced topics in a clear, step-by-step manner. The mentors were highly knowledgeable, approachable, and always willing to clarify doubts with practical examples. Their guidance made even complex concepts easy to understand. The hands-on projects and real-world examples helped me gain confidence in applying what I learned. This course strengthened my skills in frontend development (HTML, CSS) and backend development (MongoDB, APIs, and full-stack development). I now feel more confident creating new projects and interfaces. I am sincerely thankful to the team for their guidance and support throughout this journey. ",
    img: "/dhanush.png",
  },
  {
    name: " PALAKURLA SAI TEJA",
    title: "Sree Dattha Group of Engineering ",
    text: "I am PALAKURLA SAI TEJA and I am pursuing B-tech in Sree Dattha group of engineering and science I'm happy to take training in Glowlogics solutions for the domain of App development and thankyou for your training session. It helped me enhance my skills and gain more practical knowledge over App development  Thanks to team glowlogics for all the support and knowledge",
    img: "/PALAKURLA.png",
  },
  {
    name: "Nahiza Khanum,",
    title: "Gandhi Institute of Technology and Management",
    text: "Myself Nahiza Khanum, a final-year Engineering student from Bangalore. I recently completed my Cybersecurity and Ethical Hacking course, and the experience has been truly transformative. The program not only deepened my understanding of core cybersecurity concepts but also gave me hands-on exposure to penetration testing, threat analysis, and advanced ethical hacking techniques. The trainers were highly knowledgeable, always encouraging us to think critically and apply concepts to real-world scenarios. This course has strengthened my technical skills and boosted my confidence in navigating the dynamic field of cybersecurity. I’m extremely grateful for the guidance and support I received throughout this journey, and I’m excited to apply these skills as I step forward in my career.",
    img: "/nahiziya.png",
  },
  {
    name: "Fija Latif Mahat",
    title: "MIT",
    text: "I'm Fija Latif Mahat,From Pune. Currently I'm studying in Second year of BSC Animation at MIT Arts Commerce and Science College Alandi, Pune. I recently completed the UI/UX design course at Glowlogic Solutions, and it was a great learning experience. The course content was well-structured and easy to understand, covering both design theory and practical tools like Figma. The trainer was very supportive and explained each topic clearly with real-life examples. This course helped me build a strong foundation in UI/UX, and I feel more confident in designing user-friendly interfaces now. I’m thankful to the team for their guidance and support throughout the journey.",
    img: "/Fija.png",
  },
  {
    name: "S.Naresh Narayanan",
    title: "MIT",
    text: "Glowlogics was very supportive and explained everything clearly. They guided me step by step and made sure I understood each part of the project. Whenever I had doubts, they were quick to help and gave useful suggestions. Their teaching style was easy to follow, and it made learning more enjoyable and confident for me. Thank you glowlogics✨",
    img: "/Naresh.png",
  },

  {
    name: "Shashank S",
    title: "Canara Engineering College",
    text: " I am truly grateful for the opportunity to undergo internship training at Glowlogic Solutions in the field of Cybersecurity. This experience has deepened my understanding of network security, ethical hacking, and real-world threat mitigation techniques. I sincerely thank the team at Glowlogic for their guidance, support, and for providing a hands-on learning environment that has strengthened both my technical skills and professional outlook in this critical domain.",
    img: "/u.png",
  },

  {
    name: "Hudha Shahista",
    title: "MIT",
    text: "I enrolled in the online VLSI course at Glowlogic and had a great learning experience. The sessions were well-structured, starting from basics and moving to advanced topics with clear explanations. The trainers are highly knowledgeable, approachable, and made the online classes interactive. Hands-on practice with tools was provided, which gave real industry exposure even in an online format. Doubt-clearing and mentorship were excellent, and career guidance was also very supportive. Overall, it’s a very effective online course for anyone aspiring to enter the VLSI field.",
    img: "/h.png",
  },

   {
    name: "Bhoomika MN",
    title: "BGSIT",
    text: "My experience at GlowLogics Solutions while learning Data Science has been exceptionally positive. I had a really great experience with the Data Science course. When I joined, I wasn’t completely sure what to expect, but the training turned out to be much better than I imagined. The classes were clear, well-organized, and easy to follow, even when the topics were advanced. What I liked most was the balance between theory and practical work. We didn’t just learn the concepts we actually worked on real-time projects, which helped me understand how data science is used in real situations. The instructors were very supportive and explained everything with patience. They made sure we understood each topic before moving forward, and they were always available to clear doubts. Because of this course, I feel much more confident in my skills. I gained hands-on experience, learned useful tools, and now I feel ready to take the next step toward a career in data science.",
    img: "/Bhoomika MN.png",
  },


   {
    name: "S.Manoj Kumar",
    title: "Mepco Schlenk Engineering Cx`ollege ",
    text: "I am truly grateful to GlowLogics Solutions for providing me with a highly valuable learning experience in Artificial Intelligence. The training was well-structured, balancing both theoretical concepts and practical hands-on sessions. The instructors were knowledgeable, supportive, and always approachable, which made the learning process smooth and engaging. Working on real-time datasets helped me understand AI models more clearly and improved my confidence in coding, data preprocessing, and model building. This certification has strengthened my technical skills and motivated me to continue my journey in AI and Data Science. I sincerely appreciate the opportunity, guidance, and support I received throughout the course, which will definitely help me in my future endeavors.",
    img: "/S.Manoj Kumar.png",
  },

   {
    name: "Thrisha K S",
    title: "S.E.A College of Engineering and Technology ",
    text: "The AI online classes were very helpful for me to understand the basics of Python, machine learning, and libraries like NumPy and Seaborn. The sessions were clear and well-structured, which made it easier to learn step by step. This training improved my confidence in programming and gave me practical knowledge that I can use in my projects and future career. I am thankful for the guidance and support provided during the course.",
    img: "/Thrisha.png",
  },

   {
    name: "Manya",
    title: "BMS",
    text: "I'm Manya umesh, from banglore,Currently, I’m studying in 3rd year of Bachelor of computer applications, at BMS college of Commerce and Management I recently completed the Artificial Intelligence course at Glowlogic Solutions, and it was a great learning experience. The course content was well-structured and easy to understand, covering both AI concepts and practical applications. The trainer was very supportive and explained each topic clearly with real-life examples. This course helped me build a strong foundation in AI, and I feel more confident in working with intelligent systems and problem-solving approaches now. I’m thankful to the team for their guidance and support throughout the journe",
    img: "/Manya.png",
  },

  {
    name: "Sharath H D",
    title: "Government Engineering College, Challakere, Chitradurga",
    text: "My name is Sharath H D. I have taken the Full Stack Java and Cyber Security & Ethical Hacking courses at Glowlogics Company. All the mentors supported me a lot and explained every concept clearly. They clarified all my doubts in a way that I could easily understand. The recorded classes were also very useful, and I have learned many things from them. I have also received the certificates. I would like to express my heartfelt gratitude.",
    img: "/Sharath.png",
  },
  {
    name: "Kaunain Fathima",
    title: "KNS Institute of Technology",
    text: "I'm  Kaunain Fathima , from Bangalore.Pursuing Information Science & Engineering in KNS Institute of Technology.During my final year of Engineering, I had the chance to dive into Cybersecurity and Ethical Hacking through a specialized course. It wasn’t just theory , I got to practice real-world techniques like ethical hacking and threat detection. The instructors focused on critical thinking and real scenarios, which really helped me connect what I learned with actual cyber defense challenges. I’m grateful for the opportunity and excited to build on these skills as I enter the tech industry.",
    img: "/Kaunain Fathima.png",
  },

   {
    name: " Tejaswini.K",
    title: " JSS College.",
    text: "My name is Tejaswini.K and I am from karadahalli.I m currently in the second year of my MSC in computer science at Jss college Mysore. Recently I completed certification course in Artificial intelligence and had a great learning experience the course content was well structured and beginner - friendly and the instructor explained concepts clearly with practical example. Thank you for providing such a valuable learning opportunit",
    img: "/Tejswani.png",
  },

   {
    name: "Teja S",
    title: "S.E.A college of Engineering and Technology ",
    text: "I had a very good learning experience with Glow Logics AI online classes. The trainers explained concepts clearly with practical examples, and the course was well-structured and easy to follow. Overall, it was a great platform to build AI knowledge.",
    img: "/Teja.png",
  },

    {
    name: "THARANI P",
    title: "Sri Krishna College of Technology",
    text: "I had the opportunity to participate in a 3-month online internship with Glow Logistics , Bangalore.,under the VLSI Design course. This program provided me with valuable exposure to the fundamentals and advanced concepts of VLSI design, including practical insights into design methodologies, simulation techniques, and industry tools. The structured training, combined with hands-on tasks, helped me enhance my technical knowledge and problem-solving skills. I am grateful to Glowlogics for offering this learning platform and for the guidance provided throughout the internship.",
    img: "/TARA.png",
  },

                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl shadow p-6 w-[320px] flex-shrink-0 flex flex-col"
                  >
                    <svg
                      className="text-blue-500 text-xl mb-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      width="20"
                      height="20"
                    >
                      <path d="M464 32H320c-26.5 0-48 21.5-48 48v144c0 26.5 21.5 48 48 48h24v32c0 44.2-35.8 80-80 80-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16 88.4 0 160-71.6 160-160v-64c0-26.5-21.5-48-48-48H336V80h128v352h48V80c0-26.5-21.5-48-48-48z" />
                    </svg>
                    <p className="text-gray-700 text-sm mb-4">{item.text}</p>
                    <div className="flex items-center space-x-3 mt-auto">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackCourse;
