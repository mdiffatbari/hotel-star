import React, { useEffect, useState } from 'react';
import RoomCard from '../../components/RoomCard/RoomCard';
import { Helmet } from 'react-helmet';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const fetchRooms = async () => {
    let url = 'http://localhost:3000/rooms';
    const params = [];
    if (minPrice) params.push(`minPrice=${minPrice}`);
    if (maxPrice) params.push(`maxPrice=${maxPrice}`);
    if (params.length) url += `?${params.join('&')}`;

    const res = await fetch(url);
    const data = await res.json();
    setRooms(data);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleFilter = e => {
    e.preventDefault();
    fetchRooms();
  };

  return (
    <>
      <Helmet>
        <title>Rooms | Hotel Star</title>
      </Helmet>

      <div className="py-16 px-4 sm:px-6 lg:px-40">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Find Your Perfect Room
        </h1>

        {/* Filter Form */}
        <form
          onSubmit={handleFilter}
          className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center"
        >
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="input input-bordered w-full max-w-xs border-gray-300 focus:ring-2 focus:ring-[#236053] focus:border-[#236053] rounded-lg"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="input input-bordered w-full max-w-xs border-gray-300 focus:ring-2 focus:ring-[#236053] focus:border-[#236053] rounded-lg"
          />
          <button
            type="submit"
            className="btn bg-[#236053] text-white hover:bg-[#1a4c42] px-8 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Filter
          </button>
        </form>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.length > 0 ? (
            rooms.map(room => (
              <div
                key={room._id}
                className="h-full bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <RoomCard id={room._id} room={room} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg">
              No rooms found in this price range.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Rooms;
