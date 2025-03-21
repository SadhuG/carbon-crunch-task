import logo from "../assets/carbon-crunch-logo.png";
import { Button } from "./ui/button";

const Navbar = () => {
  const navMenu = ["Service", "Blog", "About us", "Contact"];

  return (
    <nav className="max-w mx-14">
      <div className="flex w-full items-center justify-between">
        {/* logo */}
        <div className="h-[50px] w-50">
          <img src={logo} alt="Carbon Crunch Logo" />
        </div>
        {/* nav items */}
        <div className="flex items-center space-x-36">
          {/* nav menu */}
          <ul className="flex space-x-8 rounded-2xl bg-white px-6 py-4 font-medium">
            {navMenu.map((item, index) => (
              <a href="#" key={index}>
                <li>{item}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="flex space-x-4">
          <Button variant={"secondary"}>Login</Button>
          <Button variant={"default"}>Book Demo</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
