// component imports
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StatCarousel from "./components/StatCarousel";

const App = () => {
  return (
    <div>
      <header
        className={`h-[100vh] w-full bg-[url(./assets/background.png)] bg-cover bg-center`}
      >
        <Navbar />
        <Hero />
      </header>

      {/* slider section */}
      <main className="mx-auto max-w-[1440px]">
        <StatCarousel />
      </main>
    </div>
  );
};

export default App;
