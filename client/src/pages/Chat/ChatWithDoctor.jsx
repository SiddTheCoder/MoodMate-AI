
import { useState, useRef, useEffect } from "react"

// Lucide React icons as inline SVGs with theme colors
const SendIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
)

const MicIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#468ffc] group-hover:text-white transition-colors"
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <path d="M12 19v3" />
  </svg>
)

const PaperclipIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#468ffc] group-hover:text-white transition-colors"
  >
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
)

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#468ffc] group-hover:text-white transition-colors"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const VideoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#468ffc] group-hover:text-white transition-colors"
  >
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
    <rect x="2" y="6" width="14" height="12" rx="2" />
  </svg>
)

const MoreVerticalIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#468ffc] group-hover:text-white transition-colors"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
)

const GraduationCapIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#468ffc]"
  >
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#468ffc]"
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect x="2" y="7" width="20" height="11" rx="1" />
  </svg>
)

const UserIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#468ffc]"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const XIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#C0C0C0] hover:text-white transition-colors"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const dummyDoctor = {
  id: "1",
  name: "Dr. Sarah Mitchell",
  title: "MBBS, M.D. (Psychiatry)",
  specialization: "Mental Health Specialist",
  avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  about:
    "I specialize in mental health and wellness. I am ready to help you get well and live a healthy life. I have extensive experience in treating anxiety, depression, and mood disorders with a compassionate approach.",
  education: [
    {
      year: "2015-2020",
      degree: "MBBS",
      institution: "Harvard Medical School",
    },
    {
      year: "2020-2023",
      degree: "M.D. (Psychiatry)",
      institution: "Johns Hopkins University",
    },
  ],
  experience: [
    {
      years: "2023-Present",
      position: "Senior Psychiatrist",
      hospital: "MoodMate Health Center",
    },
    {
      years: "2021-2023",
      position: "Resident Psychiatrist",
      hospital: "General Hospital",
    },
  ],
  isOnline: true,
}

const availableDoctors = [
  {
    id: "1",
    name: "Dr. Sarah Mitchell",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
    isOnline: true,
  },
  {
    id: "2",
    name: "Dr. James Wilson",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=40&h=40&fit=crop&crop=face",
    isOnline: true,
  },
  {
    id: "3",
    name: "Dr. Emily Chen",
    avatar: "https://images.unsplash.com/photo-1594824388853-e4d2e8b0e0b7?w=40&h=40&fit=crop&crop=face",
    isOnline: false,
  },
]

const dummyMessages = [
  {
    id: "1",
    sender: "doctor",
    content:
      "Hello! I'm Dr. Sarah Mitchell from MoodMate. How are you feeling today? I'm here to help you with any mental health concerns you might have.",
    timestamp: "10:30 AM",
    type: "text",
  },
  {
    id: "2",
    sender: "user",
    content:
      "Hi Dr. Mitchell, I've been feeling quite anxious lately and having trouble sleeping. I'm not sure what's causing it, but it's affecting my daily life.",
    timestamp: "10:32 AM",
    type: "text",
  },
  {
    id: "3",
    sender: "doctor",
    content:
      "I understand how challenging that must be for you. Anxiety and sleep issues often go hand in hand. Can you tell me more about when these feelings started?",
    timestamp: "10:35 AM",
    type: "text",
  },
  {
    id: "4",
    sender: "user",
    content:
      "It started about 3 weeks ago after I started a new job. I've been having racing thoughts, especially at night when I try to sleep.",
    timestamp: "10:37 AM",
    type: "text",
  },
  {
    id: "5",
    sender: "doctor",
    content:
      "Thank you for sharing that with me. Work-related stress is a common trigger for anxiety. Let me share some breathing techniques that might help you relax.",
    timestamp: "10:40 AM",
    type: "audio",
    duration: "2:15",
  },
  {
    id: "6",
    sender: "user",
    content:
      "That sounds helpful. I'm willing to try anything at this point. The lack of sleep is making everything worse.",
    timestamp: "10:43 AM",
    type: "text",
  },
]

