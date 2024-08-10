import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone must be at least 10 digits";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log("Order submitted:", formData);
      alert("Order placed successfully! 🎉");
      setFormData({ name: "", email: "", phone: "", address: "" });
      setOrderPopup(false);
    } else {
      setErrors(newErrors);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", phone: "", address: "" });
    setErrors({});
    setOrderPopup(false);
  };

  if (!orderPopup) return null;

  return (
    <div
      className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-t-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Order Your Watch</h1>
              <p className="text-sm opacity-90 mt-1">Fill the form to complete your order</p>
            </div>
            <button
              onClick={handleClose}
              className="hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:rotate-90"
            >
              <IoCloseOutline className="text-3xl" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full rounded-xl border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } dark:bg-gray-800 dark:text-white pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } dark:bg-gray-800 dark:text-white pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className={`w-full rounded-xl border ${errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } dark:bg-gray-800 dark:text-white pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Address Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Delivery Address
            </label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address"
                rows="3"
                className={`w-full rounded-xl border ${errors.address ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  } dark:bg-gray-800 dark:text-white pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none`}
              />
            </div>
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleClose}
              className="flex-1 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-xl font-medium transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:scale-105 active:scale-95 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default OrderPopup;