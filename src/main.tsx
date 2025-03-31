import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { disableHotjarInDevelopment, disableSimpleAnalyticsInDevelopment } from "./utils/analyticsConfig";

// Disable analytics services in development
disableHotjarInDevelopment();
disableSimpleAnalyticsInDevelopment();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
