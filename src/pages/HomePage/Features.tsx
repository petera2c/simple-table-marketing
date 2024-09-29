import React, { useState } from "react";

const featuresData = [
  {
    title: "Beautiful",
    description:
      "The table looks good. Like, really good. It's the supermodel of tables. You'll want to swipe right.",
  },
  {
    title: "Fast",
    description:
      "We don't import any third-party libraries, leading to a small bundle size. Did we mention the table updates almost immediately? Blink and you'll miss it!",
  },
  {
    title: "Customizable",
    description:
      "Everything is customizable. Every color, padding, margin, transition speed, etc. You name it, you can tweak it. Go wild!",
  },
  {
    title: "Feature Rich",
    description:
      "Everything a table needs to have and should have. From cell selection, drag and drop, to copying cells, range handles, fill handles, smooth transitions, tooltips, expressions, view refresh, reference data, text selection, and more. It's like the Swiss Army knife of tables.",
  },
];

const Features = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData
            .slice(0, showMore ? featuresData.length : 3)
            .map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={toggleShowMore}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
