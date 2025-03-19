"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Contact() {
  // Changed threshold to be more strict about when we consider it "in view"
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Increased threshold so it triggers when more of the section is visible
    rootMargin: "-100px", // Only trigger when fully in viewport
  });

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (inView) {
      // Remove the timeout and show arrow immediately when in view
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  }, [inView]);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/backgrounds/Cozy Home Office Setup.jpeg"
          alt="Home office background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Primary background color overlay */}
      <div className="absolute inset-0 primary-bg opacity-80 z-20"></div>

      {/* Content container - increased z-index to be above the overlay */}
      <div className="container mx-auto px-4 md:px-8 relative z-30">
        <section
          ref={ref}
          className="h-screen w-full flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold secondary-text mb-8"
          >
            Ready to work together?
          </motion.h2>

          <div className="flex items-center justify-center gap-4 secondary-text">
            {/* Bouncing arrow */}
            <AnimatePresence>
              {showArrow && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
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
              )}
            </AnimatePresence>

            {/* Email address with hover effect */}
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              href="mailto:contact@beaconstreetdigital.com"
              className="secondary-text email-shrink tracking-wide font-semibold text-2xl no-underline hover:no-underline hover-accent-color transition-colors duration-200 !decoration-none items-center"
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
