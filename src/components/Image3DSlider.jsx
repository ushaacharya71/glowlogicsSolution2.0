import { useEffect, useState } from "react";

const imageUrls = [
  "https://img.freepik.com/premium-vector/gradient-ui-ux-design-illustration_23-2151514787.jpg?semt=ais_hybrid&w=740", // UI/UX
  // "https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2923.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740", // Web Dev
  "https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740", // Python
  "https://img.freepik.com/premium-photo/visual-spreadsheet-interface-with-various-tabs-data-fields-xlsx-format_1314467-236644.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",     // Excel
  "https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908061.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",   // Data Science
  "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040430.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",  // JavaScript
  "https://img.freepik.com/premium-photo/hand-with-letter-letter-it_917313-50398.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",  // ML/AI
  "https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637764.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740", // Cyber Security
  "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038900.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740", // App development
  "https://img.freepik.com/free-vector/internet-things-concept-poster_1284-5515.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740", // IOT
  "https://img.freepik.com/free-vector/cloud-storage-realistic-composition-with-digital-elements-bright-lights-city_1284-26975.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740", // Cyber Security
  "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063126.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740", // Digital Marketing
  "https://img.freepik.com/premium-photo/dynamic-team-collaboration-modern-office-environment_886588-36375.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740", // Excel
  "https://img.freepik.com/free-photo/technology-hologram-indoors_23-2151833333.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740", // SAmple hai yr

];

export default function Image3DSlider() {
  const [radius, setRadius] = useState(500);

  useEffect(() => {
    const updateRadius = () => {
      const baseRadius = window.innerWidth > 768 ? 500 : 300;
      setRadius(baseRadius);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .carousel-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 40px 20px;
        box-sizing: border-box;
        text-align: center;
      }

      .carousel-heading {
        font-size: 2.5rem;
        font-weight: bold;
        color: #111827;
        margin-bottom: 12px;
      }

      .carousel-description {
        font-size: 1.125rem;
        color: #6b7280;
        margin-bottom: 40px;
        max-width: 600px;
      }

      .carousel {
        position: relative;
        width: 100%;
        max-width: 800px;
        height: 350px;
        transform-style: preserve-3d;
        animation: spin 25s linear infinite;
        perspective: 1200px;
      }

      .carousel:hover {
        animation-play-state: paused;
      }

      .carousel img {
        position: absolute;
        width: 200px;
        height: 280px;
        object-fit: cover;
        top: 50%;
        left: 50%;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
      }

      .carousel img:hover {
        transform: scale(1.1);
        z-index: 10;
      }

      @keyframes spin {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const angle = 360 / imageUrls.length;

  return (
   <div
  className="carousel-wrapper bg-orange-100 ">
  <h2 className="carousel-heading">
    Step Into the Industry with Confidence and Certification
  </h2>
  <p className="carousel-description">
    Learn in-demand tools and strategies to elevate your career from anywhere.
  </p>
  <div className="carousel">
    {imageUrls.map((url, index) => {
      const rotate = `rotateY(${angle * index}deg) translateZ(${radius}px)`;
      return (
        <img
          key={index}
          src={url}
          alt={`course-${index}`}
          style={{
            transform: `translate(-50%, -50%) ${rotate}`,
          }}
        />
      );
    })}
  </div>
</div>
  );
}
