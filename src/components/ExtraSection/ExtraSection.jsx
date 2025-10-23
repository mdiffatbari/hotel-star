import React from 'react';
import { FaBed, FaUtensils, FaSpa, FaSwimmer, FaWifi, FaConciergeBell } from 'react-icons/fa';

const ExtraSection = () => {
    return (
        <div className="px-4 md:px-20 py-16 space-y-20">
            
            {/* Section 1: Our Services */}
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-10">Our Premium Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white shadow rounded p-8 hover:shadow-xl transition transform hover:-translate-y-1">
                        <div className="text-[#236053] text-5xl mb-4 flex justify-center">
                            <FaBed />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Luxury Rooms</h3>
                        <p className="text-gray-600 mb-4">Experience ultimate comfort with our beautifully designed rooms and suites.</p>
                        <button className="bg-[#236053] text-white px-4 py-2 rounded hover:bg-[#1b4a42] transition">Book Now</button>
                    </div>
                    <div className="bg-white shadow rounded p-8 hover:shadow-xl transition transform hover:-translate-y-1">
                        <div className="text-[#236053] text-5xl mb-4 flex justify-center">
                            <FaUtensils />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Gourmet Dining</h3>
                        <p className="text-gray-600 mb-4">Savor exquisite dishes prepared by world-class chefs in our fine dining restaurants.</p>
                        <button className="bg-[#236053] text-white px-4 py-2 rounded hover:bg-[#1b4a42] transition">Reserve Table</button>
                    </div>
                    <div className="bg-white shadow rounded p-8 hover:shadow-xl transition transform hover:-translate-y-1">
                        <div className="text-[#236053] text-5xl mb-4 flex justify-center">
                            <FaSpa />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Wellness & Spa</h3>
                        <p className="text-gray-600 mb-4">Relax and rejuvenate at our spa with premium wellness treatments and facilities.</p>
                        <button className="bg-[#236053] text-white px-4 py-2 rounded hover:bg-[#1b4a42] transition">Book a Session</button>
                    </div>
                </div>
            </section>

            {/* Section 2: Why Choose Us */}
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-10">Why Choose Hotel Star</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white shadow rounded p-8 hover:shadow-xl transition transform hover:-translate-y-1">
                        <div className="text-[#236053] text-5xl mb-4 flex justify-center">
                            <FaSwimmer />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Swimming Pool</h3>
                        <p className="text-gray-600">Enjoy our luxurious outdoor and indoor pools, perfect for relaxation and fun.</p>
                    </div>
                    <div className="bg-white shadow rounded p-8 hover:shadow-xl transition transform hover:-translate-y-1">
                        <div className="text-[#236053] text-5xl mb-4 flex justify-center">
                            <FaWifi />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Free Wi-Fi</h3>
                        <p className="text-gray-600">Stay connected with fast and reliable Wi-Fi throughout the hotel.</p>
                    </div>
                    <div className="bg-white shadow rounded p-8 hover:shadow-xl transition transform hover:-translate-y-1">
                        <div className="text-[#236053] text-5xl mb-4 flex justify-center">
                            <FaConciergeBell />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Concierge</h3>
                        <p className="text-gray-600">Our dedicated staff is always available to make your stay effortless and memorable.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExtraSection;
