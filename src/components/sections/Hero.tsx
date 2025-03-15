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
      <div className="absolute inset-0 primary-bg"></div>

      {/* Image on the right 50% with fade-in animation */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Gradient overlay to fade image into background */}
        <div className="absolute inset-y-0 left-0 w-[30%] gradient-primary-to-transparent z-10" />

        <div className="relative h-full w-full">
          <Image
            src="/backgrounds/man-urban-cityscape.jpeg"
            alt="Urban cityscape"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </motion.div>

      {/* Hero content on the left */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2">
        <div className="max-w-xl">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl font-caveat md:text-6xl lg:text-7xl font-bold text-black mb-20">
              Hi, I'm <span className="accent-color">Matt</span>.
            </h1>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="text-2xl font-normal md:text-2xl secondary-text mb-10">
              I design and develop web experiences.
            </div>
          </FadeIn>

          <FadeIn delay={1.2}>
            <div className="text-2xl font-normal md:text-2xl secondary-text mb-10">
              I shoot and edit compelling video content.
            </div>
          </FadeIn>

          <FadeIn delay={1.6}>
            <div className="text-2xl font-normal md:text-2xl text-black">
              Think of me as{" "}
              <span className="accent-color font-bold">
                your go-to creative partner.
              </span>
              {/* Think of me as <span className="accent-color">a one-man digital agency at your service. </span>*/}
            </div>
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
