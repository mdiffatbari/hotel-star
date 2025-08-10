import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const TopRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/top-rooms')
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Top Rated Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room, idx) => (
          <div key={idx} className="card bg-white shadow-md">
            <figure>
              <img src={room.image} alt={room.title} className="h-60 w-full object-cover rounded-t" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl">{room.title}</h3>
              <p>{room.description}</p>
              <p className="text-yellow-500 font-medium">
                Rating: {room.avgRating?.toFixed(1) || 'No reviews'}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/rooms/${room._id}`}><button className="btn btn-sm bg-[#236053] text-white hover:bg-[#1b4a42]">
                  Book Now
                </button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRooms;
