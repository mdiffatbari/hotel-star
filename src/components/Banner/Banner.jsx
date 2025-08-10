import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import bannerOne from '../../assets/slider/slider_one.jpg';
import bannerTwo from '../../assets/slider/slider_two.jpg';
import bannerThree from '../../assets/slider/slider_three.jpg';

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      img: bannerOne,
      title: 'Relax in Comfort',
      desc: 'Experience luxury and elegance in every stay with us.',
      btn: 'View Rooms',
    },
    {
      img: bannerTwo,
      title: 'Book Your Dream Stay',
      desc: 'Modern amenities and stunning locations, just a click away.',
      btn: 'Explore Rooms',
    },
    {
      img: bannerThree,
      title: 'Unforgettable Experiences',
      desc: 'Your comfort, our commitment—book now and enjoy.',
      btn: 'Reserve Now',
    },
  ];

  return (
    <div className=''>
      <div className="relative w-full h-[700px] overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeSlide === idx ? 'opacity-100 z-20' : 'opacity-0 z-10'
              }`}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

              {/* Content */}
              <div className="z-20 relative text-white pl-6 md:pl-16 max-w-4xl flex items-center h-full">
                <div>
                  <h2 className="text-2xl font-bold md:text-5xl  mb-4">{slide.title}</h2>
                  <p className="mb-6 text-lg">{slide.desc}</p>
                  <Link
                    to="/rooms"
                    className="btn bg-[#236053] text-white border-none hover:bg-[#1b4a42]"
                  >
                    {slide.btn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3 h-3 rounded-full ${activeSlide === idx ? 'bg-white' : 'bg-white/50'
                } transition-transform hover:scale-110`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
