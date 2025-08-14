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
    <div className="relative w-ful9">
      {/* Mobile Layout  */}
      <div
        className="flex flex-col xl:hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Banner Section */}
        <section className="relative w-full bg-gray-100 ">
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] overflow-hidden">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-500  ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.heading}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Card Section */}
        <div className="lg:px-6 lg:mt-[-40px] z-10">
          {" "}
          <div className="bg-white w-full p-6 sm:p-8 shadow-md ">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              {banners[currentSlide].heading}
            </h2>
            <p className="text-sm md:text-base mb-4 text-gray-600">
              {banners[currentSlide].subheading}
            </p>
            <button className="px-4 py-2 bg-[#005CA5] hover:bg-[#005ba5b9] text-white transition-colors duration-300">
              {banners[currentSlide].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout*/}
      {/* Desktop Layout (≥768px) */}
      <div className="relative w-full hidden xl:block max-w-[1900px] mx-auto  ">
        <section
          className="relative w-full aspect-[16/6] max-h-[650px] bg-gray-100" // limit height
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

                  {/* Desktop content box */}
                  <div
                    className="hidden sm:flex absolute 
                left-[7%] top-[15%] lg:top-[20%] 
                w-[40%] lg:w-[35%] 
                min-w-[250px] max-w-[550px] 
                bg-white flex-col gap-4 p-8 lg:p-12 shadow-sm"
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
                      {banner.heading}
                    </h2>
                    <p className="text-sm lg:text-base mb-5 text-gray-600">
                      {banner.subheading}
                    </p>
                    <button className="px-4 py-2 bg-[#005CA5] hover:bg-[#005ba5b9] text-white transition-colors max-w-[50%] duration-300">
                      {banner.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Controls */}
      <div className="relative pt-4 flex justify-center gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full outline outline-1 p-[2px]"
          >
            {isPlaying ? (
              <FiPause size={12} className="fill-black" />
            ) : (
              <FiPlay size={12} className="fill-black" />
            )}
          </button>

          <button onClick={prevSlide} className="p-3 rounded-full">
            <FiChevronLeft size={24} />
          </button>

          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border border-black transition-colors ${
                currentSlide === index
                  ? "bg-black"
                  : "bg-transparent hover:bg-white/50"
              }`}
            />
          ))}

          <button onClick={nextSlide} className="p-3 rounded-full">
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
