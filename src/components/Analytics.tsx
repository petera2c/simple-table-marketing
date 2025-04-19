"use client";

import Script from "next/script";
import {
  ANALYTICS_ENABLED,
  disableGoogleAnalyticsInDevelopment,
  disableHotjarInDevelopment,
  disableSimpleAnalyticsInDevelopment,
} from "../utils/analyticsConfig";
import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    // Disable analytics in development
    disableGoogleAnalyticsInDevelopment();
    disableHotjarInDevelopment();
    disableSimpleAnalyticsInDevelopment();
  }, []);

  if (!ANALYTICS_ENABLED) return null;

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-HS01JZP3DM`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HS01JZP3DM');
        `}
      </Script>

      {/* Hotjar */}
      <Script id="hotjar">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:5348742,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      {/* Simple Analytics */}
      <Script
        src="https://scripts.simpleanalyticscdn.com/latest.js"
        data-collect-dnt="true"
        async
      />
      <noscript>
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
          alt="Simple Analytics"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
}
