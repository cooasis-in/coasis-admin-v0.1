import React, { useState, useEffect } from "react";
import styles from "./authLayout.module.css";
import { useLocation } from "react-router-dom";
import BackButton from "./BackButton";

// images
import cooasisLogo from "../../assets/images/cooasis.svg";
import cohyveLogo from "../../assets/images/cohyve_logo.svg";

// background video
import oneBgVideo from "../../assets/videos/01_bg.webm";
import twoBgVideo from "../../assets/videos/02_bg.webm";
import fourBgVideo from "../../assets/videos/04_bg.webm";
import fiveBgVideo from "../../assets/videos/05_bg.webm";
import sixBgVideo from "../../assets/videos/06_bg.webm";
import sevenBgVideo from "../../assets/videos/07_bg.webm";
import eightBgVideo from "../../assets/videos/08_bg.webm";
import nineBgVideo from "../../assets/videos/09_bg.webm";
import tenBgVideo from "../../assets/videos/10_bg.webm";
import elevenBgVideo from "../../assets/videos/11_bg.webm";
import twelveBgVideo from "../../assets/videos/12_bg.webm";
import thirteenBgVideo from "../../assets/videos/13_bg.webm";
import fourteenBgVideo from "../../assets/videos/14_bg.webm";
import fifteenBgVideo from "../../assets/videos/15_bg.webm";

// Array of video sources
const videoSources = [
  oneBgVideo,
  twoBgVideo,
  fourBgVideo,
  fiveBgVideo,
  sixBgVideo,
  sevenBgVideo,
  eightBgVideo,
  nineBgVideo,
  tenBgVideo,
  elevenBgVideo,
  twelveBgVideo,
  thirteenBgVideo,
  fourteenBgVideo,
  fifteenBgVideo,
];

function AuthLayout({ children }) {
  const location = useLocation();
  const [randomVideo, setRandomVideo] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    // Select a random video from the list on component mount
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    setRandomVideo(videoSources[randomIndex]);

    // Delay to show the fade-in effect
    const timer = setTimeout(() => setIsVideoVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen flex">
      <div className={`${styles.left} w-[65%] relative`}>
        {randomVideo && (
          <video
            src={randomVideo}
            autoPlay
            loop
            muted
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[4000ms] ease-in-out ${
              isVideoVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div className="h-full w-full bg-black/50 relative">
          <div className="py-[2rem] h-full px-[3rem] flex flex-col justify-between">
            {/* NAVBAR */}
            <nav className="relative p-2">
              <img src={cohyveLogo} className="w-[10rem]" alt="Cooasis Logo" />
            </nav>
          </div>
        </div>
      </div>
      {/* Back Button */}
      {location.pathname !== "/" && location.pathname !== "/signin" && (
        <BackButton />
      )}

      <div className="right w-[35%] text-center flex items-center justify-center h-full bg-[#050505] py-[3.5rem] px-[6rem]">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;