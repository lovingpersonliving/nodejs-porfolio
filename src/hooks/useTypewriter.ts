"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[textIndex];

    if (isPaused) {
      setIsPaused(false);
      setIsDeleting(true);
      return;
    }

    if (!isDeleting) {
      // Typing
      setDisplayText(currentText.slice(0, displayText.length + 1));

      if (displayText.length + 1 === currentText.length) {
        // Finished typing — pause before deleting
        setIsPaused(true);
      }
    } else {
      // Deleting
      setDisplayText(currentText.slice(0, displayText.length - 1));

      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [texts, textIndex, displayText, isDeleting, isPaused]);

  useEffect(() => {
    const timeout = setTimeout(
      tick,
      isPaused
        ? pauseDuration
        : isDeleting
        ? deletingSpeed
        : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [tick, isPaused, isDeleting, deletingSpeed, typingSpeed, pauseDuration]);

  return displayText;
}
