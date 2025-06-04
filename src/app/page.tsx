"use client";

import { useState, useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import ProjectLightbox from "@/components/ui/ProjectLightbox";
import CaseStudyLightbox from "@/components/ui/CaseStudyLightbox";
import { Project } from "@/lib/projects";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(
    null
  );

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

  // Function to handle case study clicks from ProjectLightbox
  const handleCaseStudyClick = (caseStudyUrl: string) => {
    // Check if this is the Strange Strength case study
    if (caseStudyUrl.includes("strange-strength")) {
      setActiveCaseStudyId("strange-strength");
      setIsCaseStudyOpen(true);
    } else {
      // For other case studies, open in a new tab
      window.open(caseStudyUrl, "_blank");
    }
  };

  // Function to close the case study lightbox
  const closeCaseStudy = () => {
    setIsCaseStudyOpen(false);
    setTimeout(() => setActiveCaseStudyId(null), 300);
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
        onCaseStudyClick={handleCaseStudyClick}
      />

      {/* Add the CaseStudyLightbox component */}
      <AnimatePresence>
        {isCaseStudyOpen && (
          <CaseStudyLightbox
            isOpen={isCaseStudyOpen}
            onClose={closeCaseStudy}
            caseStudyId={activeCaseStudyId}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
