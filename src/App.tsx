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
import QuickStartPage from "./pages/docs/QuickStartPage.tsx";
import CellEditingPage from "./pages/docs/CellEditingPage";
import PaginationPage from "./pages/docs/PaginationPage";
import ThemesPage from "./pages/docs/ThemesPage";
import CustomThemePage from "./pages/docs/CustomThemePage";
import ColumnPropertiesPage from "./pages/docs/ColumnPropertiesPage";
import ColumnResizingPage from "./pages/docs/ColumnResizingPage";
import ColumnVisibilityPage from "./pages/docs/ColumnVisibilityPage";
import ColumnPinningPage from "./pages/docs/ColumnPinningPage";
import ColumnAlignmentPage from "./pages/docs/ColumnAlignmentPage";
import ColumnSortingPage from "./pages/docs/ColumnSortingPage";
import CellHighlightingPage from "./pages/docs/CellHighlightingPage";
import CellRendererPage from "./pages/docs/CellRendererPage";

// Import demo pages
import RowGroupingPage from "./pages/docs/RowGroupingPage.tsx";
import { ANALYTICS_ENABLED } from "./utils/analyticsConfig.ts";
import ExamplesRoutes from "./pages/examples/ExamplesRoutes.tsx";

// Only initialize Google Analytics in production
if (ANALYTICS_ENABLED) {
  ReactGA.initialize("G-HS01JZP3DM");
}

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
                  <Route index element={<Navigate to="/docs/installation" replace />} />

                  {/* Getting Started routes */}
                  <Route path="installation" element={<InstallationPage />} />
                  <Route path="quick-start" element={<QuickStartPage />} />

                  {/* Column feature routes */}
                  <Route path="column-properties" element={<ColumnPropertiesPage />} />
                  <Route path="column-resizing" element={<ColumnResizingPage />} />
                  <Route path="column-visibility" element={<ColumnVisibilityPage />} />
                  <Route path="column-pinning" element={<ColumnPinningPage />} />
                  <Route path="column-alignment" element={<ColumnAlignmentPage />} />
                  <Route path="column-sorting" element={<ColumnSortingPage />} />

                  {/* Cell feature routes */}
                  <Route path="cell-editing" element={<CellEditingPage />} />
                  <Route path="cell-highlighting" element={<CellHighlightingPage />} />
                  <Route path="cell-renderer" element={<CellRendererPage />} />

                  {/* Other routes */}
                  <Route path="pagination" element={<PaginationPage />} />
                  <Route path="row-grouping" element={<RowGroupingPage />} />
                  <Route path="themes" element={<ThemesPage />} />
                  <Route path="custom-theme" element={<CustomThemePage />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                {/* Examples Routes */}
                <Route path="/examples/*" element={<ExamplesRoutes />} />

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
