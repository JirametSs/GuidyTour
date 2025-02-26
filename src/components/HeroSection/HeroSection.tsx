import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  // 🌟 State to switch between Phuket & Krabi
  const [isPhuket, setIsPhuket] = useState(true);

  // 🌟 Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change at 400px scroll
      setIsPhuket(scrollPosition < 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`hero ${isPhuket ? "phuket-bg" : "krabi-bg"}`}>
      <div className="hero-overlay">
        
        {/* 🌟 Header for Top Package */}
        <div className="top-package-banner">
          <p>🔥 {isPhuket ? "แพ็คเกจยอดนิยม" : "แพ็คเกจแนะนำ"}</p>
        </div>

        <h1 className="hero-title">{isPhuket ? "PHUKET" : "KRABI"}</h1>
        <p className="hero-subtitle">{isPhuket ? "4 DAYS 3 NIGHTS" : "3 DAYS 2 NIGHTS"}</p>
        <p className="hero-price">{isPhuket ? "9,900 THB/PAX" : "8,900 THB/PAX"}</p>
        <p className="hero-duration">
          {isPhuket ? "TRAVEL APRIL - DECEMBER 2024" : "TRAVEL JANUARY - DECEMBER 2024"}
        </p>

        <div className="hero-highlights">
          {isPhuket ? (
            <>
              <span>🏝️ Stunning Beaches</span>
              <span>🍽️ Local Cuisine</span>
              <span>🏛️ Historical Landmarks</span>
            </>
          ) : (
            <>
              <span>🏝️ 4 Island Snorkeling</span>
              <span>🌊 Emerald Pool</span>
              <span>🛶 Kayaking Adventure</span>
            </>
          )}
        </div>

        <div className="hero-details">
          {isPhuket ? (
            <>
              <p>🌞 <strong>Day 1:</strong> Arrive in Phuket, visit Patong Beach, and enjoy a seafood dinner.</p>
              <p>🏝️ <strong>Day 2:</strong> Island hopping to Phi Phi Islands, snorkeling, and sunset boat tour.</p>
              <p>🏛️ <strong>Day 3:</strong> Explore Old Phuket Town, visit Big Buddha, and enjoy local street food.</p>
              <p>✈️ <strong>Day 4:</strong> Relax at Kata Beach and departure from Phuket.</p>
            </>
          ) : (
            <>
              <p>🌞 <strong>Day 1:</strong> Arrive in Krabi, visit Ao Nang Beach, and enjoy sunset dinner.</p>
              <p>🏝️ <strong>Day 2:</strong> Explore the 4 Islands, snorkeling, and relax on white sandy beaches.</p>
              <p>🛶 <strong>Day 3:</strong> Visit the Emerald Pool and take a relaxing kayak tour.</p>
            </>
          )}
        </div>

        <div className="hero-buttons">
          <a href="/packagetour.html" className="btn primary-btn">ดูแพ็คเกจทัวร์</a>
          <a href="/contact.html" className="btn secondary-btn">ติดต่อเรา</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
