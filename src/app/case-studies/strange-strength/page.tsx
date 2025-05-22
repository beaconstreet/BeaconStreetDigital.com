"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface StrangeCaseStudyProps {
  isInLightbox?: boolean;
  onLightboxClose?: () => void;
}

export default function StrangeCaseStudy({
  isInLightbox = false,
  onLightboxClose,
}: StrangeCaseStudyProps) {
  return (
    <main className="min-h-screen strange-light-bg strange-dark-text">
      {/* Header Section with Mobile Mockups */}
      <section className="pt-0 pb-16 w-full">
        <div className="md:col-span-7 h-[70vh] overflow-hidden">
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Mockup_iphone15spread.png"
            width={700}
            height={400}
            alt="Strange Strength mobile screens"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="md:col-span-5 px-6 pt-16 md:px-16 lg:px-24">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            style={{ fontFamily: "var(--font-pragmatica-extended)" }}
          >
            STRANGE STRENGTH
          </h1>
          <p
            className="text-base mb-6 w-[70vw] mx-auto"
            style={{ fontFamily: "Helvetica Neue, sans-serif" }}
          >
            Strange Strength and Conditioning is a top gym in Los Angeles.
            Originally a Crossfit affiliate, it has expanded to include many
            different types of workouts including Hyrox and Olympic
            Weightlifting. It still maintains its roots in the Crossfit world,
            having sent multiple members to the elite Crossfit Games. The gym is
            not just for top athletes though, it is a community for weekend
            warriors, busy professionals and parents trying to squeeze a workout
            in their packed schedule, fitness enthusiasts looking to get sweaty,
            and even older folks trying to stay in shape for their grandkids.
          </p>
        </div>
      </section>

      {/* Laptop Mockup Section */}
      <section className="pt-0 w-full">
        <div className="md:col-span-7 h-[80vh] overflow-hidden">
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Strange_Desktop_MacbookAir.webp"
            width={2000}
            height={1048}
            alt="Strange Strength website on laptop"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="bg-black text-white py-16">
        <div className="px-6 md:px-16 lg:px-24">
          {/* Desktop view: grid with 5 columns */}
          <div className="hidden md:grid md:grid-cols-5 md:gap-4">
            {/* Headers */}
            <div className="col-span-1 text-center">
              <h3
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                Project
              </h3>
            </div>
            <div className="col-span-1 text-center">
              <h3
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                Year
              </h3>
            </div>
            <div className="col-span-1 text-center">
              <h3
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                Product
              </h3>
            </div>
            <div className="col-span-1 text-center">
              <h3
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                Role
              </h3>
            </div>
            <div className="col-span-1 text-center">
              <h3
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                Tools
              </h3>
            </div>

            {/* Content */}
            <div className="col-span-1 text-center">
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                Strange Strength Website
                <br />
                Redesign
              </p>
            </div>
            <div className="col-span-1 text-center">
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                2023
              </p>
            </div>
            <div className="col-span-1 text-center">
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                StrangeStrength.us
              </p>
            </div>
            <div className="col-span-1 text-center">
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                UX/UI, Visual Designer
              </p>
            </div>
            <div className="col-span-1 text-center">
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-pragmatica-extended)" }}
              >
                Figma, CSS, Adobe Premiere,
                <br />
                Squarespace
              </p>
            </div>
          </div>

          {/* Mobile view: headers on left, content on right */}
          <div className="md:hidden space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 text-right flex items-center justify-end">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Project
                </h3>
              </div>
              <div className="col-span-1 flex items-center">
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Strange Strength Website
                  <br />
                  Redesign
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 text-right flex items-center justify-end">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Year
                </h3>
              </div>
              <div className="col-span-1 flex items-center">
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  2023
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 text-right flex items-center justify-end">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Product
                </h3>
              </div>
              <div className="col-span-1 flex items-center">
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  StrangeStrength.us
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 text-right flex items-center justify-end">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Role
                </h3>
              </div>
              <div className="col-span-1 flex items-center">
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  UX/UI, Visual Designer
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 text-right flex items-center justify-end">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Tools
                </h3>
              </div>
              <div className="col-span-1 flex items-center">
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Figma, CSS, Adobe Premiere,
                  <br />
                  Squarespace
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        {/* Desktop layout - grid with 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-8">
          {/* Row 1 - Images */}
          <div className="text-center col-span-1 flex items-end justify-center">
            <Image
              src="/projects/Strange/StrangeCaseStudyImages/ProblemIcon1 1.png"
              width={205}
              height={100}
              alt="Problem Icon"
              className="mx-auto"
            />
          </div>
          <div className="text-center col-span-1 flex items-end justify-center">
            <Image
              src="/projects/Strange/StrangeCaseStudyImages/ChallengesIcon1 1.png"
              width={100}
              height={100}
              alt="Challenges Icon"
              className="mx-auto"
            />
          </div>
          <div className="text-center col-span-1 flex items-end justify-center">
            <Image
              src="/projects/Strange/StrangeCaseStudyImages/GoalsIcons2 1.png"
              width={150}
              height={100}
              alt="Goals Icon"
              className="mx-auto"
            />
          </div>

          {/* Row 2 - Headings and Text */}
          <div className="text-center col-span-1">
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-pragmatica-extended)" }}
            >
              The Problem
            </h3>
            <p
              className="text-base"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Strange Strength's old website was outdated, hard to navigate, and
              didn't represent their brand well.
            </p>
          </div>
          <div className="text-center col-span-1">
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-pragmatica-extended)" }}
            >
              The Challenges
            </h3>
            <p
              className="text-base"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Create a website that balances modern aesthetics with functional
              design for both new and existing gym members.
            </p>
          </div>
          <div className="text-center col-span-1">
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-pragmatica-extended)" }}
            >
              The Goals
            </h3>
            <p
              className="text-base"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Increase membership sign-ups, improve user experience, and create
              a mobile-friendly website that showcases the gym's unique
              atmosphere.
            </p>
          </div>
        </div>

        {/* Mobile layout - stacked content (icon, heading, text) for each section */}
        <div className="md:hidden space-y-12">
          {/* The Problem section */}
          <div className="text-center">
            <div className="flex items-end justify-center mb-6">
              <Image
                src="/projects/Strange/StrangeCaseStudyImages/ProblemIcon1 1.png"
                width={205}
                height={100}
                alt="Problem Icon"
                className="mx-auto"
              />
            </div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-pragmatica-extended)" }}
            >
              The Problem
            </h3>
            <p
              className="text-base"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Strange Strength's old website was outdated, hard to navigate, and
              didn't represent their brand well.
            </p>
          </div>

          {/* The Challenges section */}
          <div className="text-center">
            <div className="flex items-end justify-center mb-6">
              <Image
                src="/projects/Strange/StrangeCaseStudyImages/ChallengesIcon1 1.png"
                width={100}
                height={100}
                alt="Challenges Icon"
                className="mx-auto"
              />
            </div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-pragmatica-extended)" }}
            >
              The Challenges
            </h3>
            <p
              className="text-base"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Create a website that balances modern aesthetics with functional
              design for both new and existing gym members.
            </p>
          </div>

          {/* The Goals section */}
          <div className="text-center">
            <div className="flex items-end justify-center mb-6">
              <Image
                src="/projects/Strange/StrangeCaseStudyImages/GoalsIcons2 1.png"
                width={150}
                height={100}
                alt="Goals Icon"
                className="mx-auto"
              />
            </div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-pragmatica-extended)" }}
            >
              The Goals
            </h3>
            <p
              className="text-base"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              Increase membership sign-ups, improve user experience, and create
              a mobile-friendly website that showcases the gym's unique
              atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 strange-dark-bg strange-light-text">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          RESEARCH
        </h2>
        <p
          className="text-base mb-16 mx-auto"
          style={{ fontFamily: "Helvetica Neue, sans-serif" }}
        >
          I talked with the owners about any problems they experience with their
          website, along with any problems that have been reported to them by
          members or prospective members. With what I found out, I compiled the
          following pain points and indicators of our success, along with
          personas to keep our direction aligned with how the website would be
          used.
        </p>

        {/* Pain Points and KPIs Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-16">
          {/* Pain Points Box */}
          <div className="bg-[#d9d9d9] text-black p-6 rounded-lg w-100 h-75">
            <h3
              className="text-2xl font-bold mb-4 text-center"
              style={{ fontFamily: "var(--font-pragmatica-extended)" }}
            >
              Pain points
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li
                className="text-base"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Too many clicks
              </li>
              <li
                className="text-base"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                No clear path to join
              </li>
              <li
                className="text-base"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Not mobile friendly
              </li>
              <li
                className="text-base"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Confusing layout
              </li>
            </ol>
          </div>

          {/* Center Arrow - Vertically centered between boxes */}
          <div className="flex-shrink-0 w-30 h-30 lg:w-35 lg:h-35 mx-4">
            <Image
              src="/projects/Strange/StrangeCaseStudyImages/Vector.svg"
              width={80}
              height={80}
              alt="Arrow pointing to KPIs"
              className="w-full h-auto transform rotate-90 lg:rotate-0 transition-transform mt-5"
            />
          </div>

          {/* KPI Box */}
          <div className="bg-[#c59200] text-white p-6 rounded-lg w-100 h-75">
            <h3
              className="text-2xl font-bold mb-4 text-center"
              style={{ fontFamily: "var(--font-pragmatica-extended)" }}
            >
              Key Performance Indicators
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li
                className="text-base"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Prospective members can easily join
              </li>
              <li
                className="text-base"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Visitors can find quickly the schedule
              </li>
              <li
                className="text-base"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Members can find workouts with one click
              </li>
              <li
                className="text-base"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                Works seamlessly on all devices
              </li>
            </ol>
          </div>
        </div>

        {/* Personas */}
        <h3
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-pragmatica-extended)" }}
        >
          Personas
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Derrick - Traveler Persona */}
          <div className="bg-zinc-700 overflow-hidden">
            <div className="grid grid-cols-2">
              {/* Top Row - Left Cell: Image */}
              <div className="h-80">
                <Image
                  src="/projects/Strange/StrangeCaseStudyImages/Persona_traveler_dropIn2.webp"
                  width={400}
                  height={300}
                  alt="Traveler Persona"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Row - Right Cell: Stats */}
              <div className="bg-zinc-900 p-4">
                <h4
                  className="text-xl font-bold mb-4 text-white"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Derrick
                </h4>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      29 y/o
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      Frequent traveler
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      Fitness enthusiast
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      Loves to "drop in" at new gyms while he's traveling
                    </span>
                  </li>
                </ul>
              </div>

              {/* Bottom Row: Full-width Description */}
              <div className="col-span-2 p-5 bg-zinc-700">
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Derrick is traveling to Los Angeles for work and wants to be
                  able to get a few workouts in at a local gym. He prefers to
                  avoid the big globo gyms, and looks for HIIT-style workouts
                  and a friendly atmosphere. He has no time to "shop around" and
                  try different gyms, he just wants to be able to check out a
                  gym's website and register for a few "drop-in" classes without
                  any fuss.
                </p>
              </div>
            </div>
          </div>

          {/* Wanda - Older Adult Persona */}
          <div className="bg-zinc-700 overflow-hidden">
            <div className="grid grid-cols-2">
              {/* Top Row - Left Cell: Image */}
              <div className="h-80">
                <Image
                  src="/projects/Strange/StrangeCaseStudyImages/Persona_olderWoman3.webp"
                  width={400}
                  height={300}
                  alt="Older Adult Persona"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Row - Right Cell: Stats */}
              <div className="bg-zinc-900 p-4">
                <h4
                  className="text-xl font-bold mb-4 text-white"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Wanda
                </h4>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      65 y/o
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      Grandma
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      Wants to stay in shape for her grandkids
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      Not sure what type of gym is right for her
                    </span>
                  </li>
                </ul>
              </div>

              {/* Bottom Row: Full-width Description */}
              <div className="col-span-2 p-5 bg-zinc-700">
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Wanda now has four grandchildren and wants to make sure she
                  can chase them around the yard for many years to come. While
                  she often goes on lengthy walks with her dog, she needs
                  something a little more structured to keep her in shape. She
                  wants to find a community gym that will be a cheerful place to
                  go, with supportive coaches who will help her if she's doing
                  something wrong. While checking out a gym online, she needs to
                  be able to see some pictures of the coaches and members, and
                  easily find a phone number so she can ask more questions.
                </p>
              </div>
            </div>
          </div>

          {/* Roberta - Busy Professional Persona */}
          <div className="bg-zinc-700 overflow-hidden">
            <div className="grid grid-cols-2">
              {/* Top Row - Left Cell: Image */}
              <div className="h-80">
                <Image
                  src="/projects/Strange/StrangeCaseStudyImages/Persona_busyProfessional2.webp"
                  width={400}
                  height={300}
                  alt="Busy Professional Persona"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Row - Right Cell: Stats */}
              <div className="bg-zinc-900 p-4">
                <h4
                  className="text-xl font-bold mb-4 text-white"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  Roberta
                </h4>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      36 y/o
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      Busy professional
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      Wants to stay fit and healthy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">›</span>
                    <span style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
                      Needs to get her workout in before work
                    </span>
                  </li>
                </ul>
              </div>

              {/* Bottom Row: Full-width Description */}
              <div className="col-span-2 p-5 bg-zinc-700">
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                >
                  Roberta is a member of Strange Strength. She works as an
                  attorney and starts work early, so she needs to be able to get
                  her workout in before that. She needs an easy way to check
                  tomorrow's workout the before bed each night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockups & Lo-Fi Prototypes */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          MOCKUPS & LO-FI PROTOTYPES
        </h2>
        <p
          className="text-base mb-16 mx-auto"
          style={{ fontFamily: "Helvetica Neue, sans-serif" }}
        >
          Looking at the analytics, 80% of visitors were on mobile, we went
          mobile-first with a progressive enhancement approach to the desktop
          site. I sketched some rough ideas to simplify navigation and highlight
          "Join Now" and "Classes." Lo-fi prototypes came next, testing the
          flow.
        </p>

        {/* Paper Mockups */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Image
              src="/projects/Strange/StrangeCaseStudyImages/Early Paper Mockups 1.png"
              width={800}
              height={400}
              alt="Paper Mockups 1"
              className="w-full h-auto"
            />

            <Image
              src="/projects/Strange/StrangeCaseStudyImages/Early Paper Mockups 2.png"
              width={800}
              height={400}
              alt="Paper Mockups 2"
              className="w-full h-auto"
            />
          </div>
          <p className="flex mt-2 text-sm italic">
            Early "paper" mockups of the homepage. I did them on my ipad with my
            finger, and that's why it looks like a child drew them.
          </p>
        </div>

        {/* Lo-Fi Wireframes */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Strange Lofi 1 - Home.png"
            width={300}
            height={500}
            alt="Lo-fi Home"
            className="w-full h-auto"
          />
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Strange Lofi 2 - Join.png"
            width={300}
            height={500}
            alt="Lo-fi Join"
            className="w-full h-auto"
          />
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Strange Lofi 3 - Schedule.png"
            width={300}
            height={500}
            alt="Lo-fi Schedule"
            className="w-full h-auto"
          />
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Strange Lofi 4 - Coaches.png"
            width={300}
            height={500}
            alt="Lo-fi Coaches"
            className="w-full h-auto"
          />
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Strange Lofi 5 - Testimonials.png"
            width={300}
            height={500}
            alt="Lo-fi Testimonials"
            className="w-full h-auto"
          />
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Strange Lofi 6 - Workout Archive.png"
            width={300}
            height={500}
            alt="Lo-fi Archive"
            className="w-full h-auto"
          />
        </div>
        <p className="flex mt-2 text-sm italic">
          Rough Mockups for lo-fi prototypes, testing for user flow and layout
          approval.
        </p>
      </section>

      {/* User Flows */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FCFCFC]">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 strange-dark-text"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          USER FLOWS
        </h2>
        <p
          className="text-base mb-16 mx-auto strange-dark-text"
          style={{ fontFamily: "Helvetica Neue, sans-serif" }}
        >
          After testing the user flow with the lo-fi prototypes, I worked with
          the team to figure out the best way to display the information needed
          for our personas and prospective members. After some back and forth on
          some options, we ultimately decided to go with a long-form landing
          page/scrolling site. With the hamburger menu up top, people that knew
          what they wanted (contact, sign up, workouts, schedule) could get
          where they needed to go, but visitors and potential members could
          peruse the page with one long scroll. At the same time, to solve the
          issue of members wanting to just check out tomorrow's workouts, we put
          the workouts on a separate page.
        </p>

        <div className="flex justify-center">
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Strange - User Flow.png"
            width={900}
            height={500}
            alt="User Flow Diagram"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Visual Design */}
      <section className="py-16 px-6 md:px-16 lg:px-24 strange-dark-bg">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 strange-light-text"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          VISUAL DESIGN
        </h2>
        <p
          className="text-base mb-6 mx-auto strange-light-text"
          style={{ fontFamily: "Helvetica Neue, sans-serif" }}
        >
          I developed a bold, energetic visual language that reflects Strange
          Strength's unique personality while ensuring readability and
          accessibility. Leaning into a minimalist aesthetic and design basics:
          monochrome colors with a bold accent (the gold color straight from
          their logo) to grab the eye, clear hierarchy and spacing for easy
          scanning, and clean typography for readability. Emphasis went to
          sign-ups and schedules -- stuff users cared about most.
        </p>
        <p
          className="text-base mb-16 mx-auto strange-light-text"
          style={{ fontFamily: "Helvetica Neue, sans-serif" }}
        >
          Much like the metal weightlifting rigs outlining the gym's walls, I
          went with hard edges. Pill-style rounded corners on the buttons
          contrast from the squared edges and stand out.
        </p>

        <h3
          className="text-2xl font-bold mb-6 strange-light-text"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Story
        </h3>
        <p
          className="text-base mb-16 mx-auto strange-light-text"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          I really wanted to convey the competitive, work-hard, inclusive, fun
          vibes that the Strange community cultivates. I stayed "on the grid"
          for a structured look, but interspersed with smiling members of all
          colors, ages, and backgrounds to tell the story of Strange. I was
          lucky to obtain some awesome action-filled images and videos from
          great photographers who had documented the gym during competitions and
          workouts. I edited the header video together to communicate a
          high-octane workout vibe as soon as the user lands.
        </p>

        {/* Style Guide */}
        <div className="bg-[#FCFCFC] strange-dark-text p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Column 1: Logos and Typography */}
            <div className="flex flex-col">
              {/* Typography Section */}
              <div>
                <h3
                  className="text-2xl font-bold mb-10 uppercase"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  TYPOGRAPHY
                </h3>

                <div className="space-y-10">
                  <div>
                    <div className="mb-2">
                      <h4
                        className="text-2xl mb-2 tracking-wider"
                        style={{
                          fontFamily: "var(--font-pragmatica-extended)",
                        }}
                      >
                        Pragmatica Extended
                      </h4>
                    </div>
                    <div
                      className="strange-dark-bg strange-light-text text-xxs break-all lg:text-xl p-4"
                      style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                    >
                      <div className="flex gap-2 items-center text-sm lg:text-base text-[#C59200]">
                        <span>&lt;h1&gt;</span>
                        <span>&lt;h2&gt;</span>
                        <span>&lt;h3&gt;</span>
                      </div>
                      <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                      <div>abcdefghijklmnopqrstuvwxyz</div>
                      <div>1234567890</div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <h4 className="text-xl mb-2 tracking-wider">
                        Helvetica Neue
                      </h4>
                    </div>
                    <div
                      className="strange-dark-bg strange-light-text text-xxs lg:text-xl p-4"
                      style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                    >
                      <div className="flex gap-2 items-center text-sm lg:text-base text-[#C59200]">
                        <span>&lt;body&gt;</span>
                        <span>&lt;button&gt;</span>
                      </div>
                      <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                      <div>abcdefghijklmnopqrstuvwxyz</div>
                      <div>1234567890</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Colors and UI */}
            <div className="flex flex-col">
              {/* Colors Section */}
              <div className="mb-14">
                <h3
                  className="text-2xl font-bold mb-6 uppercase"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  COLORS
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 bg-[#C59200] mb-2"></div>
                    <span className="text-sm">#C59200</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 bg-[#DCDCDC] mb-2"></div>
                    <span className="text-sm">#DCDCDC</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 bg-[#1C1C1C] mb-2"></div>
                    <span className="text-sm">#1C1C1C</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-28 h-28 bg-[#FCFCFC] border border-gray-200 mb-2"></div>
                    <span className="text-sm">#FCFCFC</span>
                  </div>
                </div>
              </div>

              {/* UI Section */}
              <div className="border-t border-[#c59200] pt-8">
                <h3
                  className="text-2xl font-bold mb-10 uppercase"
                  style={{ fontFamily: "var(--font-pragmatica-extended)" }}
                >
                  UI
                </h3>

                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="flex flex-col gap-6 items-center md:items-start">
                    <div className="bg-[#DCDCDC] text-black px-16 py-4 rounded-full w-full text-lg text-center">
                      Primary
                    </div>
                    <div className="bg-[#1C1C1C] text-white px-16 py-4 rounded-full w-full text-lg text-center">
                      Secondary
                    </div>
                  </div>

                  <div className="text-[#C59200]">
                    <div>Weight 700</div>
                    <div>Letter spacing: 0em</div>
                    <div>Padding: 0.8em 1.2em</div>
                    <div>Border radius: 50px</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Designs */}
        <h3
          className="text-2xl font-bold mb-6 text-center"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Final Designs
        </h3>

        <div>
          <Image
            src="/projects/Strange/StrangeCaseStudyImages/Mobile_leaning_doublePage.webp"
            width={2000}
            height={1217}
            alt="Mobile Design 2"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Final Delivery & Takeaways */}
      <section className="py-16 px-6 md:px-16 lg:px-24 strange-light-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-16 gap-16">
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              FINAL DELIVERY
            </h2>
            <p
              className="text-base"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              I got thumbs up for the cleaner user experience and a streamlined
              layout of information, especially the hero video to splash the
              screen when users first arrive. When we launched the new site, the
              owners reported a noticeable uptick in calls, emails, and messages
              inquiring about the gym from new prospective members. In the
              analytics, we saw a lower bounce rate and increased average
              session duration; either users were interested in what they saw
              and were scrolling through to take in the info or they fell asleep
              with their phone (err...let's go with the former).
            </p>
          </div>
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              TAKEAWAYS
            </h2>
            <p
              className="text-base"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              I gained a new appreciation for single page sites being effective
              and no fuss. It is really nice to just scroll through the homepage
              and see what Strange has to offer. I took the opportunity to add
              more media to break up sections and insert the vibe of the gym
              that we talked so much about in our initial meeting. Due to time
              and budget constraints, we weren't able to do any official
              usability studies where we could have tested the long-form landing
              page vs separate info pages, but based off anecdotal evidence, it
              seems like a hit. Loved how I gave Strange Strength a boost? Reach
              out, I'd be stoked to chat about how I can bring the same
              user-first magic to your website.
            </p>
          </div>
        </div>

        <Image
          src="/projects/Strange/StrangeCaseStudyImages/iPhone_iPad_2025_0425.webp"
          width={1600}
          height={1000}
          alt="Mobile Design"
          className="w-full h-auto"
        />
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          EXPLORE MORE PROJECTS
        </h2>

        {/* Conditional rendering for the button/link */}
        {isInLightbox ? (
          <button
            onClick={onLightboxClose}
            className="inline-flex items-center px-8 py-3 bg-yellow-500 text-black rounded font-bold text-lg hover:bg-yellow-600 transition-colors"
          >
            Back to Portfolio
          </button>
        ) : (
          <Link
            href="/#portfolio"
            className="inline-flex items-center px-8 py-3 bg-yellow-500 text-black rounded font-bold text-lg hover:bg-yellow-600 transition-colors"
          >
            Back to Portfolio
          </Link>
        )}
      </section>
    </main>
  );
}
