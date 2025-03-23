import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faCog } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "../components/home/FeatureCard";
import HeroSection from "../components/home/HeroSection";
import DemoSection from "../components/home/DemoSection";
import CTASection from "../components/home/CTASection";

const features = [
  {
    title: "Powerful Data Handling",
    description:
      "Sort, filter, and paginate your data with ease. Handle large datasets efficiently with virtualized scrolling.",
    icon: <FontAwesomeIcon icon={faDesktop} className="text-4xl text-primary" />,
  },
  {
    title: "Highly Customizable",
    description:
      "Style every aspect of your tables with our theming system. Create custom themes or use our predefined ones.",
    icon: <FontAwesomeIcon icon={faPaintBrush} className="text-4xl text-primary" />,
  },
  {
    title: "Developer Friendly",
    description:
      "Built with TypeScript for type safety and great developer experience. Comprehensive documentation and examples.",
    icon: <FontAwesomeIcon icon={faCode} className="text-4xl text-primary" />,
  },
  {
    title: "Advanced Features",
    description:
      "Row expansion, cell editing, column resizing, and more built-in features to create powerful data tables.",
    icon: <FontAwesomeIcon icon={faCog} className="text-4xl text-primary" />,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Powerful Features for Modern Web Apps</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple Table provides everything you need to create beautiful, responsive data tables without the
              complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />

      {/* Theme Builder Promo */}
      <section className="py-20 bg-gradient-to-r from-primary-light to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Create Your Custom Theme</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Use our interactive theme builder to create the perfect look for your tables and export the code with a
            single click.
          </p>
          <Link
            to="/theme-builder"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-md shadow-md hover:bg-gray-100 transition-colors"
          >
            Try Theme Builder
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default HomePage;
