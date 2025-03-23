import React from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Build Better Tables?</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Simple Table is free, open-source, and built with developers in mind. Get started today and transform your
          data tables.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button
            type="primary"
            size="large"
            className="bg-primary hover:bg-primary-dark h-12 px-8 flex items-center justify-center"
            href="https://docs.simple-table.com/getting-started"
            target="_blank"
          >
            Get Started
          </Button>

          <Button
            size="large"
            icon={<FontAwesomeIcon icon={faGithub} />}
            className="border-gray-300 h-12 px-8 flex items-center justify-center"
            href="https://github.com/yourusername/simple-table"
            target="_blank"
          >
            Star on GitHub
          </Button>
        </div>

        <div className="mt-12 p-4 bg-gray-100 rounded-lg inline-block">
          <code className="text-gray-800">npm install simple-table-core</code>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
