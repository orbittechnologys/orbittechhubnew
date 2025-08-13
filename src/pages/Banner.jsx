import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ban1 from "../assets/orbitban1.jpg";
import ban2 from "../assets/orbitban2.jpg";
import ban3 from "../assets/orbitban3.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, banners.length]);

  return (
    <section
      className=" w-full aspect-[16/6] max-h-[800px] bg-gray-100 dark:bg-gray-900"
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10" />

              <div className="absolute left-[10%] bottom-[20%] max-w-xl text-white ">
                <h2 className="text-4xl font-light mb-4">
                  Professional Headline
                </h2>
                <p className="text-lg mb-6">
                  Supporting description text goes here.
                </p>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators - Fixed position */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-white w-8 scale-110"
                : "bg-white/60 hover:bg-white/80 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={` left-4 top-1/2 -translate-y-1/2   p-3 rounded-full focus:outline-none z-10 transition-all ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className={` right-4 top-1/2 -translate-y-1/2   p-3 rounded-full focus:outline-none z-10 transition-all ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>
    </section>
  );
};

export default Banner;
