import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import moment from 'moment';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet';
import { FaHeart } from 'react-icons/fa';

const RoomDetails = () => {
  const room = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

  // ===============================
  // BOOKING FUNCTION
  // ===============================
  const handleBooking = () => {
    if (!user?.email) {
      navigate('/auth/login');
      return;
    }

    Swal.fire({
      title: 'Confirm Booking',
      html: `
        <div style="text-align:left">
          <p><strong>Room:</strong> ${room.title}</p>
          <p><strong>Price:</strong> $${room.price}</p>
          <p><strong>Date:</strong> ${selectedDate}</p>
          <p><strong>Guests:</strong> ${room.capacity || 2}</p>
        </div>
        <input type="date" id="bookingDate" class="swal2-input" value="${selectedDate}" />
      `,
      didOpen: () => {
        const input = document.getElementById('bookingDate');
        input.addEventListener('change', e => setSelectedDate(e.target.value));
      },
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#236053',
    }).then(result => {
      if (result.isConfirmed) {
        const bookingData = {
          title: room.title,
          roomId: room._id,
          image: room.image,
          price: room.price,
          date: selectedDate,
          status: 'confirmed',
          userEmail: user.email,
          userName: user.displayName,
        };

        fetch('http://localhost:3000/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookingData),
        })
          .then(res => {
            if (!res.ok) {
              if (res.status === 409) throw new Error('This room is already booked on the selected date.');
              throw new Error('Failed to book room.');
            }
            return res.json();
          })
          .then(() => {
            Swal.fire('Booking Confirmed!', '', 'success');
            navigate('/myBookings');
          })
          .catch(err => {
            Swal.fire('Error', err.message, 'error');
          });
      }
    });
  };

  // ===============================
  // WISHLIST FUNCTION
  // ===============================
  const handleAddToWishlist = () => {
    if (!user?.email) {
      navigate('/auth/login');
      return;
    }

    const wishlistItem = {
      roomId: room._id,
      title: room.title,
      image: room.image,
      price: room.price,
      userEmail: user.email,
      userName: user.displayName,
      addedAt: new Date(),
    };

    fetch('http://localhost:3000/wishlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(wishlistItem),
    })
      .then(res => {
        if (!res.ok) {
          if (res.status === 409) throw new Error('Already in wishlist!');
          throw new Error('Failed to add to wishlist.');
        }
        return res.json();
      })
      .then(() => {
        Swal.fire('Added to Wishlist!', '', 'success');
      })
      .catch(err => {
        Swal.fire('Error', err.message, 'error');
      });
  };

  // ===============================
  // RENDER
  // ===============================
  return (
    <>
      <Helmet>
        <title>{room.title}</title>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={room.image}
              alt={room.title}
              className="rounded shadow w-full h-auto"
            />

            {/* Wishlist Heart Icon on Image */}
            <button
              onClick={handleAddToWishlist}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
              title="Add to Wishlist"
            >
              <FaHeart className="text-red-500 text-2xl" />
            </button>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-[#236053] mb-4">{room.title}</h1>
            <p className="text-lg text-gray-700 mb-3">{room.description}</p>
            <p className="text-gray-600 mb-2">
              Price per night: <strong>${room.price}</strong>
            </p>
            <p className="text-gray-600 mb-4">
              Guests: <strong>{room.capacity || 2}</strong>
            </p>

            <h2 className="text-xl font-semibold mb-2 mt-6">Reviews:</h2>
            {room.reviews?.length > 0 ? (
              <div className="space-y-4">
                {room.reviews.map((review, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded">
                    <p className="font-bold">{review.user}</p>
                    <p className="text-sm text-yellow-600">
                      Rating: {review.rating}★
                    </p>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-300 text-yellow-700 p-4 rounded">
                <p>
                  <strong>No reviews yet.</strong>
                </p>
                <p>Be the first to stay and leave a review for this room!</p>
              </div>
            )}

            <button
              onClick={handleBooking}
              className="btn btn-sm bg-[#236053] text-white hover:bg-[#1b4a42] mt-6"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
