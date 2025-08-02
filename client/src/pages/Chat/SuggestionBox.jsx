import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSuggestionBox } from "../../feature/localstate/localStateSlice";
import Lottie from "lottie-react";
import HappyImg1 from "../../assets/joy1.json";
import HappyImg2 from "../../assets/joy2.json";
import SadImg1 from "../../assets/sad1.json";
import SadImg2 from "../../assets/sad2.json";
import ScaredImg1 from "../../assets/scared1.json";
import ScaredImg2 from "../../assets/scared2.json";
import NeutralImg1 from "../../assets/neutral1.json";
import NeutralImg2 from "../../assets/neutral2.json";

const emotionImages = {
  joy: [HappyImg1, HappyImg2],
  sadness: [SadImg1, SadImg2],
  fear: [ScaredImg1, ScaredImg2],
  scared: [ScaredImg1, ScaredImg2], // in case "scared" is used
  neutral: [NeutralImg1, NeutralImg2],
};

const emotionSongs = {
  joy: [
    {
      title: "Bright Days Ahead",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Feeling Good",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ],
  sadness: [
    {
      title: "Misty Roads",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Echoes",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    },
  ],
  fear: [
    {
      title: "Into the Unknown",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Dark Corners",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
  ],
  neutral: [
    {
      title: "Balanced Mind",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
      title: "Flat Horizon",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    },
  ],
};

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

function SuggestionBox() {
  const { mentalState } = useSelector((state) => state.mentalState);
  const { isSuggestionBoxOpen } = useSelector((state) => state.localState);
  const dispatch = useDispatch();
  const [selectedSong, setSelectedSong] = React.useState(null);

  const getRandomImage = (emotion) => {
    const imgs = emotionImages[emotion?.toLowerCase()];
    if (!imgs) return null;
    const randomIndex = Math.floor(Math.random() * imgs.length);
    return imgs[randomIndex];
  };

  const getRandomSong = (emotion) => {
    const songs = emotionSongs[emotion?.toLowerCase()];
    if (!songs) return null;
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
  };

  const handleToggle = () => {
    dispatch(toggleSuggestionBox());
  };

  return (
    <div className="h-full flex justify-center items-center w-full bg-transparent">
      <div
        className={`rounded-tl-2xl rounded-bl-2xl transition-all duration-300 ease-in-out relative ${
          isSuggestionBoxOpen
            ? "w-80 h-[98%] bg-white "
            : "w-12 h-[86%] bg-slate-950 "
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="absolute top-4 left-2 w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isSuggestionBoxOpen ? "" : "rotate-180"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Content Area */}
        <div className="h-full p-4 pt-16">
          {isSuggestionBoxOpen ? (
            // Wide Version Content
            <div className="h-full flex flex-col space-y-4">
              <div className="text-black text-lg font-semibold mb-4">
                Suggestions
              </div>

              {/* Sample Suggestion Buttons */}
              {!mentalState ? (
                <div className="space-y-2">
                  <button className="w-full p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-white text-left transition-colors duration-200">
                    <div className="font-medium">Quick Response</div>
                    <div className="text-sm text-slate-300 mt-1">
                      Generate a quick reply
                    </div>
                  </button>

                  <button className="w-full p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-white text-left transition-colors duration-200">
                    <div className="font-medium">Detailed Analysis</div>
                    <div className="text-sm text-slate-300 mt-1">
                      Get comprehensive insights
                    </div>
                  </button>

                  <button className="w-full p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-white text-left transition-colors duration-200">
                    <div className="font-medium">Creative Ideas</div>
                    <div className="text-sm text-slate-300 mt-1">
                      Brainstorm new concepts
                    </div>
                  </button>

                  <button className="w-full p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-white text-left transition-colors duration-200">
                    <div className="font-medium">Problem Solving</div>
                    <div className="text-sm text-slate-300 mt-1">
                      Find solutions efficiently
                    </div>
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="w-full p-3 bg-slate-800 rounded-lg text-white text-left">
                    <div className="font-medium capitalize">
                      {mentalState?.emotion || "Unknown"}
                    </div>
                    <div className="text-sm text-slate-300 mt-1">
                      {mentalState?.tip || "No suggestion available"}
                    </div>
                  </div>

                  {/* Render Image After Tip */}
                  {getRandomImage(mentalState?.emotion) && (
                    <div className="w-full rounded-lg overflow-hidden">
                      <Lottie
                        animationData={getRandomImage(mentalState.emotion)}
                        loop
                        autoplay
                        style={{ height: 150 }}
                      />
                    </div>
                  )}

                  {/* Emotion-specific Song Section */}
{emotionSongs[mentalState?.emotion?.toLowerCase()] && (
  <div className="w-full">
    <div className="text-sm font-medium text-slate-700 mb-2">🎵 Listen to a Song</div>
    <div className="space-y-1">
      {shuffleArray(emotionSongs[mentalState.emotion.toLowerCase()]).map((song, idx) => (
        <button
          key={idx}
          onClick={() => setSelectedSong(song)}
          className="w-full text-left bg-slate-100 hover:bg-slate-200 text-sm px-3 py-2 rounded transition-colors duration-200"
        >
          🎧 {song.title}
        </button>
      ))}
    </div>

    {selectedSong && (
      <div className="mt-4 bg-slate-100 p-3 rounded-lg">
        <div className="text-slate-800 font-medium mb-1">Now Playing: {selectedSong.title}</div>
        <audio controls className="w-full rounded">
          <source src={selectedSong.url} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    )}
  </div>
)}
                </div>
              )}

              {/* Additional Features */}
              <div className="mt-auto pt-4 border-t border-slate-700">
                <div className="text-slate-400 text-sm mb-2">
                  Mental State: {mentalState?.emotion || "Normal"}
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors duration-200">
                    Focus Mode
                  </button>
                  <button className="flex-1 py-2 px-3 bg-green-600 hover:bg-green-700 rounded text-white text-sm transition-colors duration-200">
                    Relax Mode
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Condensed Version Content
            <div className="h-full flex flex-col items-center justify-start space-y-4">
              {/* Condensed Suggestion Icons */}
              <button
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-white transition-colors duration-200"
                title="Quick Response"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>

              <button
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-white transition-colors duration-200"
                title="Detailed Analysis"
              >
                <svg
                  className="w-4 h-4"
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
              </button>

              <button
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-white transition-colors duration-200"
                title="Creative Ideas"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </button>

              <button
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-white transition-colors duration-200"
                title="Problem Solving"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              {/* Mental State Indicator */}
              <div className="mt-auto mb-4">
                <div
                  className={`w-3 h-3 rounded-full ${
                    mentalState?.emotion === "focused"
                      ? "bg-blue-500"
                      : mentalState?.emotion === "relaxed"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                  title={`Mental State: ${mentalState?.emotion || "Normal"}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestionBox;
