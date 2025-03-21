// component imports
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./components/EmblaCarousel/EmblaCarousel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const slides = [0, 1, 2, 3, 4];
  const options: EmblaOptionsType = { loop: true };

  return (
    <div>
      <header
        className={`h-[100vh] w-full bg-[url(./assets/background.png)] bg-cover bg-center py-14`}
      >
        <Navbar />
        <Hero />
      </header>

      {/* slider section */}
      <main className="container mx-auto">
        <section>
          <EmblaCarousel slides={slides} options={options} />
        </section>
      </main>
    </div>
  );
};

export default App;
