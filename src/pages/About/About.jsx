import React from 'react';
import hotelJPG from '../../assets/hotel.jpg'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
    <Helmet>
      <title>About Us | Hotel Star</title>
    </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={hotelJPG}
            alt="Hotel Building"
            className="rounded-lg shadow-lg"
          />


          <div>
            <h1 className="text-4xl font-bold text-[#236053] mb-4">About Our Hotel</h1>
            <p className="text-gray-700 text-lg mb-4">
              Hotel Star is your home away from home, offering premium hospitality, modern amenities,
              and exceptional service. Whether you're here for business or leisure, we ensure your stay is relaxing, elegant, and memorable.
            </p>
            <p className="text-gray-600">
              Located in the heart of the city, we offer convenient access to top attractions while maintaining a peaceful environment.
              Discover comfort, convenience, and charm—all in one place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
