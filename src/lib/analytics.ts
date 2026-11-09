const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

export const gaMeasurementId =
  measurementId && /^G-[A-Z0-9]+$/.test(measurementId)
    ? measurementId
    : undefined;

export const analyticsEnabled =
  process.env.NODE_ENV === "production" && Boolean(gaMeasurementId);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackVideoOpen(
  category: "snapshot" | "project_video",
  title: string,
) {
  if (!analyticsEnabled || typeof window === "undefined") return;

  window.gtag?.("event", `${category}_open`, {
    send_to: gaMeasurementId,
    video_title: title,
  });
}
