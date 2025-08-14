// src/components/Footer.jsx
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 items-center ">
      <div className="max-w-6xl mx-auto 2xl:max-w-[1700px]">
        {/* Social Icons */}
        <div className="  px-6 py-8 border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <span className="font-medium">Follow Orbit</span>
            <a
              href="https://www.linkedin.com/company/81867787/admin/dashboard/"
              className="p-2 rounded-full   hover:bg-gray-300  transition"
              target="_blank"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/orbit_technologys/"
              className="p-2 rounded-full   hover:bg-gray-300 transition"
              target="_blank"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="  px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact */}
          <div className="text-xs">
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <p>Email: info@orbittechnology.com</p>
            <p className="mt-2">
              Address: Shop no 23, 3rd Floor, Satellite complex, Koppikar Rd, J
              C Nagar, New Hubli, Hubballi, Karnataka 580020
            </p>
            <p className="mt-2">Phone no: 0836 405 2529</p>
          </div>

          {/* Orbit Store */}
          <div className="md:ml-8">
            <h3 className="font-semibold mb-4 ">Orbit Store</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:underline">
                  Orbit Learn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orbit Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orbit Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orbit Connect
                </a>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-semibold mb-4">Business</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:underline">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cloud & Datacenter Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blockchain & Fintech Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Product Strategy & Technical Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:underline">
                  Main Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Offered Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Job Openings
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-xs">
          <div className=" mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex gap-4">
              <a href="#" className="hover:underline">
                Contact Orbit
              </a>
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Terms of use
              </a>
              <p>© Orbit Tech-Hub 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
