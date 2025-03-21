// image imports
import handIcon from "../assets/hand-icon.png";

// ui imports
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex h-full w-full items-center justify-center">
      {/* tagline */}
      <div className="container flex flex-col items-center justify-center">
        <div className="flex w-fit items-center space-x-1 rounded-full bg-[#070708] py-2 pr-5 pl-2 text-sm font-medium text-[#AFB0B6]">
          <img src={handIcon} alt="Hand Waving Icon" />
          <p>Let’s Save our Environment</p>
        </div>

        {/* main page heading */}
        <h1 className="mb-4 text-center text-6xl font-bold">
          Streamline Your Sustainability Reporting With{" "}
          <span className="text-primary-green">CARBON CRUNCH</span>
        </h1>

        {/* sub-heading */}
        <div>
          <p>
            <span className="text-primary-green font-bold">95%</span> Accurate
            Carbon Calculations Trusted by Industry Leaders
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex space-x-4">
          <Button variant={"white"} size={"tall"}>
            Free Calculator
          </Button>
          <Button variant={"default"} size={"tall"}>
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
