import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './UserReview.css';

const UserReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/all-reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  if (reviews.length === 0) {
    return <p className="text-center py-10">No reviews available yet.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Guest Testimonials</h2>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        className="custom-carousel"
      >
        {reviews.map((r, idx) => (
          <div key={idx} className="px-6 py-4">
            <p className="text-xl italic">“{r.comment}”</p>
            <div className="mt-4">
              <p className="font-semibold">{r.user}</p>
              <p className="text-sm text-gray-500">— {r.roomTitle}</p>
              <p className="text-yellow-500 mb-6"> {/* Added margin for arrow spacing */}
                {'★'.repeat(r.rating) + '☆'.repeat(5 - r.rating)}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UserReview;
