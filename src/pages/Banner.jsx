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
    if (!isPlaying || isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  return (
    <div className="relative w-full">
      {/* Banner Section - unchanged for desktop */}
      <section
        className="relative w-full aspect-[16/6] max-h-[800px] bg-gray-100  "
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
                  alt={banner.heading}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* Desktop content box (unchanged) */}
                <div className="hidden sm:block absolute left-[5%] top-[10%] w-[40%] min-w-[300px] max-w-[600px] bg-white  p-6 shadow-sm">
                  <h2 className="text-2xl sm:text-3xl lg:text-2xl font-bold mb-4 text-gray-800 ">
                    {banner.heading}
                  </h2>
                  <p className="text-sm lg:text-base mb-6 text-gray-600 ">
                    {banner.subheading}
                  </p>
                  <button className="px-4 py-2 bg-[#005CA5] hover:bg-[#005ba5b9] text-white transition-colors duration-300">
                    {banner.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile content box (appears below banner) */}
      <div className="sm:hidden w-full bg-white  p-4 shadow-xl">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-xl font-bold mb-2 text-gray-800 ">
            {banners[currentSlide].heading}
          </h2>
          <p className="text-sm mb-4 text-gray-600 ">
            {banners[currentSlide].subheading}
          </p>
          <button className="px-4 py-2 bg-[#0067B8] hover:bg-blue-700 text-white transition-colors duration-300">
            {banners[currentSlide].buttonText}
          </button>
        </div>
      </div>

      {/* Slide Controls - unchanged */}
      <div className="relative pt-2 flex justify-center gap-2  ">
        <div className="relative flex items-center justify-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full outline outline-1 p-[2px]"
          >
            {isPlaying ? (
              <FiPause size={12} className="fill-black " />
            ) : (
              <FiPlay className="fill-black " size={12} />
            )}
          </button>

          <button
            onClick={prevSlide}
            className="p-3 rounded-full hover:outline-none"
          >
            <FiChevronLeft size={24} />
          </button>

          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border  border-black transition-colors 
                ${
                  currentSlide === index
                    ? "bg-black"
                    : "bg-transparent hover:bg-white/50"
                }`}
            />
          ))}

          <button
            onClick={nextSlide}
            className="p-3 rounded-full hover:outline-none"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
