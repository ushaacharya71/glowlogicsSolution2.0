import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    const routePages = [
      "career",
      "about",
      "eventhub",
      "legal-terms",
      "privacy-policy",
    ];

    if (routePages.includes(id)) {
      navigate(`/${id}`);
    } else if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <section className="w-full bg-[#ff6e0c] text-black px-6 md:px-16 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Glowlogics <br /> Solutions
            </h2>

            <div className="overflow-hidden rounded-2xl shadow-lg border border-black max-w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62221.787564953855!2d77.59426133913958!3d12.916607633426603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15005309cf71%3A0x2f15b757ea19a355!2sGlowlogics%20Solutions!5e0!3m2!1sen!2sin!4v1751121448545!5m2!1sen!2sin"
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Right Columns */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 text-sm">
            {/* Column 1: Contact Info */}
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Social Media:</p>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="https://www.instagram.com/glowlogics/"
                      className="underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-1 text-base">
                  Branch 1: Bengaluru
                </p>
                <ul className="space-y-1 break-words">
                  <li>
                    <a href="#" className="underline">
                      Shree Narayana Tower, HSR Layout
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Outer Ring Rd
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Jakkasandra, 1st Block Koramangala
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Bengaluru, Karnataka 560034
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-1">Mail:</p>
                <a href="mailto:hr@glowlogics.in" className="underline">
                  help@glowlogics.in
                </a>
              </div>

              <div>
                <p className="font-semibold mb-1">Phone no.:</p>
                <a href="tel:+919620294767" className="underline">
                  +91 9620294767
                </a>
              </div>
            </div>

            {/* Column 4: Branch 2 */}
            <div>
              <div>
                <p className="font-semibold mb-1 text-base">
                  Branch 2: Mangaluru
                </p>
                <ul className="space-y-1 break-words">
                  <li>
                    <a href="#" className="underline">
                      1st floor, Ekka complex,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      4-59/9, nagori, Shanthi Nagar,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Mangaluru,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Karnataka 575002
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <br />
              </div>

              {/* <div>
                <p className="font-semibold mb-1 text-base">Branch 3:</p>
                <ul className="space-y-1 break-words">
                  <li>
                    <a href="#" className="underline">
                      1st floor, Ekka complex,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      4-59/9, nagori, Shanthi Nagar,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Mangaluru,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Karnataka 575002
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            {/* Column 2: Menu */}
            <div className="space-y-4">
              <p className="font-semibold mb-1">Pages:</p>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleNavClick("home")}
                    className="underline text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("programs")}
                    className="underline text-left"
                  >
                    Programs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("services")}
                    className="underline text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("career")}
                    className="underline text-left"
                  >
                    Career
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("about")}
                    className="underline text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("eventhub")}
                    className="underline text-left"
                  >
                    EventHub
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Explore */}
            <div className="space-y-4">
              <p className="font-semibold mb-1">Explore:</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="underline">
                    Latest Tech Trends
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Career Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Industry Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Learning Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#ff6e0c] py-4 px-2"></div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-black/20 pt-6 text-sm">
          {/* Left Side - Copyright */}
          <div className="text-center md:text-left">
            <p>
              © 2023 Glowlogics Solutions Pvt. Ltd. All Rights Reserved{" "}
              <a href="#" className="underline">
                Legal Terms
              </a>{" "}
              |{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
            <p>Website by Glowlogics | Connecting Skills to Careers.</p>
          </div>

          {/* Right Side - Payment Logos */}
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold text-sm">
              100% Safe & Secure Payments with
            </span>
            <img
              src="data:image/png;base64,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"
              alt="HDFC Bank"
              className="h-5 md:h-7"
            />
            <img
              src="data:image/png;base64,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"
              alt="PhonePe"
              className="h-5 md:h-7"
            />
            <img
              src="data:image/png;base64,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"
              alt="Razorpay"
              className="h-5 md:h-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
