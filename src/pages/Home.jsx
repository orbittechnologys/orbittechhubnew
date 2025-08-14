import React from "react";
import Banner from "./Banner";
import Cards from "../components/cardsection/Cards";
import middleBanner from "../assets/middleBanner.jpg";

import img from "../assets/img/img.png"; // Orbit Learn
import img1 from "../assets/img/img1.png"; // Orbit Care
import img2 from "../assets/img/img2.png"; // Orbit Blockchain
import img3 from "../assets/img/img3.png"; // Orbit Connect

const products = [
  {
    id: 1,
    title: "Orbit Learn",
    subtitle: "LMS & Digital Library",
    image: img,
    description:
      "A comprehensive Learning Management System designed for schools, colleges, and training institutions.",
    iconColor: "text-blue-500",
    // color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "Orbit Care",
    subtitle: "Hospital Management System",
    image: img1,
    description:
      "A comprehensive end-to-end clinic management solution, featuring dedicated modules for doctor portals.",
    iconColor: "text-green-500",
    // color: "from-green-400 to-green-600",
  },
  {
    id: 3,
    title: "Orbit Blockchain",
    subtitle: "Crypto Wallet & DEX",
    image: img2,
    description:
      "A secure DeFi platform that empowers users with a non-custodial wallet and a decentralized exchange.",
    iconColor: "text-purple-500",
    // color: "from-purple-400 to-purple-600",
  },
  {
    id: 4,
    title: "Orbit Connect",
    subtitle: "Internal Social Platform",
    image: img3,
    description:
      "A LinkedIn-style platform designed for organizations to create and nurture internal communities.",
    iconColor: "text-red-500",
    // color: "from-red-400 to-red-600",
  },
];

// components/ServicesGrid.jsx
import img0 from "../assets/img/service img/img.png";
import img4 from "../assets/img/service img/img1.png";
import img5 from "../assets/img/service img/img2.png";
import img6 from "../assets/img/service img/img3.png";

const services = [
  {
    id: 1,
    title: "Orbit Learn",
    subtitle: "LMS & Digital Library",
    image: img0,
    description:
      "A comprehensive Learning Management System designed for schools, colleges, and training institutions.",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "Orbit Care",
    subtitle: "Hospital Management System",
    image: img4,
    description:
      "A comprehensive end-to-end clinic management solution, featuring dedicated modules for doctor portals.",
    iconColor: "text-green-500",
  },
  {
    id: 3,
    title: "Orbit Blockchain",
    subtitle: "Crypto Wallet & DEX",
    image: img5,
    description:
      "A secure DeFi platform that empowers users with a non-custodial wallet and a decentralized exchange.",
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    title: "Orbit Connect",
    subtitle: "Internal Social Platform",
    image: img6,
    description:
      "A LinkedIn‑style platform designed for organizations to create and nurture internal communities.",
    iconColor: "text-red-500",
  },
];

function Home() {
  return (
    <div>
      <Banner />
      <Cards title={"Products"} cards={products} />
      <div className="relative max-w-6xl mx-auto text-white 2xl:max-w-[1700px]">
        <img
          src={middleBanner}
          alt="middleBanner"
          className="w-full h-auto object-cover min-h-[300px]"
        />
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2 w-96 p-6 ">
          <h1 className="text-4xl font-semibold mb-4">Orbit IT Solutions</h1>
          <p className="text-sm font-normal mb-6 leading-normal">
            Delivering smart IT solutions, cloud services, and digital
            transformation for businesses worldwide.
          </p>
          <button className="bg-[#0067B8] px-5 py-1.5 text-base font-medium hover:bg-[#005CA5] transition-colors duration-200 flex items-center">
            Explore
          </button>
        </div>
      </div>

      <Cards title={"Services"} cards={services} />
    </div>
  );
}

export default Home;
