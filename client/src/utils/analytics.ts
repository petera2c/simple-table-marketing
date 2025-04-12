import ReactGA from "react-ga4";
import { ANALYTICS_ENABLED } from "./analyticsConfig";

export const trackEvent = (category: string, action: string, label?: string) => {
  if (!ANALYTICS_ENABLED) return;

  ReactGA.event({
    category,
    action,
    label,
  });
};

export const trackPageView = (path: string) => {
  if (!ANALYTICS_ENABLED) return;

  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackLinkClick = (linkName: string, linkUrl: string) => {
  trackEvent("Link Click", linkName, linkUrl);
};

export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  trackEvent("Button Click", buttonName, buttonLocation);
};

export const trackThemeChange = (themeName: string) => {
  trackEvent("Theme", "Change", themeName);
};

export const trackDownload = (fileName: string) => {
  trackEvent("Download", "File", fileName);
};
