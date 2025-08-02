import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/e18e014e-98af-4f3d-b93d-9113c64c4aff.jpeg";

function EmotionIndicator() {
  const { mentalState } = useSelector((state) => state.mentalState);
  const { isSideBarCollapsed } = useSelector((state) => state.localState);
  const isOpen = !isSideBarCollapsed;

  const level = mentalState?.level ?? null;

  const levelToDotIndex = {
    5: 0, // joy (blue)
    4: 1, // love (green)
    3: 3, // neutral/sad (yellow)
    2: 2, // fear/anger (red)
    1: 3, // sadness (yellow)
  };

  const activeIndex = levelToDotIndex[level];

  const dots = [
    { color: "bg-blue-500", key: "joy", label: "Joy" },
    { color: "bg-green-500", key: "love", label: "Love" },
    { color: "bg-red-500", key: "anger", label: "Anger/Fear" },
    { color: "bg-yellow-500", key: "neutral", label: "Neutral/Sadness" },
  ];

  return (
    <div className="w-full h-3 absolute top-2 flex justify-between px-12 gap-1 z-10">
      <div className="flex items-center gap-2 flex-1 cursor-pointer mt-4">
        {!isOpen && (
          <>
            <img
              src={Logo}
              alt="MoodMate Logo"
              className="w-8 h-8 rounded-full"
            />
            <h1 className="text-lg font-bold text-white">MoodMate</h1>
          </>
        )}
      </div>

      <div className="flex flex-row gap-2 mt-4">
        {dots.map(({ color, key, label }, idx) => (
          <div key={key} className="relative group">
            <div
              className={`h-4 w-4 hover:-translate-y-1 rounded-full ${color} transition-all duration-300 ${
                idx === activeIndex ? "opacity-100" : "opacity-20"
              }`}
            />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmotionIndicator;
