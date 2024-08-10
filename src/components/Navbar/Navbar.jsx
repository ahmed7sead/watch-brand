import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import LogoDark from "../../assets/logo-dark.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Top Sellers",
    link: "/#",
  },
  {
    name: "New Arrivals",
    link: "/#",
  },
  {
    name: "Trending Now",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Check dark mode on mount and when it changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    // Observer to watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="container py-3 md:py-0">
          <div className="flex justify-between items-center">
            {/* Logo Section - مكبر */}
            <div>
              <a href="#" className="text-2xl sm:text-3xl flex gap-2 items-center">
                <img
                  src={isDark ? LogoDark : Logo}
                  alt="Logo"
                  className="w-16 sm:w-20 md:w-24 uppercase transition-all duration-300"
                />
                <span className="font-bold">Watch</span>Store
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center gap-2 lg:gap-8">
              <div>
                <DarkMode />
              </div>
              <ul className="flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                {/* Simple Dropdown and Links */}
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-lg group-hover:block">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                onClick={() => handleOrderPopup()}
                className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-105 duration-200 py-1 px-4 rounded-full"
              >
                <FaCartShopping className="text-xl text-black dark:text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>

            {/* Mobile Menu Button & Icons */}
            <div className="flex md:hidden items-center gap-3">
              <DarkMode />
              <button
                onClick={() => handleOrderPopup()}
                className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-105 duration-200 py-1 px-2 rounded-full"
              >
                <FaCartShopping className="text-xl text-black dark:text-white drop-shadow-sm cursor-pointer" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-2xl p-2"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="text-black dark:text-white" />
                ) : (
                  <FaBars className="text-black dark:text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 mt-3">
              <ul className="space-y-2">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="block py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                {/* Mobile Dropdown Links */}
                <li>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 text-left"
                  >
                    <span>Quick Links</span>
                    <FaCaretDown
                      className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {mobileDropdownOpen && (
                    <ul className="mt-2 ml-4 space-y-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            href={data.link}
                            className="block py-2 px-4 hover:bg-white dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;  