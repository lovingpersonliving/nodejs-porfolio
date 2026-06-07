"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { projects, Project } from "@/data/portfolio";
import { useLenis } from "@/context/LenisContext";

// ============================================
// Project Card with next/image
// ============================================
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative cursor-pointer"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-charcoal-200 transition-all duration-500 group-hover:border-electric-blue/30 group-hover:shadow-[0_0_40px_rgba(0,102,255,0.1)]">
        {/* Project thumbnail with next/image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-300">
          <Image
            src={project.thumbnail}
            alt={`${project.title} — ${project.subtitle}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            loading={index > 1 ? "lazy" : "eager"}
            priority={index <= 1}
          />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neon-mint/15 border border-neon-mint/30 text-neon-mint text-xs font-semibold z-10">
              Featured
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
            <span className="px-6 py-3 rounded-full bg-electric-blue text-white font-semibold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
              View Case Study
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 lg:p-8">
          <p className="text-electric-blue text-sm font-medium mb-2">
            {project.subtitle}
          </p>
          <h3 className="text-2xl font-display font-semibold text-off-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs text-muted"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 rounded-md text-xs text-muted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ============================================
// Project Modal with next/image gallery
// ============================================
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { lenis } = useLenis();

  useEffect(() => {
    lenis?.stop();
    closeButtonRef.current?.focus();
    return () => {
      lenis?.start();
    };
  }, [lenis]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab") {
        const modal = document.getElementById("project-modal");
        if (!modal) return;
        const focusable = modal.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      id="project-modal"
    >
      <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.08] bg-charcoal-200 p-6 sm:p-10"
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-off-white/50 hover:text-off-white hover:border-white/[0.2] transition-all z-20"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="space-y-8">
          {/* Image gallery */}
          {project.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-charcoal-300"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          <div>
            <span className="text-electric-blue text-sm font-medium">
              {project.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-off-white mt-2">
              {project.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <span className="text-muted">Role</span>
              <p className="text-off-white font-medium">{project.role}</p>
            </div>
            <div>
              <span className="text-muted">Client</span>
              <p className="text-off-white font-medium">{project.client}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-display font-semibold text-off-white mb-3">
                The Problem
              </h3>
              <p className="text-muted leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-off-white mb-3">
                The Solution
              </h3>
              <p className="text-muted leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold text-off-white mb-4">
              Results
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <p className="text-2xl font-display font-bold text-neon-mint">
                    {result.value}
                  </p>
                  <p className="text-xs text-muted mt-1">{result.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/[0.06]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric-blue text-white font-semibold hover:bg-electric-blue-700 transition-colors"
              >
                View Live
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] text-off-white font-semibold hover:bg-white/[0.04] transition-colors"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// Projects Section
// ============================================
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper
      id="projects"
      label="Selected Work"
      title="Projects that make an impact"
      subtitle="A curated selection of projects showcasing technical depth, design thinking, and measurable results."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
