"use client";

import { useState, useEffect } from "react";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import ProjectLightbox from "@/components/ui/ProjectLightbox";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

      {/* Portfolio Section */}
      <section className="relative">
        <Portfolio onCardClick={openLightbox} />
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
