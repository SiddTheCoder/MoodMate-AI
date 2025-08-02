import { Menu, X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/e18e014e-98af-4f3d-b93d-9113c64c4aff.jpeg";
import Lottie from "lottie-react";
import LandingPageDoctor1 from "../assets/Doctor-LandingPage1.json";
import LandingPageDoctor2 from "../assets/Doctor-LandingPage2.json";
import { Typewriter } from "react-simple-typewriter";
import toast from "react-hot-toast";
import LoaderModal from "../components/LoaderModal";

export default function Lander() {
  const navigate = useNavigate();
  const { user, isAuthenticated,loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate("/chat");
    }
  }, [isAuthenticated, user, navigate]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  if (loading) return <LoaderModal text={"Initializing..."} />

  const testimonials = [
    {
      id: 1,
      name: "Siddhant Yadav",
      title: "Full Stack Developer & Mental Health Professional",
      image:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-1/480454287_1164847728685041_1417288023109203433_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=A3maWfhG-BsQ7kNvwFgblYC&_nc_oc=AdnmGgKUoDeizLFaQN2w3E-gmz_acQPVhkQMg33BqJ7QhRQ4szp1DzqXHNAsR9a_yZo&_nc_zt=24&_nc_ht=scontent.fktm20-1.fna&_nc_gid=l-0DQ2MbWzlxxXvdjMVCsA&oh=00_AfS9gVqSl62GsK74Umz4zMJc-QjApNKGKXNalbUUNXHCIA&oe=6891915C",
      quote:
        "MoodMate has been a game-changer for my emotional wellness journey. The AI understands my patterns better than I do, and having 24/7 support has given me confidence to face each day.",
    },
    {
      id: 2,
      name: "Tilak Roy",
      title: "Frontend Developer & UI/UX Designer",
      image:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-1/480628138_595382343492575_3992517807859011057_n.jpg?stp=c0.66.576.576a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=9MDbqrdEIy0Q7kNvwErvrK6&_nc_oc=Adm5fPlsp6fv-m4l2FTMTIqN2hjQWRC72dk2_RGJsOcZz4ypwC_gkUuPkt1XLTPcNQs&_nc_zt=24&_nc_ht=scontent.fktm20-1.fna&_nc_gid=ilW2hKhgMSPKFmvD4XBSnA&oh=00_AfSR0Erav-yRtcSnycbov1qkK97CHkJRdw2dOtslAxPu0g&oe=689178AD",
      quote:
        "As someone who struggles with anxiety, MoodMate's personalized approach and connection to licensed professionals has made therapy accessible and comfortable for me.",
    },
    {
      id: 3,
      name: "Rochak Regmi",
      title: "Backend Developer & Data Analyst",
      image:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-1/482026906_1165234775323239_655105243242327651_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=nre_Iu92Mf0Q7kNvwEoUFJp&_nc_oc=AdnqwpmufqeYe68YWSUp1FLMiUwR_Yt47rdDrEZZOqbAvdxXxFWuVSopt8CyRtK5iao&_nc_zt=24&_nc_ht=scontent.fktm20-1.fna&_nc_gid=UcErP3dxHIJuUVegEjSg1g&oh=00_AfSfEOnlym9_AKKN8_PR8Rdo64JDmx3_tX67AvYgvM3T_w&oe=6891840A",
      quote:
        "The mood tracking and video suggestions have helped me understand my emotional patterns. It's like having a supportive friend who's always there when I need guidance.",
    },
    {
      id: 4,
      name: "Kartik Adhikari",
      title: "Healthcare Worker",
      image:
        "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-1/524653691_1811980946078728_1901174797720199961_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=DWLrygsDhGcQ7kNvwGDJBio&_nc_oc=Adk6owdQIjFGkVB3-4mxAAgj75wRnXZxTAO0zZxt8f5Gz9T7Fm-FZ3e5IAoXShaYPjQ&_nc_zt=24&_nc_ht=scontent.fktm20-1.fna&_nc_gid=Uhu9CqdfTZb_JwkcPb79kg&oh=00_AfQFHCVw_kXGqwHlj6Mp08JlBTYKWbrx433r-8rIiQo7DA&oe=68918E79",
      quote:
        "Working in healthcare is stressful, but MoodMate's breathing exercises and mindfulness tools help me decompress after long shifts. The expert network is incredibly valuable.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#1D3557" }}
    >
      {/* Enhanced Animated Background Orbs with Movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large moving glowing orb - diagonal movement */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #468ffc 0%, rgba(70, 143, 252, 0.4) 40%, transparent 70%)",
            filter: "blur(60px)",
            animation: "moveDiagonal 20s ease-in-out infinite",
            top: "-20%",
            left: "-20%",
          }}
        />

        {/* Extra large central moving orb */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-12"
          style={{
            background:
              "radial-gradient(circle, #4a8ab3 0%, rgba(74, 138, 179, 0.3) 30%, transparent 60%)",
            filter: "blur(80px)",
            animation: "moveHorizontal 25s ease-in-out infinite",
            top: "20%",
            left: "-30%",
          }}
        />

        {/* Large vertical moving orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-18"
          style={{
            background:
              "radial-gradient(circle, #457B9D 0%, rgba(69, 123, 157, 0.4) 50%, transparent 70%)",
            filter: "blur(50px)",
            animation: "moveVertical 18s ease-in-out infinite",
            top: "60%",
            right: "-15%",
          }}
        />

        {/* Circular moving orb */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #468ffc 0%, rgba(70, 143, 252, 0.5) 60%, transparent 80%)",
            filter: "blur(40px)",
            animation: "moveCircular 30s linear infinite",
            top: "40%",
            left: "50%",
            transformOrigin: "center",
          }}
        />

        {/* Medium floating orbs with different speeds */}
        <div
          className="absolute w-[350px] h-[350px] rounded-full opacity-16"
          style={{
            background:
              "radial-gradient(circle, #4a8ab3 0%, rgba(74, 138, 179, 0.4) 50%, transparent 70%)",
            filter: "blur(35px)",
            animation: "floatSlow 15s ease-in-out infinite",
            top: "10%",
            left: "70%",
          }}
        />

        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-22"
          style={{
            background:
              "radial-gradient(circle, #457B9D 0%, rgba(69, 123, 157, 0.5) 40%, transparent 65%)",
            filter: "blur(30px)",
            animation: "floatFast 12s ease-in-out infinite reverse",
            bottom: "20%",
            left: "10%",
          }}
        />

        {/* Small accent moving orbs */}
        <div
          className="absolute w-[200px] h-[200px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, #468ffc 0%, rgba(70, 143, 252, 0.6) 50%, transparent 75%)",
            filter: "blur(25px)",
            animation: "moveWave 14s ease-in-out infinite",
            top: "30%",
            right: "30%",
          }}
        />

        <div
          className="absolute w-[250px] h-[250px] rounded-full opacity-18"
          style={{
            background:
              "radial-gradient(circle, #4a8ab3 0%, rgba(74, 138, 179, 0.4) 45%, transparent 70%)",
            filter: "blur(28px)",
            animation: "moveBounce 16s ease-in-out infinite",
            bottom: "40%",
            right: "10%",
          }}
        />

        {/* Extra Large Hero Section Moving Orb - Prominent Movement */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #468ffc 0%, rgba(70, 143, 252, 0.6) 25%, rgba(74, 138, 179, 0.4) 50%, transparent 75%)",
            filter: "blur(100px)",
            animation: "moveHeroOrb 22s ease-in-out infinite",
            top: "-30%",
            right: "-25%",
            zIndex: 1,
          }}
        />
      </div>

      {/* Header with Glassmorphism */}
      <header className="z-[999] px-4 lg:px-6 py-4 w-full fixed top-0">
        <div className="container mx-auto rounded-2xl px-6 py-4 backdrop-blur-md border border-white/10 shadow-lg ">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full overflow-hidden flex items-center justify-center">
                <img src={Logo} alt="" />
              </div>
              <span className="text-white text-lg font-semibold">MoodMate</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div
               
                className="text-white text-sm hover:text-blue-200 transition-colors"
              >
                Home
              </div>
              <div
                onClick={() => {
                  toast.error("Please Login first!");
                }}
                className="text-white text-sm hover:text-blue-200 transition-colors"
              >
                Find a doctor
              </div>
              <div
                onClick={() => {
                  toast.error("Please Login first!");
                }}
                className="text-white text-sm hover:text-blue-200 transition-colors"
              >
                Apps
              </div>
              <div
                onClick={() => {
                  toast.success("Testimonials coming soon!");
                }}
                className="text-white text-sm hover:text-blue-200 transition-colors"
              >
                Testimonials
              </div>
              <Link
                to="/login"
                className="text-sm  hover:bg-blue-300/40 bg-blue-300 px-4 py-2 rounded-md text-black transition-colors"
              >
                Login
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-white text-sm hover:text-blue-200 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white text-sm hover:text-blue-200 transition-colors"
                >
                  Find a doctor
                </a>
                <a
                  href="#"
                  className="text-white text-sm hover:text-blue-200 transition-colors"
                >
                  Apps
                </a>
                <a
                  href="#"
                  className="text-white text-sm hover:text-blue-200 transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="text-white text-sm hover:text-blue-200 transition-colors"
                >
                  About us
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 lg:px-24 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                Meet <span className="text-blue-600 text-8xl">MoodMate</span>
              </h1>
              <h2 className="text-lg lg:text-xl text-white font-medium drop-shadow-md">
                Your AI-Powered Emotional Wellness{" "}
                <Typewriter
                  words={[
                    "Companion",
                    "Friend",
                    "Support System",
                    "Mentor",
                    "Coach",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </h2>
              <p
                className="text-base leading-relaxed drop-shadow-sm"
                style={{ color: "#C0C0C0" }}
              >
                Whether you're feeling lonely, anxious, or just need a
                pick-me-up, MoodMate listens, learns your patterns, and delivers
                personalized support—right in your chat. No judgment, just a
                friend who cares.
              </p>
            </div>

            {/* Glassmorphism Button */}
            <button
              className="group relative px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-md border border-white/20 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(74, 138, 179, 0.8) 0%, rgba(70, 143, 252, 0.7) 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span
                onClick={() => navigate("/login")}
                className="relative z-10"
              >
                Start Chat
              </span>
              <div className="absolute inset-0 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
            </button>
          </div>

          {/* Right Content - Hero Image Container */}
          <div className="relative w-full">
            {/* Responsive Image Container */}
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden rounded-2xl">
              {/* Future PNG Image will be inserted here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Lottie
                  animationData={LandingPageDoctor1}
                  loop={true}
                  className="w-full h-full scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trusted Mental-Health Experts Section */}
      <section className="relative z-10 py-20 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing gradient shape - right */}
          <div
            className="absolute w-[700px] h-[500px] opacity-25"
            style={{
              background:
                "linear-gradient(225deg, rgba(70, 143, 252, 0.3) 0%, rgba(69, 123, 157, 0.2) 70%, transparent 100%)",
              borderRadius: "60% 40% 30% 70%",
              top: "20%",
              right: "-10%",
              transform: "rotate(-20deg)",
              filter: "blur(1px)",
            }}
          />

          {/* Medium flowing gradient shape - left */}
          <div
            className="absolute w-[600px] h-[400px] opacity-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(74, 138, 179, 0.4) 0%, rgba(70, 143, 252, 0.2) 50%, transparent 100%)",
              borderRadius: "40% 60% 70% 30%",
              top: "10%",
              left: "-15%",
              transform: "rotate(15deg)",
              filter: "blur(2px)",
            }}
          />

          {/* Decorative dots pattern - right side */}
          <div className="absolute right-8 bottom-1/4 opacity-30">
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#468ffc" }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content - Expert Image Container */}
            <div className="relative order-2 lg:order-1">
              {/* Responsive Image Container */}
              <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] relative overflow-hidden rounded-2xl">
                {/* Future PNG Image will be inserted here */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-full h-[80%]">
                    <Lottie
                      animationData={LandingPageDoctor2}
                      loop={true}
                      className="w-full h-[100%] scale-125"
                    />
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-white/20"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(70, 143, 252, 0.4) 0%, rgba(74, 138, 179, 0.3) 100%)",
                      }}
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-white/60 text-xs">
                      Expert Illustration Placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg mb-4">
                    Trusted Mental-Health Experts
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 mb-6" />
                </div>

                <p
                  className="text-base leading-relaxed drop-shadow-sm"
                  style={{ color: "#C0C0C0" }}
                >
                  Partnering with licensed professionals to support your
                  journey. MoodMate teams up with certified therapists,
                  psychologists, and wellness coaches to bring you expert
                  guidance whenever you need it. From quick check-ins to
                  in-depth counselling, our vetted network ensures you're always
                  talking to someone who truly understands and cares.
                </p>
              </div>

              {/* Expert Features Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Licensed Professionals Card */}
                <div
                  className="group p-6 rounded-xl backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
                    boxShadow: "0 8px 32px rgba(70, 143, 252, 0.15)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center backdrop-blur-sm border border-white/20"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(70, 143, 252, 0.4) 0%, rgba(74, 138, 179, 0.3) 100%)",
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 drop-shadow-md">
                      Licensed Professionals
                    </h3>
                    <p
                      className="text-xs drop-shadow-sm"
                      style={{ color: "#C0C0C0" }}
                    >
                      Certified therapists and psychologists
                    </p>
                  </div>
                </div>

                {/* Expert Guidance Card */}
                <div
                  className="group p-6 rounded-xl backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
                    boxShadow: "0 8px 32px rgba(74, 138, 179, 0.15)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center backdrop-blur-sm border border-white/20"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(74, 138, 179, 0.4) 0%, rgba(70, 143, 252, 0.3) 100%)",
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 drop-shadow-md">
                      Expert Guidance
                    </h3>
                    <p
                      className="text-xs drop-shadow-sm"
                      style={{ color: "#C0C0C0" }}
                    >
                      Professional support when you need it
                    </p>
                  </div>
                </div>
              </div>

              {/* Updated Learn More Button */}
              <button className="group relative px-8 py-3 rounded-full text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-md border-2 border-white/30 hover:border-white/50 overflow-hidden bg-transparent">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300 rounded-full" />
                <div className="flex items-center space-x-2 relative z-10">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Background Graphics */}
      <section className="relative z-10 py-20 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing gradient shape - left */}
          <div
            className="absolute w-[800px] h-[600px] opacity-30"
            style={{
              background:
                "linear-gradient(135deg, rgba(69, 123, 157, 0.4) 0%, rgba(74, 138, 179, 0.2) 50%, transparent 100%)",
              borderRadius: "50% 30% 70% 40%",
              top: "10%",
              left: "-20%",
              transform: "rotate(-15deg)",
              filter: "blur(1px)",
            }}
          />

          {/* Medium flowing gradient shape - right */}
          <div
            className="absolute w-[600px] h-[500px] opacity-25"
            style={{
              background:
                "linear-gradient(225deg, rgba(70, 143, 252, 0.3) 0%, rgba(69, 123, 157, 0.2) 70%, transparent 100%)",
              borderRadius: "40% 60% 30% 70%",
              top: "30%",
              right: "-15%",
              transform: "rotate(20deg)",
              filter: "blur(1px)",
            }}
          />

          {/* Decorative dots pattern */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30">
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#468ffc" }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Our services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 opacity-60" />
            <p
              className="text-base max-w-2xl mx-auto drop-shadow-sm"
              style={{ color: "#C0C0C0" }}
            >
              Get the support whenever you need—no matter how you're feeling
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Mood Detection */}
            <div
              className="group p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
                boxShadow: "0 8px 32px rgba(70, 143, 252, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center backdrop-blur-sm border border-white/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(70, 143, 252, 0.4) 0%, rgba(74, 138, 179, 0.3) 100%)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
                  Mood Detection
                </h3>
                <p
                  className="drop-shadow-sm leading-relaxed text-sm"
                  style={{ color: "#C0C0C0" }}
                >
                  Instantly detects your emotional state through natural
                  language conversation and tone.
                </p>
              </div>
            </div>

            {/* Friend Zone */}
            <div
              className="group p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
                boxShadow: "0 8px 32px rgba(74, 138, 179, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center backdrop-blur-sm border border-white/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(74, 138, 179, 0.4) 0%, rgba(70, 143, 252, 0.3) 100%)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
                  Friend Zone
                </h3>
                <p
                  className="drop-shadow-sm leading-relaxed text-sm"
                  style={{ color: "#C0C0C0" }}
                >
                  Connect with others experiencing similar moods for safe,
                  supportive conversations.
                </p>
              </div>
            </div>

            {/* Mood History */}
            <div
              className="group p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
                boxShadow: "0 8px 32px rgba(69, 123, 157, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center backdrop-blur-sm border border-white/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(70, 143, 252, 0.4) 0%, rgba(74, 138, 179, 0.3) 100%)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
                  Mood History
                </h3>
                <p
                  className="drop-shadow-sm leading-relaxed text-sm"
                  style={{ color: "#C0C0C0" }}
                >
                  Track your emotional journey with daily mood insights and
                  patterns.
                </p>
              </div>
            </div>

            {/* Online Therapy Booking */}
            <div
              className="group p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
                boxShadow: "0 8px 32px rgba(70, 143, 252, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center backdrop-blur-sm border border-white/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(70, 143, 252, 0.4) 0%, rgba(74, 138, 179, 0.3) 100%)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
                  Online Therapy Booking
                </h3>
                <p
                  className="drop-shadow-sm leading-relaxed text-sm"
                  style={{ color: "#C0C0C0" }}
                >
                  Seamlessly schedule a one-on-one session with licensed
                  mental-health professionals.
                </p>
              </div>
            </div>

            {/* Exercises & Tips */}
            <div
              className="group p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
                boxShadow: "0 8px 32px rgba(74, 138, 179, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center backdrop-blur-sm border border-white/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(74, 138, 179, 0.4) 0%, rgba(70, 143, 252, 0.3) 100%)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
                  Exercises & Tips
                </h3>
                <p
                  className="drop-shadow-sm leading-relaxed text-sm"
                  style={{ color: "#C0C0C0" }}
                >
                  Offers quick breathing, journaling, and mindfulness tools to
                  feel better fast.
                </p>
              </div>
            </div>

            {/* Video Suggestions */}
            <div
              className="group p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
                boxShadow: "0 8px 32px rgba(69, 123, 157, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center backdrop-blur-sm border border-white/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(70, 143, 252, 0.4) 0%, rgba(74, 138, 179, 0.3) 100%)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
                  Video Suggestions
                </h3>
                <p
                  className="drop-shadow-sm leading-relaxed text-sm"
                  style={{ color: "#C0C0C0" }}
                >
                  Recommends calming or motivational YouTube videos based on
                  your current mood.
                </p>
              </div>
            </div>
          </div>

          {/* Updated Learn More Button */}
          <div className="text-center">
            <button className="group relative px-8 py-3 rounded-full text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-md border-2 border-white/30 hover:border-white/50 overflow-hidden bg-transparent">
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300 rounded-full" />
              <div className="flex items-center space-x-2 relative z-10">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing gradient shape - right */}
          <div
            className="absolute w-[700px] h-[500px] opacity-25"
            style={{
              background:
                "linear-gradient(225deg, rgba(70, 143, 252, 0.3) 0%, rgba(69, 123, 157, 0.2) 70%, transparent 100%)",
              borderRadius: "60% 40% 30% 70%",
              top: "20%",
              right: "-10%",
              transform: "rotate(-20deg)",
              filter: "blur(1px)",
            }}
          />

          {/* Medium flowing gradient shape - left */}
          <div
            className="absolute w-[600px] h-[400px] opacity-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(74, 138, 179, 0.4) 0%, rgba(70, 143, 252, 0.2) 50%, transparent 100%)",
              borderRadius: "40% 60% 70% 30%",
              top: "10%",
              left: "-15%",
              transform: "rotate(15deg)",
              filter: "blur(2px)",
            }}
          />

          {/* Decorative dots pattern - top right */}
          <div className="absolute right-8 top-16 opacity-30">
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#468ffc" }}
                />
              ))}
            </div>
          </div>

          {/* Decorative dots pattern - bottom left */}
          <div className="absolute left-8 bottom-16 opacity-20">
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#4a8ab3" }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              What our customers are saying
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60" />
          </div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div
              className="p-8 lg:p-12 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
                boxShadow:
                  "0 20px 40px rgba(70, 143, 252, 0.1), 0 8px 16px rgba(69, 123, 157, 0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                    <img
                      src={
                        testimonials[currentTestimonial].image ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[currentTestimonial].name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p
                      className="text-base drop-shadow-sm"
                      style={{ color: "#C0C0C0" }}
                    >
                      {testimonials[currentTestimonial].title}
                    </p>
                  </div>

                  <blockquote className="text-base lg:text-lg leading-relaxed text-white drop-shadow-sm italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="group p-3 rounded-full backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
              }}
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-blue-200 transition-colors" />
            </button>

            {/* Pagination Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "scale-125"
                      : "hover:scale-110"
                  }`}
                  style={{
                    backgroundColor:
                      index === currentTestimonial
                        ? "#468ffc"
                        : "rgba(192, 192, 192, 0.4)",
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="group p-3 rounded-full backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
              }}
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-blue-200 transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-16 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large flowing gradient shape */}
          <div
            className="absolute w-[800px] h-[400px] opacity-30"
            style={{
              background:
                "linear-gradient(135deg, rgba(70, 143, 252, 0.3) 0%, rgba(74, 138, 179, 0.2) 50%, transparent 100%)",
              borderRadius: "50% 30% 70% 40%",
              top: "0%",
              left: "-20%",
              transform: "rotate(-10deg)",
              filter: "blur(2px)",
            }}
          />

          {/* Decorative dots pattern - bottom left */}
          <div className="absolute left-8 bottom-8 opacity-20">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#468ffc" }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="container mx-auto px-4 lg:px-6 relative z-10 backdrop-blur-sm rounded-2xl border border-white/10 py-12"
          style={{
            background:
              "linear-gradient(to bottom, rgba(29, 53, 87, 0.5) 0%, rgba(69, 123, 157, 0.7) 100%)",
          }}
        >
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg backdrop-blur-sm border border-white/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(70, 143, 252, 0.9) 0%, rgba(74, 138, 179, 0.8) 100%)",
                  }}
                >
                  T
                </div>
                <span className="text-white text-lg font-semibold">
                  Trafalgar
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#C0C0C0" }}
              >
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone.
              </p>
              <p className="text-xs" style={{ color: "#C0C0C0" }}>
                ©Trafalgar PTY LTD 2020. All rights reserved
              </p>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white">Company</h3>
              <nav className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Find a doctor
                </a>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Apps
                </a>
              </nav>
            </div>

            {/* Region Links */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white">Region</h3>
              <nav className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Indonesia
                </a>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Singapore
                </a>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Hongkong
                </a>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Canada
                </a>
              </nav>
            </div>

            {/* Help Links */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white">Help</h3>
              <nav className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Help center
                </a>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Contact support
                </a>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Instructions
                </a>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  How it works
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-cneter gap-4 items-end relative pb-1">
          {" "}
          <div className="text-9xl font-stretch-extra-expanded text-white/80 font-bold italic">
            MoodMate
          </div>
          <div className="text-white ">Powered By ChromoVerse</div>
        </div>
      </footer>

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes moveDiagonal {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(100vw, 20vh) scale(1.1);
          }
          50% {
            transform: translate(80vw, 60vh) scale(0.9);
          }
          75% {
            transform: translate(-20vw, 40vh) scale(1.05);
          }
        }

        @keyframes moveHorizontal {
          0%,
          100% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(120vw) scale(1.2);
          }
        }

        @keyframes moveVertical {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          33% {
            transform: translateY(-40vh) scale(1.1);
          }
          66% {
            transform: translateY(20vh) scale(0.95);
          }
        }

        @keyframes moveCircular {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(200px)
              rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(200px)
              rotate(-360deg);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          33% {
            transform: translateY(-30px) translateX(20px) scale(1.05);
          }
          66% {
            transform: translateY(15px) translateX(-15px) scale(0.98);
          }
        }

        @keyframes floatFast {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-40px) translateX(30px) scale(1.08);
          }
        }

        @keyframes moveWave {
          0%,
          100% {
            transform: translateX(0) translateY(0) scale(1);
          }
          25% {
            transform: translateX(-50vw) translateY(-20vh) scale(1.1);
          }
          50% {
            transform: translateX(-30vw) translateY(30vh) scale(0.9);
          }
          75% {
            transform: translateX(20vw) translateY(-10vh) scale(1.05);
          }
        }

        @keyframes moveBounce {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          25% {
            transform: translateY(-60vh) scale(1.15);
          }
          50% {
            transform: translateY(-20vh) scale(0.85);
          }
          75% {
            transform: translateY(-40vh) scale(1.1);
          }
        }

        @keyframes moveHeroOrb {
          0%,
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          20% {
            transform: translate(-40vw, 15vh) scale(1.15) rotate(72deg);
          }
          40% {
            transform: translate(-60vw, -10vh) scale(0.9) rotate(144deg);
          }
          60% {
            transform: translate(-30vw, 25vh) scale(1.1) rotate(216deg);
          }
          80% {
            transform: translate(-10vw, 5vh) scale(1.05) rotate(288deg);
          }
        }
      `}</style>
    </div>
  );
}
