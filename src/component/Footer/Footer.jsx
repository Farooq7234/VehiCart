import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vehicle Rental Co.</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for hassle-free vehicle rentals. We offer a wide range of vehicles to suit your travel needs.
            </p>
            <p className="text-gray-400">
              123 Main Street, Anytown, USA
            </p>
            <p className="text-gray-400">Email: info@vehiclerental.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white transition">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white transition">Vehicles</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white transition">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-10">
          <p>&copy; 2024 Vehicle Rental Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