export default function DoctorConsultationChat() {
  const [messages, setMessages] = useState(dummyMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showProfile, setShowProfile] = useState(true)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: Date.now().toString(),
        sender: "user",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        type: "text",
      }

      setMessages((prev) => [...prev, userMessage])
      setNewMessage("")
      setIsTyping(true)

      // Simulate doctor response
      setTimeout(() => {
        const responses = [
          "I appreciate you sharing that with me. Based on what you've told me, I'd like to suggest some coping strategies. Would you like to explore some mindfulness techniques?",
          "That's a very common experience. Let's work together on some practical solutions. Have you tried any relaxation techniques before?",
          "I understand your concerns. It's important to address both the anxiety and sleep issues. Let me recommend some evidence-based approaches.",
          "Thank you for being so open about your feelings. This is a safe space, and we'll work through this together step by step.",
        ]

        const doctorResponse = {
          id: (Date.now() + 1).toString(),
          sender: "doctor",
          content: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          type: "text",
        }
        setMessages((prev) => [...prev, doctorResponse])
        setIsTyping(false)
      }, 2000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(70, 143, 252, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #468ffc, #6366f1);
          border-radius: 10px;
          border: 1px solid rgba(70, 143, 252, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #5a9eff, #7c3aed);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) translateX(8px) rotate(90deg);
          }
          50% {
            transform: translateY(-8px) translateX(-12px) rotate(180deg);
          }
          75% {
            transform: translateY(-20px) translateX(4px) rotate(270deg);
          }
        }
        
        .float-1 {
          animation: float 20s ease-in-out infinite;
        }
        
        .float-2 {
          animation: float 15s ease-in-out infinite reverse;
        }
        
        .float-3 {
          animation: float 12s ease-in-out infinite;
        }
        
        .float-4 {
          animation: float 18s ease-in-out infinite reverse;
        }
      `}</style>

      {/* Dynamic Moving Background Orbs - All using theme colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-gradient-to-br from-[#468ffc]/25 to-[#468ffc]/15 rounded-full blur-3xl float-1 top-[5%] left-[5%]"></div>
        <div className="absolute w-48 h-48 bg-gradient-to-tr from-[#468ffc]/15 to-[#468ffc]/20 rounded-full blur-2xl float-2 top-[60%] right-[10%]"></div>
        <div className="absolute w-36 h-36 bg-gradient-to-r from-[#468ffc]/15 to-[#468ffc]/10 rounded-full blur-xl float-3 bottom-[15%] left-[15%]"></div>
        <div className="absolute w-24 h-24 bg-gradient-to-br from-[#468ffc]/10 to-[#468ffc]/8 rounded-full blur-xl float-4 top-[25%] right-[35%]"></div>
      </div>

      <div className="relative z-10 flex h-full">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-xl border-b border-[#468ffc]/20 p-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <h1 className="text-lg font-bold bg-gradient-to-r from-[#468ffc] to-[#468ffc]/80 bg-clip-text text-transparent">
                  MoodMate
                </h1>
                <div className="hidden md:flex items-center space-x-2">
                  <span className="text-xs text-[#C0C0C0]">Available Doctors:</span>
                  <div className="flex -space-x-1">
                    {availableDoctors.map((doc) => (
                      <div key={doc.id} className="relative">
                        <img
                          src={doc.avatar || "/placeholder.svg"}
                          alt={doc.name}
                          className="w-6 h-6 rounded-full border border-[#468ffc]/30 hover:border-[#468ffc]/60 transition-colors cursor-pointer"
                          title={doc.name}
                        />
                        {doc.isOnline && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#468ffc] rounded-full border border-white/50"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-[#468ffc]/10 backdrop-blur-md rounded-full px-3 py-1.5 border border-[#468ffc]/20">
                  <div className="relative">
                    <img
                      src={dummyDoctor.avatar || "/placeholder.svg"}
                      alt={dummyDoctor.name}
                      className="w-6 h-6 rounded-full object-cover border border-[#468ffc]/50"
                    />
                    {dummyDoctor.isOnline && (
                      <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#468ffc] rounded-full border border-white"></div>
                    )}
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-xs font-medium text-white">{dummyDoctor.name}</div>
                    <div className="text-xs text-[#C0C0C0]">{dummyDoctor.specialization}</div>
                  </div>
                </div>
                <button className="p-1.5 rounded-full bg-[#468ffc]/10 backdrop-blur-md hover:bg-[#468ffc]/20 transition-all duration-300 border border-[#468ffc]/20 group">
                  <PhoneIcon />
                </button>
                <button className="p-1.5 rounded-full bg-[#468ffc]/10 backdrop-blur-md hover:bg-[#468ffc]/20 transition-all duration-300 border border-[#468ffc]/20 group">
                  <VideoIcon />
                </button>
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="p-1.5 rounded-full bg-[#468ffc]/10 backdrop-blur-md hover:bg-[#468ffc]/20 transition-all duration-300 border border-[#468ffc]/20 group"
                >
                  <MoreVerticalIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs lg:max-w-sm ${message.sender === "user" ? "order-2" : "order-1"}`}>
                  {message.sender === "doctor" && (
                    <div className="flex items-center space-x-1.5 mb-1">
                      <img
                        src={dummyDoctor.avatar || "/placeholder.svg"}
                        alt={dummyDoctor.name}
                        className="w-5 h-5 rounded-full border border-[#468ffc]/30"
                      />
                      <span className="text-xs text-[#C0C0C0]">{dummyDoctor.name}</span>
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-xl backdrop-blur-xl border shadow-lg transition-all duration-300 hover:shadow-xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-[#468ffc]/90 to-[#468ffc]/70 text-white ml-3 border-[#468ffc]/30"
                        : "bg-white/15 text-white mr-3 border-[#468ffc]/20 hover:bg-white/20"
                    }`}
                  >
                    {message.type === "audio" ? (
                      <div className="flex items-center space-x-2">
                        <button className="p-1.5 rounded-full bg-[#468ffc]/30 hover:bg-[#468ffc]/50 transition-all duration-300 border border-[#468ffc]/40">
                          <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                        </button>
                        <div className="flex-1 h-1.5 bg-[#468ffc]/20 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-gradient-to-r from-[#468ffc] to-[#468ffc]/80 rounded-full"></div>
                        </div>
                        <span className="text-xs text-[#C0C0C0]">{message.duration}</span>
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    )}
                  </div>

                  <div
                    className={`text-xs text-[#C0C0C0] mt-0.5 ${message.sender === "user" ? "text-right" : "text-left"}`}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-sm">
                  <div className="flex items-center space-x-1.5 mb-1">
                    <img
                      src={dummyDoctor.avatar || "/placeholder.svg"}
                      alt={dummyDoctor.name}
                      className="w-5 h-5 rounded-full border border-[#468ffc]/30"
                    />
                    <span className="text-xs text-[#C0C0C0]">{dummyDoctor.name}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/15 backdrop-blur-xl border border-[#468ffc]/20 mr-3">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-[#468ffc] rounded-full animate-bounce"></div>
                      <div
                        className="w-1.5 h-1.5 bg-[#468ffc] rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 bg-[#468ffc] rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="bg-white/10 backdrop-blur-xl border-t border-[#468ffc]/20 p-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full bg-[#468ffc]/10 backdrop-blur-md hover:bg-[#468ffc]/20 transition-all duration-300 border border-[#468ffc]/20 group">
                <PaperclipIcon />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share your thoughts and feelings..."
                  className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-[#468ffc]/20 focus:outline-none focus:ring-2 focus:ring-[#468ffc]/50 focus:border-[#468ffc]/50 text-white placeholder-[#C0C0C0] transition-all duration-300 text-sm"
                />
              </div>
              <button className="p-2 rounded-full bg-[#468ffc]/10 backdrop-blur-md hover:bg-[#468ffc]/20 transition-all duration-300 border border-[#468ffc]/20 group">
                <MicIcon />
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="p-2 rounded-full bg-gradient-to-r from-[#468ffc] to-[#468ffc]/80 hover:from-[#468ffc]/90 hover:to-[#468ffc]/70 transition-all duration-300 text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed border border-[#468ffc]/30"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Doctor Profile Sidebar */}
        {showProfile && (
          <div className="w-72 bg-white/10 backdrop-blur-xl border-l border-[#468ffc]/20 overflow-y-auto custom-scrollbar shadow-2xl">
            <div className="p-4 space-y-4">
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setShowProfile(false)}
                  className="p-1.5 rounded-full bg-[#468ffc]/10 hover:bg-[#468ffc]/20 transition-all duration-300 border border-[#468ffc]/20"
                >
                  <XIcon />
                </button>
              </div>

              {/* Doctor Info */}
              <div className="text-center">
                <div className="relative inline-block mb-3">
                  <img
                    src={dummyDoctor.avatar || "/placeholder.svg"}
                    alt={dummyDoctor.name}
                    className="w-16 h-16 rounded-full mx-auto border-2 border-[#468ffc]/50 shadow-lg object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#468ffc] rounded-full border border-white shadow-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{dummyDoctor.name}</h3>
                <p className="text-xs text-[#C0C0C0] mb-2">{dummyDoctor.title}</p>
                <div className="inline-flex items-center px-2 py-1 rounded-full bg-[#468ffc]/20 text-[#468ffc] text-xs border border-[#468ffc]/30">
                  <div className="w-1.5 h-1.5 bg-[#468ffc] rounded-full mr-1.5 animate-pulse"></div>
                  Available Now
                </div>
              </div>

              {/* About */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-[#468ffc]/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-2 mb-2">
                  <UserIcon />
                  <h4 className="font-semibold text-white text-sm">About me</h4>
                </div>
                <p className="text-xs text-[#C0C0C0] leading-relaxed">{dummyDoctor.about}</p>
              </div>

              {/* Education */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-[#468ffc]/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCapIcon />
                  <h4 className="font-semibold text-white text-sm">Education</h4>
                </div>
                <div className="space-y-2">
                  {dummyDoctor.education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-[#468ffc]/50 pl-2 hover:border-[#468ffc] transition-colors"
                    >
                      <p className="text-xs font-medium text-white">{edu.degree}</p>
                      <p className="text-xs text-[#C0C0C0]">{edu.institution}</p>
                      <p className="text-xs text-[#C0C0C0]/70">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-[#468ffc]/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-2 mb-2">
                  <BriefcaseIcon />
                  <h4 className="font-semibold text-white text-sm">Experience</h4>
                </div>
                <div className="space-y-2">
                  {dummyDoctor.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-[#468ffc]/50 pl-2 hover:border-[#468ffc] transition-colors"
                    >
                      <p className="text-xs font-medium text-white">{exp.position}</p>
                      <p className="text-xs text-[#C0C0C0]">{exp.hospital}</p>
                      <p className="text-xs text-[#C0C0C0]/70">{exp.years}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-[#468ffc]/20 shadow-lg">
                <h4 className="font-semibold text-white mb-2 text-sm">Quick Actions</h4>
                <div className="space-y-1.5">
                  <button className="w-full p-2 rounded-lg bg-[#468ffc]/20 hover:bg-[#468ffc]/30 text-white text-xs transition-all duration-300 border border-[#468ffc]/30">
                    Schedule Appointment
                  </button>
                  <button className="w-full p-2 rounded-lg bg-[#468ffc]/10 hover:bg-[#468ffc]/20 text-[#C0C0C0] hover:text-white text-xs transition-all duration-300 border border-[#468ffc]/20">
                    View Previous Sessions
                  </button>
                  <button className="w-full p-2 rounded-lg bg-[#468ffc]/10 hover:bg-[#468ffc]/20 text-[#C0C0C0] hover:text-white text-xs transition-all duration-300 border border-[#468ffc]/20">
                    Share Mood Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}