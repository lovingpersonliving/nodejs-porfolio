"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  id,
  label,
  title,
  subtitle,
  children,
  className = "",
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.95, 1], [0, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.15], [60, 0]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-wrapper relative z-10 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <motion.div
        style={{ opacity, y }}
        className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
      >
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <span className="section-label">{label}</span>
          <h2
            id={`${id}-heading`}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-off-white mb-4"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted max-w-2xl">{subtitle}</p>
          )}
        </div>

        {children}
      </motion.div>
    </section>
  );
}
