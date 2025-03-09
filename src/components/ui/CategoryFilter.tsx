"use client";

import React from "react";
import { motion } from "framer-motion";

type CategoryFilterProps = {
  categories: string[];
  onCategoryChange: (category: string) => void;
  activeCategory: string;
};

export default function CategoryFilter({
  categories,
  onCategoryChange,
  activeCategory,
}: CategoryFilterProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-off-white mb-6">Projects</h2>
      <ul className="space-y-3">
        <li>
          <button
            onClick={() => onCategoryChange("All Projects")}
            className={`text-lg ${
              activeCategory === "All Projects"
                ? "text-primary font-medium"
                : "text-off-white opacity-70 hover:opacity-100"
            }`}
          >
            All Projects
            {activeCategory === "All Projects" && (
              <motion.div
                className="h-0.5 bg-primary mt-1"
                layoutId="categoryIndicator"
              />
            )}
          </button>
        </li>

        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className={`text-lg ${
                activeCategory === category
                  ? "text-primary font-medium"
                  : "text-off-white opacity-70 hover:opacity-100"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  className="h-0.5 bg-primary mt-1"
                  layoutId="categoryIndicator"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
