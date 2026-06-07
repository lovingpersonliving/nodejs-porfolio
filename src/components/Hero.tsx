"use client";

import { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useTypewriter } from "@/hooks/useTypewriter";
import { headlines } from "@/data/portfolio";
import * as THREE from "three";

// ============================================
// 3D Abstract Geometric Form — responds to mouse
// ============================================
function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  // Use R3F's built-in normalized mouse coordinates
  useFrame((state) => {
    // Smoothly interpolate target rotation based on mouse position
    targetRotation.current.y +=
      (state.mouse.x * 0.8 - targetRotation.current.y) * 0.02;
    targetRotation.current.x +=
      (state.mouse.y * 0.5 - targetRotation.current.x) * 0.02;

    const slowSpin = state.clock.elapsedTime * 0.15;

    if (meshRef.current) {
      meshRef.current.rotation.x = targetRotation.current.x + Math.sin(slowSpin) * 0.15;
      meshRef.current.rotation.y = targetRotation.current.y + slowSpin;
      meshRef.current.rotation.z = Math.cos(slowSpin) * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = meshRef.current?.rotation.x || 0;
      wireframeRef.current.rotation.y = meshRef.current?.rotation.y || 0;
      wireframeRef.current.rotation.z = (meshRef.current?.rotation.z || 0) + 0.01;
    }
  });

  return (
    <group>
      {/* Main solid geometry */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={meshRef} scale={2.2}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#0066FF"
            emissive="#003D99"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
            distort={0.15}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Wireframe overlay */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
        <mesh ref={wireframeRef} scale={2.35}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#00E5FF"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>

      {/* Orbiting particles */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh scale={0.06}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#00FFAA" />
        </mesh>
      </Float>
    </group>
  );
}

// ============================================
// 3D Canvas Wrapper
// ============================================
function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#0066FF" />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#00E5FF" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#9945FF" />
        <Suspense fallback={null}>
          <FloatingGeometry />
        </Suspense>
      </Canvas>
    </div>
  );
}

// ============================================
// Hero Section
// ============================================
export default function Hero() {
  const displayText = useTypewriter({
    texts: headlines,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2200,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* 3D Background */}
      <ThreeScene />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-radial from-transparent via-transparent to-charcoal/80 pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-mint/10 border border-neon-mint/20 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-mint opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-mint" />
          </span>
          <span className="text-neon-mint text-sm font-medium">
            Available for new projects
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.05] mb-6">
          <span className="text-off-white">Alex Chen</span>
          <br />
          <span className="text-gradient">{displayText}</span>
          <span className="typewriter-cursor" aria-hidden="true" />
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-10 text-balance"
        >
          I design and build high-performance web experiences that push the
          boundaries of what&apos;s possible in the browser.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="magnetic-area group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-electric-blue text-white font-semibold text-lg hover:bg-electric-blue-700 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.5)]"
          >
            Explore My Work
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="magnetic-area px-8 py-4 rounded-full border border-white/[0.12] text-off-white font-semibold text-lg hover:bg-white/[0.04] transition-all duration-300 hover:border-electric-blue/40"
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              className="w-6 h-6 text-off-white/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
