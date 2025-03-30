import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/HomePage.tsx";
import ThemeBuilder from "./pages/ThemeBuilderPage.tsx";
import NotFound from "./pages/NotFoundPage.tsx";
import DocsLayout from "./pages/docs/DocsLayout.tsx";
import ReactGA from "react-ga4";
import RouteContainer from "./components/RouteContainer.tsx";
import { HelmetProvider } from "react-helmet-async";
import InstallationPage from "./pages/docs/InstallationPage.tsx";
import BasicUsagePage from "./pages/docs/BasicUsagePage.tsx";
import QuickStartPage from "./pages/docs/QuickStartPage.tsx";
import UnderConstruction from "./components/UnderConstruction.tsx";
import ColumnFeaturesPage from "./pages/docs/ColumnFeaturesPage";
import CellEditingPage from "./pages/docs/CellEditingPage";
import DocsPage from "./pages/docs/DocsPage";
import GettingStartedPage from "./pages/docs/GettingStartedPage";
import SortingFilteringPage from "./pages/docs/SortingFilteringPage";
import PaginationPage from "./pages/docs/PaginationPage";
import ResponsivePage from "./pages/docs/ResponsivePage";
import ThemingPage from "./pages/docs/ThemingPage";
import AccessibilityPage from "./pages/docs/AccessibilityPage";
import PerformancePage from "./pages/docs/PerformancePage";

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

                <Route path="/docs" element={<DocsLayout />}>
                  <Route index element={<DocsPage />} />
                  <Route path="getting-started" element={<GettingStartedPage />} />
                  <Route path="column-features" element={<ColumnFeaturesPage />} />
                  <Route path="cell-editing" element={<CellEditingPage />} />
                  <Route path="sorting-filtering" element={<SortingFilteringPage />} />
                  <Route path="pagination" element={<PaginationPage />} />
                  <Route path="responsive" element={<ResponsivePage />} />
                  <Route path="theming" element={<ThemingPage />} />
                  <Route path="accessibility" element={<AccessibilityPage />} />
                  <Route path="performance" element={<PerformancePage />} />
                  <Route path="installation" element={<InstallationPage />} />
                  <Route path="quick-start" element={<QuickStartPage />} />
                  <Route path="basic-usage" element={<BasicUsagePage />} />
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
