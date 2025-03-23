import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ThemeBuilderPage from "./pages/ThemeBuilderPage";
// @ts-ignore
import "./index.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theme-builder" element={<ThemeBuilderPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
