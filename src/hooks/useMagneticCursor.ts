"use client";

import { useEffect, useRef, useCallback } from "react";

export function useMagneticCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseEnterLink = useCallback(() => {
    cursorRef.current?.classList.add("hover");
  }, []);

  const handleMouseLeaveLink = useCallback(() => {
    cursorRef.current?.classList.remove("hover");
  }, []);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse, not touch)
    if (!window.matchMedia("(pointer: fine)").matches) {
      document.body.style.cursor = ""; // Restore default cursor on touch
      return;
    }

    // Create cursor element
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    document.body.style.cursor = "none";

    document.addEventListener("mousemove", handleMouseMove);

    // Track hover on interactive elements
    const interactive = document.querySelectorAll(
      'a, button, input, textarea, [role="button"], .magnetic-area'
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterLink);
      el.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    // Smooth cursor animation loop
    let animationId: number;
    const animate = () => {
      const dx = mouseRef.current.x - posRef.current.x;
      const dy = mouseRef.current.y - posRef.current.y;
      posRef.current.x += dx * 0.12;
      posRef.current.y += dy * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      cursor.remove();
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterLink);
        el.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, [handleMouseMove, handleMouseEnterLink, handleMouseLeaveLink]);
}
