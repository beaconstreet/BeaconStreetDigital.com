"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: {
    id: string;
    title: string;
    categories: string[];
    thumbnail: string;
  };
  onOpenProject: (id: string) => void;
};

export default function ProjectCard({
  project,
  onOpenProject,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer w-full h-0 pb-[62%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenProject(project.id)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        style={{ objectFit: "cover" }}
      />

      <motion.div
        className="absolute inset-0 bg-black flex flex-col justify-center items-center p-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3
          className="text-xl md:text-2xl font-medium text-off-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {project.title}
        </motion.h3>

        <motion.div
          className="flex flex-wrap justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {project.categories.map((category, index) => (
            <React.Fragment key={category}>
              <span className="text-sm text-off-white opacity-80">
                {category}
              </span>
              {index < project.categories.length - 1 && (
                <span className="text-sm text-off-white opacity-60 mx-2">
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
