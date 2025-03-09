"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Project } from "../../lib/projects";

type ProjectLightboxProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectLightbox({
  project,
  isOpen,
  onClose,
}: ProjectLightboxProps) {
  if (!project) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-90" />
          </Transition.Child>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 text-off-white hover:text-primary"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-6xl my-16 text-left align-middle transition-all transform bg-black text-off-white p-8 rounded-lg">
              <Dialog.Title as="h3" className="text-3xl font-bold mb-6">
                {project.title}
              </Dialog.Title>

              {/* Top grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-xl font-semibold mb-4">
                    ABOUT THE PROJECT
                  </h4>
                  <p className="mb-6">{project.description}</p>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-primary text-secondary font-medium rounded hover:bg-opacity-90 transition-colors"
                    >
                      Visit Project
                    </a>
                  )}
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">SERVICES</h4>
                  <ul className="space-y-2">
                    {project.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Asset sections */}
              {project.assets.website?.length > 0 && (
                <AssetSection title="WEBSITE" assets={project.assets.website} />
              )}

              {project.assets.video?.length > 0 && (
                <AssetSection
                  title="VIDEO"
                  assets={project.assets.video}
                  isVideo
                />
              )}

              {project.assets.digitalCampaigns?.length > 0 && (
                <AssetSection
                  title="DIGITAL CAMPAIGNS"
                  assets={project.assets.digitalCampaigns}
                />
              )}

              {project.assets.photography?.length > 0 && (
                <AssetSection
                  title="PHOTOGRAPHY"
                  assets={project.assets.photography}
                />
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

interface AssetSectionProps {
  title: string;
  assets: string[];
  isVideo?: boolean;
}

function AssetSection({ title, assets, isVideo = false }: AssetSectionProps) {
  return (
    <div className="mb-12">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assets.map((asset, index) => (
          <div key={index} className="w-full">
            {isVideo ? (
              <video src={asset} controls className="w-full h-auto" />
            ) : (
              <div className="relative aspect-video">
                <Image
                  src={asset}
                  alt={`${title} asset ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
