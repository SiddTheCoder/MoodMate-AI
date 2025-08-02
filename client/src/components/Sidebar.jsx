import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../feature/auth/authThunks";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/e18e014e-98af-4f3d-b93d-9113c64c4aff.jpeg";

import {
  ClipboardPaste,
  Trophy,
  ShoppingCart,
  Box,
  BarChart2,
  MessageCircle,
  Settings,
  LogOut,
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Store,
  AlignJustify,
  Slack,
  Speech,  LayoutDashboard,
  Activity,
  Users,
  CalendarHeart,
  Home
} from "lucide-react";

import Lottie from "lottie-react";
// import CompanyLogo from "../../public/images/animated-logo-cart.json";

import { setIsSideBarCollapsed } from "../feature/localstate/localStateSlice";
import Confirmer from "./Confirmer";
import { createNewChat, getUserAllChats } from "../feature/chat/chatThunks";
import { setCurrentChat } from "../feature/chat/chatSlice";

const Sidebar = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const { isSideBarCollapsed } = useSelector((state) => state.localState);
  const isOpen = !isSideBarCollapsed;
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);
  const [isLogoutConfirmerOn, setIsLogoutConfirmerOn] = useState(false);

  const toggleSidebar = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { to: "/chat", icon: Home, label: "Home" },
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/community", icon: Users, label: "Community" },
    { to: "/appointment", icon: CalendarHeart, label: "Doctor Appointment" },
  ];

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const { chats, currentChat } = useSelector((state) => state.chat);
  const formattedChats = chats.filter((c) => c._id !== currentChat?._id);
  console.log("chats", chats);

  useEffect(() => {
    dispatch(getUserAllChats());
  }, [dispatch]);

 return (
   <>
     {/* Sidebar */}
     <div
       className={`fixed top-0 left-0 z-40 transition-all duration-300 shadow-md flex flex-col justify-between
        ${
          isOpen
            ? "w-[250px] bg-slate-950 h-[97vh] top-2 rounded-tr-2xl rounded-br-2xl"
            : "w-[75px] top-2 h-[98vh] bg-slate-950 rounded-tr-2xl rounded-br-2xl"
        }`}
     >
       {/* Top Section */}
       <div className="p-4 relative">
         {/* Logo and toggle */}
         <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 flex-1 cursor-pointer">
             {!!isOpen && (
               <>
                 <img
                   src={Logo}
                   alt="MoodMate Logo"
                   className="w-8 h-8 rounded-full"
                 />
                 <h1 className="text-lg font-bold text-blue-600">MoodMate</h1>
               </>
             )}
           </div>

           {/* Toggle Button */}
           <button
             onClick={toggleSidebar}
             className="p-1 mr-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition cursor-e-resize"
           >
             {isOpen ? <ChevronLeft size={23} /> : <AlignJustify size={23} />}
           </button>
         </div>

         {/* Nav Items */}
         <nav className={`mt-6 flex flex-col gap-1`}>
           {navItems.map(({ to, icon: Icon, label }, index) => {
             return (
               <NavLink
                 onClick={() => dispatch(setIsSideBarCollapsed(true)) }
                 key={index}
                 to={to}
                 className={({ isActive }) =>
                   `group flex items-center gap-3 px-3 py-2 rounded-md text-[12px] font-medium transition-all relative ${
                     isOpen
                       ? isActive
                         ? "bg-blue-100 text-blue-600"
                         : "text-white hover:text-blue-600 hover:bg-gray-100"
                       : "text-white hover:bg-white/10"
                   }`
                 }
               >
                 <Icon
                   className={`w-[18px] h-[18px] ${
                     !isOpen ? "text-white" : ""
                   }`}
                 />
                 {isOpen ? (
                   <span>{label}</span>
                 ) : (
                   <span className="absolute left-full ml-2 bg-blue-950 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                     {label}
                   </span>
                 )}
               </NavLink>
             );
           })}

           {/* New Chat */}
           <div
             onClick={() => {
               dispatch(createNewChat());
             }}
             className={`group flex items-center gap-3 px-3 py-2 rounded-md text-[12px] font-medium transition-all relative ${
               isOpen
                 ? "text-white hover:text-blue-600 hover:bg-gray-100"
                 : "text-white hover:bg-white/10"
             } cursor-pointer`}
           >
             <ClipboardPaste
               className={`w-[18px] h-[18px] ${!isOpen ? "text-white" : ""}`}
             />
             {isOpen ? (
               <span>New Chat</span>
             ) : (
               <span className="absolute left-full ml-2 bg-blue-950 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                 New Chat
               </span>
             )}
           </div>
         </nav>
       </div>

       {/* Previous message section */}
       <div
         className={`px-4 py-2 border-t mb-3 h-full flex flex-col text-[12px] overflow-y-auto ${
           isOpen
             ? "border-gray-200 text-white"
             : "border-white/30 text-white"
         }`}
       >
         <div className="font-bold text-[15px]">Chats</div>
         {currentChat ? (
           <span className="text-[12.5px] cursor-pointer hover:bg-blue-300/20 p-2 rounded-md truncate bg-blue-300/20">
             {currentChat.title}
           </span>
         ) : null}

         {chats
           ? formattedChats.map((chat) => (
               <span
                 onClick={() => {
                   console.log("currentChat", chat);
                   dispatch(setCurrentChat(chat));
                 }}
                 key={chat._id}
                 className="text-[12.5px] cursor-pointer hover:bg-blue-300/20 p-2 rounded-md truncate"
               >
                 {chat.title}
               </span>
             ))
           : null}
       </div>

       {/* Bottom Section */}
       <div
         className={`px-4 py-2 border-t mb-3 ${
           isOpen ? "border-gray-200" : "border-white/30"
         }`}
       >
         <div className="flex flex-col gap-2">
           <NavLink
             to="/settings"
             className={({ isActive }) =>
               `group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                 isOpen
                   ? isActive
                     ? "bg-blue-100 text-blue-600"
                     : "text-white hover:text-blue-600 hover:bg-gray-100"
                   : "text-white hover:bg-white/10"
               }`
             }
           >
             <Settings
               className={`w-[18px] h-[18px] ${!isOpen ? "text-white" : ""}`}
             />
             {isOpen ? (
               <span>Settings</span>
             ) : (
               <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                 Settings
               </span>
             )}
           </NavLink>

           {user && (
             <div
               onClick={() => setIsLogoutConfirmerOn(true)}
               className={`cursor-pointer group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                 isOpen
                   ? "text-white hover:text-red-600 hover:bg-red-50"
                   : "text-white hover:bg-white/10"
               }`}
             >
               <LogOut
                 className={`w-[18px] h-[18px] ${!isOpen ? "text-white" : ""}`}
               />
               {isOpen ? (
                 <span>Logout</span>
               ) : (
                 <span className="absolute left-full ml-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                   Logout
                 </span>
               )}
             </div>
           )}

           {isLogoutConfirmerOn && (
             <Confirmer
               confirmatoryText={"Are You sure want to Logout ?"}
               action={handleLogout}
               onClose={() => setIsLogoutConfirmerOn(false)}
             />
           )}
         </div>
       </div>
     </div>
   </>
 );

};


export default Sidebar;
