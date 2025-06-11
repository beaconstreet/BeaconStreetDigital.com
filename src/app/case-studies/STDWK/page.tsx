"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Add the interface for lightbox props
interface STDWKCaseStudyProps {
  isInLightbox?: boolean;
  onLightboxClose?: () => void;
}

// Component for text sections with consistent styling
interface TextSectionProps {
  children: React.ReactNode;
  className?: string;
}

const TextSection: React.FC<TextSectionProps> = ({ children, className }) => (
  <p
    className={clsx(
      "block leading-normal font-['Montserrat'] text-black",
      className
    )}
  >
    {children}
  </p>
);

// Component for bullet lists
const BulletList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc ml-9 space-y-2">{children}</ul>
);

// Component for list items
const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="leading-normal">{children}</li>
);

// Component for section headers
interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  className,
}) => (
  <div className={clsx("flex items-center justify-left p-2.5")}>
    <h3 className="font-['Tilt_Warp'] font-medium text-2xl text-black whitespace-nowrap">
      {children}
    </h3>
  </div>
);

// Main page component - update the function signature
export default function STDWKCaseStudy({
  isInLightbox = false,
  onLightboxClose,
}: STDWKCaseStudyProps) {
  const router = useRouter();

  const handleNavigateToPortfolio = () => {
    // Navigate to the homepage
    router.push("/");

    // Store in sessionStorage that we should scroll to portfolio
    sessionStorage.setItem("scrollToPortfolio", "true");
  };

  return (
    <div
      className="bg-white min-h-screen text-black"
      data-name="Desktop - Project - STDWK"
    >
      {/* Hero Section */}
      <section className="pt-0 pb-16 w-full">
        <div className="md:col-span-7 h-[70vh] overflow-hidden">
          <Image
            src="/projects/STDWK/STDWK-Case-Study-Images/ChildrensPlaygroundMockup.webp"
            width={700}
            height={400}
            alt="Children's Playground Mockup - STDWK Project Hero"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="md:col-span-5 px-6 pt-16 md:px-16 lg:px-24">
          <h1 className="text-4xl md:text-5xl mb-6 text-center font-['Tilt_Warp']">
            SH*T TO DO WITH KIDS
          </h1>
          <p className="text-base mb-6 w-[70vw] mx-auto font-['Montserrat']">
            Tired of hunting for ways to entertain our little humans each
            weekend, a friend and I built 'Sh*t To Do With Kids,' a hyper-local
            newsletter delivering at least 5 fresh activities straight to
            exhausted parents' inboxes. No endless scrolling, no clutter -- just
            curated, kid-approved fun around LA.
          </p>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="bg-[#29ABE2] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center text-white">
            <div className="p-6">
              <h3 className="font-['Tilt_Warp'] text-2xl mb-4">Project</h3>
              <p className="font-['Montserrat'] text-base">
                Sh*t To Do With Kids
                <br />
                Newsletter & Website
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-['Tilt_Warp'] text-2xl mb-4">Year</h3>
              <p className="font-['Montserrat'] text-base">2024 - 2025</p>
            </div>
            <div className="p-6">
              <h3 className="font-['Tilt_Warp'] text-2xl mb-4">Product</h3>
              <p className="font-['Montserrat'] text-base">
                Website landing page, Email newsletter backend, Social media
                post automation
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-['Tilt_Warp'] text-2xl mb-4">Role</h3>
              <p className="font-['Montserrat'] text-base">
                UX/UI Designer, Front-end & Software Engineer
              </p>
            </div>
            <div className="p-6">
              <h3 className="font-['Tilt_Warp'] text-2xl mb-4">Tools</h3>
              <p className="font-['Montserrat'] text-base">
                Figma, HTML/CSS, Python, OpenAI API, ConvertKit API
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem, Challenges, Goals Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem Column */}
            <div className="flex flex-col items-center ">
              <div className="relative h-[250px] w-full mb-6">
                <Image
                  src="/projects/STDWK/STDWK-Case-Study-Images/Icon_problem.webp"
                  alt="Problem Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <SectionHeader className="mb-6 w-full justify-center">
                The Problem
              </SectionHeader>
              <TextSection className="font-['Montserrat'] text-base">
                Parents needed a streamlined way to quickly discover fun, local
                activities without wasting precious weekend time combing through
                outdated blogs and cluttered Facebook groups.
              </TextSection>
            </div>

            {/* Challenges Column */}
            <div className="flex flex-col items-center md:mt-0 mt-12">
              <div className="relative h-[250px] w-full mb-6">
                <Image
                  src="/projects/STDWK/STDWK-Case-Study-Images/Icon_Challenges.webp"
                  alt="Challenges Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <SectionHeader className="mb-6 w-full justify-center">
                The Challenges
              </SectionHeader>
              <TextSection className="font-['Montserrat'] text-base">
                Design a visually engaging website for those exhausted parents,
                easy-to-use email newsletter template that effortlessly
                communicates key event details, while building a robust backend
                that leverages AI automation to scale efficiently across
                neighborhoods.
              </TextSection>
            </div>

            {/* Goals Column */}
            <div className="flex flex-col items-center md:mt-0 mt-12">
              <div className="relative h-[250px] w-full mb-6">
                <Image
                  src="/projects/STDWK/STDWK-Case-Study-Images/Icon_Goals.webp"
                  alt="Goals Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <SectionHeader className="mb-6 w-full justify-center">
                The Goals
              </SectionHeader>
              <div className="text-left w-full">
                <BulletList>
                  <ListItem>
                    Provide quick, bite-sized event recommendations.
                  </ListItem>
                  <ListItem>
                    Automate content creation packaging from a human-generated
                    and vetted list of events.
                  </ListItem>
                  <ListItem>
                    Deliver visually consistent, responsive emails across major
                    email clients.
                  </ListItem>
                </BulletList>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach Section */}
      <section className="bg-[#e6e6e6] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Tilt_Warp'] text-5xl text-[#181818] mb-8">
            DESIGN APPROACH
          </h2>
          <TextSection className="font-['Montserrat'] text-base mb-12 space-y-4">
            The design was intentionally no-nonsense: a simple landing page with
            clear, punchy hero text that immediately tells tired parents exactly
            what they're getting.
          </TextSection>

          {/* Lo-Fi Wireframes */}
          <SectionHeader className="mb-6">Lo-Fi Wireframes</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/LoFi - 2.webp"
                alt="Lo-Fi Wireframe 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/LoFi - 3.webp"
                alt="Lo-Fi Wireframe 3"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-4">
            <div className="relative w-full aspect-[4/3] md:col-span-4">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/LoFi - 1.webp"
                alt="Lo-Fi Wireframe 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full md:col-span-1 mb-8 md:mb-0">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/iPhone 16 Pro - 2.webp"
                alt="Mobile Mockup Wireframe 1"
                fill
                className="rounded"
              />
            </div>
          </div>

          {/* Style Guide Section */}
          <SectionHeader className="mb-6 mt-12">Stylesheet</SectionHeader>
          <div className="max-w-7xl mx-auto bg-[#fefefe] p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Logos */}
              <div>
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                  <img
                    src="/projects/STDWK/STDWK-Case-Study-Images/STDWK_logo1-small.png"
                    alt="STDWK Logo 1"
                    className="w-1/5"
                  />
                  <img
                    src="/projects/STDWK/STDWK-Case-Study-Images/STDWK_logo2-small.png"
                    alt="STDWK Logo 2"
                    className="w-1/5"
                  />
                  <img
                    src="/projects/STDWK/STDWK-Case-Study-Images/STDWK_logo3-small.png"
                    alt="STDWK Logo 3"
                    className="w-1/5"
                  />
                  <img
                    src="/projects/STDWK/STDWK-Case-Study-Images/STDWK_logo4-small.png"
                    alt="STDWK Logo 4"
                    className="w-1/5"
                  />
                </div>

                {/* Colors */}
                <div className="flex items-center mb-8">
                  <h3 className="font-['Tilt_Warp'] text-base mr-4 uppercase">
                    Colors
                  </h3>
                  <div className="flex-1 h-px bg-[#29abe2]"></div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 justify-items-center mb-8">
                  <div className="text-center w-full">
                    <div className="w-full aspect-square bg-[#29abe2] rounded mb-2"></div>
                    <p className="font-['Montserrat'] font-medium text-xs">
                      #29ABE2
                    </p>
                  </div>
                  <div className="text-center w-full">
                    <div className="w-full aspect-square bg-[#9ae1ff] rounded mb-2"></div>
                    <p className="font-['Montserrat'] font-medium text-xs">
                      #9AE1FF
                    </p>
                  </div>
                  <div className="text-center w-full">
                    <div className="w-full aspect-square bg-gradient-to-b from-[#2794c2] to-[#43c7ff] rounded mb-2"></div>
                    <p className="font-['Montserrat'] font-medium text-xs leading-tight">
                      #2794C2 - #43C7FF
                    </p>
                  </div>
                  <div className="text-center w-full">
                    <div className="w-full aspect-square bg-[#181818] rounded mb-2"></div>
                    <p className="font-['Montserrat'] font-medium text-xs">
                      #181818
                    </p>
                  </div>
                  <div className="text-center w-full">
                    <div className="w-full aspect-square bg-[#fefefe] border border-black rounded mb-2"></div>
                    <p className="font-['Montserrat'] font-medium text-xs">
                      #FEFEFE
                    </p>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div>
                <div className="flex items-center mb-8">
                  <h3 className="font-['Tilt_Warp'] text-base mr-4 uppercase">
                    Typography
                  </h3>
                  <div className="flex-1 h-px bg-[#29abe2]"></div>
                </div>
                <div className="space-y-8 text-xxs break-words lg:text-xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-2 items-start">
                    <div className="md:col-span-1">
                      <h4 className="font-['Tilt_Warp'] text-xl md:mb-2 mb-0">
                        Tilt Warp
                      </h4>
                      <p className="font-['Helvetica_Neue'] text-base md:mb-2 mb-0 text-[#29abe2]">
                        Logo, Landing Page headers
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="font-['Tilt_Warp'] md:text-lg break-all">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        <br />
                        abcdefghijklmnopqrstuvwxyz
                        <br />
                        123456789
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-2 items-start">
                    <div className="md:col-span-1">
                      <h4 className="font-['Montserrat'] font-medium text-xl md:mb-2 mb-0">
                        Montserrat
                      </h4>
                      <p className="font-['Helvetica_Neue'] text-base text-[#29abe2]">
                        Landing Page body, form placeholders
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="font-['Montserrat'] md:text-lg text-sm break-all">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        <br />
                        abcdefghijklmnopqrstuvwxyz
                        <br />
                        123456789
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-2 items-start">
                    <div className="md:col-span-1">
                      <h4 className="font-['Helvetica'] text-xl md:mb-2 mb-0">
                        Helvetica
                      </h4>
                      <p className="font-['Helvetica_Neue'] text-base text-[#29abe2]">
                        Newsletter
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="font-['Helvetica'] md:text-lg text-sm break-all">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        <br />
                        abcdefghijklmnopqrstuvwxyz
                        <br />
                        123456789
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prototypes Section */}
        <div className="pt-16 max-w-7xl mx-auto">
          <SectionHeader>Prototypes</SectionHeader>
          <TextSection className="text-base p-2.5">
            On mobile, I played around with rounded-corner cards at first, but
            ended up ditching them to squeeze every pixel out of the tiny screen
            space—no fluff, no wasted borders, just easy scrolling.
          </TextSection>
          {/* Desktop Design */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/Desktop - Final.webp"
                alt="Desktop Final Design"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/Desktop - Final-2.webp"
                alt="Desktop Final Design"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile Designs */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-4 mb-4 md:mb-12">
            <div className="relative md:h-[932px] aspect-[9/16] w-full">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/Mobile 1.webp"
                alt="Mobile Design 1"
                fill
                className="object-contain w-1/2"
              />
            </div>
            <div className="relative md:h-[930px] aspect-[9/16] w-full">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/Mobile 3.webp"
                alt="Mobile Design 3"
                fill
                className="object-contain w-1/2"
              />
            </div>
            <div className="relative md:h-[930px] aspect-[9/16] w-full">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/Mobile 2.webp"
                alt="Mobile Design 3"
                fill
                className="object-contain w-1/2"
              />
            </div>
            <div className="relative md:h-[930px] aspect-[9/16] w-full">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/Mobile - Final.webp"
                alt="Mobile Final Design"
                fill
                className="object-contain w-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Code Illustration */}
          <div className="relative aspect-[19/9] w-full mb-0">
            <Image
              src="/projects/STDWK/STDWK-Case-Study-Images/PythonGlitch.webp"
              alt="Python Code Glitch Illustration"
              fill
              className="object-contain rounded"
            />
          </div>
          <div>
            <p className="font-['Montserrat'] italic text-sm mb-16 p-2.5">
              Glitched out illustration of the actual code. Wanna see the whole
              thing? It's on my{" "}
              <a
                href="https://github.com/beaconstreet/STDWK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github
              </a>
              .
            </p>
          </div>

          {/* Engineering and Automation Section Header */}
          <h2 className="font-['Tilt_Warp'] text-5xl mb-8">
            ENGINEERING AND AUTOMATION
          </h2>

          <div className="font-['Montserrat'] text-base md:mb-12 mb-0 space-y-6">
            <p>
              To eliminate repetitive, manual formatting, I built a Python
              backend. It takes our spreadsheet of weekly events and formats it
              for both social posts and newsletters.
            </p>
            <p>
              Social-poster.py utilizes the Python Imaging Library (PIL) is
              utilized to overlay location-specific templates onto generated AI
              images. After the images are generated, they are piped into a
              output folder, and the copy for the posting is saved to a
              spreadsheet along with the image file URL. This spreadsheet is
              linked to Zapier to access Buffer for a scheduled post to
              Instagram.
            </p>
            <p>
              After Social-poster.py is done, Newsletter-writer.py runs using
              the updated image URL's from social-poster, formatting the
              newsletter based on a custom template, and pushed to ConvertKit
              via API for newsletter distribution.
            </p>
          </div>

          {/* Engineering Flow Diagram */}
          <div className="relative aspect-[14/9] w-full my-8">
            <Image
              src="/projects/STDWK/STDWK-Case-Study-Images/STDWK - Engineering flow.webp"
              alt="STDWK Engineering Flow Diagram"
              fill
              className="object-contain rounded"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-20">
            <div className="col-span-1">
              <SectionHeader className=" mb-6">Tech Stack</SectionHeader>
              <BulletList>
                <ListItem>Python</ListItem>
                <ListItem>HTML/CSS</ListItem>
                <ListItem>ConvertKit API</ListItem>
                <ListItem>OpenAI API</ListItem>
              </BulletList>
            </div>

            <div className="col-span-1">
              <SectionHeader className="mb-6">
                Tackling Email Compatibility
              </SectionHeader>
              <TextSection className="font-['Montserrat'] text-base mb-8 max-w-4xl p-2.5">
                Email HTML notoriously demands meticulous styling to reliably
                render across email clients, each imposing its own quirks.
                ConvertKit, like many services, not only strips out external and
                embedded stylesheets, but also inline CSS! After extensive
                testing, To address this, I embedded my styling into header
                styles that were already whitelisted styles to be able to style
                directly from the python script to the API.
              </TextSection>
            </div>
          </div>
        </div>
      </section>

      {/* Final Designs Showcase */}
      <section className="bg-[#1c1c1c] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Tilt_Warp'] text-5xl text-white mb-8">
            FINAL DESIGNS
          </h2>
          <TextSection className="font-['Montserrat'] text-base text-white mb-12 max-w-4xl">
            The final product is colorful yet clean, playful yet practical --
            exactly what tired parents need when planning family time. Emojis
            add personality, clearly structured sections offer at-a-glance
            information, and consistent visual elements build a recognizable,
            trusted brand.
          </TextSection>

          {/* Mockups Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-0 lg:mb-8 mb-24">
            <div className="relative lg:aspect-[4/3] aspect-[4/3] w-full">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/STDWK_mobile_Mockup.webp"
                alt="iPhone Mobile Mockup"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="relative lg:aspect-[4/3] aspect-[16/9] w-full">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/STDWK_desktop_Mockup.webp"
                alt="MacBook Desktop Mockup"
                fill
                className="object-contain rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-24">
            <div className="relative lg:aspect-[4/3] aspect-[4/3] w-full">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/STDWK_desktopMail_Mockup.webp"
                alt="Desktop Email Newsletter Sample"
                fill
                className="object-contain rounded"
              />
            </div>
            <div className="relative lg:aspect-[4/3] aspect-[16/9] w-full">
              <Image
                src="/projects/STDWK/STDWK-Case-Study-Images/STDWK_2_iphones_mockup.webp"
                alt="Mobile Email Newsletter Sample"
                fill
                className="object-contain rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Delivery & Takeaways */}
      <section className="py-16 px-4">
        {/* Museum Mockup */}

        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] w-full mb-16">
            <Image
              src="/projects/STDWK/STDWK-Case-Study-Images/MuseumMockup.webp"
              alt="Museum Display Mockup"
              fill
              className="object-contain rounded"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-['Tilt_Warp'] text-5xl mb-8">
                FINAL DELIVERY
              </h2>
              <TextSection className="font-['Montserrat'] text-base">
                Since launch, STDWK has steadily grown its subscriber base,
                fueled entirely by word-of-mouth and consistent social media
                posts. Feedback consistently mentions how quick, effortless, and
                useful the newsletter is, with open rates at 70-80% for most of
                the neighborhoods.
              </TextSection>
            </div>
            <div>
              <h2 className="font-['Tilt_Warp'] text-5xl mb-8">TAKEAWAYS</h2>
              <TextSection className="font-['Montserrat'] text-base whitespace-pre-wrap">
                Automating content creation was transformative in streamlining
                workflow. While we still need to source and vet events for
                appropriateness for age group, location, and quality, we were
                able to cut down on hours of manual labor for putting out five
                newsletters and ~25 social posts weekly. I also gained mad
                respect for developers battling email quirks daily. Most
                rewarding, though, was watching a simple idea resonate so deeply
                with other exhausted parents.
              </TextSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="font-['Tilt_Warp'] text-4xl md:text-5xl mb-8">
          EXPLORE MORE PROJECTS
        </h2>

        {/* Conditional rendering for the button/link */}
        {isInLightbox ? (
          <button
            onClick={onLightboxClose}
            className="inline-flex items-center px-8 py-3 bg-[#29ABE2] text-white rounded font-bold text-lg hover:bg-[#2794c2] transition-colors"
          >
            Back to Portfolio
          </button>
        ) : (
          <button
            onClick={handleNavigateToPortfolio}
            className="inline-flex items-center px-8 py-3 bg-[#29ABE2] text-white rounded font-bold text-lg hover:bg-[#2794c2] transition-colors"
          >
            Back to Portfolio
          </button>
        )}
      </section>
    </div>
  );
}
