import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const handleEditProfile = () => {
    //todo
    //implement the edit profile functionality by creating a new component
    navigate("/edit-profile");
  };
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Please log in
          </h2>
          <button
            onClick={() => navigate("/login")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-32 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="w-32 h-32 rounded-2xl bg-white p-2 shadow-lg">
                <div className="w-full h-full rounded-xl bg-indigo-100 flex items-center justify-center text-4xl font-bold text-indigo-600">
                  {user.username?.[0].toUpperCase() ||
                    user.email?.[0].toUpperCase()}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20 pb-8 px-8 flex justify-between items-end flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {user.username || "Anonymous User"}
              </h1>
              <p className="text-gray-500 font-medium">
                @{user.username?.toLowerCase() || "user"}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleEditProfile}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition cursor-pointer"
              >
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-100 transition cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                User Details
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-3 pb-6 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">Full Name</span>
                  <span className="col-span-2 text-gray-900 font-semibold">
                    {user.username}
                  </span>
                </div>
                <div className="grid grid-cols-3 pb-6 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">
                    Email Address
                  </span>
                  <span className="col-span-2 text-gray-900 font-semibold">
                    {user.email}
                  </span>
                </div>
                <div className="grid grid-cols-3 pb-6 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">User Role</span>
                  <span className="col-span-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {user.role}
                    </span>
                  </span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-gray-500 font-medium">Account ID</span>
                  <span className="col-span-2 text-gray-400 font-mono text-sm">
                    {user.id || user._id}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Security</h3>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Password</h4>
                    <p className="text-xs text-gray-500">
                      Last changed 2 months ago
                    </p>
                  </div>
                </div>
                <button className="text-indigo-600 font-bold text-sm hover:underline">
                  Change
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Membership</h3>
              <p className="text-indigo-100 text-sm mb-6">
                Enjoy exclusive benefits and early access to new products.
              </p>
              <div className="text-2xl font-bold mb-2">Pro Plan</div>
              <div className="text-indigo-200 text-sm italic">
                Active until March 2026
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Orders placed</span>
                  <span className="font-bold text-gray-900">12</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Wishlist items</span>
                  <span className="font-bold text-gray-900">24</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Product reviews</span>
                  <span className="font-bold text-gray-900">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
