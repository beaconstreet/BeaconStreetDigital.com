"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectLightbox from "@/components/ui/ProjectLightbox";
import CaseStudyLightbox from "@/components/ui/CaseStudyLightbox";
import {
  getAllProjects,
  // getProjectById,
  filterProjectsByCategory,
  Project,
} from "../../lib/projects";

// Add type for the component props
interface PortfolioProps {
  onCardClick: (project: Project) => void; // Replace any with Project
}

// Add the type to your component
const Portfolio: React.FC<PortfolioProps> = ({ onCardClick }) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(
    getAllProjects()
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [, setIsAnimating] = useState(false);

  // Add state for case study lightbox
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(
    null
  );

  // Add state for mobile overlay
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  const [,] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Add a ref to the top of your Portfolio component
  const portfolioTopRef = useRef<HTMLDivElement>(null);

  // At the top of your component
  const sectionRef = useRef<HTMLElement>(null);

  // Calculate grid positions - updated for new aspect ratio and spacing
  const getGridPosition = (index: number) => {
    // For desktop view (2 columns)
    const column = index % 2;
    const row = Math.floor(index / 2);
    return {
      left: `calc(${column * 50}% + ${column * 5}px)`,
      top: `${row * (341 + 10)}px`, // 341px height + 10px total margin
    };
  };

  useEffect(() => {
    setIsAnimating(true);

    // Get all projects
    const projects = getAllProjects();
    setFilteredProjects(projects);

    // Allow time for animations to complete
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  useEffect(() => {
    console.log("Portfolio mounted");
  }, []);

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Add this function to close the case study lightbox
  const handleCloseCaseStudy = () => {
    setIsCaseStudyOpen(false);
    setActiveCaseStudyId(null);
  };

  // Add this new function to handle button clicks
  const handleButtonClick = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the parent div
    onCardClick(project);
  };

  // Update this function to handle case study button clicks
  const handleCaseStudyClick = (e: React.MouseEvent, caseStudyUrl: string) => {
    e.stopPropagation(); // Prevent the click from bubbling up

    // Check if this is the Strange Strength case study
    if (caseStudyUrl.includes("strange-strength")) {
      setActiveCaseStudyId("strange-strength");
      setIsCaseStudyOpen(true);
    } else {
      // For other case studies, open in a new tab
      window.open(caseStudyUrl, "_blank");
    }
  };

  // Create a separate handler for ProjectLightbox that doesn't need the event
  const handleCaseStudyFromLightbox = (caseStudyUrl: string) => {
    // Check if this is the Strange Strength case study
    if (caseStudyUrl.includes("strange-strength")) {
      setActiveCaseStudyId("strange-strength");
      setIsCaseStudyOpen(true);
    } else {
      // For other case studies, open in a new tab
      window.open(caseStudyUrl, "_blank");
    }
  };

  // Fix the image error handling types
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.src = "/path/to/fallback-image.jpg"; // Your fallback image path
    img.onerror = null; // Prevent infinite loop if fallback also fails
  };

  // Add handler for mobile card clicks
  const handleMobileCardClick = (projectId: string) => {
    if (activeMobileCard === projectId) {
      // If this card is already active, hide the overlay
      setActiveMobileCard(null);
    } else {
      // Show overlay for this card
      setActiveMobileCard(projectId);
    }
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen secondary-bg text-off-white py-14 md:py-24"
    >
      {/* Add this div at the very top of your section */}
      <div ref={portfolioTopRef}></div>

      <div className="mx-auto px-4 md:px-8 lg:px-12 max-w-none">
        {/* Section title - centered for both mobile and desktop */}
        <div className="mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-2 uppercase tracking-wider">
            <span className="text-gray-50">Recent</span>
            <span className="accent-color"> Projects</span>
          </h3>
        </div>

        {/* Full width portfolio grid */}
        <div className="w-full">
          {/* Desktop view: CSS Grid with 2 columns and 5px gap */}
          <div className="hidden md:grid md:grid-cols-2 gap-[5px]">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-gray-800 overflow-hidden relative group h-full"
                    style={{ aspectRatio: "550/341" }}
                  >
                    {project.thumbnail ? (
                      <img
                        src={
                          project.thumbnail.startsWith("/")
                            ? project.thumbnail
                            : `/${project.thumbnail}`
                        }
                        alt={project.title || "Portfolio project"}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-400">
                          No image available
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 accent-bg-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                      <h3 className="text-2xl uppercase font-semibold tertiary-text mb-2">
                        {project.title}
                      </h3>
                      {project.categories && project.categories.length > 0 && (
                        <p className="tertiary-text text-sm text-center w-[80%]">
                          {project.categories.join(", ")}
                        </p>
                      )}
                      <div className="flex flex-col gap-3 mt-4">
                        <button
                          onClick={(e) => handleButtonClick(e, project)}
                          className="px-4 py-2 border tertiary-border tertiary-text rounded text-sm hover-secondary-bg hover-primary-color transition-colors duration-200"
                        >
                          View Project
                        </button>
                        {project.caseStudyUrl && (
                          <button
                            onClick={(e) =>
                              handleCaseStudyClick(
                                e,
                                project.caseStudyUrl || ""
                              )
                            }
                            className="px-4 py-2 border tertiary-border tertiary-text rounded text-sm hover-secondary-bg hover-primary-color transition-colors duration-200"
                          >
                            View Case Study
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile view: 1 column grid with click-to-show overlay */}
          <div className="grid grid-cols-1 gap-[5px] md:hidden">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-800 overflow-hidden relative h-full cursor-pointer"
                style={{ aspectRatio: "550/341" }}
                onClick={() => handleMobileCardClick(project.id)}
              >
                {project.thumbnail ? (
                  <img
                    src={
                      project.thumbnail.startsWith("/")
                        ? project.thumbnail
                        : `/${project.thumbnail}`
                    }
                    alt={project.title || "Portfolio project"}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}

                {/* Overlay - show when card is active */}
                <div
                  className={`absolute inset-0 accent-bg-overlay transition-opacity duration-300 flex flex-col justify-center items-center p-4 ${
                    activeMobileCard === project.id
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-2xl tertiary-text uppercase font-semibold mb-2">
                    {project.title}
                  </h3>
                  {project.categories && project.categories.length > 0 && (
                    <p className="tertiary-text text-sm text-center w-[80%]">
                      {project.categories.join(", ")}
                    </p>
                  )}
                  <div className="flex flex-col gap-3 mt-4">
                    <button
                      onClick={(e) => handleButtonClick(e, project)}
                      disabled={activeMobileCard !== project.id}
                      className={`px-4 py-2 border tertiary-border tertiary-text rounded text-sm transition-colors duration-200 ${
                        activeMobileCard === project.id
                          ? "hover-secondary-bg hover-primary-color cursor-pointer"
                          : "cursor-default"
                      }`}
                    >
                      View Project
                    </button>
                    {project.caseStudyUrl && (
                      <button
                        onClick={(e) =>
                          handleCaseStudyClick(e, project.caseStudyUrl || "")
                        }
                        disabled={activeMobileCard !== project.id}
                        className={`px-4 py-2 border tertiary-border tertiary-text rounded text-sm transition-colors duration-200 ${
                          activeMobileCard === project.id
                            ? "hover-secondary-bg hover-primary-color cursor-pointer"
                            : "cursor-default"
                        }`}
                      >
                        View Case Study
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ProjectLightbox
        project={null}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onCaseStudyClick={(caseStudyUrl: string) => {
          handleCloseLightbox(); // Close the project lightbox first
          handleCaseStudyFromLightbox(caseStudyUrl); // Use the new handler
        }}
      />

      {/* Add the CaseStudyLightbox component */}
      <AnimatePresence>
        {isCaseStudyOpen && (
          <CaseStudyLightbox
            isOpen={isCaseStudyOpen}
            onClose={handleCloseCaseStudy}
            caseStudyId={activeCaseStudyId}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
