import React from "react";

const ThemeBuilderPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Simple Table Theme Builder</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Create and customize your own Simple Table theme with our interactive builder.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="text-center text-xl text-gray-500">
          Theme builder content will be added here in a future update.
        </div>
      </div>
    </div>
  );
};

export default ThemeBuilderPage;
