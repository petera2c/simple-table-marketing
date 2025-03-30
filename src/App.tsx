import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/HomePage.tsx";
import ThemeBuilder from "./pages/ThemeBuilderPage.tsx";
import NotFound from "./pages/NotFoundPage.tsx";
import DocsLayout from "./pages/docs/DocsLayout.tsx";
import DocsIndex from "./pages/docs/index.tsx";
import InstallationPage from "./pages/docs/InstallationPage.tsx";
import QuickStartPage from "./pages/docs/QuickStartPage.tsx";
import UnderConstruction from "./components/UnderConstruction.tsx";
import ReactGA from "react-ga4";
import RouteContainer from "./components/RouteContainer.tsx";
import { HelmetProvider } from "react-helmet-async";

ReactGA.initialize("G-HS01JZP3DM");

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="h-screen flex flex-col overflow-auto">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<RouteContainer />}>
                <Route path="/" element={<Home />} />
                <Route path="/theme-builder" element={<ThemeBuilder />} />

                {/* Docs routes */}
                <Route path="/docs" element={<DocsLayout />}>
                  <Route index element={<DocsIndex />} />
                  <Route path="installation" element={<InstallationPage />} />
                  <Route path="quick-start" element={<QuickStartPage />} />
                  {/* Add more doc pages here as they are created */}
                  {/* Show "page under construction" for all other doc pages */}
                  <Route path="*" element={<UnderConstruction />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
