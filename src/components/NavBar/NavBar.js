import NextImage from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ItemsBar } from "./ItemsBar";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white relative w-full z-20 top-0 left-0"
      style={{
        backgroundColor: "rgb(1, 62, 96)",
      }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-start md:items-center justify-between mx-auto p-4">
        <LogoComponent />
        <div
          className={`flex flex-col md:flex-row  ${
            isMenuOpen ? "items-end" : ""
          }`}
        >
          <div className="flex md:order-2">
            <LoginButton />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <ItemsBar id="navbar-sticky" isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </nav>
  );
};

const LoginButton = () => {
  return (
    <button
      type="button"
      className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-3 md:mr-0"
    >
      Ingresa
    </button>
  );
};

const LogoComponent = () => {
  return (
    <Link href="/" className="flex items-center">
      <NextImage width={150} height={100} src="/logo.png" alt="Yobizi Logo" />
    </Link>
  );
};
