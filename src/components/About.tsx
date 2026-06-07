"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalInfo, skills, Skill } from "@/data/portfolio";

// ============================================
// Interactive Skills Cloud
// ============================================
function SkillsCloud() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const categories = ["frontend", "backend", "design", "tools"] as const;
  const categoryLabels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    design: "Design",
    tools: "Tools",
  };

  return (
    <div ref={ref} className="space-y-8">
      <h3 className="text-2xl font-display font-semibold text-off-white">
        Skills & Technologies
      </h3>

      {categories.map((category, catIndex) => (
        <div key={category}>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted mb-3 block">
            {categoryLabels[category]}
          </span>
          <div className="flex flex-wrap gap-2">
            {skills
              .filter((s) => s.category === category)
              .map((skill, index) => (
                <motion.button
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    delay: catIndex * 0.1 + index * 0.05,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onMouseLeave={() => setActiveSkill(null)}
                  onFocus={() => setActiveSkill(skill)}
                  onBlur={() => setActiveSkill(null)}
                  className="magnetic-area relative group px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-white/[0.06] hover:border-white/[0.15]"
                  style={{
                    backgroundColor:
                      activeSkill?.name === skill.name
                        ? `${skill.color}15`
                        : "rgba(255,255,255,0.02)",
                    color:
                      activeSkill?.name === skill.name
                        ? skill.color
                        : "rgba(255,255,255,0.7)",
                  }}
                  aria-label={`${skill.name} — proficiency ${skill.level}%`}
                >
                  {skill.name}

                  {/* Skill level bar */}
                  <AnimatePresence>
                    {activeSkill?.name === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full origin-left"
                        style={{ backgroundColor: skill.color }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// Values Grid
// ============================================
function ValuesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
      {personalInfo.values.map((value, index) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
        >
          <h4 className="text-lg font-display font-semibold text-off-white mb-2">
            {value.title}
          </h4>
          <p className="text-sm text-muted leading-relaxed">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// About Section
// ============================================
export default function About() {
  return (
    <SectionWrapper
      id="about"
      label="About"
      title="The story behind the code"
      subtitle="A developer driven by craft, precision, and the pursuit of exceptional digital experiences."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — Bio */}
        <div>
          <div className="prose prose-invert max-w-none">
            {personalInfo.bio.long.split("\n\n").map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-muted leading-relaxed mb-6 text-base sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <ValuesGrid />
        </div>

        {/* Right — Skills Cloud */}
        <div className="lg:sticky lg:top-32">
          <SkillsCloud />
        </div>
      </div>
    </SectionWrapper>
  );
}
