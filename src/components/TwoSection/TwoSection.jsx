import React from 'react';
import hotelJpg from '../../assets/hotel.jpg'
import { Link } from 'react-router';
import { FaBed, FaConciergeBell, FaMapMarkedAlt } from 'react-icons/fa';
import TopRooms from '../TopRooms/TopRooms';

const TwoSection = () => {
    return (
        <div>


            <div className="hero bg-base-200 py-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={hotelJpg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Relax in our Hotel Resort</h1>
                        <p className="py-6">
                            Escape to the heart of relaxation and luxury. Whether you're traveling for <br />business or pleasure, Hotel Star promises a refined experience in every detail.
                        </p>
                        <Link to="/rooms"><button className="btn bg-[#236053] text-white">View Rooms</button></Link>
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