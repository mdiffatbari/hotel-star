import React from 'react';

import g1 from '../../assets/gallery/hotel (1).jpg';
import g2 from '../../assets/gallery/hotel (2).jpg';
import g3 from '../../assets/gallery/hotel (3).jpg';
import g4 from '../../assets/gallery/hotel (4).jpg';
import g5 from '../../assets/gallery/hotel (5).jpg';
import g6 from '../../assets/gallery/hotel (6).jpg';

const images = [g1, g2, g3, g4, g5, g6];

const Gallery = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Our <span className="text-[#253834]">Gallery</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
