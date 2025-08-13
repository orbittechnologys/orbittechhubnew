import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import img from "../../assets/img/img.png";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";

const cards = [
  {
    id: 1,
    title: "Orbit Learn",
    subtitle: "LMS & Digital Library",
    image: img,
    description:
      "A comprehensive Learning Management System designed for schools, colleges, and training institutions.System designed for schools, colleges, andSystem designed for schools, colleges, andSystem designed for schools, colleges, and",
    // color: "from-blue-400 to-blue-600",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "Standard Plan",
    subtitle: "LMS & Digital Library",
    image: img2,
    description:
      "Ideal for small teams looking for collaboration tools and more storage.",
    // color: "from-green-400 to-green-600",
    iconColor: "text-green-500",
    price: "$19/mo",
  },
  {
    id: 3,
    title: "Pro Plan",
    subtitle: "LMS & Digital Library",
    image: img3,
    description: "Advanced features and analytics for growing businesses.",
    // color: "from-purple-400 to-purple-600",
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    title: "Business Plan",
    subtitle: "LMS & Digital Library",
    image: img1,
    description:
      "Comprehensive tools and priority support for large organizations.",
    // color: "from-red-400 to-red-600",
    iconColor: "text-red-500",
  },
];

export default function Cards() {
  const { theme } = useTheme();
  const [selectedCard, setSelectedCard] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Animation trigger after component mounts
    setLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 py-12">
        <h1
          className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Select Your Card
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative rounded-sm overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform 
            ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } 
            ${selectedCard === card.id ? "ring-4 ring-blue-500 scale-105" : ""}
            ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedCard(card.id)}
              onMouseEnter={(e) =>
                e.currentTarget.classList.add("hover:scale-105")
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove("hover:scale-105")
              }
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-20 ${card.color}`}
              />

              <div className="relative z-10">
                {/* FULL-WIDTH IMAGE */}
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                )}

                {/* Card content */}
                <div className="p-6 flex flex-col justify-between h-56">
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <h6
                      className={`text-md  mb-3 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {card.subtitle}
                    </h6>
                  </div>

                  <p
                    className={`mb-6 text-xs ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {card.description.split(" ").slice(0, 14).join(" ")}...
                  </p>

                  {/* Button only */}
                  <div className="flex justify-start">
                    <button
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 
                    ${
                      selectedCard === card.id
                        ? "bg-blue-600 text-white"
                        : theme === "dark"
                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    >
                      {selectedCard === card.id ? "Selected" : "Learn More"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Selection indicator */}
              {selectedCard === card.id && (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
