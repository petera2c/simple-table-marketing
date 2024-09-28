import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            The Ultimate React Table Component
          </h2>
          <p className="text-lg mb-8">
            Fast, flexible, and easy to use. Perfect for your next project.
          </p>
          <a
            href="#demo"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
          >
            View Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
