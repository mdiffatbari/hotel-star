import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Wishlist = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return; // Wait for auth state to load
    if (!user?.email) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/wishlist?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading wishlist:", err);
        setLoading(false);
      });
  }, [user, authLoading]);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Remove from wishlist?",
      text: "Are you sure you want to remove this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#236053",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/wishlist/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setWishlist((prev) => prev.filter((item) => item._id !== id));
            Swal.fire("Removed!", "The item has been removed.", "success");
          })
          .catch((err) => {
            Swal.fire("Error", err.message, "error");
          });
      }
    });
  };

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading your wishlist...
      </div>
    );
  }

  if (!user?.email) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-3">Please log in</h2>
        <p>You need to be logged in to view your wishlist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-600">
          No items in your wishlist yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image || "https://via.placeholder.com/400x250"}
                alt={item.roomTitle || "Room"}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-40">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.roomTitle || "Untitled Room"}
                  </h2>
                  <p className="text-sm text-gray-500">
                    ${item.price || "N/A"}/night
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => (window.location.href = `/room/${item.roomId}`)}
                    className="px-3 py-1 text-sm bg-[#236053] text-white rounded-lg hover:bg-[#1b4a42]"
                  >
                    View Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
