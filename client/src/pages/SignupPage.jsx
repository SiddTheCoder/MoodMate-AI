import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/e18e014e-98af-4f3d-b93d-9113c64c4aff.jpeg";

function Signup() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked");
    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
      response_type: "code",
      scope: "email profile",
      access_type: "offline",
      prompt: "consent",
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  };

  return (
    <div className="relative min-h-screen bg-[#1D3557] overflow-hidden flex items-center justify-center p-4">
      {/* Glowing Blurry Ball */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-[#4a8ab3] opacity-30 rounded-full filter blur-3xl animate-pulse mix-blend-screen"></div>

      {/* Curvy SVG Graphic */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#457B9D"
          fillOpacity="0.4"
          d="M0,96L40,122.7C80,149,160,203,240,208C320,213,400,171,480,138.7C560,107,640,85,720,101.3C800,117,880,171,960,192C1040,213,1120,203,1200,181.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      {/* Content Container */}
      <div className="w-full max-w-md z-10">
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#468ffc] shadow-lg">
              <img
                src={Logo}
                alt="MoodMate Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#468ffc] mb-2">MoodMate</h1>
          <p className="text-[#C0C0C0] text-lg font-medium">
            “We didn’t just build a bot. We built a buddy.”
          </p>
        </div>

        {/* Sign In Card */}
        <div className="rounded-2xl shadow-2xl p-8 bg-gradient-to-b from-[#457B9D]/70 to-[#1D3557]/80 backdrop-blur-md border border-white/20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Sign in to your account
            </h2>
            <p className="text-[#C0C0C0]">
              Use your Google account to continue
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-[#4a8ab3] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3c7ba0] transition-all duration-200 shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-8">
          <p className="text-[#C0C0C0] text-sm tracking-wide">
            Get Your Emotional Buddy Today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
