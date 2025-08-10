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

      <div className="container mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-center mb-8">Find your room</h1>

        {/* Filter form */}
        <form
          onSubmit={handleFilter}
          className="flex flex-col md:flex-row gap-4 mb-10 justify-center items-center"
        >
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <button
            type="submit"
            className="btn bg-[#236053] text-white hover:bg-[#1a4c42] px-6"
          >
            Filter
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          {rooms.length > 0 ? (
            rooms.map(room => (
              <div key={room._id} className="h-full">
                <RoomCard id={room._id} room={room} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">
              No rooms found in this price range.
            </p>
          )}
        </div>
      </div>

    </>
  );
};

export default Rooms;
