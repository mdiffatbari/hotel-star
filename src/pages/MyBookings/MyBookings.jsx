import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import jsPDF from 'jspdf';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data));
    }
  }, [user?.email]);

  const handleReview = async (booking) => {
    const { value: formValues } = await Swal.fire({
      title: 'Submit a Review',
      html:
        `<input id="swal-username" class="swal2-input" placeholder="User" value="${user.displayName}" disabled />` +
        '<input id="swal-rating" class="swal2-input" placeholder="Rating (1-5)" type="number" min="1" max="5" />' +
        '<textarea id="swal-comment" class="swal2-textarea" placeholder="Write your comment..."></textarea>',
      focusConfirm: false,
      preConfirm: () => {
        return {
          user: user.displayName,
          rating: document.getElementById('swal-rating').value,
          comment: document.getElementById('swal-comment').value,
        };
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
    });

    if (formValues) {
      const reviewData = {
        roomId: booking.roomId,
        user: formValues.user,
        rating: formValues.rating,
        comment: formValues.comment
      };

      const res = await fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData)
      });

      if (res.ok) {
        Swal.fire('Thanks!', 'Your review has been submitted.', 'success');
      } else {
        Swal.fire('Error', 'Could not submit review.', 'error');
      }
    }
  };

  const handleCancel = (booking) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You can only cancel at least 1 day before the booking date.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:3000/bookings/${booking._id}`, {
          method: 'DELETE',
        });

        const data = await res.json();

        if (res.ok) {
          Swal.fire('Cancelled!', 'Your booking has been cancelled.', 'success');
          setBookings(prev => prev.filter(b => b._id !== booking._id));
        } else {
          Swal.fire('Error', data.message || 'Could not cancel booking.', 'error');
        }
      }
    });
  };

  const handleDownloadInvoice = (booking) => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(18);
    doc.text("Hotel Star - Invoice", 20, 20);

    // Line separator
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    // Customer info
    doc.setFontSize(12);
    doc.text(`Booking ID: ${booking._id}`, 20, 35);
    doc.text(`Customer: ${user.displayName}`, 20, 42);
    doc.text(`Email: ${user.email}`, 20, 49);

    // Booking details
    const startY = 60;
    const tableRows = [
      ["Room", booking.title],
      ["Price", `$${booking.price}`],
      ["Date", new Date(booking.date).toLocaleDateString()],
      ["Status", booking.status]
    ];

    tableRows.forEach((row, i) => {
      const y = startY + i * 10;
      doc.setFont(undefined, "bold");
      doc.text(row[0], 20, y);
      doc.setFont(undefined, "normal");
      doc.text(row[1], 80, y);
    });

    // Footer
    doc.setLineWidth(0.5);
    doc.line(20, 110, 190, 110);
    doc.setFontSize(10);
    doc.text("Thank you for booking with Hotel Star!", 20, 120);

    // Save PDF
    doc.save(`invoice_${booking._id}.pdf`);
  };


  return (
    <>
      <Helmet>
        <title>My Bookings | Hotel Star</title>
      </Helmet>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">My Bookings</h2>
        {bookings.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {bookings.map((booking, index) => (
              <div key={index} className="bg-white shadow p-4 rounded">
                <img src={booking.image} alt={booking.title} className="w-full h-48 object-cover rounded mb-3" />
                <h3 className="text-xl font-semibold">{booking.title}</h3>
                <p><strong>Price:</strong> ${booking.price}</p>
                <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                <p className="text-green-600 font-medium">{booking.status}</p>
                <div className='flex flex-wrap items-center gap-3 mt-4'>
                  <button
                    className="btn btn-sm bg-[#236053] text-white hover:bg-[#1b4a42]"
                    onClick={() => handleReview(booking)}
                  >
                    Give Review
                  </button>
                  <button
                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                    onClick={() => handleCancel(booking)}
                  >
                    Cancel Booking
                  </button>
                  <button
                    className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => handleDownloadInvoice(booking)}
                  >
                    Download Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </>
  );
};

export default MyBookings;
