import React from 'react';
import { FaBed, FaUtensils, FaSpa } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const ExtraSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
            
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

            {/* Section 2: Testimonials */}
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-10">What Our Guests Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#f8f8f8] shadow rounded p-6 flex flex-col items-center">
                        <div className="text-yellow-400 text-2xl mb-2 flex">
                            <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                        </div>
                        <p className="italic mb-4 text-gray-700 text-center">"Absolutely loved our stay! The rooms were clean and the staff was extremely friendly."</p>
                        <h3 className="font-semibold text-lg">- Sarah M.</h3>
                        <img className="w-16 h-16 rounded-full mt-4" src="https://i.ibb.co/2n6tH9R/user1.jpg" alt="Sarah" />
                    </div>
                    <div className="bg-[#f8f8f8] shadow rounded p-6 flex flex-col items-center">
                        <div className="text-yellow-400 text-2xl mb-2 flex">
                            <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                        </div>
                        <p className="italic mb-4 text-gray-700 text-center">"The spa and wellness facilities were top-notch. Will definitely come back!"</p>
                        <h3 className="font-semibold text-lg">- James L.</h3>
                        <img className="w-16 h-16 rounded-full mt-4" src="https://i.ibb.co/fGmQpS6/user2.jpg" alt="James" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExtraSection;
