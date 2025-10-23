import React from 'react';
import { Link } from 'react-router';

const RoomCard = ({ room }) => {
  return (
    <Link to={`/rooms/${room._id}`}>
      <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
        {/* Room Image */}
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-[#236053] text-white px-3 py-1 rounded-full font-semibold shadow-md">
          ${room.price}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Card Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-gray-800">{room.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{room.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
