import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { logoutUser } from "../../feature/auth/authThunks";
import { useNavigate } from "react-router-dom";
import LoaderModal from "../../components/LoaderModal";

// Icon Components (simplified versions of lucide-react icons using SVG)
const Search = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const Bell = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

const Bot = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

const ImageIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 5,21" />
  </svg>
);

const Tag = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const Send = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22,2 15,22 11,13 2,9 22,2" />
  </svg>
);

const Heart = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const MessageCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Share2 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const MoreHorizontal = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const Users = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
    <polyline points="17,6 23,6 23,12" />
  </svg>
);

const Eye = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Bookmark = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const Flag = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const Smile = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const Frown = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const Meh = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="15" x2="16" y2="15" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const Gamepad2 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <line x1="6" y1="11" x2="10" y2="11" />
    <line x1="8" y1="9" x2="8" y2="13" />
    <line x1="15" y1="12" x2="15.01" y2="12" />
    <line x1="18" y1="10" x2="18.01" y2="10" />
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
  </svg>
);

const Play = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polygon points="5,3 19,12 5,21 5,3" />
  </svg>
);

const Clock = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const Star = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
  </svg>
);

const UserPlus = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

const Video = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polygon points="23,7 16,12 23,17 23,7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const ThumbsUp = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

const Stethoscope = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

