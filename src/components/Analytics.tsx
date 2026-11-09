import Script from "next/script";
import { analyticsEnabled, gaMeasurementId } from "../lib/analytics";

export default function Analytics() {
  if (!analyticsEnabled) return null;

  return (
    <>
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
          window.gtag('js', new Date());
          window.gtag('config', '${gaMeasurementId}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
      <Script
        id="google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
