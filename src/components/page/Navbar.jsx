import React, { useState } from "react";
import DarkTheme from "../buttons/DarkTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Contacto", to: "https://www.linkedin.com/in/ronal-llapapasca/" },
  ];

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex z-40 w-full h-auto py-4 items-center justify-center sticky top-0 inset-x-0 border-b border-divider backdrop-blur-lg backdrop-saturate-150 bg-background/70">
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-[1024px]">
        <a href="/" className="text-2xl font-bold">
          Ronal LLM
        </a>

        {/* Menú principal */}
        <ul className="h-full flex-row flex-nowrap items-center gap-4 sm:flex hidden">
          {links.map((link) => (
            <li
              className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold"
              key={link.to}
            >
              <a href={link.to} aria-label={`Ir a ${link.name}`}>
                {link.name}
              </a>
            </li>
          ))}
          <li> {/* Agregar DarkTheme dentro de <li> */}
            <DarkTheme />
          </li>
        </ul>

        {/* Botones para móviles */}
        <div className="sm:hidden">
          {/* Botón hamburger */}
          <button 
            onClick={handleHamburgerClick} 
            aria-label="Abrir menú de navegación"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className={`${isMenuOpen ? "hidden" : "block"}`}
            >
              <path
                fill="currentColor"
                d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
              ></path>
            </svg>
          </button>

          {/* Botón close */}
          <button 
            onClick={handleHamburgerClick} 
            aria-label="Cerrar menú de navegación"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className={`${!isMenuOpen ? "hidden" : "block"}`}
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Menú desplegable para móviles */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute top-14 left-0 w-full backdrop-blur-lg backdrop-saturate-150 bg-background/90 border-t border-divider`}
      >
        <ul className="flex flex-col items-center py-4">
          {links.map((link) => (
            <li className="text-medium py-2 text-center" key={link.to}>
              <a href={link.to} aria-label={`Ir a ${link.name}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
