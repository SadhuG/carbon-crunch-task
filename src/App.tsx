// image imports
import logo from "./assets/carbon-crunch-logo.png";
import handIcon from "./assets/hand-icon.png";

// ui imports
import { Button } from "./components/ui/button";

const App = () => {
  const navMenu = ["Service", "Blog", "About us", "Contact"];
  return (
    <div>
      <header>
        <nav>
          {/* logo */}
          <div>
            <img src={logo} alt="Carbon Crunch Logo" />
          </div>

          {/* nav items */}
          <div>
            {/* nav menu */}
            <ul>
              {navMenu.map((item, index) => (
                <a href="#" key={index}>
                  <li>{item}</li>
                </a>
              ))}
            </ul>

            <div>
              <Button>Login</Button>
              <Button>Book Demo</Button>
            </div>
          </div>
        </nav>

        {/* hero */}
        <section>
          {/* tagline */}
          <div>
            <img src={handIcon} alt="Hand Waving Icon" />
            <p>Let’s Save our Environment</p>
          </div>

          {/* main page heading */}
          <h1>
            Streamline Your Sustainability Reporting With{" "}
            <span>CARBON CRUNCH</span>
          </h1>

          {/* sub-heading */}
          <div>
            <p>
              <span>95%</span> Accurate Carbon Calculations Trusted by Industry
              Leaders
            </p>
          </div>

          {/* CTA */}
          <div>
            <Button>Free Calculator</Button>
            <Button>Book Demo</Button>
          </div>
        </section>
      </header>

      {/* slider section */}
      <main>
        <section>
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default App;
