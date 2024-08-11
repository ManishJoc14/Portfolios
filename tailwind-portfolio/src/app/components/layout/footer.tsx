"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerRefInView = useInView(containerRef, {
    // once: true,
    margin: "-40px",
  });
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={isContainerRefInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="text-center py-10 text-slate-400 font-sans tracking-wide text-sm"
    >
      <p>Do one thing that scares you the most.</p>
      <p className="mt-2">
        Made with ❤️ By
        <span className="text-secondary animate-pulse pl-1">Manish</span>
      </p>
    </motion.div>
  );
}
