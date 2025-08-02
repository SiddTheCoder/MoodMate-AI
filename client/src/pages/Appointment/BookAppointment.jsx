import React, { useState } from "react";

const BookAppointment = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    age: "",
    problem: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTick, setShowTick] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTick(true);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      contact: "",
      age: "",
      problem: "",
    });
    setIsSubmitted(false);
    setShowTick(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1D3557]/90 backdrop-blur flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#1D3557] rounded-3xl p-6 shadow-2xl overflow-auto max-h-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-[#468ffc]">MoodMate</h1>
          <p className="text-lg text-white mt-1">
            Your Trusted Healthcare Partner
          </p>
          <p className="text-sm text-gray-300">
            Book your appointment with expert doctors
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-semibold text-white text-center mb-4">
                Book Your Appointment
              </h2>

              <div>
                <label className="text-white font-semibold block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white font-semibold block mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="text-white font-semibold block mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your age"
                    min={1}
                    max={120}
                  />
                </div>
              </div>

              <div>
                <label className="text-white font-semibold block mb-1">
                  Describe Your Problem *
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  required
                  className="w-full h-24 px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Describe your symptoms or health concerns..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#4a8ab3] hover:bg-[#3c7ba0] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-6">
              {/* Checkmark */}
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center animate-bounce">
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white">
                Appointment Booked!
              </h2>
              <p className="text-lg text-gray-300">
                Your details have been submitted successfully.
              </p>
              <p className="text-base text-white">
                Please wait for appointment confirmation. We'll contact you
                soon.
              </p>

              {/* Summary */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-left text-white">
                <h3 className="text-lg font-semibold mb-2">
                  Appointment Details:
                </h3>
                <p>
                  <strong>Name:</strong> {formData.fullName}
                </p>
                <p>
                  <strong>Contact:</strong> {formData.contact}
                </p>
                <p>
                  <strong>Age:</strong> {formData.age}
                </p>
                <p>
                  <strong>Problem:</strong> {formData.problem}
                </p>
              </div>

              <button
                onClick={resetForm}
                className="bg-[#4a8ab3] hover:bg-[#3c7ba0] text-white px-5 py-2 rounded-lg font-medium"
              >
                Book Another Appointment
              </button>
            </div>
          )}

          {/* Tick overlay while submitting */}
          {showTick && !isSubmitted && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50 rounded-3xl">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center animate-ping mx-auto mb-4">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-white">Submitting...</p>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-gray-300 mt-6">
          © 2024 MoodMate Healthcare. Your health, our priority.
        </p>
      </div>
    </div>
  );
};

export default BookAppointment;
