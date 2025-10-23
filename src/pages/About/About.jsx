import React from 'react';
import hotelJPG from '../../assets/hotel.jpg';
import { Helmet } from 'react-helmet';
import { FaBed, FaUtensils, FaSpa, FaSwimmingPool, FaStar, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Hotel Star</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-28 space-y-24">

        {/* Hero / Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={hotelJPG}
            alt="Hotel Building"
            className="rounded-xl shadow-2xl w-full object-cover transition-transform transform hover:scale-105"
          />
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#236053]">Welcome to Hotel Star</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hotel Star is your premier destination for luxury, comfort, and memorable experiences. We blend modern amenities with exceptional hospitality to provide guests with an unforgettable stay.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From business trips to family vacations, our hotel is designed to cater to every need. Enjoy world-class services, elegant rooms, fine dining, and rejuvenating wellness facilities.
            </p>
          </div>
        </div>

        {/* Our Philosophy & Mission */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#236053]">Our Philosophy & Mission</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our mission is simple: to create a sanctuary of comfort and elegance where every guest feels valued and cared for. We believe that exceptional service, attention to detail, and a warm, welcoming atmosphere make every stay truly memorable.
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At Hotel Star, we focus on sustainability, responsible tourism, and personalized experiences to ensure your stay is not only luxurious but also meaningful.
          </p>
        </div>

        {/* Amenities & Services */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#236053] mb-10">Our Amenities & Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FaBed className="text-[#236053] text-4xl mb-2" />
              <span className="text-gray-700 font-medium text-center">Luxury Rooms & Suites</span>
            </div>
            <div className="flex flex-col items-center">
              <FaUtensils className="text-[#236053] text-4xl mb-2" />
              <span className="text-gray-700 font-medium text-center">Gourmet Dining</span>
            </div>
            <div className="flex flex-col items-center">
              <FaSpa className="text-[#236053] text-4xl mb-2" />
              <span className="text-gray-700 font-medium text-center">Wellness & Spa</span>
            </div>
            <div className="flex flex-col items-center">
              <FaSwimmingPool className="text-[#236053] text-4xl mb-2" />
              <span className="text-gray-700 font-medium text-center">Swimming Pool & Fitness</span>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#f8f8f8] rounded-xl shadow-lg p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#236053]">Why Choose Hotel Star?</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="flex items-start gap-4">
              <FaStar className="text-yellow-400 text-3xl mt-1" />
              <p className="text-gray-700">Exceptional customer service with personalized attention to every guest.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaAward className="text-[#236053] text-3xl mt-1" />
              <p className="text-gray-700">Award-winning hospitality with high ratings and satisfied guests worldwide.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaBed className="text-[#236053] text-3xl mt-1" />
              <p className="text-gray-700">Elegant rooms and suites equipped with modern amenities for maximum comfort.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaSpa className="text-[#236053] text-3xl mt-1" />
              <p className="text-gray-700">Exclusive wellness, spa, and recreational facilities for relaxation and rejuvenation.</p>
            </div>
          </div>
        </div>

        {/* Fun Stats / Achievements */}
        <div className="grid sm:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#236053]">150+</h3>
            <p className="text-gray-600">Luxury Rooms</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#236053]">2000+</h3>
            <p className="text-gray-600">Happy Guests</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#236053]">50+</h3>
            <p className="text-gray-600">Professional Staff</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#236053]">10</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
