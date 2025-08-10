import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Contact <span className="text-[#236053]">Us</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Fill out the form or reach us using the details below.
            </p>
            <div className="space-y-4">
              <p>
                📍 <span className="font-semibold">Address:</span> 123 Main Street, Dhaka, Bangladesh
              </p>
              <p>
                📞 <span className="font-semibold">Phone:</span> +880 1234 567890
              </p>
              <p>
                📧 <span className="font-semibold">Email:</span> info@hotelstar.com
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#236053] text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
