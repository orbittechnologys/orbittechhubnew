import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

function FadeInSection({
  children,
  threshold = 0.2,
  rootMargin = "0px 0px",
  className = "",
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

export default function MicrosoftCards({ title, cards }) {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-16 ">
      <div className="container px-4 max-w-6xl mx-auto 2xl:max-w-[1700px] ">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900 text-start">
          {title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6 ">
          {cards.map((card, index) => (
            <FadeInSection
              key={card.id}
              className="relative bg-white border border-gray-200 hover:shadow-md transition-all duration-200 shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10 h-full flex flex-col">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                )}

                <div className="px-4 py-2 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <h6 className="text-sm text-black">{card.subtitle}</h6>
                  </div>

                  <p className="text-sm text-black mb-6 flex-grow">
                    {card.description}
                  </p>

                  <div className="mb-4">
                    <button
                      className="px-4 py-1.5 font-medium transition-colors duration-300 
                      bg-[#0067B8] text-white hover:bg-[#005CA5] text-sm
                      flex items-center justify-center w-[56]"
                    >
                      Learn more
                      {/* <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg> */}
                    </button>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
