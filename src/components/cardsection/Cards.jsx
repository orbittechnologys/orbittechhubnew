import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

function FadeInSection({
  children,
  threshold = 0.2, // % of element that must be visible
  rootMargin = "0px 0px", // tweak if you want earlier trigger
  className = "", // extra classes for your content
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={[
        className,
        "transition-all duration-500 ease-in-out transform",
        "will-change-transform will-change-opacity",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function Cards({ title, cards }) {
  const { theme } = useTheme();
  // const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className={`transition-colors duration-300   px-4 sm:px-6 lg:px-8`}>
      <div className="container px-4 py-12 max-w-6xl mx-auto 2xl:max-w-[1700px]">
        <h1
          className={`text-3xl font-bold mb-8 transition-colors duration-300`}
        >
          {title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8 place-items-center">
          {cards.map((card, index) => (
            <FadeInSection
              key={card.id}
              className={[
                "relative max-w-xs rounded-sm bg-white overflow-hidden shadow-lg hover:scale-105",
              ].join(" ")}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-20 ${card.color}`}
              />

              <div className="relative z-10">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                )}

                <div className="p-6 flex flex-col justify-between h-56">
                  <div>
                    <h3
                      className={`text-xl font-semibold  ${
                        theme === "" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <h6
                      className={`text-md  ${
                        theme === "" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {card.subtitle}
                    </h6>
                  </div>

                  <p
                    className={` text-xs ${
                      theme === "" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {card.description.split(" ").slice(0, 8).join(" ")}...
                  </p>

                  <div className="flex justify-start">
                    <button
                      className={`px-4 py-2  font-medium transition-colors duration-300 bg-[#005CA5] text-white hover:bg-[#005ba5d0] `}
                      onClick={() => setSelectedCard(card.id)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* {selectedCard === card.id && (
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              )} */}
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
