import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

const options = ["Features"];

const Header = () => {
  const navigate = useNavigate();

  const handleSelect = (option: string) => {
    navigate(`#${option.toLowerCase()}`);
  };

  return (
    <header className="bg-white shadow sticky top-0">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a href="/#" className="text-2xl font-bold text-gray-800">
          Simple Table
        </a>
        <div className="md:hidden">
          <Dropdown options={options} onSelect={handleSelect}>
            <button className="text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </Dropdown>
        </div>
        <nav className="hidden md:flex">
          {options.map((option) => (
            <a
              key={option}
              href={`#${option.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-800 mx-4"
            >
              {option}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
