import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Features from "./Features";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
