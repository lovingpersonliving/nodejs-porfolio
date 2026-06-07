"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Web Vitals performance monitoring.
 * Logs Core Web Vitals to console in development.
 * Replace console.log with analytics endpoint in production.
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    // In production, send to analytics endpoint:
    // navigator.sendBeacon('/api/vitals', JSON.stringify(metric))
    // For now, log to console in dev only
    if (process.env.NODE_ENV === "development") {
      const valueFormatted =
        metric.name === "CLS" ? metric.value.toFixed(4) : Math.round(metric.value);
      console.log(
        `[Web Vitals] ${metric.name}: ${valueFormatted} (${metric.rating})`,
        { id: metric.id, delta: metric.delta }
      );
    } else {
      // Production: send to a lightweight endpoint
      const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        page: window.location.pathname,
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/vitals", body);
      }
    }
  });

  return null;
}
