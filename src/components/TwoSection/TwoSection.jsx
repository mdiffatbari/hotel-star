import React from 'react';
import hotelJpg from '../../assets/hotel.jpg'
import { Link } from 'react-router';
import { FaBed, FaConciergeBell, FaMapMarkedAlt } from 'react-icons/fa';
import TopRooms from '../TopRooms/TopRooms';
import { FaSpa, FaUtensils } from 'react-icons/fa';

const TwoSection = () => {
    return (
        <div>


            <div className="bg-base-200 py-20">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:gap-16">

                    {/* Left Image */}
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <img
                            src={hotelJpg}
                            alt="Hotel Resort"
                            className="w-full h-auto rounded-xl shadow-2xl object-cover transition-transform transform hover:scale-105"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#236053]">
                            Relax and Unwind at Hotel Star
                        </h1>
                        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                            Escape to the perfect blend of comfort and luxury. Enjoy elegantly designed rooms, world-class dining, and premium amenities that make every stay unforgettable.
                        </p>

                        {/* Key Highlights */}
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center lg:justify-start mt-6">
                            <div className="flex items-center gap-3">
                                <FaBed className="text-[#236053] text-2xl" />
                                <span className="font-medium text-gray-700">Luxury Rooms</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaUtensils className="text-[#236053] text-2xl" />
                                <span className="font-medium text-gray-700">Gourmet Dining</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaSpa className="text-[#236053] text-2xl" />
                                <span className="font-medium text-gray-700">Wellness & Spa</span>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <Link to="/rooms">
                            <button className="mt-8 px-8 py-3 bg-[#236053] text-white rounded-lg text-lg hover:bg-[#1b4a42] transition">
                                View Rooms
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <TopRooms></TopRooms>


            <div className="bg-[#236053] text-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Hotel Star?</h2>
                    <p className="text-lg md:text-xl mb-10">
                        We offer comfort, convenience, and world-class service for every traveler.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-[#ffffff1a] hover:bg-[#ffffff33] transition rounded-xl p-6">
                            <FaBed className="text-4xl mb-4 mx-auto text-white" />
                            <h3 className="text-xl font-semibold mb-2">Modern Comfortable Rooms</h3>
                            <p className="text-white text-opacity-90">
                                Designed for relaxation and elegance, our rooms offer everything you need.
                            </p>
                        </div>


                        <div className="bg-[#ffffff1a] hover:bg-[#ffffff33] transition rounded-xl p-6">
                            <FaConciergeBell className="text-4xl mb-4 mx-auto text-white" />
                            <h3 className="text-xl font-semibold mb-2">24/7 Guest Service</h3>
                            <p className="text-white text-opacity-90">
                                Our dedicated team is available around the clock for your convenience.
                            </p>
                        </div>


                        <div className="bg-[#ffffff1a] hover:bg-[#ffffff33] transition rounded-xl p-6">
                            <FaMapMarkedAlt className="text-4xl mb-4 mx-auto text-white" />
                            <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
                            <p className="text-white text-opacity-90">
                                Stay close to everything — business centers, shops, and attractions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TwoSection;