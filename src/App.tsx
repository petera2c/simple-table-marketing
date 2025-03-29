import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/HomePage.tsx";
import ThemeBuilder from "./pages/ThemeBuilderPage.tsx";
import Docs from "./pages/DocsPage.tsx";
import NotFound from "./pages/NotFoundPage.tsx";
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
                <Route path="/docs" element={<Docs />} />
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