const Plus = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// Main MoodMate Community Component
export default function Community() {
  const [newPost, setNewPost] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [currentMood, setCurrentMood] = useState("neutral");

  // Profile Avatar Component with Beautiful Gradients
  const ProfileAvatar = ({
    initials,
    name,
    size = "w-10 h-10",
    online = false,
    className = "",
  }) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600",
      "from-pink-500 to-rose-600",
      "from-orange-500 to-red-600",
      "from-indigo-500 to-blue-600",
      "from-purple-500 to-pink-600",
      "from-teal-500 to-green-600",
      "from-red-500 to-pink-600",
      "from-yellow-500 to-orange-600",
      "from-cyan-500 to-blue-600",
    ];

    const gradientIndex = initials
      ? initials.charCodeAt(0) % gradients.length
      : 0;
    const gradient = gradients[gradientIndex];

    return (
      <div className={`relative ${className}`}>
        <div
          className={`${size} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm border-2 border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
        >
          {initials || "?"}
        </div>
        {online && (
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
        )}
      </div>
    );
  };

  const categories = [
    {
      id: "anxiety",
      name: "Anxiety",
      color: "bg-yellow-500/20 text-yellow-300",
      icon: "😰",
    },
    {
      id: "depression",
      name: "Depression",
      color: "bg-blue-500/20 text-blue-300",
      icon: "😔",
    },
    {
      id: "relationships",
      name: "Relationships",
      color: "bg-pink-500/20 text-pink-300",
      icon: "💕",
    },
    {
      id: "work-stress",
      name: "Work Stress",
      color: "bg-red-500/20 text-red-300",
      icon: "💼",
    },
    {
      id: "self-esteem",
      name: "Self Esteem",
      color: "bg-purple-500/20 text-purple-300",
      icon: "🪞",
    },
    {
      id: "loneliness",
      name: "Loneliness",
      color: "bg-indigo-500/20 text-indigo-300",
      icon: "🤗",
    },
    {
      id: "family",
      name: "Family Issues",
      color: "bg-orange-500/20 text-orange-300",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      id: "addiction",
      name: "Addiction",
      color: "bg-gray-500/20 text-gray-300",
      icon: "🚫",
    },
  ];

  const communityPosts = [
    {
      id: 1,
      user: "Sarah M.",
      initials: "SM",
      isAnonymous: false,
      time: "2 hours ago",
      mood: "anxious",
      category: "anxiety",
      title: "Struggling with social anxiety in college",
      content:
        "I've been in college for 6 months now and I still find it incredibly difficult to make friends or even participate in class discussions. Every time I think about speaking up, my heart starts racing and I feel like everyone is judging me. I know I need to put myself out there, but the fear is overwhelming. Has anyone else experienced this? How did you overcome it?",
      likes: 47,
      comments: 23,
      shares: 8,
      views: 156,
      tags: ["social-anxiety", "college", "friendship", "fear"],
      isHelpful: true,
      supportLevel: "high",
    },
    {
      id: 2,
      user: "Anonymous",
      initials: "AN",
      isAnonymous: true,
      time: "4 hours ago",
      mood: "sad",
      category: "depression",
      title: "Feeling empty and disconnected from everything",
      content:
        "I wake up every day feeling like I'm just going through the motions. Nothing brings me joy anymore - not my hobbies, not spending time with friends, not even things I used to love. I feel like I'm watching my life from the outside. I've been feeling this way for months now and I'm scared it won't get better. I don't want to burden my family with this.",
      likes: 89,
      comments: 34,
      shares: 12,
      views: 234,
      tags: ["depression", "emptiness", "numbness", "help"],
      isHelpful: true,
      supportLevel: "urgent",
    },
    {
      id: 3,
      user: "Jordan P.",
      initials: "JP",
      isAnonymous: false,
      time: "1 day ago",
      mood: "hopeful",
      category: "self-esteem",
      title: "Small wins in my self-love journey",
      content:
        "After months of therapy and self-work, I'm finally starting to see some progress. I looked in the mirror today and didn't immediately criticize myself. It's such a small thing, but it felt huge. I'm learning to be kinder to myself and recognize my worth. To anyone struggling with self-esteem - it does get better, even if progress feels slow.",
      likes: 128,
      comments: 67,
      shares: 34,
      views: 445,
      tags: ["self-love", "therapy", "progress", "hope"],
      isHelpful: true,
      supportLevel: "low",
    },
    {
      id: 4,
      user: "Riley T.",
      initials: "RT",
      isAnonymous: false,
      time: "2 days ago",
      mood: "motivated",
      category: "self-esteem",
      title: "Started therapy and it's changing my life",
      content:
        "I was skeptical about therapy for years, thinking I could handle everything on my own. Finally took the plunge 3 months ago and wow - what a difference. My therapist helped me recognize toxic thought patterns I didn't even know I had. I'm learning healthy coping mechanisms and actually starting to like myself. If you're on the fence about therapy, this is your sign to try it.",
      likes: 203,
      comments: 91,
      shares: 67,
      views: 678,
      tags: ["therapy", "mental-health", "self-improvement", "breakthrough"],
      isHelpful: true,
      supportLevel: "low",
    },
    {
      id: 5,
      user: "Indigo P.",
      initials: "IP",
      isAnonymous: false,
      time: "1 week ago",
      mood: "lonely",
      category: "loneliness",
      title: "Lost all my friends after my mental health diagnosis",
      content:
        "When I was diagnosed with borderline personality disorder, I was honest with my friend group about what I was going through. One by one, they all distanced themselves from me. I guess the stigma was too much for them to handle. Now I'm completely alone, dealing with this diagnosis and the grief of losing my entire support system. The loneliness is crushing. How do you make new friends when you feel fundamentally broken?",
      likes: 167,
      comments: 89,
      shares: 34,
      views: 456,
      tags: ["bpd", "friendship-loss", "stigma", "isolation"],
      isHelpful: true,
      supportLevel: "high",
    },
    {
      id: 6,
      user: "Aspen D.",
      initials: "AD",
      isAnonymous: false,
      time: "1 week ago",
      mood: "hopeful",
      category: "addiction",
      title: "One year sober from prescription drug addiction",
      content:
        "It started with legitimate pain medication after surgery, but quickly spiraled into a full-blown addiction. I was doctor shopping, lying to my family, and stealing pills from friends. Hitting rock bottom was the best thing that ever happened to me because it forced me to get help. Today marks one year clean. Recovery isn't linear, but it's possible. If you're struggling, please reach out for help.",
      likes: 289,
      comments: 145,
      shares: 78,
      views: 823,
      tags: ["prescription-addiction", "one-year-sober", "recovery", "hope"],
      isHelpful: true,
      supportLevel: "low",
    },
    {
      id: 7,
      user: "Rowan S.",
      initials: "RS",
      isAnonymous: false,
      time: "1 week ago",
      mood: "confused",
      category: "family",
      title: "Dealing with my teenager's mental health crisis",
      content:
        "My 16-year-old has been struggling with depression and self-harm. They refuse to talk to me and push away every attempt I make to help. I found cuts on their arms last week and I'm terrified. I've scheduled therapy appointments but they won't go. I feel like I'm failing as a parent. How do you help someone who doesn't want to be helped? I'm desperate and don't know what to do.",
      likes: 145,
      comments: 134,
      shares: 38,
      views: 623,
      tags: ["parenting", "teen-depression", "self-harm", "family-crisis"],
      isHelpful: true,
      supportLevel: "urgent",
    },
    {
      id: 8,
      user: "Sage T.",
      initials: "ST",
      isAnonymous: false,
      time: "1 week ago",
      mood: "determined",
      category: "work-stress",
      title: "Starting my own business after workplace trauma",
      content:
        "After experiencing severe workplace bullying and harassment that led to a nervous breakdown, I've decided to start my own consulting business. It's scary leaving the security of a regular paycheck, but I refuse to let toxic work environments control my life anymore. I'm in therapy working through the trauma, and slowly building my confidence back. Sometimes the best revenge is success on your own terms.",
      likes: 198,
      comments: 76,
      shares: 52,
      views: 534,
      tags: [
        "workplace-trauma",
        "entrepreneurship",
        "recovery",
        "self-employment",
      ],
      isHelpful: true,
      supportLevel: "medium",
    },
    {
      id: 9,
      user: "Anonymous",
      initials: "AN",
      isAnonymous: true,
      time: "1 week ago",
      mood: "scared",
      category: "depression",
      title: "Suicidal thoughts are getting stronger",
      content:
        "I've been having passive suicidal thoughts for months, but lately they're becoming more active. I have a plan, and that scares me. I don't really want to die, I just want the pain to stop. I'm reaching out here because I don't know where else to turn. I can't afford therapy and I'm afraid if I go to the hospital they'll just lock me up. I need help but I don't know how to get it.",
      likes: 89,
      comments: 156,
      shares: 23,
      views: 445,
      tags: ["suicidal-thoughts", "crisis", "help", "depression"],
      isHelpful: true,
      supportLevel: "urgent",
    },
    {
      id: 10,
      user: "Dakota R.",
      initials: "DR",
      isAnonymous: false,
      time: "1 week ago",
      mood: "grateful",
      category: "anxiety",
      title: "Medication finally working after years of trial and error",
      content:
        "I've tried 8 different anxiety medications over the past 4 years. Some made me gain weight, others made me feel like a zombie, and a few made my anxiety worse. I was ready to give up on medication entirely. But my new psychiatrist suggested trying this combination, and for the first time in years, I feel like myself again. Don't give up if the first few don't work - the right one is out there.",
      likes: 178,
      comments: 92,
      shares: 45,
      views: 567,
      tags: ["anxiety-medication", "psychiatrist", "trial-and-error", "hope"],
      isHelpful: true,
      supportLevel: "low",
    },
  ];

  const supportStats = [
    { label: "Active Members", value: "15.7K", icon: Users },
    { label: "Posts Today", value: "127", icon: MessageCircle },
    { label: "Support Given", value: "2.1K", icon: Heart },
    { label: "Lives Touched", value: "68K", icon: TrendingUp },
  ];

  const friendZone = [
    {
      name: "Sarah M.",
      initials: "SM",
      mood: "anxious",
      status: "Also dealing with work stress",
      online: true,
      similarity: "94%",
      mutualInterests: ["meditation", "journaling"],
      lastActive: "2 min ago",
    },
    {
      name: "Mike R.",
      initials: "MR",
      mood: "overwhelmed",
      status: "Looking for study motivation",
      online: true,
      similarity: "89%",
      mutualInterests: ["fitness", "mindfulness"],
      lastActive: "5 min ago",
    },
    {
      name: "Emma L.",
      initials: "EL",
      mood: "lonely",
      status: "New to the city, seeking friends",
      online: false,
      similarity: "87%",
      mutualInterests: ["books", "coffee"],
      lastActive: "1 hour ago",
    },
    {
      name: "Alex K.",
      initials: "AK",
      mood: "anxious",
      status: "Practicing self-care routines",
      online: true,
      similarity: "92%",
      mutualInterests: ["yoga", "art"],
      lastActive: "just now",
    },
  ];

  const doctors = [
    {
      name: "Dr. Jennifer Smith",
      specialty: "Anxiety & Depression",
      rating: 4.9,
      experience: "8 years",
      initials: "JS",
      available: "Available now",
      price: "$75/session",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Stress Management",
      rating: 4.8,
      experience: "12 years",
      initials: "MC",
      available: "Next: 2:30 PM",
      price: "$80/session",
    },
  ];

  const wellnessGames = [
    {
      id: 1,
      name: "Mood Tracker Puzzle",
      description: "Complete daily puzzles while tracking emotions",
      icon: "🧩",
      players: "1.8K",
      difficulty: "Easy",
      duration: "5-10 min",
      category: "Mindfulness",
      rating: 4.8,
      isNew: false,
    },
    {
      id: 2,
      name: "Gratitude Garden",
      description: "Grow a virtual garden by sharing daily gratitudes",
      icon: "🌱",
      players: "3.2K",
      difficulty: "Easy",
      duration: "3-5 min",
      category: "Positivity",
      rating: 4.9,
      isNew: true,
    },
    {
      id: 3,
      name: "Breathing Buddy",
      description: "Interactive breathing exercises with cute animations",
      icon: "🫁",
      players: "4.1K",
      difficulty: "Easy",
      duration: "2-5 min",
      category: "Relaxation",
      rating: 4.9,
      isNew: true,
    },
  ];

  const motivationalReels = [
    {
      id: 1,
      title: "You are stronger than you think",
      creator: "MotivationDaily",
      thumbnail: "💪",
      likes: "3.2K",
      duration: "0:30",
      category: "Strength",
      isWatched: false,
    },
    {
      id: 2,
      title: "Small steps lead to big changes",
      creator: "WellnessJourney",
      thumbnail: "👣",
      likes: "2.8K",
      duration: "0:45",
      category: "Progress",
      isWatched: true,
    },
    {
      id: 3,
      title: "Breathing exercise for instant calm",
      creator: "MindfulMoments",
      thumbnail: "🧘",
      likes: "4.1K",
      duration: "1:15",
      category: "Relaxation",
      isWatched: false,
    },
  ];

  const trendingTopics = [
    { tag: "anxiety-tips", posts: 234, trend: "+12%" },
    { tag: "self-care", posts: 189, trend: "+8%" },
    { tag: "depression-support", posts: 156, trend: "+15%" },
    { tag: "therapy-journey", posts: 143, trend: "+6%" },
    { tag: "mindfulness", posts: 128, trend: "+10%" },
  ];

  const getMoodIcon = (mood) => {
    switch (mood) {
      case "happy":
        return <Smile className="w-4 h-4 text-green-400" />;
      case "sad":
        return <Frown className="w-4 h-4 text-blue-400" />;
      case "anxious":
        return <Meh className="w-4 h-4 text-yellow-400" />;
      case "overwhelmed":
        return <AlertCircle className="w-4 h-4 text-orange-400" />;
      case "lonely":
        return <Frown className="w-4 h-4 text-purple-400" />;
      case "frustrated":
        return <Meh className="w-4 h-4 text-red-400" />;
      case "hopeful":
        return <Smile className="w-4 h-4 text-green-400" />;
      case "motivated":
        return <Smile className="w-4 h-4 text-blue-400" />;
      case "confused":
        return <Meh className="w-4 h-4 text-gray-400" />;
      case "determined":
        return <Smile className="w-4 h-4 text-orange-400" />;
      case "scared":
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      case "grateful":
        return <Smile className="w-4 h-4 text-green-400" />;
      default:
        return <Meh className="w-4 h-4 text-gray-400" />;
    }
  };

  const getSupportLevelColor = (level) => {
    switch (level) {
      case "urgent":
        return "border-l-4 border-red-500";
      case "high":
        return "border-l-4 border-orange-500";
      case "medium":
        return "border-l-4 border-yellow-500";
      default:
        return "border-l-4 border-green-500";
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400";
      case "Medium":
        return "text-yellow-400";
      case "Hard":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const handlePublish = () => {
    if (newPost.trim()) {
      console.log("Publishing post:", {
        content: newPost,
        mood: selectedMood,
        category: selectedCategory,
        anonymous: isAnonymous,
      });
      setNewPost("");
      setSelectedMood("");
      setSelectedCategory("");
      setIsAnonymous(false);
    }
  };

  const {user} = useSelector((state) => state.user)

  return (
    <div
      className="min-h-screen rounded-tl-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      style={{ backgroundColor: "#1D3557" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <Bot
              className="w-8 h-8 text-blue-400"
              style={{ color: "#468ffc" }}
            />
            <h1 className="text-xl font-bold text-white">MoodMate Community</h1>
          </div>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search posts, topics, or users..."
              className="pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10">
            {getMoodIcon(currentMood)}
            <span className="text-white text-sm capitalize">{currentMood}</span>
          </div>
          <div className="relative">
            <Bell className="w-5 h-5 text-white cursor-pointer hover:text-blue-400 transition-colors" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </div>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
            style={{ backgroundColor: "#468ffc" }}
          >
            <Plus className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-white/10 rounded-lg p-2 transition-colors">
            <ProfileAvatar initials="😎" name="You" size="w-8 h-8" />
            <span className="text-white font-medium hidden sm:block">{user.fullName }</span>
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 md:p-6 gap-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Enhanced Share Your Thoughts Section */}
          <div className="backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-2 mb-4">
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <h2 className="text-white font-semibold text-lg">
                Share Your Thoughts
              </h2>
            </div>

            <div className="space-y-4">
              {/* Main Text Area */}
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind? Share your thoughts, struggles, or victories with the community..."
                className="w-full h-32 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-all"
              />

              {/* Category Selection */}
              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 ${
                        selectedCategory === category.id
                          ? category.color + " ring-2 ring-white/50 shadow-lg"
                          : "bg-white/10 text-gray-300 hover:bg-white/20"
                      }`}
                    >
                      <span className="mr-1">{category.icon}</span>
                      <span className="hidden sm:inline">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Mood Selection */}
              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Current Mood
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "happy",
                    "sad",
                    "anxious",
                    "overwhelmed",
                    "lonely",
                    "frustrated",
                  ].map((mood) => (
                    <button
                      key={mood}
                      onClick={() => setSelectedMood(mood)}
                      className={`p-2 rounded-lg transition-all hover:scale-110 ${
                        selectedMood === mood
                          ? "bg-blue-500/30 ring-2 ring-blue-400 shadow-lg"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      {getMoodIcon(mood)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Post Options and Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-white/20 gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex items-center space-x-2 text-white text-sm cursor-pointer hover:text-blue-400 transition-colors">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-white/20 bg-white/10 text-blue-400 focus:ring-blue-400"
                    />
                    <span>Post anonymously</span>
                  </label>
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <ImageIcon className="w-4 h-4" />
                    <span className="text-sm">Add Image</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm">Add Tags</span>
                  </button>
                </div>
                <button
                  onClick={handlePublish}
                  className="w-full sm:w-auto px-6 py-2 rounded-lg text-white font-medium flex items-center justify-center space-x-2 hover:opacity-90 hover:scale-105 transition-all shadow-lg"
                  style={{ backgroundColor: "#4a8ab3" }}
                >
                  <Send className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Community Posts */}
          <div className="space-y-4">
            {communityPosts.map((post) => (
              <div
                key={post.id}
                className={`backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 bg-white/5 hover:bg-white/10 transition-all hover:shadow-xl ${getSupportLevelColor(
                  post.supportLevel
                )}`}
              >
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <ProfileAvatar initials={post.initials} name={post.user} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 flex-wrap">
                        <h3 className="text-white font-medium hover:text-blue-400 transition-colors cursor-pointer">
                          {post.user}
                        </h3>
                        {post.isAnonymous && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                            Anonymous
                          </span>
                        )}
                        <div className="flex items-center space-x-1">
                          {getMoodIcon(post.mood)}
                          <span className="text-gray-400 text-xs capitalize">
                            {post.mood}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-1 flex-wrap">
                        <p className="text-gray-400 text-sm">{post.time}</p>
                        <span className="text-gray-400">•</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            categories.find((c) => c.id === post.category)
                              ?.color || "bg-gray-500/20 text-gray-300"
                          }`}
                        >
                          <span className="mr-1">
                            {
                              categories.find((c) => c.id === post.category)
                                ?.icon
                            }
                          </span>
                          <span className="hidden sm:inline">
                            {
                              categories.find((c) => c.id === post.category)
                                ?.name
                            }
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    {post.isHelpful && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full animate-pulse">
                        Helpful
                      </span>
                    )}
                    <button className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <h4 className="text-white font-semibold mb-3 text-lg hover:text-blue-400 transition-colors cursor-pointer">
                  {post.title}
                </h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full hover:bg-blue-500/30 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors group">
                      <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group">
                      <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm hidden sm:inline">
                        {post.comments}
                      </span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors group">
                      <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm hidden md:inline">
                        {post.shares}
                      </span>
                    </button>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm hidden lg:inline">
                        {post.views}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
                      <Flag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 space-y-6">
          {/* Community Stats */}
          <div className="backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <h2 className="text-white font-semibold mb-4 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span>Community Impact</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {supportStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <div className="text-white font-bold text-lg">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Friend Zone */}
          <div className="backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <h2 className="text-white font-semibold">Friend Zone</h2>
              </div>
              <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {friendZone.map((friend, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105"
                >
                  <ProfileAvatar
                    initials={friend.initials}
                    name={friend.name}
                    online={friend.online}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-white text-sm font-medium truncate hover:text-blue-400 transition-colors">
                        {friend.name}
                      </h4>
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full flex-shrink-0">
                        {friend.similarity}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      {getMoodIcon(friend.mood)}
                      <span className="text-xs capitalize text-gray-400">
                        {friend.mood}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs truncate">
                      {friend.status}
                    </p>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 flex-shrink-0 p-1 rounded-full hover:bg-blue-400/20 transition-all">
                    <UserPlus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Wellness Games */}
          <div className="backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Gamepad2 className="w-5 h-5 text-blue-400" />
                <h2 className="text-white font-semibold">Wellness Games</h2>
              </div>
              <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                Play All
              </button>
            </div>
            <div className="space-y-3">
              {wellnessGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl flex-shrink-0 hover:scale-110 transition-transform">
                      {game.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-white text-sm font-medium truncate hover:text-blue-400 transition-colors">
                          {game.name}
                        </h4>
                        {game.isNew && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full flex-shrink-0 animate-pulse">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                        {game.description}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-3">
                          <span className="text-green-400">
                            {game.players} playing
                          </span>
                          <span className={getDifficultyColor(game.difficulty)}>
                            {game.difficulty}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="text-white">{game.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span className="text-xs">{game.duration}</span>
                        </div>
                        <button
                          className="px-3 py-1 rounded text-white text-xs font-medium hover:opacity-90 hover:scale-105 transition-all shadow-lg"
                          style={{ backgroundColor: "#4a8ab3" }}
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Motivational Reels */}
          <div className="backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Video className="w-5 h-5 text-blue-400" />
                <h2 className="text-white font-semibold">Motivational Reels</h2>
              </div>
              <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                Watch All
              </button>
            </div>
            <div className="space-y-3">
              {motivationalReels.map((reel) => (
                <div
                  key={reel.id}
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl border border-white/20">
                      {reel.thumbnail}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white bg-black/50 rounded-full p-1 hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                      {reel.duration}
                    </div>
                    {reel.isWatched && (
                      <div className="absolute top-1 left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-medium line-clamp-2 mb-1 hover:text-blue-400 transition-colors">
                      {reel.title}
                    </h4>
                    <p className="text-gray-400 text-xs mb-1">
                      by {reel.creator}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {reel.category}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <ThumbsUp className="w-3 h-3 hover:text-blue-400 transition-colors" />
                        <span className="text-xs">{reel.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <h2 className="text-white font-semibold mb-4 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span>Trending Topics</span>
            </h2>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div>
                    <div className="text-white font-medium text-sm hover:text-blue-400 transition-colors">
                      #{topic.tag}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {topic.posts} posts
                    </div>
                  </div>
                  <div className="text-green-400 text-sm font-medium">
                    {topic.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <h2 className="text-white font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 hover:bg-red-500/30 transition-all text-left hover:scale-105">
                <div className="font-medium">Crisis Support</div>
                <div className="text-xs opacity-80">Get immediate help</div>
              </button>
              <button className="w-full p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-all text-left hover:scale-105">
                <div className="font-medium">Find a Therapist</div>
                <div className="text-xs opacity-80">Professional support</div>
              </button>
              <button className="w-full p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 hover:bg-green-500/30 transition-all text-left hover:scale-105">
                <div className="font-medium">Join Support Group</div>
                <div className="text-xs opacity-80">Connect with others</div>
              </button>
            </div>
          </div>

          {/* Online Doctors */}
          <div className="backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="w-5 h-5 text-blue-400" />
              <h2 className="text-white font-semibold">Online Consultation</h2>
            </div>
            <div className="space-y-4">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105"
                >
                  <div className="flex items-start space-x-3">
                    <ProfileAvatar
                      initials={doctor.initials}
                      name={doctor.name}
                      size="w-12 h-12"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm">
                        {doctor.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {doctor.specialty}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          <span className="text-yellow-400 text-xs">★</span>
                          <span className="text-white text-xs ml-1">
                            {doctor.rating}
                          </span>
                        </div>
                        <span className="text-gray-400 text-xs">
                          • {doctor.experience}
                        </span>
                      </div>
                      <p className="text-green-400 text-xs mt-1">
                        {doctor.available}
                      </p>
                      <button
                        className="w-full mt-2 py-1 px-3 rounded text-white text-xs font-medium hover:opacity-90 hover:scale-105 transition-all"
                        style={{ backgroundColor: "#4a8ab3" }}
                      >
                        Book Session - {doctor.price}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
