import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header>
      <nav className="fixed top-0 w-full bg-black border-b border-gray-300 z-[1000] flex justify-between items-center h-14 px-4 sm:px-6 md:px-8">
        <h3 className="text-yellow-400 text-xl">Berken.dev</h3>

        <ul className="hidden lg:flex gap-8">
          <li>
            <a
              href="#home"
              aria-label="go to home"
              className="text-gray-300 text-lg hover:text-yellow-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              aria-label="go to about"
              className="text-gray-300 text-lg hover:text-yellow-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              aria-label="go to projects"
              className="text-gray-300 text-lg hover:text-yellow-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              aria-label="go to contact"
              className="text-gray-300 text-lg hover:text-yellow-400"
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className="flex lg:hidden">
          <li>
            <div
              id="burgerOpen"
              aria-label="open menu"
              className="text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              {!menuOpen && <i className="fa-solid fa-bars fa-2xl"></i>}
              {menuOpen && <i className="fa-solid fa-xmark fa-2xl"></i>}
            </div>
          </li>
        </ul>

        {menuOpen && (
          <div
            id="burgerMenu"
            className="absolute top-full left-0 w-full bg-black text-gray-300 p-4"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
