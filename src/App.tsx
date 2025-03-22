// Image imports
import cuttingEmissions from "./assets/cutting-emissions.jpg";
import esgPerformance from "./assets/esg-performance.jpg";
import netZero from "./assets/net-zero.jpg";
import plantingTree from "./assets/planting-tree.jpg";

// component imports
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";

// plugin imports
import Autoplay from "embla-carousel-autoplay";

const App = () => {
  const slides = [
    {
      tagline: "SUSTAINABILITY",
      heading: "98 %",
      subHeading: (
        <>
          of CEOs agree sustainability is their <strong>responsibility</strong>
        </>
      ),
      image: plantingTree,
    },
    {
      tagline: "ESG PERFORMANCE",
      heading: "3x",
      subHeading: (
        <>
          ESG high performers <strong>deliver</strong> a higher total
          shareholder return
        </>
      ),
      image: esgPerformance,
    },
    {
      tagline: "OFF-TRACK",
      heading: "37%",
      subHeading: (
        <>
          of top companies have a net zero goal – most are{" "}
          <strong>off track</strong>
        </>
      ),
      image: netZero,
    },
    {
      tagline: "CUTTING EMISSIONS",
      heading: "18%",
      subHeading: (
        <>
          of companies are on track for net zero by <strong>2050</strong>
        </>
      ),
      image: cuttingEmissions,
    },
  ];

  return (
    <div>
      <header
        className={`h-[100vh] w-full bg-[url(./assets/background.png)] bg-cover bg-center`}
      >
        <Navbar />
        <Hero />
      </header>

      {/* slider section */}
      <main className="max-w-[1440px]">
        <section className="mx-auto py-20 md:mx-5">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-full justify-center overflow-hidden rounded-2xl pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative flex h-96 cursor-pointer justify-center overflow-hidden rounded-2xl text-gray-50 duration-700 hover:duration-700 lg:h-[500px]">
                    <div className="h-full w-full bg-lime-400 text-gray-800">
                      <img
                        src={slide.image}
                        alt="slide"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="bg-secondary-green absolute flex h-36 w-full flex-col gap-1 p-3 duration-500 group-hover:-bottom-0 group-hover:duration-600 lg:-bottom-24">
                      <span className="text-primary-green font-bold">
                        {slide.tagline}
                      </span>
                      <span className="text-3xl font-bold text-gray-800">
                        {slide.heading}
                      </span>
                      <p className="text-neutral-800">{slide.subHeading}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}

              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-full justify-center overflow-hidden rounded-2xl pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative flex h-96 cursor-pointer justify-center overflow-hidden rounded-2xl text-gray-50 duration-700 hover:duration-700 lg:h-[500px]">
                    <div className="h-full w-full bg-lime-400 text-gray-800">
                      <img
                        src={slide.image}
                        alt="slide"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="bg-secondary-green absolute flex h-36 w-full flex-col gap-1 p-3 duration-500 group-hover:-bottom-0 group-hover:duration-600 lg:-bottom-24">
                      <span className="text-primary-green font-bold">
                        {slide.tagline}
                      </span>
                      <span className="text-3xl font-bold text-gray-800">
                        {slide.heading}
                      </span>
                      <p className="text-neutral-800">{slide.subHeading}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </main>
    </div>
  );
};

export default App;
