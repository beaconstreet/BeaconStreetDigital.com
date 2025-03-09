"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CategoryFilter from "../ui/CategoryFilter";
import ProjectCard from "../ui/ProjectCard";
import ProjectLightbox from "../ui/ProjectLightbox";
import {
  getAllProjects,
  getCategories,
  getProjectById,
  filterProjectsByCategory,
  Project,
} from "../../lib/projects";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(
    getAllProjects()
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [projectPositions, setProjectPositions] = useState<
    Map<string, { index: number; position: string }>
  >(new Map());

  const categories = getCategories();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Calculate grid positions
  const getGridPosition = (index: number) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    return {
      left: `calc(${column * 50}% + ${column * 5}px)`,
      top: `${row * (341 + 10)}px`,
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
      setFilteredProjects(filterProjectsByCategory(activeCategory));
      // Allow time for animations to complete
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    if (!isAnimating) {
      setActiveCategory(category);
    }
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

  return (
    <section ref={ref} className="min-h-screen bg-black text-off-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-10 gap-8"
        >
          {/* Category filter - 30% width */}
          <div className="md:col-span-3">
            <CategoryFilter
              categories={categories}
              onCategoryChange={handleCategoryChange}
              activeCategory={activeCategory}
            />
          </div>

          {/* Projects grid - 70% width */}
          <div className="md:col-span-7">
            <div
              className="relative w-full"
              style={{
                minHeight: `${
                  Math.ceil(filteredProjects.length / 2) * (341 + 10)
                }px`,
              }}
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => {
                  const { left, top } = getGridPosition(index);
                  const shouldAnimate = hasPositionChanged(project, index);

                  return (
                    <motion.div
                      key={project.id}
                      initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute w-[calc(50%-5px)]"
                      style={{ left, top }}
                    >
                      <ProjectCard
                        project={project}
                        onOpenProject={handleOpenProject}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      <ProjectLightbox
        project={selectedProject}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
      />
    </section>
  );
}
