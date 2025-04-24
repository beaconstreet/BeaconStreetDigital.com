"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import FadeIn from "../animations/FadeIn";

export default function About() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const portfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Get initial window width
    setWindowWidth(window.innerWidth);
    // Set initial mobile state - using 1050px breakpoint consistently
    setIsMobile(window.innerWidth < 1024);

    // Function to handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 1024);
    };

    // Add event listeners
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Find the Portfolio section
    const portfolioSection = document.querySelector("section:nth-of-type(3)");
    if (portfolioSection) {
      portfolioRef.current = portfolioSection as HTMLElement;
    }
  }, []);

  const scrollToPortfolio = () => {
    // Scroll to the portfolio section if ref is available
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    // Scroll to Contact section
    const contactSection = document.querySelector("section:nth-of-type(4)");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const technologies = [
    { name: "Next.js", icon: "/otherImages/NextJS.svg" },
    { name: "React", icon: "/otherImages/react.svg" },
    { name: "JavaScript", icon: "/otherImages/javascript.svg" },
    { name: "Python", icon: "/otherImages/python.svg" },
    { name: "Figma", icon: "/otherImages/figma.svg" },
    { name: "WordPress", icon: "/otherImages/wordpress.svg" },
    { name: "HTML", icon: "/otherImages/html.svg" },
    { name: "CSS", icon: "/otherImages/CSS.svg" },
    { name: "Squarespace", icon: "/otherImages/squarespace.svg" },
    { name: "Claude", icon: "/otherImages/Claude.svg" },
    {
      name: "Adobe Creative Suite",
      icon: "/otherImages/AdobeCreative.svg",
    },
    { name: "Typescript", icon: "/otherImages/typescript.svg" },
    { name: "Midjourney", icon: "/otherImages/midjourney.svg" },
    { name: "Tailwind CSS", icon: "/otherImages/tailwind.svg" },
    { name: "Shopify", icon: "/otherImages/shopify.svg" },
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Container for the whole section */}
      <div className="flex flex-col lg:flex-row w-full relative">
        {/* Left side - Image (full height on desktop, 50vh on mobile) */}
        <div
          className={`${
            isMobile ? "w-full h-[50vh]" : "w-1/2 h-screen sticky top-0"
          } relative`}
        >
          <Image
            src="/backgrounds/MattProgrammingInLoft_MJ1.webp"
            alt="Matt programming in loft"
            fill
            sizes={isMobile ? "100vw" : "50vw"}
            className="object-cover"
            priority
          />

          {/* Angled overlay for the image side */}
          {!isMobile && (
            <div
              className="absolute inset-y-0 right-0 z-10 about-overlay bg-[#fb923c]"
              style={{
                width: "24%",
                clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
                WebkitClipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
              }}
            />
          )}

          {/* Container for both arrows - moved to the left to account for angled divider */}
          <div
            className={`absolute bottom-8 z-40 flex justify-center space-x-10 w-full`}
            style={{
              transform: isMobile ? "translateX(0)" : "translateX(-15%)",
            }}
          >
            {/* "Recent Projects" arrow */}
            <motion.div
              className="cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, 10, 0],
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              }}
              onClick={scrollToPortfolio}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Label "Recent Projects" */}
              <div className="flex flex-col items-center">
                <span className="font-montserrat text-xs font-thin mb-2 text-[#ecf6fa]">
                  Recent Projects
                </span>
                <svg
                  width={isMobile ? "38" : "60"}
                  height={isMobile ? "38" : "60"}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="primary-color"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </motion.div>

            {/* "Let's Work Together" arrow */}
            <motion.div
              className="cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, 10, 0],
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
              onClick={scrollToContact}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Label "Let's Work Together" */}
              <div className="flex flex-col items-center">
                <span className="font-montserrat text-xs font-thin mb-2 text-[#ecf6fa]">
                  Let's Work Together
                </span>
                <svg
                  width={isMobile ? "38" : "60"}
                  height={isMobile ? "38" : "60"}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="primary-color"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right side - Content */}
        <div
          ref={ref}
          className={`${
            isMobile ? "w-full py-16" : "w-1/2 min-h-screen"
          } flex items-center bg-[#fb923c] relative z-20`}
        >
          <div className="px-8 lg:px-16 xl:px-24 max-w-xl mx-auto lg:mx-0 mt-20 mb-20">
            {/* 
              px-6: padding left and right of 1.5rem (24px) on all screen sizes
              md:px-12: padding left and right of 3rem (48px) on medium screens and up
              lg:px-16: padding left and right of 4rem (64px) on large screens and up
              max-w-2xl: maximum width of 42rem (672px)
              mx-auto: center horizontally with auto margins on both sides (for mobile)
              md:mx-0: on medium screens and up, remove the auto margins (align to left)
            */}
            {/* Heading */}
            <FadeIn delay={0.2}>
              <h2 className="font-caveat text-[48px] mb-8 leading-tight text-black font-bold">
                Designing smarter websites for real people
              </h2>
            </FadeIn>

            {/* Body text */}
            <FadeIn delay={0.5}>
              <p className="font-montserrat text-base mb-8 text-black">
                I create clean, modern sites that don't just look good — they
                work hard. Using user-first design principles, the latest AI
                tools, and modern web tech, I build digital experiences that are
                fast, intuitive, and easy to maintain.
              </p>
            </FadeIn>

            <FadeIn delay={0.7}>
              <p className="font-montserrat text-base mb-8 text-black">
                With a background in storytelling, video, and post-production, I
                bring a unique creative lens to problem-solving -- translating
                brand goals into intuitive, engaging digital experiences.
              </p>
            </FadeIn>

            <FadeIn delay={0.9}>
              <p className="font-montserrat text-base mb-12 text-black">
                Whether collaborating with product teams or working
                independently, I thrive on helping businesses grow through
                smart, strategic design.
              </p>
            </FadeIn>

            {/* My toolkit heading */}
            <FadeIn delay={1.0}>
              <h3 className="font-caveat text-[36px] mb-8 text-black text-center">
                My toolkit
              </h3>
            </FadeIn>

            {/* Technologies grid */}
            <FadeIn delay={1.1}>
              <div className="grid grid-cols-5 gap-x-8 gap-y-10">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-14 h-14 flex items-center justify-center mb-2">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-montserrat text-xs font-light text-center text-black">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
