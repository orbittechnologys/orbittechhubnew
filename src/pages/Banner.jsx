import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from "react-icons/fi";
import ban1 from "../assets/ban1.png";
import ban2 from "../assets/bann2.jpg";
import ban3 from "../assets/ban3.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const banners = [
    { id: 1, image: ban1, alt: "Innovative technology solutions" },
    { id: 2, image: ban2, alt: "Cloud computing services" },
    { id: 3, image: ban3, alt: "Enterprise productivity tools" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying || isHovered) return; // stop if paused or hovered
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  return (
    <>
      <section
        className="relative w-full  aspect-[16/6]  max-h-[800px] bg-gray-100 dark:bg-gray-900 dark:text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides container */}
        <div className="relative w-full h-full overflow-hidden">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover "
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10" />

                <div className="absolute bottom-[20%] max-w-7xl text-white px-8 sm:px-10 lg:px-24 2xl:px-96">
                  <h2 className="text-2xl  sm:text-3xl lg:text-4xl 2xl:text-7xl font-light ">
                    Professional Headline
                  </h2>
                  <p className="text-xs  lg:text-lg mb-2">
                    Supporting description text goes here.
                  </p>
                  <button className="px-2 py-1 text-xs sm:text-sm md:text-base 2xl:text-xl  bg-blue-600 hover:bg-blue-700 transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Slide Indicators - Fixed position */}
      <div className="relative pt-2  flex justify-center gap-2 dark:bg-gray-900 dark:text-white">
        <div className="relative flex items-center justify-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className=" rounded-full  outline outline-1 p-[2px]"
          >
            {isPlaying ? (
              <FiPause
                size={12}
                className=" fill-black" // adds stroke and fill color
              />
            ) : (
              <FiPlay className=" fill-black" size={12} />
            )}
          </button>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full hover:outline-none"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Slide Indicators */}
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border dark:border-white border-black transition-colors 
        ${
          currentSlide === index
            ? "dark:bg-white bg-black"
            : "bg-transparent hover:bg-white/50"
        }`}
            />
          ))}

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 rounded-full hover:outline-none"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
