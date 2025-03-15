"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import ProjectLightbox from "@/components/ui/ProjectLightbox";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // First transition (white to black)
  const blackOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Second transition (black to white)
  const whiteOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  // Create a conditional pointer-events value based on opacity
  const contactPointerEvents = useTransform(whiteOpacity, (value) =>
    value > 0.5 ? "auto" : "none"
  );

  // Function to open the lightbox
  const openLightbox = (project: any) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear content after animation
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section - Make it fixed */}
      <div className="fixed inset-0 z-0">
        <Hero />
      </div>

      {/* Black overlay for first transition */}
      <motion.div
        className="fixed inset-0 bg-black z-10 pointer-events-none"
        style={{ opacity: blackOpacity }}
      />

      {/* Portfolio Section - Position it absolutely and give it a higher z-index */}
      <div className="relative z-20" style={{ marginTop: windowHeight }}>
        <div className="bg-black">
          <Portfolio onCardClick={openLightbox} />
        </div>
      </div>

      {/* Contact Section - Fixed position with higher z-index */}
      <div
        className="relative"
        style={{
          marginTop: windowHeight,
          height: windowHeight,
        }}
      >
        {/* This empty div creates space for scrolling */}
      </div>

      {/* Fixed Contact section that appears with the white overlay */}
      <motion.div
        className="fixed inset-0 z-40"
        style={{
          opacity: whiteOpacity,
          pointerEvents: contactPointerEvents,
        }}
      >
        <Contact />
      </motion.div>

      {/* Use the ProjectLightbox component */}
      <ProjectLightbox
        project={selectedProject}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  );
}
