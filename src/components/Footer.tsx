import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} React Simple Table. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
