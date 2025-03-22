import { useState } from "react";
import logo from "../assets/carbon-crunch-logo.png";
import { Button } from "./ui/button";

const Navbar = () => {
  const navMenu = ["Service", "Blog", "About us", "Contact"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-[1440px] px-4">
      <div className="flex w-full items-center justify-between py-4">
        {/* logo */}
        <div className="h-[50px] w-50">
          <img src={logo} alt="Carbon Crunch Logo" />
        </div>
        {/* Desktop nav items */}
        <div className="hidden items-center space-x-36 lg:flex">
          {/* nav menu */}
          <ul className="flex space-x-8 rounded-2xl bg-white px-6 py-4 font-medium">
            {navMenu.map((item, index) => (
              <a href="#" key={index}>
                <li>{item}</li>
              </a>
            ))}
          </ul>
        </div>
        {/* Desktop buttons */}
        <div className="hidden space-x-4 lg:flex">
          <Button variant={"secondary"}>Login</Button>
          <Button variant={"default"}>Book Demo</Button>
        </div>
        {/* Mobile hamburger menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex w-8 flex-col gap-2"
          >
            <div
              className={`h-[3px] w-1/2 origin-left rounded-2xl bg-black duration-500 ${
                mobileMenuOpen ? "-translate-x-[-5px] rotate-[45deg]" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] w-full rounded-2xl bg-black duration-500 ${
                mobileMenuOpen ? "-rotate-45" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] w-1/2 origin-right place-self-end rounded-2xl bg-black duration-500 ${
                mobileMenuOpen ? "translate-x-[-5px] rotate-[45deg]" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="rounded-b-2xl bg-white p-4 lg:hidden">
          <ul className="flex flex-col space-y-4 font-medium">
            {navMenu.map((item, index) => (
              <a href="#" key={index} className="block">
                {item}
              </a>
            ))}
          </ul>
          <div className="mt-4 flex flex-col space-y-2">
            <Button variant="secondary">Login</Button>
            <Button variant="default">Book Demo</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
