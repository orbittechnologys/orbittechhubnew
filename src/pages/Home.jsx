import React from "react";
import Banner from "./Banner";
import Cards from "../components/cardsection/cards";
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
      <div className="relative max-w-6xl m-auto text-white p-4 ">
        <img src={middleBanner} alt="middleBanner" className="w-full h-auto" />
        <div className="absolute top-1/2 left-4 md:left-16 xl:left-36 2xl:left-36 transform -translate-y-1/2 w-64 p-2 ">
          <h1 className="text-sm md:text-2xl  mb-1">Orbit IT Solutions</h1>
          <p className="text-[5px] sm:text-xs w-20 sm:w-40 md:w-52  ">
            Delivering smart IT solutions, cloud services, and digital
            transformation for businesses worldwide.
          </p>
          <button className="bg-blue-600 px-1 py-1 mt-1 text-xs">
            Explore
          </button>
        </div>
      </div>

      <Cards title={"Services"} cards={services} />
    </div>
  );
}

export default Home;
