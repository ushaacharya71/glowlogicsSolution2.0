import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import logo from "../assets/BlackGL.png";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Programs", id: "programs" },
  { name: "Services", id: "services" },
  { name: "Career", id: "career" },
  { name: "About", id: "about" },
  { name: "EventHub", id: "eventHub" },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();
  const navigate = useNavigate();

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY.current || currentY < 80);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy for active section detection
  useEffect(() => {
    const handleActiveLink = () => {
      if (location.pathname !== "/") {
        if (location.pathname.includes("about")) setActiveLink("about");
        else if (location.pathname.includes("career")) setActiveLink("career");
        else if (location.pathname.includes("eventHub"))
          setActiveLink("eventHub");
        return;
      }

      const sectionOffsets = navLinks.map((link) => {
        const section = document.getElementById(link.id);
        return section
          ? { id: link.id, offset: section.getBoundingClientRect().top }
          : null;
      });

      const visible = sectionOffsets.filter(
        (s) => s && s.offset < window.innerHeight / 2
      );

      if (visible.length > 0) {
        setActiveLink(visible[visible.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleActiveLink);
    handleActiveLink(); // Initial
    return () => window.removeEventListener("scroll", handleActiveLink);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (id) => {
    setActiveLink(id);

    // Route-based pages
    if (id === "career" || id === "about" || id === "eventHub") {
      navigate(`/${id}`);
    }
    // Scroll to section if already on home
    else if (location.pathname === "/") {
      scrollToSection(id);
    }
    // Otherwise, go to home and scroll from there
    else {
      navigate("/", { state: { scrollTo: id } });
    }

    setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } backdrop-blur-md bg-white/40 border-b border-white/30 shadow-md`}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-auto"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-6 sm:h-7 md:h-7 object-contain"
              />
            </motion.div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 lg:gap-10">
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => handleNavClick(link.id)}
                className="group relative font-semibold uppercase text-sm text-gray-800 hover:text-black transition duration-300"
              >
                <span
                  className={`block transition-transform duration-500 group-hover:-translate-y-1 ${
                    activeLink === link.id ? "text-black font-bold" : ""
                  }`}
                >
                  {link.name}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-500 ${
                    activeLink === link.id
                      ? "w-full bg-black"
                      : "w-0 bg-black group-hover:w-full"
                  }`}
                ></span>
              </motion.button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 border border-black text-sm rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              <a href ="https://glowlogics.edmingle.com"> LogIn</a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium text-gray-800 hover:text-black transition"
            > <b>Contact</b>

            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-xl text-black focus:outline-none"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-md z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-50 p-6 flex flex-col gap-6 shadow-xl"
            >
              {/* Mobile Header */}
              <div className="flex justify-between items-center mb-6">
                <img src={logo} alt="Logo" className="h-8 object-contain" />
                <button
                  className="text-2xl text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Mobile Links */}
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-lg font-semibold text-left transition ${
                    activeLink === link.id
                      ? "text-black font-bold"
                      : "text-gray-800 hover:text-black"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <hr />

              {/* Mobile Buttons */}
              <button className="w-full px-5 py-3 border border-black text-sm rounded-full font-semibold hover:bg-black hover:text-white transition">
                Get Started
              </button>
              <button className="w-full mt-2 text-sm font-medium text-gray-800 hover:text-black transition">
                Sign In
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
