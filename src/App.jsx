import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Description from "./components/Description";
import ProgramCard from "./components/ProgramCard";
import Featured from "./components/Featured";
import Services from "./components/Services";
import FAQSection from "./components/FAQSection";
import Niche from "./components/Niche";
import SectionOne from "./components/SectionOne";
import Testimonial from "./components/Testimonials";
import Background from "./components/Background";
import Image3DSlider from "./components/Image3DSlider";
import FloatingSocials from "./components/FloatingSocials";
import OfferPopup from "./components/OfferPopup";
import GlowlogicsChatbot from "./components/GlowlogicsChatbot";
import GlobalReachSection from "./components/GlobalReachSection";
import HeroSection from "./components/HeroSection";
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

import Career from "./pages/Career";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // added
import LegalTerms from "./pages/LegalTerms"; //  added
import EventHub from "./pages/EventHub"; //   added

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

import WebDev from "./pages/programs/webDev";
import VLSI from "./pages/programs/VLSI";
import UIUX from "./pages/programs/UIUX";
import Ai from "./pages/programs/Ai";
import DataSciences from "./pages/programs/Data Sciences";
import CyberSecurity from "./pages/programs/CyberSecurity"; //   added
import CloudComputing from "./pages/programs/CloudComputing"; //   added
import IOT from "./pages/programs/IOT"; //   added
import AutoCAD from "./pages/programs/AutoCAD"; //   added
import JavaFullstack from "./pages/programs/JavaFullstack"; //   added
import AppDevelopment from "./pages/programs/AppDevelopment"; //   added
import DigitalMarketing from "./pages/programs/DigitalMarketing"; //   added
import PowerBi from "./pages/programs/PowerBi"; //   added
import HRM from "./pages/programs/HRM"; //   added
import Leadership from "./pages/programs/Leadership"; //   added
import AdvancedExcel from "./pages/programs/AdvancedExcel"; //   added
import Accounting from "./pages/programs/Accounting"; //   added
import Entrepreneurship from "./pages/programs/Entrepreneurship"; //   added
import BusinessCommunication from "./pages/programs/BusinessCommunication"; //   added
import Blaw from "./pages/programs/Blaw"; //   added

// ✅ Scroll to section if route state has scrollTo
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      setTimeout(() => {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

// ✅ Scroll to top on load
function ScrollToTopOnLoad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

// ✅ HomePage sections (cleaned)
function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <Marquee />
      <Description />
      <section id="programs">
        <ProgramCard />
      </section>
      <Featured />
      <section id="services">
        <Services />
      </section>
      <GlobalReachSection />
      <FAQSection />
      <Image3DSlider />
      <Testimonial />
      <SectionOne />

      {/* <Niche /> */}
    </>
  );
}

// ✅ Main App
function App() {
  return (
    <div className="w-full min-h-screen text-black">
      <Background />
      <ScrollToTop />
      <Navbar />
      <ScrollToTopOnLoad />
      <ScrollHandler />

      <Routes>
        {/* 🌐 Static Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/eventHub" element={<EventHub />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-terms" element={<LegalTerms />} />

        {/* 📘 Program Pages */}
        <Route path="/programs/webDev" element={<WebDev />} />
        <Route path="/programs/VLSI" element={<VLSI />} />
        <Route path="/programs/UIUX" element={<UIUX />} />
        <Route path="/programs/Ai" element={<Ai />} />
        <Route path="/programs/DataSciences" element={<DataSciences />} />
        <Route path="/programs/CyberSecurity" element={<CyberSecurity />} />
        <Route path="/programs/CloudComputing" element={<CloudComputing />} />
        <Route path="/programs/IOT" element={<IOT />} />
        <Route path="/programs/AutoCAD" element={<AutoCAD />} />
        <Route path="/programs/JavaFullstack" element={<JavaFullstack />} />
        <Route path="/programs/AppDevelopment" element={<AppDevelopment />} />
        <Route
          path="/programs/DigitalMarketing"
          element={<DigitalMarketing />}
        />
        <Route path="/programs/PowerBi" element={<PowerBi />} />
        <Route path="/programs/HRM" element={<HRM />} />
        <Route path="/programs/Leadership" element={<Leadership />} />
        <Route path="/programs/AdvancedExcel" element={<AdvancedExcel />} />
        <Route path="/programs/Accounting" element={<Accounting />} />
        <Route
          path="/programs/Entrepreneurship"
          element={<Entrepreneurship />}
        />
        <Route
          path="/programs/BusinessCommunication"
          element={<BusinessCommunication />}
        />
        <Route path="/programs/Blaw" element={<Blaw />} />
      </Routes>
      <Niche />


      <OfferPopup />
      <FloatingSocials />
       <GlowlogicsChatbot />

    </div>
  );
}

export default App;
