import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/HomePage.tsx";
import ThemeBuilder from "./pages/ThemeBuilderPage.tsx";
import Docs from "./pages/DocsPage.tsx";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./utils/analytics";

ReactGA.initialize("G-HS01JZP3DM");

function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-auto">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theme-builder" element={<ThemeBuilder />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
