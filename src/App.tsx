import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import UnderConstruction from "./components/UnderConstruction";
import CellEditingPage from "./pages/docs/CellEditingPage";
import GettingStartedPage from "./pages/docs/GettingStartedPage";
import PaginationPage from "./pages/docs/PaginationPage";
import ThemingPage from "./pages/docs/ThemingPage";
import AccessibilityPage from "./pages/docs/AccessibilityPage";
import PerformancePage from "./pages/docs/PerformancePage";
import ColumnPropertiesPage from "./pages/docs/ColumnPropertiesPage";
import ColumnResizingPage from "./pages/docs/ColumnResizingPage";
import ColumnVisibilityPage from "./pages/docs/ColumnVisibilityPage";
import ColumnPinningPage from "./pages/docs/ColumnPinningPage";
import ColumnAlignmentPage from "./pages/docs/ColumnAlignmentPage";
import ColumnSortingPage from "./pages/docs/ColumnSortingPage";
import CellHighlightingPage from "./pages/docs/CellHighlightingPage";
import CellRendererPage from "./pages/docs/CellRendererPage";

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
                  <Route index element={<Navigate to="/docs/getting-started" replace />} />
                  <Route path="getting-started" element={<GettingStartedPage />} />

                  {/* Column feature routes */}
                  <Route path="column-properties" element={<ColumnPropertiesPage />} />
                  <Route path="column-resizing" element={<ColumnResizingPage />} />
                  <Route path="column-visibility" element={<ColumnVisibilityPage />} />
                  <Route path="column-pinning" element={<ColumnPinningPage />} />
                  <Route path="column-alignment" element={<ColumnAlignmentPage />} />
                  <Route path="column-sorting" element={<ColumnSortingPage />} />

                  {/* Other routes */}
                  <Route path="cell-editing" element={<CellEditingPage />} />
                  <Route path="cell-highlighting" element={<CellHighlightingPage />} />
                  <Route path="cell-renderer" element={<CellRendererPage />} />
                  <Route path="sorting-filtering" element={<Navigate to="/docs/column-sorting" replace />} />
                  <Route path="pagination" element={<PaginationPage />} />
                  <Route path="responsive" element={<UnderConstruction />} />
                  <Route path="theming" element={<ThemingPage />} />
                  <Route path="accessibility" element={<AccessibilityPage />} />
                  <Route path="performance" element={<PerformancePage />} />
                  <Route path="installation" element={<InstallationPage />} />
                  <Route path="quick-start" element={<QuickStartPage />} />
                  <Route path="basic-usage" element={<BasicUsagePage />} />
                  <Route path="advanced" element={<UnderConstruction />} />
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
