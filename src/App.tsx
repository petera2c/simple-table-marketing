import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  useEffect(() => {
    if (
      window.location.protocol === "http:" &&
      window.location.hostname !== "localhost"
    ) {
      window.location.href = `https://${window.location.host}${window.location.pathname}`;
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
