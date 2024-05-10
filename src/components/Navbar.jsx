import React from "react";
import { brandLogo } from "../assets";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Flashcard", path: "/" },
  { label: "Contact", path: "/" },
  { label: "FAQ", path: "#faq" },
  { label: "Login", path: "/" },
];

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center w-full py-[1.5rem] flex-wrap gap-[1rem] md:gap-0">
        <Link to="/">
          <img src={brandLogo} alt="brandLogo" className="h-[32px] md:h-[39px] md:w-[191px]" />
        </Link>
        <ul className="navLinks text-[18px] flex gap-[.5rem] md:gap-[2rem] justify-center items-center font-normal flex-wrap">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`${
                  link?.label === "Login"
                    ? "loginBtn text-white px-3 md:px-[40px] py-1 md:py-[13px] rounded-3xl !font-medium  hover:border-[#06286e] border-2 !border-transparent"
                    : "hover:underline text-[##3A3740]"
                } `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
