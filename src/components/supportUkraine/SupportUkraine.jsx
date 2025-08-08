import React, { useEffect, useState } from "react";
import "./SupportUkraine.css";

const SupportUkraine = () => {
 const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const scrolled = (window.scrollY + winH) / docH;
      setShowMobile(scrolled >= 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://savelife.in.ua/donate/#donate-army-card-once"
      className={`support-ukraine ${showMobile ? "m-visible" : "m-hidden"}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>ПІДТРИМАТИ УКРАЇНУ</span>
    </a>
  );
}

export default SupportUkraine