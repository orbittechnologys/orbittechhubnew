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
    {
      id: 1,
      image: ban1,

      heading: "Orbit Care",
      subheading:
        "A comprehensive end-to-end clinic management solution, featuring dedicated modules for doctor portals.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: ban2,

      heading: "Orbit Learn",
      subheading:
        "A comprehensive Learning Management System designed for schools, colleges, and training institutions.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      image: ban3,

      heading: "Orbit Connect",
      subheading:
        "A LinkedIn-style platform designed for organizations to create and nurture internal communities.",
      buttonText: "Learn More",
    },
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
        className="relative w-full aspect-[16/6] max-h-[800px] bg-gray-100 dark:bg-gray-900 dark:text-white"
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
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* White content box */}
                <div className="absolute left-[5%] top-[10%] w-[40%] min-w-[300px] max-w-[600px] bg-white  p-6  shadow-xl">
                  <h2 className="text-2xl sm:text-3xl lg:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    {banner.heading}
                  </h2>
                  <p className="text-sm lg:text-base mb-6 text-gray-600 dark:text-gray-300">
                    {banner.subheading}
                  </p>
                  <button className="px-4 py-2 bg-[#0067B8] hover:bg-blue-700 text-white transition-colors duration-300">
                    {banner.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide Indicators - Fixed position */}
      <div className="relative pt-2 flex justify-center gap-2 dark:bg-gray-900 dark:text-white">
        <div className="relative flex items-center justify-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full outline outline-1 p-[2px]"
          >
            {isPlaying ? (
              <FiPause size={12} className="fill-black dark:fill-white" />
            ) : (
              <FiPlay className="fill-black dark:fill-white" size={12} />
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
