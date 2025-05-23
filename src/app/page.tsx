"use client";

import { useState, useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import ProjectLightbox from "@/components/ui/ProjectLightbox";
import { Project } from "@/lib/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to open the lightbox
  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear content after animation
  };

  // Check for scroll instruction on mount
  useEffect(() => {
    // Check if we need to scroll to portfolio section
    const shouldScrollToPortfolio =
      sessionStorage.getItem("scrollToPortfolio") === "true";

    if (shouldScrollToPortfolio) {
      // Clear the flag
      sessionStorage.removeItem("scrollToPortfolio");

      // Give time for the page to fully render
      setTimeout(() => {
        // Find the portfolio section
        const portfolioSection = document.getElementById("portfolio");
        if (portfolioSection) {
          // Scroll to the portfolio section
          portfolioSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Delay to ensure content is rendered
    } else if (window.location.hash === "#portfolio") {
      // Handle direct navigation with hash
      setTimeout(() => {
        const portfolioSection = document.getElementById("portfolio");
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, []);

  // Prevent body scrolling when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Add styles to prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Get the scroll position from body top
      const scrollY = document.body.style.top
        ? parseInt(document.body.style.top || "0") * -1
        : 0;

      // Remove styles that prevent scrolling
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Restore the scroll position
      window.scrollTo(0, scrollY);
    }
  }, [isLightboxOpen]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <section className="relative">
        <About />
      </section>

      {/* Portfolio Section */}
      <section className="relative">
        <Portfolio onCardClick={(project: Project) => openLightbox(project)} />
      </section>

      {/* Contact Section */}
      <section className="relative">
        <Contact />
      </section>

      {/* Use the ProjectLightbox component */}
      <ProjectLightbox
        project={selectedProject}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  );
}
