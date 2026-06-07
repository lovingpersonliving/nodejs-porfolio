"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experiences } from "@/data/portfolio";

// ============================================
// Timeline Item
// ============================================
function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Desktop: alternating layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-start">
        {/* Left column content (even indices) */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 0 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isLeft ? -40 : 0 }
          }
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={isLeft ? "text-right" : "lg:opacity-0 lg:pointer-events-none"}
        >
          {isLeft && <TimelineCard experience={experience} align="right" />}
        </motion.div>

        {/* Right column content (odd indices) */}
        <motion.div
          initial={{ opacity: 0, x: !isLeft ? 40 : 0 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: !isLeft ? 40 : 0 }
          }
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={!isLeft ? "" : "lg:opacity-0 lg:pointer-events-none"}
        >
          {!isLeft && <TimelineCard experience={experience} align="left" />}
        </motion.div>
      </div>

      {/* Mobile: single column */}
      <div className="lg:hidden pl-10">
        <TimelineCard experience={experience} align="left" />
      </div>
    </div>
  );
}

// ============================================
// Timeline Card
// ============================================
function TimelineCard({
  experience,
  align,
}: {
  experience: (typeof experiences)[0];
  align: "left" | "right";
}) {
  return (
    <div
      className={`p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-electric-blue/20 transition-all duration-300 ${
        align === "right" ? "text-left" : "text-left"
      }`}
    >
      {/* Period */}
      <span className="text-electric-blue text-sm font-semibold tracking-wide">
        {experience.period}
      </span>

      {/* Role & Company */}
      <h3 className="text-xl font-display font-semibold text-off-white mt-2 mb-1">
        {experience.role}
      </h3>
      <p className="text-electric-blue-300 font-medium mb-4">
        {experience.company}
      </p>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed mb-4">
        {experience.description}
      </p>

      {/* Achievements */}
      <ul className="space-y-2.5 mb-4">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
            <svg
              className="w-4 h-4 mt-0.5 flex-shrink-0 text-neon-mint"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.04] text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Timeline Line (center vertical line with dots)
// ============================================
function TimelineLine() {
  return (
    <div
      className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
      aria-hidden="true"
    >
      {/* Vertical line */}
      <div className="w-px h-full bg-gradient-to-b from-transparent via-electric-blue/30 to-transparent" />

      {/* Dots */}
      {experiences.map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-electric-blue border-2 border-charcoal shadow-[0_0_12px_rgba(0,102,255,0.5)]"
          style={{
            top: `${(index + 0.5) * (100 / experiences.length)}%`,
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// Experience Section
// ============================================
export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="Where I&apos;ve made an impact"
      subtitle="Over 8 years of building products at startups, agencies, and FAANG-level companies."
    >
      <div className="relative">
        <TimelineLine />

        <div className="flex flex-col gap-8 lg:gap-16">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
