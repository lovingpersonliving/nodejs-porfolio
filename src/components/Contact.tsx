"use client";

import { useForm } from "@formspree/react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { socialLinks } from "@/data/portfolio";

// ============================================
// Form Field with Formspree validation errors
// ============================================
function FormField({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  errors,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
}) {
  const fieldError = errors?.getFieldErrors?.(name)?.[0];
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const Component = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || value
            ? "-top-2.5 text-xs text-electric-blue bg-charcoal-200 px-2"
            : "top-3.5 text-sm text-muted"
        }`}
      >
        {label}
        {required && <span className="text-neon-pink ml-0.5">*</span>}
      </label>
      <Component
        id={name}
        name={name}
        type={textarea ? undefined : type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`form-input pt-4 ${
          textarea ? "min-h-[160px]" : ""
        } ${fieldError ? "border-neon-pink" : ""}`}
        aria-required={required}
        aria-invalid={!!fieldError}
      />
      {fieldError && (
        <p className="mt-1 text-neon-pink text-xs" role="alert">
          {fieldError}
        </p>
      )}
    </div>
  );
}

// ============================================
// Right Column — Contact Info & Social Links
// ============================================
function ContactInfo({
  isInView,
}: {
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="space-y-10"
    >
      <div className="space-y-4">
        <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">
            Email
          </h4>
          <a
            href="mailto:alex@alexchendev.com"
            className="text-lg font-medium text-off-white hover:text-electric-blue transition-colors"
          >
            alex@alexchendev.com
          </a>
        </div>
        <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">
            Location
          </h4>
          <p className="text-lg font-medium text-off-white">
            San Francisco, CA
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
          Connect
        </h4>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="magnetic-area px-5 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-off-white/70 hover:text-electric-blue hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all duration-300"
            >
              <span className="font-medium text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-neon-mint/10 bg-neon-mint/5">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-mint opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-mint" />
          </span>
          <p className="text-sm text-neon-mint/80">
            Currently available for freelance &amp; full-time opportunities
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// Success View
// ============================================
function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-10 rounded-3xl border border-neon-mint/20 bg-neon-mint/5 text-center"
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-neon-mint/10 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-neon-mint"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-display font-semibold text-off-white mb-3">
        Message Sent!
      </h3>
      <p className="text-muted mb-6">
        Thank you for reaching out. I&apos;ll get back to you within 24 hours.
      </p>
      <button
        onClick={onReset}
        className="px-6 py-3 rounded-full bg-electric-blue text-white font-semibold hover:bg-electric-blue-700 transition-colors"
      >
        Send Another Message
      </button>
    </motion.div>
  );
}

// ============================================
// Contact Section
// ============================================
export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formKey, setFormKey] = useState(0);

  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  function handleReset() {
    setFormKey((k) => k + 1);
  }

  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Let's build something great"
      subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
    >
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
      >
        {/* Left Column — Form or Success */}
        <motion.div
          key={formKey}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          {state.succeeded ? (
            <SuccessMessage onReset={handleReset} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Your Name"
                  name="name"
                  required
                  errors={state.errors}
                />
                <FormField
                  label="Your Email"
                  name="email"
                  type="email"
                  required
                  errors={state.errors}
                />
              </div>
              <FormField
                label="Subject"
                name="subject"
                required
                errors={state.errors}
              />
              <FormField
                label="Your Message"
                name="message"
                textarea
                required
                errors={state.errors}
              />

              {state.errors && Object.keys(state.errors).length > 0 && (
                <p className="text-neon-pink text-sm">
                  Please fix the errors above and try again.
                </p>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="magnetic-area group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-electric-blue text-white font-semibold text-lg hover:bg-electric-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.4)]"
              >
                {state.submitting ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Right Column — Always visible */}
        <ContactInfo isInView={isInView} />
      </div>
    </SectionWrapper>
  );
}
