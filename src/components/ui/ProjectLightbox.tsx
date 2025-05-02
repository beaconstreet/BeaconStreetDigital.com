"use client";

import React from "react";
// import Image from "next/image";
import { Project } from "../../lib/projects";
import { motion } from "framer-motion";

interface ProjectLightboxProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectLightbox({
  project,
  isOpen,
  onClose,
}: ProjectLightboxProps) {
  if (!project || !isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-8 max-w-[1200px] w-full max-h-[90vh] overflow-auto relative text-black"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Sticky close button that stays visible when scrolling */}
        <div className="sticky top-0 right-0 z-10 flex justify-end">
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

        <div className="lightbox-content">
          {/* Two column layout: 30% left, 70% right */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Left column - 30% - Sticky */}
            <div className="md:w-[30%] md:sticky md:top-20 md:self-start">
              <div className="space-y-8">
                {/* Project Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide text-gray-700">
                    About the Project
                  </h3>
                  <p className="text-lg whitespace-pre-line">
                    {project.description}
                  </p>
                </div>

                {/* Tools Used (previously Services) */}
                {project.tools && project.tools.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide text-gray-700">
                      Tools Used
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {project.tools.map((tool, index) => (
                        <li key={index} className="text-lg">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Visit Project Button */}
                {project.url && (
                  <div className="pt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-3 bg-gray-500 text-white rounded hover-accent-bg transition-colors text-md"
                    >
                      Visit Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 rotate-315"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right column - 70% - Website/Video Assets */}
            <div className="md:w-[70%] bg-gray-100 p-6 rounded">
              {/* Website Assets */}
              {project.assets.website && project.assets.website.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-gray-700">
                    Website
                  </h4>
                  <div className="space-y-6">
                    {project.assets.website.map((url, index) => (
                      <div key={`website-${index}`} className="rounded">
                        <img
                          src={url}
                          alt={`Website view ${index + 1}`}
                          className="w-full h-auto rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Assets - Now handling YouTube embeds */}
              {project.assets.video && project.assets.video.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-gray-700">
                    Video
                  </h4>
                  <div className="space-y-6">
                    {project.assets.video.map((url, index) => (
                      <div
                        key={`video-${index}`}
                        className="rounded aspect-video relative overflow-hidden"
                      >
                        <iframe
                          src={url}
                          title={`YouTube video ${index + 1}`}
                          className="absolute inset-0 w-full h-full rounded"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Full width row for Digital Campaigns and Photography */}
          {(project.assets.digitalCampaigns?.length > 0 ||
            project.assets.photography?.length > 0) && (
            <div className="border-t pt-8">
              {/* Digital Campaign Assets */}
              {project.assets.digitalCampaigns &&
                project.assets.digitalCampaigns.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-gray-700">
                      Digital Campaigns
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.assets.digitalCampaigns.map((url, index) => (
                        <div key={`campaign-${index}`} className="rounded">
                          <img
                            src={url}
                            alt={`Campaign asset ${index + 1}`}
                            className="w-full h-auto rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Photography Assets */}
              {project.assets.photography &&
                project.assets.photography.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-gray-700">
                      Photography
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.assets.photography.map((url, index) => (
                        <div key={`photo-${index}`} className="rounded">
                          <img
                            src={url}
                            alt={`Photography asset ${index + 1}`}
                            className="w-full h-auto rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// interface AssetSectionProps {
//   title: string;
//   assets: string[];
//   isVideo?: boolean;
// }

// function AssetSection({ title, assets, isVideo = false }: AssetSectionProps) {
//   return (
//     <div className="mb-12">
//       <h4 className="text-xl font-semibold mb-4">{title}</h4>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {assets.map((asset, index) => (
//           <div key={index} className="w-full">
//             {isVideo ? (
//               <video src={asset} controls className="w-full h-auto" />
//             ) : (
//               <div className="relative aspect-video">
//                 <Image
//                   src={asset}
//                   alt={`${title} asset ${index + 1}`}
//                   fill
//                   style={{ objectFit: "cover" }}
//                   className="rounded"
//                 />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
