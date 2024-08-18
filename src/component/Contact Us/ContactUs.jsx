import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-[#f8f6f3] dark:bg-[#121212] min-h-screen py-10">
      <div className="container mx-auto px-5">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-[#333333] dark:text-white mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#333333] dark:text-white mb-6">
              Get in Touch
            </h2>
            <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#333333] dark:text-gray-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#333333] dark:text-gray-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border rounded-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#333333] dark:text-gray-400 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 border rounded-lg dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black dark:bg-white  text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#333333] dark:text-white mb-6">
              Contact Information
            </h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-[#333333] dark:text-gray-400 mb-4">
                Feel free to reach out to us through any of the following methods. We’re here to help you with any questions or concerns you may have.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[#333333] dark:text-white">Our Address</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Main Street, Anytown, USA
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[#333333] dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[#333333] dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">info@vehiclerental.com</p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#333333] dark:text-white mb-6">
                Our Location
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.414346560336!2d-122.42101268468188!3d37.77564327975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818b5e4b3c4d%3A0xfb9f32f2e5c6a6f0!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1603098493214!5m2!1sen!2sin"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
