"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "../animations/FadeIn";

export default function Hero() {
  const cloud1Ref = useRef<HTMLDivElement>(null);
  const cloud2Ref = useRef<HTMLDivElement>(null);
  const duplicateCloud1Ref = useRef<HTMLDivElement>(null);
  const duplicateCloud2Ref = useRef<HTMLDivElement>(null);
  const airplaneRef = useRef<HTMLDivElement>(null);
  const duplicateAirplaneRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Get initial window width
    setWindowWidth(window.innerWidth);
    // Set initial mobile state
    setIsMobile(window.innerWidth < 1050); // Consider screens < 1200px as mobile

    // Function to handle image load
    const handleImageLoad = () => {
      const img = document.querySelector(
        ".background-image"
      ) as HTMLImageElement;
      if (img && img.complete) {
        // Get actual visible height of the image
        const aspectRatio = img.naturalHeight / img.naturalWidth;
        const visibleHeight = window.innerWidth * aspectRatio;
        setImageHeight(visibleHeight);
      }
    };

    // Call once on mount
    handleImageLoad();

    // Function to handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 1050); // Update mobile state on resize (now 1200px)
      handleImageLoad();
    };

    // Add event listeners
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation for clouds and airplane
  useEffect(() => {
    if (
      !cloud1Ref.current ||
      !cloud2Ref.current ||
      !duplicateCloud1Ref.current ||
      !duplicateCloud2Ref.current ||
      !airplaneRef.current ||
      !duplicateAirplaneRef.current ||
      !windowWidth ||
      !imageHeight
    )
      return;

    const cloudWidth = windowWidth * 0.05; // For cloud 1
    const cloud2Width = windowWidth * 0.15; // For cloud 2 (smaller)
    const airplaneWidth = windowWidth * 0.2; // For airplane

    // Initialize positions - start all elements off-screen
    cloud1Ref.current.style.right = `300px`; // Cloud 1 starts partway on screen
    cloud2Ref.current.style.right = `0px`; // Cloud 2 starts on screen
    duplicateCloud1Ref.current.style.right = `-${cloudWidth}px`; // Duplicate 1 starts off-screen
    duplicateCloud2Ref.current.style.right = `-${cloud2Width}px`; // Duplicate 2 starts off-screen

    // Position airplane further off-screen initially
    airplaneRef.current.style.right = `-${airplaneWidth * 2}px`;
    duplicateAirplaneRef.current.style.right = `-${airplaneWidth * 4}px`;

    const createCloudAnimation = (
      element: HTMLDivElement,
      startPos: string,
      endPos: string,
      duration: number
    ) => {
      return element.animate([{ right: startPos }, { right: endPos }], {
        duration: duration,
        easing: "linear",
        fill: "forwards",
      });
    };

    // Continuous animation approach
    const animateCloudsInfinitely = () => {
      // First set of animations - clouds
      const cloud1Animation = createCloudAnimation(
        cloud1Ref.current!,
        "300px",
        `${windowWidth + cloudWidth}px`,
        120000
      );

      const cloud2Animation = createCloudAnimation(
        cloud2Ref.current!,
        "0px",
        `${windowWidth + cloud2Width}px`,
        120000
      );

      // Airplane animation - 30% faster than clouds (approx. 70000ms vs 120000ms)
      const airplaneAnimation = createCloudAnimation(
        airplaneRef.current!,
        `-${airplaneWidth * 2}px`,
        `${windowWidth + airplaneWidth}px`,
        70000
      );

      // After delay, start duplicate cloud 1
      setTimeout(() => {
        const duplicateCloud1Animation = createCloudAnimation(
          duplicateCloud1Ref.current!,
          `-${cloudWidth}px`,
          `${windowWidth + cloudWidth}px`,
          120000
        );

        // Set up continuous cycle for cloud 1
        cloud1Animation.onfinish = () => {
          // Reposition original cloud off-screen
          cloud1Ref.current!.style.right = `-${cloudWidth}px`;

          // After duplicate finishes, start original again from off-screen
          duplicateCloud1Animation.onfinish = () => {
            // Start original cloud 1 from off-screen
            createCloudAnimation(
              cloud1Ref.current!,
              `-${cloudWidth}px`,
              `${windowWidth + cloudWidth}px`,
              100000
            ).onfinish = () => {
              // Reposition duplicate off-screen
              duplicateCloud1Ref.current!.style.right = `-${cloudWidth}px`;

              // Start duplicate cloud 1 again
              createCloudAnimation(
                duplicateCloud1Ref.current!,
                `-${cloudWidth}px`,
                `${windowWidth + cloudWidth}px`,
                100000
              ).onfinish = () => {
                // Continue the cycle
                animateCloudsInfinitely();
              };
            };
          };
        };
      }, 10000);

      // After delay, start duplicate cloud 2
      setTimeout(() => {
        const duplicateCloud2Animation = createCloudAnimation(
          duplicateCloud2Ref.current!,
          `-${cloud2Width}px`,
          `${windowWidth + cloud2Width}px`,
          120000
        );

        // Set up continuous cycle for cloud 2
        cloud2Animation.onfinish = () => {
          // Reposition original cloud off-screen
          cloud2Ref.current!.style.right = `-${cloud2Width}px`;

          // After duplicate finishes, start original again from off-screen
          duplicateCloud2Animation.onfinish = () => {
            // Start original cloud 2 from off-screen
            createCloudAnimation(
              cloud2Ref.current!,
              `-${cloud2Width}px`,
              `${windowWidth + cloud2Width}px`,
              120000
            ).onfinish = () => {
              // Reposition duplicate off-screen
              duplicateCloud2Ref.current!.style.right = `-${cloud2Width}px`;

              // Start duplicate cloud 2 again
              createCloudAnimation(
                duplicateCloud2Ref.current!,
                `-${cloud2Width}px`,
                `${windowWidth + cloud2Width}px`,
                120000
              );
              // Note: We don't need to set onfinish here as the main function
              // will be called from cloud 1's cycle
            };
          };
        };
      }, 30000);

      // After delay, start duplicate airplane
      setTimeout(() => {
        const duplicateAirplaneAnimation = createCloudAnimation(
          duplicateAirplaneRef.current!,
          `-${airplaneWidth * 4}px`,
          `${windowWidth + airplaneWidth}px`,
          70000
        );

        // Set up continuous cycle for airplane
        airplaneAnimation.onfinish = () => {
          // Reposition original airplane off-screen
          airplaneRef.current!.style.right = `-${airplaneWidth * 2}px`;

          // After duplicate finishes, start original again from off-screen
          duplicateAirplaneAnimation.onfinish = () => {
            // Start original airplane from off-screen
            createCloudAnimation(
              airplaneRef.current!,
              `-${airplaneWidth * 2}px`,
              `${windowWidth + airplaneWidth}px`,
              70000
            ).onfinish = () => {
              // Reposition duplicate off-screen
              duplicateAirplaneRef.current!.style.right = `-${
                airplaneWidth * 4
              }px`;

              // Start duplicate airplane again
              createCloudAnimation(
                duplicateAirplaneRef.current!,
                `-${airplaneWidth * 4}px`,
                `${windowWidth + airplaneWidth}px`,
                70000
              );
            };
          };
        };
      }, 20000); // Start airplane duplicate after 20 seconds
    };

    // Start the animation cycle
    animateCloudsInfinitely();
  }, [windowWidth, imageHeight]);

  const scrollToPortfolio = () => {
    // Scroll to a position equal to the viewport height
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    // Scroll to Portfolio section
    const portfolioSection = document.querySelector("section:nth-of-type(3)");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    // Scroll to Contact section
    const contactSection = document.querySelector("section:nth-of-type(4)");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`relative ${
        isMobile
          ? "flex flex-col min-h-screen"
          : "min-h-screen flex items-center"
      }`}
    >
      {/* Background image */}
      <div
        className={`${
          isMobile ? "relative h-[35vh]" : "absolute inset-0"
        } z-0 overflow-hidden`}
      >
        <Image
          src="/backgrounds/MattOnBalcony_MJ1.webp"
          alt="Man in urban cityscape with a Beacon Street billboard behind him"
          fill
          sizes="100vw"
          priority
          className="object-cover background-image"
          style={{
            objectFit: "cover",
            transform: isMobile
              ? "scale(1.4) translateX(0)"
              : "scale(1) translateX(30%)", // Add horizontal shift for desktop
            transformOrigin: "center center",
          }}
        />

        {/* Cloud container - positioned absolutely at the top of the actual image */}
        <div
          className="absolute left-0 right-0 top-0 z-20 pointer-events-none overflow-hidden"
          style={{ height: "20%" }}
        >
          {/* Cloud 1 */}
          <div
            ref={cloud1Ref}
            className="absolute"
            style={{
              height: "100%",
              width: "30%", // Adjust based on cloud size
              top: "0%", // At the very top
            }}
          >
            <Image
              src="/backgrounds/Cloud3_whisk_alpha.png"
              alt="Cloud"
              fill
              sizes="30vw"
              className="object-contain"
            />
          </div>

          {/* Duplicate Cloud 1 */}
          <div
            ref={duplicateCloud1Ref}
            className="absolute"
            style={{
              height: "100%",
              width: "30%",
              top: "0%",
            }}
          >
            <Image
              src="/backgrounds/Cloud3_whisk_alpha.png"
              alt="Cloud"
              fill
              sizes="30vw"
              className="object-contain"
            />
          </div>

          {/* Cloud 2 - smaller size */}
          <div
            ref={cloud2Ref}
            className="absolute"
            style={{
              height: "60%", // 80% of the container height (smaller)
              width: "15%", // 20% of window width (smaller than cloud 1)
              top: "8%", // Just slightly lower than cloud 1
            }}
          >
            <Image
              src="/backgrounds/Cloud2_whisk_alpha.png"
              alt="Airplane"
              fill
              // sizes="10vw" // Updated to match new width
              className="object-contain"
            />
          </div>

          {/* Duplicate Cloud 2 - also smaller */}
          <div
            ref={duplicateCloud2Ref}
            className="absolute"
            style={{
              height: "60%", // Match original cloud 2
              width: "15%", // Match original cloud 2
              top: "8%",
            }}
          >
            <Image
              src="/backgrounds/Cloud2_whisk_alpha.png"
              alt="Cloud"
              fill
              sizes="20vw" // Updated to match new width
              className="object-contain"
            />
          </div>

          {/* Airplane */}
          <div
            ref={airplaneRef}
            className="absolute"
            style={{
              height: "40%",
              width: "20%",
              top: "25%", // Position airplane a bit lower in the sky
            }}
          >
            <Image
              src="/backgrounds/airplane1_whisk_alpha_small.png"
              alt="Airplane"
              fill
              sizes="20vw"
              className="object-contain"
            />
          </div>

          {/* Duplicate Airplane */}
          <div
            ref={duplicateAirplaneRef}
            className="absolute"
            style={{
              height: "40%",
              width: "20%",
              top: "25%", // Match the position of the original airplane
            }}
          >
            <Image
              src="/backgrounds/airplane1_whisk_alpha_small.png"
              alt="Airplane"
              fill
              sizes="20vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* White overlay - left side (desktop only) */}
      {!isMobile ? (
        <div className="absolute inset-y-0 left-0 z-20 primary-bg hero-overlay" />
      ) : null}

      {/* Content container */}
      <div
        className={`
          ${
            isMobile
              ? "relative w-full z-40 primary-bg flex items-center justify-center"
              : "absolute left-0 w-full z-40"
          }
        `}
        style={{
          height: isMobile ? "65vh" : "auto",
        }}
      >
        <div
          className={`relative ${
            isMobile ? "h-full flex items-start pt-15" : "w-full"
          }`}
        >
          {/* Content positioning */}
          <div
            className={`
              ${
                isMobile
                  ? "relative w-full text-center px-6"
                  : "relative left-1/4 transform -translate-x-1/2 px-4 sm:px-6 md:px-8"
              }
            `}
            style={{
              maxWidth: isMobile ? "100%" : "clamp(280px, 90%, 700px)",
              width: isMobile ? "100%" : "45%",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            <FadeIn delay={0.2}>
              <h1
                className="font-caveat font-bold text-black mb-8"
                style={{
                  fontSize: isMobile
                    ? `clamp(2.5rem, ${windowWidth * 0.08}px, 4rem)`
                    : `clamp(2.5rem, ${windowWidth * 0.05}px, 8rem)`,
                  marginBottom: isMobile
                    ? `clamp(3rem, ${windowWidth * 0.01}px, 3.5rem)`
                    : `clamp(5rem, ${windowWidth * 0.015}px, 5.5rem)`,
                  lineHeight: 1.2,
                  hyphens: "auto",
                }}
              >
                Hi, I&apos;m <span className="accent-color">Matt</span>.
              </h1>
            </FadeIn>

            <FadeIn delay={1}>
              <div
                className="secondary-text mb-8"
                style={{
                  fontSize: isMobile
                    ? `clamp(1rem, ${windowWidth * 0.035}px, 1.5rem)` // font size for mobile
                    : `clamp(1rem, ${windowWidth * 0.026}px, 1.7rem)`, // font size for desktop
                  marginBottom: isMobile
                    ? `clamp(1.5rem, ${windowWidth * 0.01}px, 2rem)` // margin bottom for mobile
                    : `clamp(3rem, ${windowWidth * 0.015}px, 3.5rem)`, // margin bottom for desktop
                  lineHeight: 1.4,
                  hyphens: "none",
                }}
              >
                I design, develop, and produce digital experiences.
              </div>
            </FadeIn>

            <FadeIn delay={1.6}>
              <div
                className="secondary-text"
                style={{
                  fontSize: isMobile
                    ? `clamp(1rem, ${windowWidth * 0.035}px, 1.5rem)`
                    : `clamp(1rem, ${windowWidth * 0.026}px, 1.7rem)`,
                  marginBottom: isMobile
                    ? `clamp(2rem, ${windowWidth * 0.01}px, 2rem)`
                    : `clamp(3rem, ${windowWidth * 0.015}px, 3.5rem)`,
                  lineHeight: 1.4,
                  hyphens: "none",
                }}
              >
                Think of me as{" "}
                <span className="accent-color font-semibold">
                  a one-man creative studio.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Navigation buttons - show different styles for mobile and desktop */}
      <div
        className={`${
          isMobile
            ? "absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-50 flex justify-between w-full max-w-sm px-4"
            : "absolute bottom-8 left-1/4 transform -translate-x-1/2 z-20 flex justify-between w-full max-w-xl"
        }`}
      >
        {isMobile ? (
          <div className="flex justify-between w-full">
            {/* First button - What I do */}
            <FadeIn delay={2.2}>
              <button
                onClick={scrollToPortfolio}
                className="secondary-bg primary-color font-montserrat text-sm font-semibold rounded-full px-4 py-2 shadow-md"
              >
                What I do
              </button>
            </FadeIn>

            {/* Second button - Recent Projects */}
            <FadeIn delay={2.3}>
              <button
                onClick={scrollToProjects}
                className="secondary-bg primary-color font-montserrat text-sm font-semibold rounded-full px-4 py-2 shadow-md"
              >
                Recent Projects
              </button>
            </FadeIn>

            {/* Third button - Let's Talk */}
            <FadeIn delay={2.4}>
              <button
                onClick={scrollToContact}
                className="secondary-bg primary-color font-montserrat text-sm font-semibold rounded-full px-4 py-2 shadow-md"
              >
                Let's Talk
              </button>
            </FadeIn>
          </div>
        ) : (
          <>
            {/* Desktop animated arrows */}
            <motion.div
              className="cursor-pointer flex-1 flex justify-center"
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
              <div className="flex flex-col items-center">
                <span className="font-montserrat text-sm font-thin mb-2 text-black">
                  What I do
                </span>
                <svg
                  width="60"
                  height="60"
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
              </div>
            </motion.div>

            <motion.div
              className="cursor-pointer flex-1 flex justify-center"
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
              onClick={scrollToProjects}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex flex-col items-center">
                <span className="font-montserrat text-sm font-thin mb-2 text-black">
                  Recent Projects
                </span>
                <svg
                  width="60"
                  height="60"
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
              </div>
            </motion.div>

            <motion.div
              className="cursor-pointer flex-1 flex justify-center"
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
                  delay: 0.4,
                },
              }}
              onClick={scrollToContact}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex flex-col items-center">
                <span className="font-montserrat text-sm font-thin mb-2 text-black">
                  Let's Work Together
                </span>
                <svg
                  width="60"
                  height="60"
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
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
