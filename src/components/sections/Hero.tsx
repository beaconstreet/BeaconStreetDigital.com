"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "../animations/FadeIn";

export default function Hero() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToPortfolio = () => {
    // Scroll to a position equal to the viewport height
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* White background for the entire section */}
      <div className="absolute inset-0 bg-white"></div>

      {/* Image on the right 50% with fade-in animation */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Smaller gradient that only covers part of the image */}
        <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white to-transparent z-10" />

        <div className="relative h-full w-full">
          <Image
            src="/backgrounds/man-urban-cityscape.jpeg"
            alt="Urban cityscape"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </motion.div>

      {/* Hero content on the left */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2">
        <div className="max-w-xl">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
              I'm Matt.
            </h1>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-xl md:text-2xl text-black mb-4">
              I design and develop web experiences. I shoot and edit video
              content.
            </p>
          </FadeIn>

          <FadeIn delay={1.4}>
            <p className="text-2xl md:text-3xl text-black">
              Think of me as your go-to creative partner, here when you need me,
              always working toward your success.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Clickable scroll indicator with hover effect */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: showArrow ? 1 : 0,
          y: showArrow ? [0, 10, 0] : 0,
        }}
        transition={{
          opacity: { duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        }}
        onClick={scrollToPortfolio}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-black"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
