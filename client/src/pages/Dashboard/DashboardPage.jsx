import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Brain,
  Heart,
  Smile,
  Activity,
  TrendingUp,
  Calendar,
  User,
  Bell,
  Settings,
  ChevronRight,
} from "lucide-react";
import Logo from '../../assets/e18e014e-98af-4f3d-b93d-9113c64c4aff.jpeg';
import {useSelector,useDispatch} from 'react-redux';

const DashboardPage = () => {
  const [currentMood, setCurrentMood] = useState("good");
  const {user} = useSelector((state) => state.user);

  // Mood history data for the past week
  const moodHistoryData = [
    { day: "Mon", mood: 7, date: "25 Mar", anxiety: 3, energy: 8, sleep: 7 },
    { day: "Tue", mood: 6, date: "26 Mar", anxiety: 4, energy: 6, sleep: 6 },
    { day: "Wed", mood: 8, date: "27 Mar", anxiety: 2, energy: 9, sleep: 8 },
    { day: "Thu", mood: 5, date: "28 Mar", anxiety: 6, energy: 5, sleep: 5 },
    { day: "Fri", mood: 9, date: "29 Mar", anxiety: 1, energy: 9, sleep: 9 },
    { day: "Sat", mood: 7, date: "30 Mar", anxiety: 3, energy: 7, sleep: 8 },
    { day: "Sun", mood: 8, date: "31 Mar", anxiety: 2, energy: 8, sleep: 7 },
  ];

  // Monthly mood trend data
  const monthlyMoodData = [
    { month: "Jan", averageMood: 6.2, stressLevel: 4.1, happiness: 7.1 },
    { month: "Feb", averageMood: 6.8, stressLevel: 3.8, happiness: 7.5 },
    { month: "Mar", averageMood: 7.2, stressLevel: 3.2, happiness: 8.1 },
    { month: "Apr", averageMood: 6.9, stressLevel: 3.5, happiness: 7.8 },
    { month: "May", averageMood: 7.5, stressLevel: 2.9, happiness: 8.3 },
    { month: "Jun", averageMood: 7.8, stressLevel: 2.6, happiness: 8.6 },
    { month: "Jul", averageMood: 7.3, stressLevel: 3.1, happiness: 8.0 },
  ];

  // Weekly activity correlation data
  const activityData = [
    { activity: "Meditation", sessions: 15, moodImpact: 8.2 },
    { activity: "Exercise", sessions: 12, moodImpact: 7.8 },
    { activity: "Social Time", sessions: 8, moodImpact: 8.5 },
    { activity: "Reading", sessions: 10, moodImpact: 7.1 },
    { activity: "Music", sessions: 20, moodImpact: 7.9 },
    { activity: "Nature Walks", sessions: 6, moodImpact: 8.7 },
  ];

  // Emotion distribution data
  const emotionData = [
    { emotion: "Joy", value: 5, color: "#fbbf24", percentage: 23.8 },
    { emotion: "Love", value: 4, color: "#f87171", percentage: 19.0 },
    { emotion: "Surprise", value: 4, color: "#a78bfa", percentage: 19.0 },
    { emotion: "Neutral", value: 3, color: "#94a3b8", percentage: 14.3 },
    { emotion: "Fear", value: 2, color: "#60a5fa", percentage: 9.5 },
    { emotion: "Anger", value: 2, color: "#fb7185", percentage: 9.5 },
    { emotion: "Sadness", value: 1, color: "#34d399", percentage: 4.8 },
  ];

  // Daily emotion tracking data
  const dailyEmotionData = [
    {
      day: "Mon",
      joy: 4,
      love: 3,
      surprise: 2,
      neutral: 4,
      fear: 1,
      anger: 1,
      sadness: 0,
    },
    {
      day: "Tue",
      joy: 3,
      love: 4,
      surprise: 3,
      neutral: 3,
      fear: 2,
      anger: 2,
      sadness: 1,
    },
    {
      day: "Wed",
      joy: 6,
      love: 5,
      surprise: 4,
      neutral: 2,
      fear: 1,
      anger: 1,
      sadness: 0,
    },
    {
      day: "Thu",
      joy: 2,
      love: 2,
      surprise: 3,
      neutral: 5,
      fear: 3,
      anger: 3,
      sadness: 2,
    },
    {
      day: "Fri",
      joy: 7,
      love: 6,
      surprise: 5,
      neutral: 1,
      fear: 0,
      anger: 0,
      sadness: 0,
    },
    {
      day: "Sat",
      joy: 5,
      love: 4,
      surprise: 4,
      neutral: 3,
      fear: 2,
      anger: 1,
      sadness: 1,
    },
    {
      day: "Sun",
      joy: 6,
      love: 5,
      surprise: 4,
      neutral: 2,
      fear: 1,
      anger: 1,
      sadness: 0,
    },
  ];

  // Emotion intensity over time
  const emotionIntensityData = [
    { time: "6 AM", intensity: 3.2, dominant: "Neutral" },
    { time: "9 AM", intensity: 4.1, dominant: "Joy" },
    { time: "12 PM", intensity: 5.8, dominant: "Joy" },
    { time: "3 PM", intensity: 4.9, dominant: "Love" },
    { time: "6 PM", intensity: 6.2, dominant: "Joy" },
    { time: "9 PM", intensity: 4.5, dominant: "Love" },
    { time: "12 AM", intensity: 3.1, dominant: "Neutral" },
  ];

  const StatCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    gradient,
    percentage,
  }) => (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium opacity-90">{title}</span>
          </div>
          <div className="text-3xl font-bold mb-1">{value}</div>
          <div className="text-sm opacity-80">{subtitle}</div>
        </div>
        <div className="text-right">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2">
            <span className="text-2xl font-bold">{percentage}%</span>
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
    </div>
  );

  const MoodButton = ({ mood, emoji, isActive, onClick }) => (
    <button
      onClick={() => onClick(mood)}
      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
        isActive
          ? "border-purple-500 bg-purple-50 shadow-lg scale-105"
          : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-md"
      }`}
    >
      <div className="text-2xl mb-2">{emoji}</div>
      <div
        className={`text-sm font-medium capitalize ${
          isActive ? "text-purple-700" : "text-gray-600"
        }`}
      >
        {mood}
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <img src={Logo} className="w-5 h-5 text-white" />
            </div>
            <input
              type="text"
              placeholder="Search insights..."
              className="w-64 px-4 py-2 bg-gray-100/70 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30"
            />
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600" />
            <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                {user.avatar !== null ? (
                  <img src={user.avatar} alt="" />
                ) : (
                  <User className="w-4 h-4 text-white" />
                )}
              </div>
              <span className="font-medium text-gray-700">{user.fullName}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Mental Wellness Dashboard
            </h1>
            <p className="text-gray-600">
              Track your emotional journey and mental health insights
            </p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
            Add Journal Entry
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Current Mood"
            value="Good"
            subtitle="Today's state"
            icon={Smile}
            gradient="from-emerald-400 to-emerald-600"
            percentage="78"
          />
          <StatCard
            title="Streak Days"
            value="12"
            subtitle="Consecutive tracking"
            icon={TrendingUp}
            gradient="from-blue-400 to-blue-600"
            percentage="85"
          />
          <StatCard
            title="Weekly Average"
            value="7.1"
            subtitle="Out of 10 scale"
            icon={Activity}
            gradient="from-purple-400 to-purple-600"
            percentage="71"
          />
          <StatCard
            title="Positive Days"
            value="18"
            subtitle="This month"
            icon={Heart}
            gradient="from-pink-400 to-pink-600"
            percentage="90"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Multi-line Mood Chart */}
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                7-Day Wellness Tracking
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Mood</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Sleep</span>
                </div>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodHistoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                  <YAxis domain={[0, 10]} stroke="#64748b" fontSize={12} />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: "#a855f7" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="energy"
                    stroke="#ec4899"
                    strokeWidth={2}
                    dot={{ fill: "#ec4899", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: "#f472b6" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sleep"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: "#60a5fa" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Mood Selector */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              How are you feeling?
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <MoodButton
                mood="amazing"
                emoji="😊"
                isActive={currentMood === "amazing"}
                onClick={setCurrentMood}
              />
              <MoodButton
                mood="good"
                emoji="🙂"
                isActive={currentMood === "good"}
                onClick={setCurrentMood}
              />
              <MoodButton
                mood="okay"
                emoji="😐"
                isActive={currentMood === "okay"}
                onClick={setCurrentMood}
              />
              <MoodButton
                mood="sad"
                emoji="😢"
                isActive={currentMood === "sad"}
                onClick={setCurrentMood}
              />
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              Save Mood
            </button>
          </div>
        </div>

        {/* Additional Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Monthly Trend Chart */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Monthly Wellness Trends
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyMoodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                  <YAxis domain={[0, 10]} stroke="#64748b" fontSize={12} />
                  <Line
                    type="monotone"
                    dataKey="averageMood"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: "#10b981", r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="happiness"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ fill: "#f59e0b", r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Average Mood</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Happiness</span>
              </div>
            </div>
          </div>

          {/* Activity Impact Chart */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Activity Impact on Mood
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="activity"
                    stroke="#64748b"
                    fontSize={10}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Bar dataKey="moodImpact" radius={[4, 4, 0, 0]}>
                    {activityData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={`hsl(${220 + index * 30}, 70%, 60%)`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Emotion Analysis and Insights */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Emotion Distribution + Weekly Tracker (Combined into two stacked cards) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Emotion Distribution */}
            <div className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Emotion Distribution
              </h3>

              {/* Simple Bar Chart */}
              <div className="space-y-4 mb-6">
                {emotionData.map((emotion, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: emotion.color }}
                        ></div>
                        <span className="text-sm font-medium text-gray-700">
                          {emotion.emotion}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-800">
                          {emotion.value}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({emotion.percentage}%)
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{
                          backgroundColor: emotion.color,
                          width: `${(emotion.value / 5) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emotion Summary */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Smile className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-purple-800">
                    Dominant Emotions
                  </span>
                </div>
                <div className="text-sm text-purple-700">
                  Joy and Love are your strongest emotions this week, indicating
                  a positive mental state.
                </div>
              </div>
            </div>

            {/* Weekly Emotion Tracker */}
            <div className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Weekly Emotion Tracker
              </h3>

              <div className="space-y-4">
                {["Joy", "Love", "Surprise", "Neutral"].map((emotion) => (
                  <div key={emotion} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        {emotion}
                      </span>
                      <span className="text-xs text-gray-500">This Week</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {dailyEmotionData.map((day, dayIndex) => {
                        const intensity = day[emotion.toLowerCase()] || 0;
                        const maxIntensity = 7;
                        const opacity = Math.max(0.2, intensity / maxIntensity);
                        const emotionColor =
                          emotionData.find((e) => e.emotion === emotion)
                            ?.color || "#94a3b8";

                        return (
                          <div key={dayIndex} className="text-center">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white mb-1 transition-all duration-300 hover:scale-110"
                              style={{
                                backgroundColor: emotionColor,
                                opacity,
                              }}
                              title={`${day.day}: ${intensity}/7`}
                            >
                              {intensity > 0 ? intensity : ""}
                            </div>
                            <div className="text-xs text-gray-500">
                              {day.day.charAt(0)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Weekly Summary */}
              <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-800">
                    Weekly Insight
                  </span>
                </div>
                <div className="text-sm text-blue-700">
                  Friday shows peak emotional wellness with high joy and love
                  scores.
                </div>
              </div>
            </div>
          </div>

          {/* Mental Health Insights */}
          <div className="w-full">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Mental Health Insights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
                {/* Each Insight Card */}
                {[
                  {
                    color: "green",
                    title: "Mindfulness Practice",
                    desc: "Continue your meditation streak",
                    Icon: TrendingUp,
                  },
                  {
                    color: "blue",
                    title: "Sleep Quality",
                    desc: "Track your sleep patterns",
                    Icon: Activity,
                  },
                  {
                    color: "purple",
                    title: "Gratitude Journal",
                    desc: "Daily gratitude practice",
                    Icon: Heart,
                  },
                  {
                    color: "amber",
                    title: "Cognitive Exercises",
                    desc: "Brain training activities",
                    Icon: Brain,
                  },
                ].map(({ color, title, desc, Icon }, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-4 bg-gradient-to-r from-${color}-50 to-${color}-100 rounded-xl border border-${color}-200`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 bg-${color}-500 rounded-lg flex items-center justify-center`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{title}</div>
                        <div className="text-sm text-gray-600">{desc}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
