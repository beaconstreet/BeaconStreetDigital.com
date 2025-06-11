"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import the case study components
const StrangeCaseStudy = dynamic(
  () => import("@/app/case-studies/strange-strength/page"),
  { ssr: false }
);

const STDWKCaseStudy = dynamic(() => import("@/app/case-studies/STDWK/page"), {
  ssr: false,
});

interface CaseStudyLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudyId: string | null;
}

export default function CaseStudyLightbox({
  isOpen,
  onClose,
  caseStudyId,
}: CaseStudyLightboxProps) {
  // Add useEffect for body scroll locking
  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Add styles to body to prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";

      // Cleanup function to restore scrolling when component unmounts or lightbox closes
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflowY = "";

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen || !caseStudyId) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-0 max-w-[1200px] w-full max-h-[95vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Sticky close button that stays visible when scrolling */}
        <div className="sticky top-10 right-10 z-10 flex justify-end mr-5">
          <button
            className="p-2 text-gray-800 hover-accent-color transition-colors duration-300 bg-white/80 backdrop-blur-sm rounded-full shadow-md"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-md"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="case-study-content">
          {caseStudyId === "strange-strength" && (
            <StrangeCaseStudy isInLightbox={true} onLightboxClose={onClose} />
          )}
          {caseStudyId === "STDWK" && (
            <STDWKCaseStudy isInLightbox={true} onLightboxClose={onClose} />
          )}
          {/* Add more case studies as needed with additional conditions */}
        </div>
      </motion.div>
    </motion.div>
  );
}
