const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">My React Table</h1>
        <nav>
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-800 mx-4"
          >
            Features
          </a>
          <a href="#demo" className="text-gray-600 hover:text-gray-800 mx-4">
            Demo
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 mx-4">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
