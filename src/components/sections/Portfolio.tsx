"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CategoryFilter from "../ui/CategoryFilter";
import ProjectCard from "../ui/ProjectCard";
import ProjectLightbox from "@/components/ui/ProjectLightbox";
import {
  getAllProjects,
  getCategories,
  getProjectById,
  filterProjectsByCategory,
  Project,
} from "../../lib/projects";

// Add type for the component props
interface PortfolioProps {
  onCardClick: (project: any) => void; // Replace 'any' with your project type if available
}

// Add the type to your component
const Portfolio: React.FC<PortfolioProps> = ({ onCardClick }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(
    getAllProjects()
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [projectPositions, setProjectPositions] = useState<
    Map<string, { index: number; position: string }>
  >(new Map());

  const categories = ["All", "Website", "Social", "E-commerce", "Video"];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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

  // Track which projects stay in the same position
  useEffect(() => {
    const newPositions = new Map();

    filteredProjects.forEach((project, index) => {
      const position = JSON.stringify(getGridPosition(index));
      newPositions.set(project.id, { index, position });
    });

    setProjectPositions(newPositions);
  }, [filteredProjects]);

  useEffect(() => {
    setIsAnimating(true);

    // Use a timeout to delay the actual filtering
    const timer = setTimeout(() => {
      // If category is "All", get all projects instead of filtering
      const projects =
        activeCategory === "All"
          ? getAllProjects()
          : filterProjectsByCategory(activeCategory);

      setFilteredProjects(projects);
      // Allow time for animations to complete
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  useEffect(() => {
    console.log("Portfolio mounted");
  }, []);

  // Fix the category parameter type
  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    // Your filtering logic here
  };

  const handleOpenProject = (id: string) => {
    const project = getProjectById(id);
    if (project) {
      setSelectedProject(project);
      setIsLightboxOpen(true);
    }
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Check if a project's position has changed
  const hasPositionChanged = (project: Project, currentIndex: number) => {
    const oldData = projectPositions.get(project.id);
    if (!oldData) return true; // New project

    const newPosition = JSON.stringify(getGridPosition(currentIndex));
    return oldData.position !== newPosition;
  };

  // Fix the item parameter type
  const handleItemClick = (item: any) => {
    // Replace 'any' with your item type if available
    // Pass the entire item object to the openLightbox function
    onCardClick(item);
  };

  // Fix the image error handling types
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.src = "/path/to/fallback-image.jpg"; // Your fallback image path
    img.onerror = null; // Prevent infinite loop if fallback also fails
  };

  return (
    <section ref={ref} className="min-h-screen bg-black text-off-white py-24">
      <div className="mx-auto pl-4 pr-0 max-w-none">
        {" "}
        {/* Removed right padding on md+ screens */}
        {/* Mobile view: Category filters horizontal */}
        <div className="md:hidden mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`py-2 px-3 transition-all duration-300 ${
                  activeCategory === category
                    ? "text-gray-300 font-medium"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Left sidebar with vertical category list - 30% width */}
          <div className="hidden md:block md:w-[30%]">
            <div className="sticky top-8 pr-12 pl-12">
              <h3 className="text-4xl font-montserrat font-bold mb-10 uppercase tracking-wider">
                <span className="text-gray-50">Recent</span>
                <span className="accent-color"> Projects</span>
              </h3>

              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category} className="relative">
                    <button
                      onClick={() => handleCategoryFilter(category)}
                      className={`text-left text-xl font-light tracking-wide uppercase w-full py-2 group transition-all duration-300 flex items-center ${
                        activeCategory === category
                          ? "text-gray-300 font-medium"
                          : "text-gray-500 hover-accent-color"
                      }`}
                    >
                      <span className="relative inline-block transition-transform group-hover:translate-x-2">
                        {category}
                      </span>

                      {/* Static arrow for active category */}
                      {activeCategory === category && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 text-gray-400"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      )}

                      {/* Bouncing arrow that appears only on hover for non-active items */}
                      {activeCategory !== category && (
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{
                              x: [0, 5, 0],
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
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side with portfolio grid - 70% width */}
          <div className="w-full md:w-[70%] md:pr-0">
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
                      className="bg-gray-800 overflow-hidden cursor-pointer relative group h-full"
                      onClick={() => handleItemClick(project)}
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
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                        <h3 className="text-xl font-semibold text-gray-200 mb-2">
                          {project.title}
                        </h3>
                        {project.categories &&
                          project.categories.length > 0 && (
                            <p className="text-gray-300">
                              {project.categories.join(", ")}
                            </p>
                          )}
                        <span className="mt-4 px-4 py-2 border border-gray-400 text-gray-200 rounded text-sm">
                          View Project
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Mobile view: 1 column grid */}
            <div className="grid grid-cols-1 gap-[5px] md:hidden">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-gray-800 overflow-hidden cursor-pointer relative group h-full"
                  onClick={() => handleItemClick(project)}
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
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">
                      {project.title}
                    </h3>
                    {project.categories && project.categories.length > 0 && (
                      <p className="text-gray-300">
                        {project.categories.join(", ")}
                      </p>
                    )}
                    <span className="mt-4 px-4 py-2 border border-gray-400 text-gray-200 rounded-full text-sm">
                      View Project
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectLightbox
        project={selectedProject}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
      />
    </section>
  );
};

export default Portfolio;
