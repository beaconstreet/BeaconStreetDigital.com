"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="h-screen w-full bg-white flex flex-col items-center justify-center text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8"
      >
        Ready to work together?
      </motion.h2>

      <motion.a
        href="mailto:contact@beaconstreetdigital.com"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl text-black hover:underline"
      >
        contact@beaconstreetdigital.com
      </motion.a>
    </section>
  );
}
