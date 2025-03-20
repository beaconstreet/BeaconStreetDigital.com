"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Contact() {
  // Reduce the threshold to ensure content appears more readily
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Reduced from 0.5 to 0.1
    rootMargin: "0px", // Changed from -100px to 0px
  });

  const [showArrow, setShowArrow] = useState(true); // Default to true

  useEffect(() => {
    // Simplify this logic
    setShowArrow(inView);
  }, [inView]);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgrounds/Cozy Home Office Setup.jpeg"
          alt="Home office background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Primary background color overlay with higher opacity */}
      <div className="absolute inset-0 primary-bg opacity-90 z-10"></div>

      {/* Content container with increased z-index */}
      <div className="container mx-auto px-4 md:px-8 relative z-40 w-full">
        <section
          ref={ref}
          className="min-h-screen w-full flex flex-col items-center justify-center text-center"
        >
          {/* Force visibility for debugging */}
          <motion.h2
            initial={{ opacity: 1, y: 0 }} // Force visible initially
            animate={{ opacity: 1, y: 0 }} // Always visible
            className="text-3xl md:text-4xl lg:text-6xl font-bold secondary-text mb-6 md:mb-8"
          >
            Ready to work together?
          </motion.h2>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 secondary-text">
            {/* Always show arrow for debugging */}
            <motion.div>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </motion.svg>
            </motion.div>

            {/* Force visibility for email */}
            <motion.a
              initial={{ opacity: 1, y: 0 }} // Force visible initially
              animate={{ opacity: 1, y: 0 }} // Always visible
              href="mailto:contact@beaconstreetdigital.com"
              className="secondary-text email-shrink tracking-wide font-semibold text-lg md:text-2xl break-all md:break-normal no-underline hover:no-underline hover-accent-color transition-colors duration-200"
              style={{ textDecoration: "none" }}
            >
              <span>contact</span>
              <wbr />
              <span>@beaconstreetdigital.com</span>
            </motion.a>
          </div>
        </section>
      </div>
    </div>
  );
}
