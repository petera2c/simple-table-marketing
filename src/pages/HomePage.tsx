import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Simple Table</h1>
        <p className="text-xl text-gray-600 mb-8">A powerful yet lightweight React grid component</p>
        <div className="flex justify-center gap-4">
          <Button
            type="primary"
            size="large"
            href="https://codesandbox.io/p/sandbox/simple-table-pagination-example-rdjm5d"
            target="_blank"
          >
            Live Demo
          </Button>
          <Button size="large" href="https://www.npmjs.com/package/simple-table-core" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Get Started
          </Button>
        </div>
      </section>

      <section className="mb-16"></section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Highly Customizable", desc: "Fully customizable appearance with CSS variables and themes" },
          { title: "Cell Editing", desc: "Built-in support for editable cells with controlled state" },
          { title: "Column Management", desc: "Resize, reorder, pin, and hide columns with intuitive UI" },
          { title: "Pagination", desc: "Built-in pagination with customizable controls" },
          { title: "Infinite Scroll", desc: "Alternative to pagination for large datasets" },
          { title: "Performance Optimized", desc: "Efficiently renders thousands of rows and columns" },
        ].map((feature) => (
          <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started</h2>
        <div className="bg-gray-100 p-6 rounded-lg inline-block">
          <code className="text-sm text-gray-800">npm install simple-table-core</code>
        </div>
      </section>
    </div>
  );
};

export default Home;
