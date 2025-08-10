import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch(console.error);
  };

  return (
    <div className='bg-[#f8f8f8] sticky top-0 z-50'>
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            Hotel Star
          </Link>
        </div>

        {/* Mobile Dropdown */}
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/" className="hover:bg-[#236053] hover:text-white rounded">Home</Link></li>
              <li><Link to="/rooms" className="hover:bg-[#236053] hover:text-white rounded">Rooms</Link></li>
              {user && (
                <li><Link to="/myBookings" className="hover:bg-[#236053] hover:text-white rounded">My Bookings</Link></li>
              )}
              <li><Link to="/about" className="hover:bg-[#236053] hover:text-white rounded">About Us</Link></li>
              <li><Link to="/gallery" className="hover:bg-[#236053] hover:text-white rounded">Gallery</Link></li>
              <li><Link to="/contact" className="hover:bg-[#236053] hover:text-white rounded">Contact</Link></li>
              {!user && (
                <>
                  <li><Link to="/auth/login" className="hover:bg-[#236053] hover:text-white rounded">Login</Link></li>
                  <li><Link to="/auth/register" className="hover:bg-[#236053] hover:text-white rounded">Register</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4 items-center">
          <Link to="/" className="btn btn-ghost hover:bg-[#236053] hover:text-white">Home</Link>
          <Link to="/rooms" className="btn btn-ghost hover:bg-[#236053] hover:text-white">Rooms</Link>
          {user && (
            <Link to="/myBookings" className="btn btn-ghost hover:bg-[#236053] hover:text-white">My Bookings</Link>
          )}
          <Link to="/about" className="btn btn-ghost hover:bg-[#236053] hover:text-white">About Us</Link>
          <Link to="/gallery" className="btn btn-ghost hover:bg-[#236053] hover:text-white">Gallery</Link>
          <Link to="/contact" className="btn btn-ghost hover:bg-[#236053] hover:text-white">Contact</Link>

          {!user ? (
            <>
              <Link to="/auth/login" className="btn btn-outline border-[#236053] text-[#236053] hover:bg-[#236053] hover:text-white">Login</Link>
              <Link to="/auth/register" className="btn btn-outline border-[#236053] text-[#236053] hover:bg-[#236053] hover:text-white">Register</Link>
            </>
          ) : (
            <div className="dropdown dropdown-end ml-4">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><span className="hover:bg-[#236053] hover:text-white rounded">{user?.displayName || "Profile"}</span></li>
                <li><span className="hover:bg-[#236053] hover:text-white rounded">Settings</span></li>
                <li><button onClick={handleLogout} className="hover:bg-[#236053] hover:text-white rounded text-left w-full">Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
