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
  const [imageHeight, setImageHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Get initial window width
    setWindowWidth(window.innerWidth);
    // Set initial mobile state
    setIsMobile(window.innerWidth < 1200); // Consider screens < 1200px as mobile

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
      setIsMobile(width < 1200); // Update mobile state on resize (now 1200px)
      handleImageLoad();
    };

    // Add event listeners
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation for clouds
  useEffect(() => {
    if (
      !cloud1Ref.current ||
      !cloud2Ref.current ||
      !duplicateCloud1Ref.current ||
      !duplicateCloud2Ref.current ||
      !windowWidth ||
      !imageHeight
    )
      return;

    const cloudWidth = windowWidth * 0.3; // For cloud 1
    const cloud2Width = windowWidth * 0.15; // For cloud 2 (smaller)

    // Initialize positions - start all clouds off-screen
    cloud1Ref.current.style.right = `300px`; // Cloud 1 starts partway on screen
    cloud2Ref.current.style.right = `0px`; // Cloud 2 starts on screen
    duplicateCloud1Ref.current.style.right = `-${cloudWidth}px`; // Duplicate 1 starts off-screen
    duplicateCloud2Ref.current.style.right = `-${cloud2Width}px`; // Duplicate 2 starts off-screen

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
      // First set of animations
      const cloud1Animation = createCloudAnimation(
        cloud1Ref.current!,
        "300px",
        `${windowWidth + cloudWidth}px`,
        100000
      );

      // Cloud 2 animation starts immediately
      const cloud2Animation = createCloudAnimation(
        cloud2Ref.current!,
        "0px",
        `${windowWidth + cloud2Width}px`,
        120000
      );

      // After 30 seconds, start duplicate cloud 1
      setTimeout(() => {
        const duplicateCloud1Animation = createCloudAnimation(
          duplicateCloud1Ref.current!,
          `-${cloudWidth}px`,
          `${windowWidth + cloudWidth}px`,
          100000
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
      }, 10000); // Start duplicate after 30 seconds

      // After 30 seconds, start duplicate cloud 2
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
      }, 30000); // Start duplicate after 30 seconds
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

  return (
    <div
      className={`relative ${
        isMobile ? "flex flex-col" : "min-h-screen flex items-center"
      }`}
    >
      {/* Background image */}
      <div
        className={`${
          isMobile ? "relative h-[50vh]" : "absolute inset-0"
        } z-0 overflow-hidden`}
      >
        <Image
          src="/backgrounds/Man-urban-cityscape_Wide1_noClouds.png"
          alt="Man in urban cityscape with a Beacon Street billboard behind him"
          fill
          sizes="100vw"
          priority
          className="object-cover background-image"
          style={{
            objectPosition: isMobile ? "100% 0%" : "90% 0%", // Right-aligned
            objectFit: "cover",
            transform: isMobile ? "scale(1.2)" : "none", // Zoom in for mobile
            transformOrigin: "right top", // Scale from the right side
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
              src="/backgrounds/cloud1.png"
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
              src="/backgrounds/cloud1.png"
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
              src="/backgrounds/cloud2.png"
              alt="Cloud"
              fill
              sizes="20vw" // Updated to match new width
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
              src="/backgrounds/cloud2.png"
              alt="Cloud"
              fill
              sizes="20vw" // Updated to match new width
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* White overlay - left side (desktop only) or full width (mobile) */}
      {!isMobile ? (
        <div className="absolute inset-y-0 left-0 w-[50%] z-20 primary-bg" />
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
          height: isMobile ? "50vh" : "auto",
        }}
      >
        <div
          className={`relative ${
            isMobile ? "h-full flex items-center" : "w-full"
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

      {/* Clickable scroll indicator (arrow) - show on both mobile and desktop */}
      <motion.div
        className={`${
          isMobile
            ? "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer sm:bottom-4"
            : "absolute bottom-8 left-1/4 transform -translate-x-1/2 z-20 cursor-pointer"
        }`}
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
        <svg
          width={isMobile ? "38" : "60"}
          height={isMobile ? "38" : "60"}
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
    </div>
  );
}
