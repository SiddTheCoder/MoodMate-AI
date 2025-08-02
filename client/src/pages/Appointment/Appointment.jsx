import React, { useState } from "react";
import BookAppointment from "./BookAppointment";
import { useNavigate } from "react-router-dom";

const MoodMate = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isBookingModelOpen, setIsBookingModelOpen] = useState(false);

  const closeBookingModel = () => {
    setIsBookingModelOpen(false);
  };
  // Inline SVG Icons
  const StarIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );

  const MapPinIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const ClockIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );

  const CalendarIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const ChevronRightIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9,18 15,12 9,6" />
    </svg>
  );

  const XIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  const UsersIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const AwardIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
    </svg>
  );

  const HeartIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );

  const PhoneIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const MailIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const BriefcaseIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );

  const GraduationCapIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );

  const UserIcon = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Clinical Psychologist",
      rating: 4.9,
      reviews: 127,
      location: "Maharajgunj, Kathmandu",
      experience: "12 years experience",
      availability: "Available: Mon, Wed, Fri, Sat",
      tags: ["Depression", "Anxiety Disorders"],
      price: "Rs. 2,500",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      moreInfo: "+2 more",
      introduction:
        "Dr. Priya Sharma is a dedicated Clinical Psychologist with over 12 years of experience in helping individuals overcome mental health challenges. She specializes in cognitive-behavioral therapy and has a compassionate approach to treating depression and anxiety disorders.",
      education: "PhD in Clinical Psychology, Tribhuvan University",
      phone: "+977-1-4567890",
      email: "priya.sharma@moodmate.com",
      languages: ["English", "Nepali", "Hindi"],
      stats: {
        totalPatients: 850,
        successRate: 94,
        avgSessionTime: 50,
        specializations: 5,
      },
    },
    {
      id: 2,
      name: "Dr. Rajesh Thapa",
      specialty: "Psychiatrist",
      rating: 4.8,
      reviews: 203,
      location: "Baneshwor, Kathmandu",
      experience: "15 years experience",
      availability: "Available: Tue, Thu, Fri, Sun",
      tags: ["Bipolar Disorder", "Schizophrenia"],
      price: "Rs. 3,000",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      moreInfo: "+2 more",
      introduction:
        "Dr. Rajesh Thapa is a renowned Psychiatrist with 15 years of expertise in treating complex mental health conditions. He is particularly skilled in managing bipolar disorder and schizophrenia, using evidence-based treatment approaches.",
      education: "MD Psychiatry, Institute of Medicine, Nepal",
      phone: "+977-1-4567891",
      email: "rajesh.thapa@moodmate.com",
      languages: ["English", "Nepali"],
      stats: {
        totalPatients: 1200,
        successRate: 91,
        avgSessionTime: 45,
        specializations: 7,
      },
    },
    {
      id: 3,
      name: "Dr. Sunita Karki",
      specialty: "Child & Adolescent Psychologist",
      rating: 4.9,
      reviews: 89,
      location: "Patan, Lalitpur",
      experience: "8 years experience",
      availability: "Available: Mon, Tue, Thu, Sat",
      tags: ["Child Development", "ADHD"],
      price: "Rs. 2,000",
      image:
        "https://images.unsplash.com/photo-1594824850187-d3bb3df92b43?w=150&h=150&fit=crop&crop=face",
      moreInfo: "+2 more",
      introduction:
        "Dr. Sunita Karki specializes in child and adolescent psychology with 8 years of dedicated experience. She has a gentle approach in working with young minds and is an expert in developmental disorders and ADHD management.",
      education: "Masters in Child Psychology, Kathmandu University",
      phone: "+977-1-4567892",
      email: "sunita.karki@moodmate.com",
      languages: ["English", "Nepali"],
      stats: {
        totalPatients: 520,
        successRate: 96,
        avgSessionTime: 60,
        specializations: 4,
      },
    },
    {
      id: 4,
      name: "Dr. Anil Shrestha",
      specialty: "Addiction Counselor",
      rating: 4.7,
      reviews: 156,
      location: "Thamel, Kathmandu",
      experience: "10 years experience",
      availability: "Available: Mon, Wed, Thu, Fri",
      tags: ["Substance Abuse", "Behavioral Addiction"],
      price: "Rs. 2,200",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      moreInfo: "+4 more",
      introduction:
        "Dr. Anil Shrestha is a certified Addiction Counselor with 10 years of experience in helping individuals overcome various forms of addiction. He uses a holistic approach combining therapy, counseling, and lifestyle modifications.",
      education: "Masters in Addiction Counseling, Pokhara University",
      phone: "+977-1-4567893",
      email: "anil.shrestha@moodmate.com",
      languages: ["English", "Nepali"],
      stats: {
        totalPatients: 680,
        successRate: 88,
        avgSessionTime: 55,
        specializations: 6,
      },
    },
    {
      id: 5,
      name: "Dr. Meera Gurung",
      specialty: "Marriage & Family Therapist",
      rating: 4.8,
      reviews: 134,
      location: "Bhatbhateni, Kathmandu",
      experience: "11 years experience",
      availability: "Available: Tue, Wed, Fri, Sat",
      tags: ["Couples Therapy", "Family Dynamics"],
      price: "Rs. 2,800",
      image:
        "https://images.unsplash.com/photo-1594824850108-d4ad4b0094ad?w=150&h=150&fit=crop&crop=face",
      moreInfo: "+2 more",
      introduction:
        "Dr. Meera Gurung is an experienced Marriage and Family Therapist with 11 years of practice. She helps couples and families navigate relationship challenges and improve communication patterns for healthier relationships.",
      education: "Masters in Marriage & Family Therapy, TU",
      phone: "+977-1-4567894",
      email: "meera.gurung@moodmate.com",
      languages: ["English", "Nepali"],
      stats: {
        totalPatients: 740,
        successRate: 93,
        avgSessionTime: 75,
        specializations: 3,
      },
    },
    {
      id: 6,
      name: "Dr. Bikash Adhikari",
      specialty: "Trauma Specialist",
      rating: 4.9,
      reviews: 98,
      location: "New Baneshwor, Kathmandu",
      experience: "9 years experience",
      availability: "Available: Mon, Thu, Fri, Sat",
      tags: ["PTSD", "Trauma Recovery"],
      price: "Rs. 3,200",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      moreInfo: "+2 more",
      introduction:
        "Dr. Bikash Adhikari is a specialized Trauma Therapist with 9 years of experience in treating PTSD and trauma-related disorders. He uses evidence-based therapies like EMDR and trauma-focused CBT to help clients heal.",
      education: "PhD in Trauma Psychology, International University",
      phone: "+977-1-4567895",
      email: "bikash.adhikari@moodmate.com",
      languages: ["English", "Nepali"],
      stats: {
        totalPatients: 450,
        successRate: 95,
        avgSessionTime: 65,
        specializations: 4,
      },
    },
  ];

  const inlineStyles = `
    .moodmate-main-bg { background-color: #1D3557; }
    .moodmate-inner-box { background-color: #457B9D; }
    .moodmate-button { background-color: #4a8ab3; }
    .moodmate-logo { color: #468ffc; }
    .moodmate-light-text { color: #C0C0C0; }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(70, 143, 252, 0.3); }
      50% { box-shadow: 0 0 40px rgba(70, 143, 252, 0.6), 0 0 60px rgba(70, 143, 252, 0.4); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-glow {
      animation: glow 3s ease-in-out infinite;
    }

    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .animate-bounce {
      animation: bounce 1s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: .5; }
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
      50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
    }

    .delay-500 { animation-delay: 0.5s; }
    .delay-1000 { animation-delay: 1s; }
    .delay-1500 { animation-delay: 1.5s; }
    .delay-2000 { animation-delay: 2s; }

    .backdrop-blur-lg { backdrop-filter: blur(16px); }
    .backdrop-blur-sm { backdrop-filter: blur(4px); }
  `;

  const navigate = useNavigate()
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: inlineStyles }} />
      <div
        className="min-h-screen text-white relative overflow-hidden"
        style={{ backgroundColor: "#1D3557" }}
      >
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Glowing Neon Balls */}
          <div
            className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 blur-xl animate-pulse"
            style={{
              background: "linear-gradient(to right, #468ffc, #22D3EE)",
            }}
          ></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-30 blur-lg animate-bounce delay-1000"
            style={{
              background: "linear-gradient(to right, #A855F7, #4a8ab3)",
            }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full opacity-15 blur-2xl animate-pulse delay-500"
            style={{
              background: "linear-gradient(to right, #457B9D, #14B8A6)",
            }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-28 h-28 rounded-full opacity-25 blur-xl animate-bounce delay-2000"
            style={{
              background: "linear-gradient(to right, #EC4899, #468ffc)",
            }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-36 h-36 rounded-full opacity-20 blur-2xl animate-pulse delay-1500"
            style={{
              background: "linear-gradient(to right, #4a8ab3, #06B6D4)",
            }}
          ></div>

          {/* Curvy Blur Graphics */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              className="w-full h-full opacity-10"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#468ffc", stopOpacity: 0.3 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#4a8ab3", stopOpacity: 0.1 }}
                  />
                </linearGradient>
                <filter id="blur">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
              </defs>
              <path
                d="M100,200 Q300,50 500,200 T900,200 L900,400 Q700,550 500,400 T100,400 Z"
                fill="url(#grad1)"
                filter="url(#blur)"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 50,20; 0,0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M0,600 Q200,450 400,600 T800,600 L800,800 Q600,950 400,800 T0,800 Z"
                fill="url(#grad1)"
                filter="url(#blur)"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; -30,15; 0,0"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>

        {/* Header */}
        <header
          className="relative z-10 p-4 shadow-lg border-b"
          style={{
            background: `linear-gradient(to right, #1D3557, #457B9D, #1D3557)`,
            borderBottomColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background: "linear-gradient(to right, #468ffc, #22D3EE)",
                    }}
                  >
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h1
                      className="text-xl font-bold"
                      style={{ color: "#468ffc" }}
                    >
                      MoodMate
                    </h1>
                    <p className="text-xs" style={{ color: "#C0C0C0" }}>
                      Kathmandu Valley, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Available Mental Health Professionals
              </h2>
              <div
                onClick={() => navigate("/chat-with-doctor")}
                className="text-lg font-bold hover:underline hover:bg-blue-500 p-2 rounded tranisition-all duration-300 w-66 cursor-pointer"
              >
                Chat with available doctor
              </div>
              <p style={{ color: "#C0C0C0" }}>
                Choose from our network of qualified and experienced therapists
                and psychiatrists
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto p-4 py-8">
          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:shadow-2xl group"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 0 0 0 rgba(70, 143, 252, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.4)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px -12px rgba(70, 143, 252, 0.2)";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 0 rgba(70, 143, 252, 0.2)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {/* Doctor Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover border-2"
                      style={{ borderColor: "rgba(70, 143, 252, 0.3)" }}
                    />
                    <div
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2"
                      style={{
                        backgroundColor: "#10B981",
                        borderColor: "#1D3557",
                      }}
                    ></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: "#C0C0C0" }}>
                      {doctor.specialty}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <StarIcon
                          className="w-4 h-4 mr-1"
                          style={{ color: "#FBBF24", fill: "#FBBF24" }}
                        />
                        <span className="text-sm font-medium text-white">
                          {doctor.rating}
                        </span>
                        <span
                          className="text-xs ml-1"
                          style={{ color: "#C0C0C0" }}
                        >
                          ({doctor.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location and Experience */}
                <div className="space-y-2 mb-4">
                  <div
                    className="flex items-center text-sm"
                    style={{ color: "#C0C0C0" }}
                  >
                    <MapPinIcon
                      className="w-4 h-4 mr-2"
                      style={{ color: "#468ffc" }}
                    />
                    <span>{doctor.location}</span>
                  </div>
                  <div
                    className="flex items-center text-sm"
                    style={{ color: "#C0C0C0" }}
                  >
                    <ClockIcon
                      className="w-4 h-4 mr-2"
                      style={{ color: "#468ffc" }}
                    />
                    <span>{doctor.experience}</span>
                  </div>
                  <div
                    className="flex items-center text-sm"
                    style={{ color: "#C0C0C0" }}
                  >
                    <CalendarIcon
                      className="w-4 h-4 mr-2"
                      style={{ color: "#468ffc" }}
                    />
                    <span>{doctor.availability}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {doctor.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full text-xs border"
                      style={{
                        backgroundColor: "rgba(74, 138, 179, 0.2)",
                        borderColor: "rgba(74, 138, 179, 0.4)",
                        color: "#C0C0C0",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {doctor.moreInfo && (
                    <span
                      className="text-xs font-medium"
                      style={{ color: "#4a8ab3" }}
                    >
                      {doctor.moreInfo}
                    </span>
                  )}
                </div>

                {/* Pricing and Actions */}
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderTopColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div>
                    <p className="text-xs" style={{ color: "#C0C0C0" }}>
                      Starting from
                    </p>
                    <p className="font-bold text-lg text-white">
                      {doctor.price}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedDoctor(doctor)}
                      className="text-sm font-medium transition-colors flex items-center"
                      style={{ color: "#C0C0C0" }}
                      onMouseEnter={(e) => (e.target.style.color = "white")}
                      onMouseLeave={(e) => (e.target.style.color = "#C0C0C0")}
                    >
                      See Details
                      <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Book Appointment Button */}
                <button
                  onClick={() => setIsBookingModelOpen(true)}
                  className="w-full mt-4 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
                  style={{
                    background: `linear-gradient(to right, #4a8ab3, #2563EB)`,
                    boxShadow: "0 10px 15px -3px rgba(74, 138, 179, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(to right, #2563EB, #4a8ab3)";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background =
                      "linear-gradient(to right, #4a8ab3, #2563EB)";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>

          {isBookingModelOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10 w-full">
              <BookAppointment onClose={closeBookingModel} />
            </div>
          )}

          {/* Load More Section */}
          <div className="text-center mt-12">
            <button
              className="backdrop-blur-lg border text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            >
              Load More Professionals
            </button>
          </div>
        </main>

        {/* Doctor Details Modal */}
        {selectedDoctor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              className="backdrop-blur-lg rounded-2xl p-6 border max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                background: `linear-gradient(135deg, #457B9D, #1D3557)`,
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-20 h-20 rounded-full object-cover border-2"
                    style={{ borderColor: "rgba(70, 143, 252, 0.3)" }}
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {selectedDoctor.name}
                    </h2>
                    <p className="text-lg" style={{ color: "#C0C0C0" }}>
                      {selectedDoctor.specialty}
                    </p>
                    <div className="flex items-center mt-1">
                      <StarIcon
                        className="w-5 h-5 mr-1"
                        style={{ color: "#FBBF24", fill: "#FBBF24" }}
                      />
                      <span className="font-medium text-white">
                        {selectedDoctor.rating}
                      </span>
                      <span className="ml-1" style={{ color: "#C0C0C0" }}>
                        ({selectedDoctor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="p-2 transition-colors"
                  style={{ color: "#C0C0C0" }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) => (e.target.style.color = "#C0C0C0")}
                >
                  <XIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Introduction */}
                  <div
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <UserIcon
                        className="w-5 h-5 mr-2"
                        style={{ color: "#468ffc" }}
                      />
                      About
                    </h3>
                    <p className="leading-relaxed" style={{ color: "#C0C0C0" }}>
                      {selectedDoctor.introduction}
                    </p>
                  </div>

                  {/* Education & Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className="rounded-xl p-4"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    >
                      <h4 className="font-bold text-white mb-2 flex items-center">
                        <GraduationCapIcon
                          className="w-4 h-4 mr-2"
                          style={{ color: "#468ffc" }}
                        />
                        Education
                      </h4>
                      <p className="text-sm" style={{ color: "#C0C0C0" }}>
                        {selectedDoctor.education}
                      </p>
                    </div>
                    <div
                      className="rounded-xl p-4"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    >
                      <h4 className="font-bold text-white mb-2 flex items-center">
                        <BriefcaseIcon
                          className="w-4 h-4 mr-2"
                          style={{ color: "#468ffc" }}
                        />
                        Experience
                      </h4>
                      <p className="text-sm" style={{ color: "#C0C0C0" }}>
                        {selectedDoctor.experience}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <h4 className="font-bold text-white mb-3">
                      Contact Information
                    </h4>
                    <div className="space-y-2">
                      <div
                        className="flex items-center text-sm"
                        style={{ color: "#C0C0C0" }}
                      >
                        <PhoneIcon
                          className="w-4 h-4 mr-2"
                          style={{ color: "#468ffc" }}
                        />
                        <span>{selectedDoctor.phone}</span>
                      </div>
                      <div
                        className="flex items-center text-sm"
                        style={{ color: "#C0C0C0" }}
                      >
                        <MailIcon
                          className="w-4 h-4 mr-2"
                          style={{ color: "#468ffc" }}
                        />
                        <span>{selectedDoctor.email}</span>
                      </div>
                      <div
                        className="flex items-center text-sm"
                        style={{ color: "#C0C0C0" }}
                      >
                        <MapPinIcon
                          className="w-4 h-4 mr-2"
                          style={{ color: "#468ffc" }}
                        />
                        <span>{selectedDoctor.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats & Actions */}
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className="rounded-xl p-4 border"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(74, 138, 179, 0.2), rgba(6, 182, 212, 0.2))",
                        borderColor: "rgba(74, 138, 179, 0.3)",
                      }}
                    >
                      <UsersIcon
                        className="w-6 h-6 mb-2"
                        style={{ color: "#468ffc" }}
                      />
                      <p className="text-2xl font-bold text-white">
                        {selectedDoctor.stats.totalPatients}
                      </p>
                      <p className="text-xs" style={{ color: "#C0C0C0" }}>
                        Total Patients
                      </p>
                    </div>
                    <div
                      className="rounded-xl p-4 border"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))",
                        borderColor: "rgba(16, 185, 129, 0.3)",
                      }}
                    >
                      <AwardIcon
                        className="w-6 h-6 mb-2"
                        style={{ color: "#10B981" }}
                      />
                      <p className="text-2xl font-bold text-white">
                        {selectedDoctor.stats.successRate}%
                      </p>
                      <p className="text-xs" style={{ color: "#C0C0C0" }}>
                        Success Rate
                      </p>
                    </div>
                    <div
                      className="rounded-xl p-4 border"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
                        borderColor: "rgba(168, 85, 247, 0.3)",
                      }}
                    >
                      <ClockIcon
                        className="w-6 h-6 mb-2"
                        style={{ color: "#A855F7" }}
                      />
                      <p className="text-2xl font-bold text-white">
                        {selectedDoctor.stats.avgSessionTime}
                      </p>
                      <p className="text-xs" style={{ color: "#C0C0C0" }}>
                        Avg Session (min)
                      </p>
                    </div>
                    <div
                      className="rounded-xl p-4 border"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(245, 158, 11, 0.2))",
                        borderColor: "rgba(249, 115, 22, 0.3)",
                      }}
                    >
                      <HeartIcon
                        className="w-6 h-6 mb-2"
                        style={{ color: "#F97316" }}
                      />
                      <p className="text-2xl font-bold text-white">
                        {selectedDoctor.stats.specializations}
                      </p>
                      <p className="text-xs" style={{ color: "#C0C0C0" }}>
                        Specializations
                      </p>
                    </div>
                  </div>

                  {/* Languages */}
                  <div
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <h4 className="font-bold text-white mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.languages.map((lang, index) => (
                        <span
                          key={index}
                          className="text-white px-2 py-1 rounded-full text-xs"
                          style={{ backgroundColor: "rgba(74, 138, 179, 0.3)" }}
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div
                    className="rounded-xl p-4 text-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <p className="text-sm mb-1" style={{ color: "#C0C0C0" }}>
                      Starting from
                    </p>
                    <p className="text-3xl font-bold text-white mb-4">
                      {selectedDoctor.price}
                    </p>
                    <button
                      className="w-full text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
                      style={{
                        background: `linear-gradient(to right, #4a8ab3, #2563EB)`,
                        boxShadow: "0 10px 15px -3px rgba(74, 138, 179, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background =
                          "linear-gradient(to right, #2563EB, #4a8ab3)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background =
                          "linear-gradient(to right, #4a8ab3, #2563EB)";
                      }}
                    >
                      Book Appointment
                    </button>
                  </div>

                  {/* Availability */}
                  <div
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <h4 className="font-bold text-white mb-2 flex items-center">
                      <CalendarIcon
                        className="w-4 h-4 mr-2"
                        style={{ color: "#468ffc" }}
                      />
                      Availability
                    </h4>
                    <p className="text-sm" style={{ color: "#C0C0C0" }}>
                      {selectedDoctor.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoodMate;
