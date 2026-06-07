"use client";

import { createContext, useContext, type MutableRefObject } from "react";
import type Lenis from "@studio-freight/lenis";

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({
  lenisRef,
  children,
}: {
  lenisRef: MutableRefObject<Lenis | null>;
  children: React.ReactNode;
}) {
  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}
