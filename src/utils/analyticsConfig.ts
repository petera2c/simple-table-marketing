/**
 * Utility to conditionally enable/disable analytics services based on environment
 */

// TypeScript declaration for Hotjar
declare global {
  interface Window {
    hj?: Function;
    _hjSettings?: {
      hjid: number;
      hjsv: number;
    };
  }
}

// Check if we're in development mode
const isDevelopment = () => {
  return (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname.includes("local")
  );
};

// Export a flag to control analytics
export const ANALYTICS_ENABLED = !isDevelopment();

// Function to disable Hotjar in development
export const disableHotjarInDevelopment = () => {
  if (isDevelopment() && window.hj) {
    // Overwrite the hj function to do nothing
    window.hj = function () {
      // No-op function
      return;
    };

    // Clean up any Hotjar scripts that might have been added
    const hjScripts = document.querySelectorAll('script[src*="hotjar"]');
    hjScripts.forEach((script) => script.remove());
  }
};

// Function to disable Simple Analytics in development
export const disableSimpleAnalyticsInDevelopment = () => {
  if (isDevelopment()) {
    // Remove Simple Analytics script
    const saScripts = document.querySelectorAll('script[src*="simpleanalyticscdn"]');
    saScripts.forEach((script) => script.remove());

    // Remove Simple Analytics noscript image
    const saImages = document.querySelectorAll('img[src*="simpleanalyticscdn"]');
    saImages.forEach((img) => img.remove());
  }
};
