import { useState } from "react";
import {
  BarChart3,
  FileText,
  Lightbulb,
  Settings,
  Brain,
  Heart,
  Quote,
  Search,
  Zap,
  BookOpen,
  Puzzle,
  User,
  Eye,
  Target,
  Trophy,
  MessageSquare,
  Download,
  TrendingUp,
  TrendingDown,
  Minus,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Star,
  AlertCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useSelector,useDispatch } from "react-redux";

// UI Components
const Separator = ({ style }) => <div className="border-t" style={style} />;

const Tabs = ({ defaultValue, className, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={className} data-active-tab={activeTab}>
      {children.map((child) =>
        child.type.name === "TabsList"
          ? { ...child, props: { ...child.props, activeTab, setActiveTab } }
          : child.props.value === activeTab
          ? child
          : null
      )}
    </div>
  );
};

const TabsList = ({ className, children, activeTab, setActiveTab }) => (
  <div className={className}>
    {children.map((child) => ({
      ...child,
      props: { ...child.props, activeTab, setActiveTab },
    }))}
  </div>
);

const TabsTrigger = ({
  value,
  className,
  children,
  activeTab,
  setActiveTab,
}) => (
  <button
    className={className}
    onClick={() => setActiveTab(value)}
    data-state={activeTab === value ? "active" : "inactive"}
  >
    {children}
  </button>
);

const TabsContent = ({ value, className, children }) => (
  <div className={className}>{children}</div>
);

// Data
const dashboardMetrics = [
  {
    title: "Visibility Score",
    value: "8.4",
    change: "+12.5%",
    icon: Eye,
    iconColor: "text-blue-400",
    isPositive: true,
  },
  {
    title: "Presence Score",
    value: "74%",
    change: "+8.2%",
    icon: Target,
    iconColor: "text-green-400",
    isPositive: true,
  },
  {
    title: "Average Rank",
    value: "2.3",
    change: "-0.4",
    icon: Trophy,
    iconColor: "text-orange-400",
    isPositive: false,
  },
  {
    title: "Mentions",
    value: "1,247",
    change: "+23.1%",
    icon: MessageSquare,
    iconColor: "text-purple-400",
    isPositive: true,
  },
];

const visibilityData = [
  { date: "Jan 18", visibility: 6.8, presence: 68 },
  { date: "Jan 19", visibility: 7.2, presence: 71 },
  { date: "Jan 20", visibility: 6.9, presence: 69 },
  { date: "Jan 21", visibility: 7.8, presence: 73 },
  { date: "Jan 22", visibility: 8.1, presence: 76 },
  { date: "Jan 23", visibility: 8.4, presence: 74 },
  { date: "Jan 24", visibility: 8.4, presence: 74 },
];

const mentionsData = [
  { date: "Jan 18", mentions: 156, citations: 89 },
  { date: "Jan 19", mentions: 203, citations: 112 },
  { date: "Jan 20", mentions: 178, citations: 95 },
  { date: "Jan 21", mentions: 234, citations: 134 },
  { date: "Jan 22", mentions: 289, citations: 167 },
  { date: "Jan 23", mentions: 312, citations: 189 },
  { date: "Jan 24", mentions: 298, citations: 172 },
];

const models = [
  {
    name: "OpenAI",
    logo: "🤖",
    visibility: 8.7,
    presence: 82,
    change: 12.5,
    trend: "up",
  },
  {
    name: "Claude",
    logo: "🔮",
    visibility: 7.2,
    presence: 68,
    change: 5.3,
    trend: "up",
  },
  {
    name: "Gemini",
    logo: "✨",
    visibility: 6.8,
    presence: 71,
    change: -2.1,
    trend: "down",
  },
  {
    name: "Meta AI",
    logo: "🌐",
    visibility: 5.9,
    presence: 64,
    change: 8.7,
    trend: "up",
  },
  {
    name: "Grok",
    logo: "⚡",
    visibility: 4.2,
    presence: 45,
    change: 0,
    trend: "neutral",
  },
  {
    name: "DeepSeek",
    logo: "🧠",
    visibility: 3.1,
    presence: 38,
    change: 15.2,
    trend: "up",
  },
];

const optimizationData = [
  { name: "Passing", value: 23, color: "#22C55E" },
  { name: "Warnings", value: 5, color: "#F59E0B" },
  { name: "Critical", value: 2, color: "#EF4444" },
];

const optimizationIssues = [
  {
    type: "Critical",
    count: 2,
    color: "text-red-400",
    bgColor: "bg-red-600",
    icon: XCircle,
  },
  {
    type: "Warnings",
    count: 5,
    color: "text-yellow-400",
    bgColor: "bg-yellow-600",
    icon: AlertTriangle,
  },
  {
    type: "Passing",
    count: 23,
    color: "text-green-400",
    bgColor: "bg-green-600",
    icon: CheckCircle,
  },
];

const sentimentOverTimeData = [
  { date: "Jun 17", positive: 68, neutral: 25, negative: 7 },
  { date: "Jun 18", positive: 72, neutral: 22, negative: 6 },
  { date: "Jun 19", positive: 75, neutral: 20, negative: 5 },
  { date: "Jun 20", positive: 78, neutral: 18, negative: 4 },
  { date: "Jun 21", positive: 74, neutral: 21, negative: 5 },
  { date: "Jun 22", positive: 79, neutral: 17, negative: 4 },
  { date: "Jun 23", positive: 82, neutral: 15, negative: 3 },
];

const sentimentByCategoryData = [
  { category: "Trust", score: 85 },
  { category: "Innovation", score: 92 },
  { category: "Value", score: 78 },
  { category: "Quality", score: 88 },
  { category: "Support", score: 76 },
  { category: "Reliability", score: 90 },
];

const topSentiments = [
  "Transparency",
  "Problem resolution",
  "Innovation leadership",
  "Customer support",
  "Product quality",
  "Market expertise",
];
const lowestSentiments = [
  "Overall quality",
  "Super shoe range",
  "Pricing concerns",
  "Documentation gaps",
];

const totalMentionsData = [
  { brand: "AI8 Digital", mentions: 1247, color: "#3B82F6" },
  { brand: "Soroco", mentions: 892, color: "#22C55E" },
  { brand: "Mixpanel", mentions: 756, color: "#8B5CF6" },
  { brand: "Nintex", mentions: 634, color: "#F59E0B" },
  { brand: "Competitor E", mentions: 523, color: "#EF4444" },
];

const averageRankData = [
  { date: "Jun 17", rank: 2.8 },
  { date: "Jun 18", rank: 2.6 },
  { date: "Jun 19", rank: 2.4 },
  { date: "Jun 20", rank: 2.1 },
  { date: "Jun 21", rank: 1.9 },
  { date: "Jun 22", rank: 2.0 },
  { date: "Jun 23", rank: 1.8 },
];

const promptWinnersData = [
  {
    prompt: "What are the best project management tools for remote teams?",
    topBrand: "AI8 Digital",
    numberOnes: 42,
    rankOneRate: "89%",
  },
  {
    prompt: "How to implement AI chatbots for customer service?",
    topBrand: "AI8 Digital",
    numberOnes: 38,
    rankOneRate: "76%",
  },
  {
    prompt: "Best practices for digital marketing automation",
    topBrand: "Mixpanel",
    numberOnes: 34,
    rankOneRate: "68%",
  },
  {
    prompt: "Software development lifecycle management",
    topBrand: "AI8 Digital",
    numberOnes: 29,
    rankOneRate: "72%",
  },
];

const modelComparisonData = [
  {
    model: "OpenAI",
    yourMentions: 324,
    theirMentions: 189,
    yourRank: 1.8,
    theirRank: 2.4,
  },
  {
    model: "Claude",
    yourMentions: 298,
    theirMentions: 156,
    yourRank: 2.1,
    theirRank: 2.8,
  },
  {
    model: "Gemini",
    yourMentions: 267,
    theirMentions: 203,
    yourRank: 2.3,
    theirRank: 2.6,
  },
  {
    model: "Meta AI",
    yourMentions: 234,
    theirMentions: 178,
    yourRank: 2.5,
    theirRank: 3.1,
  },
];

// Chart Components
const MetricsChart = () => (
  <div className="dark-card">
    <div className="pb-6">
      <h3 className="text-xl font-bold text-dark-primary mb-2">
        Visibility & Presence
      </h3>
      <p className="text-dark-secondary font-medium">
        Track your presence across MoodMate over the last 7 days
      </p>
    </div>
    <Tabs defaultValue="visibility" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8 bg-dark-tag border border-dark-color">
        <TabsTrigger
          value="visibility"
          className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary"
        >
          Visibility & Presence
        </TabsTrigger>
        <TabsTrigger
          value="mentions"
          className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary"
        >
          Mentions & Citations
        </TabsTrigger>
      </TabsList>

      <TabsContent value="visibility" className="space-y-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={visibilityData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="date"
                stroke="#94A3B8"
                fontSize={12}
                fontWeight={500}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#94A3B8"
                fontSize={12}
                fontWeight={500}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1E293B",
                  border: "1px solid #374151",
                  borderRadius: "12px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="visibility"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ fill: "#3B82F6", strokeWidth: 0, r: 5 }}
                activeDot={{
                  r: 7,
                  stroke: "#3B82F6",
                  strokeWidth: 2,
                  fill: "#1E293B",
                }}
                name="Visibility Score"
              />
              <Line
                type="monotone"
                dataKey="presence"
                stroke="#22C55E"
                strokeWidth={3}
                dot={{ fill: "#22C55E", strokeWidth: 0, r: 5 }}
                activeDot={{
                  r: 7,
                  stroke: "#22C55E",
                  strokeWidth: 2,
                  fill: "#1E293B",
                }}
                name="Presence %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>

      <TabsContent value="mentions" className="space-y-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={mentionsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis
                dataKey="date"
                stroke="#94A3B8"
                fontSize={12}
                fontWeight={500}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#94A3B8"
                fontSize={12}
                fontWeight={500}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1E293B",
                  border: "1px solid #374151",
                  borderRadius: "12px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="mentions"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ fill: "#3B82F6", strokeWidth: 0, r: 5 }}
                activeDot={{
                  r: 7,
                  stroke: "#3B82F6",
                  strokeWidth: 2,
                  fill: "#1E293B",
                }}
                name="Total Mentions"
              />
              <Line
                type="monotone"
                dataKey="citations"
                stroke="#22C55E"
                strokeWidth={3}
                dot={{ fill: "#22C55E", strokeWidth: 0, r: 5 }}
                activeDot={{
                  r: 7,
                  stroke: "#22C55E",
                  strokeWidth: 2,
                  fill: "#1E293B",
                }}
                name="Citations"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
    </Tabs>
  </div>
);

const OptimizationDonut = () => {
  const score = 74;
  return (
    <div className="dark-card">
      <div className="pb-6">
        <h3 className="text-xl font-bold text-dark-primary mb-2">
          Site Optimization Score
        </h3>
        <p className="text-dark-secondary font-medium">
          LLM visibility optimization status
        </p>
      </div>
      <div className="space-y-8">
        <div className="relative">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={optimizationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={85}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {optimizationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1E293B",
                    border: "1px solid #374151",
                    borderRadius: "12px",
                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                    color: "#FFFFFF",
                    fontWeight: 500,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-dark-primary mb-2">
                {score}%
              </div>
              <div className="text-sm font-medium text-dark-secondary">
                Overall Score
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {optimizationIssues.map((issue) => {
            const Icon = issue.icon;
            return (
              <div
                key={issue.type}
                className="flex items-center justify-between p-4 rounded-xl bg-dark-tag border border-dark-color"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${issue.bgColor} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-dark-primary">
                    {issue.type}
                  </span>
                </div>
                <div className="dark-tag bg-dark-cta">{issue.count}</div>
              </div>
            );
          })}
        </div>
        <div className="pt-6 border-t border-dark-color">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-dark-primary mb-2">
                Highest Priority Action
              </h4>
              <p className="text-sm text-dark-secondary font-medium">
                Optimize heading structure & main content tags for better AI
                parsing
              </p>
            </div>
            <button className="dark-button-secondary w-full gap-2 group flex items-center justify-center">
              View All Actions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModelPerformanceGrid = () => {
  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-dark-positive" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-dark-negative" />;
      default:
        return <Minus className="w-4 h-4 text-dark-secondary" />;
    }
  };

  const getTrendColor = (trend) => {
    if (trend === "up") return "text-dark-positive";
    if (trend === "down") return "text-dark-negative";
    return "text-dark-secondary";
  };

  return (
    <div className="dark-card">
      <div className="flex flex-row items-center justify-between pb-8">
        <div>
          <h3 className="text-xl font-bold text-dark-primary mb-2">
            Model Performance
          </h3>
          <p className="text-dark-secondary font-medium">
            Your brand visibility across different AI language models
          </p>
        </div>
        <button className="dark-button-secondary gap-2 flex items-center">
          View Details <ExternalLink className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <div
            key={model.name}
            className="p-6 rounded-xl border border-dark-color hover:dark-shadow-lg transition-all duration-300 hover:-translate-y-1 bg-dark-card group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-dark-tag flex items-center justify-center dark-shadow border border-dark-color">
                  <span className="text-2xl">{model.logo}</span>
                </div>
                <div>
                  <h3 className="font-bold text-dark-primary text-lg">
                    {model.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    {getTrendIcon(model.trend)}
                    <span
                      className={`text-sm font-bold ${getTrendColor(
                        model.trend
                      )}`}
                    >
                      {model.change > 0 ? "+" : ""}
                      {model.change}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-dark-secondary font-medium">
                    Visibility
                  </span>
                  <span className="font-bold text-dark-primary">
                    {model.visibility}/10
                  </span>
                </div>
                <div className="w-full bg-dark-tag rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${model.visibility * 10}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-dark-secondary font-medium">
                    Presence
                  </span>
                  <span className="font-bold text-dark-primary">
                    {model.presence}%
                  </span>
                </div>
                <div className="w-full bg-dark-tag rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${model.presence}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TopPerformingPrompts = () => (
  <div className="dark-card">
    <div className="pb-6">
      <h3 className="text-xl font-bold text-dark-primary mb-2">
        Top Performing Prompts
      </h3>
      <p className="text-dark-secondary font-medium">
        Highest visibility prompts this week
      </p>
    </div>
    <div className="space-y-4">
      {[
        "AI chatbot implementation",
        "Digital marketing tools",
        "Process automation",
        "Data analytics platforms",
      ].map((prompt, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 rounded-xl bg-dark-tag border border-dark-color hover:bg-dark-hover transition-colors"
        >
          <div>
            <p className="text-sm font-medium text-dark-primary">{prompt}</p>
            <p className="text-xs text-dark-secondary mt-1">
              Rank #{index + 1} • 89% visibility
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-dark-positive">+12.5%</div>
            <div className="text-xs text-dark-secondary">vs last week</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CompetitorRanking = () => (
  <div className="dark-card">
    <div className="pb-6">
      <h3 className="text-xl font-bold text-dark-primary mb-2">
        Competitor Ranking
      </h3>
      <p className="text-dark-secondary font-medium">
        Your position vs key competitors
      </p>
    </div>
    <div className="space-y-4">
      {[
        { name: "AI8 Digital", rank: 1, score: 8.4, change: 12.5 },
        { name: "Soroco", rank: 2, score: 7.2, change: -2.1 },
        { name: "Mixpanel", rank: 3, score: 6.8, change: 5.3 },
        { name: "Nintex", rank: 4, score: 5.9, change: -1.2 },
      ].map((competitor) => (
        <div
          key={competitor.name}
          className="flex items-center justify-between p-4 rounded-xl bg-dark-tag border border-dark-color"
        >
          <div className="flex items-center space-x-4">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                competitor.rank === 1
                  ? "bg-dark-cta text-white"
                  : "bg-dark-hover text-dark-secondary"
              }`}
            >
              {competitor.rank}
            </div>
            <div>
              <p className="text-sm font-medium text-dark-primary">
                {competitor.name}
              </p>
              <p className="text-xs text-dark-secondary">
                Score: {competitor.score}
              </p>
            </div>
          </div>
          <div
            className={`text-sm font-bold ${
              competitor.change > 0
                ? "text-dark-positive"
                : "text-dark-negative"
            }`}
          >
            {competitor.change > 0 ? "+" : ""}
            {competitor.change}%
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Page Components
const DashboardPage = () => (
  <>
    <header className="bg-dark-bg border-b border-dark-color px-8 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-dark-primary mb-2">
            Dashboard
          </h1>
          <p className="text-dark-secondary font-medium">
           Hello Doctor, Monitor your visibility across Platforms
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="dark-tag">Live Data</div>
          <button className="dark-button-primary gap-2 flex items-center">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>
    </header>
    <main className="flex-1 overflow-auto p-8 bg-dark-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {dashboardMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.title}
              className="dark-card hover:dark-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-dark-tag flex items-center justify-center">
                  <Icon className={`w-7 h-7 ${metric.iconColor}`} />
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp
                    className={`w-4 h-4 ${
                      metric.isPositive
                        ? "text-dark-positive"
                        : "text-dark-negative"
                    }`}
                  />
                  <span
                    className={`text-sm font-bold ${
                      metric.isPositive
                        ? "text-dark-positive"
                        : "text-dark-negative"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-dark-primary mb-2">
                  {metric.value}
                </h3>
                <p className="text-sm font-medium text-dark-secondary">
                  {metric.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <MetricsChart />
        </div>
        <div>
          <OptimizationDonut />
        </div>
      </div>
    </main>
  </>
);

const SentimentPage = () => (
  <>
    <header className="bg-dark-bg border-b border-dark-color px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-dark-primary">
            Sentiment
          </h1>
          <p className="text-sm text-dark-secondary mt-1">
            Monitor your presence sentiment across platforms
          </p>
        </div>
        <button className="dark-button-secondary gap-2 flex items-center">
          <Heart className="w-4 h-4" />
          Download Report
        </button>
      </div>
    </header>
    <main className="flex-1 overflow-auto p-8 bg-dark-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="dark-card">
          <div className="pb-6">
            <h3 className="text-xl font-bold text-dark-primary mb-2">
              Sentiment Over Time
            </h3>
            <p className="text-dark-secondary font-medium">
              sentiment June 17-23
            </p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={sentimentOverTimeData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="date"
                  stroke="#94A3B8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#94A3B8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1E293B",
                    border: "1px solid #374151",
                    borderRadius: "12px",
                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                    color: "#FFFFFF",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="positive"
                  stackId="1"
                  stroke="#22C55E"
                  fill="#22C55E"
                  fillOpacity={0.8}
                />
                <Area
                  type="monotone"
                  dataKey="neutral"
                  stackId="1"
                  stroke="#F59E0B"
                  fill="#F59E0B"
                  fillOpacity={0.8}
                />
                <Area
                  type="monotone"
                  dataKey="negative"
                  stackId="1"
                  stroke="#EF4444"
                  fill="#EF4444"
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="dark-card">
          <div className="pb-6">
            <h3 className="text-xl font-bold text-dark-primary mb-2">
              Sentiment by Category
            </h3>
            <p className="text-dark-secondary font-medium">
              Performance across different social attributes
            </p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={sentimentByCategoryData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fontSize: 12, fill: "#94A3B8" }}
                  className="text-xs"
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fontSize: 10, fill: "#94A3B8" }}
                  tickCount={6}
                />
                <Radar
                  name="Sentiment Score"
                  dataKey="score"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.2}
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#3B82F6" }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="dark-card">
          <div className="pb-6">
            <h3 className="text-xl font-bold text-dark-primary mb-2 flex items-center gap-2">
              <Star className="w-5 h-5 text-green-400" />
              Top Sentiments
            </h3>
            <p className="text-dark-secondary font-medium">
              Most positive mentions and associations
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {topSentiments.map((sentiment, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium text-white bg-green-600 hover:bg-green-500 transition-colors"
              >
                {sentiment}
              </div>
            ))}
          </div>
        </div>
        <div className="dark-card">
          <div className="pb-6">
            <h3 className="text-xl font-bold text-dark-primary mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              Lowest Sentiments
            </h3>
            <p className="text-dark-secondary font-medium">
              Areas needing attention and improvement
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {lowestSentiments.map((sentiment, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium text-white bg-red-600 hover:bg-red-500 transition-colors"
              >
                {sentiment}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dark-card bg-gradient-to-r from-dark-card to-dark-tag">
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-dark-cta flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-primary mb-1">
                  Unlock Advanced Sentiment Analytics
                </h3>
                <p className="text-sm text-dark-secondary">
                  Get detailed sentiment breakdown, competitor comparisons, and
                  actionable insights
                </p>
              </div>
            </div>
            <button className="dark-button-primary px-8">Upgrade</button>
          </div>
        </div>
      </div>
    </main>
  </>
);

const IntelligencePage = () => (
  <>
    <header className="bg-dark-bg border-b border-dark-color px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-dark-primary">
            Intelligence
          </h1>
          <p className="text-sm text-dark-secondary mt-1">
            AI model insights and competitive intelligence
          </p>
        </div>
        <button className="dark-button-secondary gap-2 flex items-center">
          <Brain className="w-4 h-4" />
          Generate Report
        </button>
      </div>
    </header>
    <main className="flex-1 overflow-auto p-8 bg-dark-bg">
      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 max-w-md bg-dark-tag border border-dark-color">
          <TabsTrigger
            value="summary"
            className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary"
          >
            Summary
          </TabsTrigger>
          <TabsTrigger
            value="trends"
            className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary"
          >
            Trends
          </TabsTrigger>
          <TabsTrigger
            value="prompts"
            className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary"
          >
            Prompts
          </TabsTrigger>
          <TabsTrigger
            value="models"
            className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary"
          >
            Models
          </TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="dark-card">
              <div className="pb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-2">
                  Total Mentions
                </h3>
                <p className="text-dark-secondary font-medium">
                  Brand comparison across all AI models
                </p>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={totalMentionsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      dataKey="brand"
                      stroke="#94A3B8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis
                      stroke="#94A3B8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #374151",
                        borderRadius: "12px",
                        boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                        color: "#FFFFFF",
                      }}
                    />
                    <Bar
                      dataKey="mentions"
                      fill="#3B82F6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="dark-card">
              <div className="pb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-2">
                  Average Rank Over Time
                </h3>
                <p className="text-dark-secondary font-medium">
                  Your ranking performance trend
                </p>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={averageRankData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      dataKey="date"
                      stroke="#94A3B8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#94A3B8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      domain={[0, 4]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #374151",
                        borderRadius: "12px",
                        boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                        color: "#FFFFFF",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rank"
                      stroke="#22C55E"
                      strokeWidth={3}
                      dot={{ fill: "#22C55E", strokeWidth: 2, r: 5 }}
                      activeDot={{ r: 7, stroke: "#22C55E", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="dark-card">
              <div className="pb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-2 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  Prompt Winners
                </h3>
                <p className="text-dark-secondary font-medium">
                  Prompts where you consistently rank #1
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-color">
                      <th className="text-left font-semibold text-dark-primary pb-3">
                        Prompt Text
                      </th>
                      <th className="text-left font-semibold text-dark-primary pb-3">
                        Top Brand
                      </th>
                      <th className="text-center font-semibold text-dark-primary pb-3">
                        #1s
                      </th>
                      <th className="text-center font-semibold text-dark-primary pb-3">
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {promptWinnersData.map((prompt, index) => (
                      <tr
                        key={index}
                        className="border-b border-dark-color hover:bg-dark-table-hover transition-colors"
                      >
                        <td className="py-4 max-w-xs">
                          <p className="text-sm font-medium text-dark-primary leading-relaxed truncate">
                            {prompt.prompt}
                          </p>
                        </td>
                        <td className="py-4">
                          <div
                            className={`dark-tag ${
                              prompt.topBrand === "AI8 Digital"
                                ? "bg-dark-cta"
                                : ""
                            }`}
                          >
                            {prompt.topBrand}
                          </div>
                        </td>
                        <td className="py-4 text-center font-medium text-dark-primary">
                          {prompt.numberOnes}
                        </td>
                        <td className="py-4 text-center">
                          <span className="text-sm font-semibold text-dark-positive">
                            {prompt.rankOneRate}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="dark-card">
              <div className="pb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Model Comparison
                </h3>
                <p className="text-dark-secondary font-medium">
                  Your performance vs competitors by AI model
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-color">
                      <th className="text-left font-semibold text-dark-primary pb-3">
                        Model
                      </th>
                      <th className="text-center font-semibold text-dark-primary pb-3">
                        Your Mentions
                      </th>
                      <th className="text-center font-semibold text-dark-primary pb-3">
                        Their Mentions
                      </th>
                      <th className="text-center font-semibold text-dark-primary pb-3">
                        Your Rank
                      </th>
                      <th className="text-center font-semibold text-dark-primary pb-3">
                        Their Rank
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelComparisonData.map((model, index) => (
                      <tr
                        key={index}
                        className="border-b border-dark-color hover:bg-dark-table-hover transition-colors"
                      >
                        <td className="py-4 font-medium text-dark-primary">
                          {model.model}
                        </td>
                        <td className="py-4 text-center">
                          <div className="dark-tag bg-dark-cta">
                            {model.yourMentions}
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <div className="dark-tag">{model.theirMentions}</div>
                        </td>
                        <td className="py-4 text-center">
                          <span className="text-sm font-semibold text-dark-positive">
                            {model.yourRank}
                          </span>
                        </td>
                        <td className="py-4 text-center">
                          <span className="text-sm font-medium text-dark-secondary">
                            {model.theirRank}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="trends" className="space-y-6">
          <div className="text-center py-12">
            <TrendingUp className="w-12 h-12 text-dark-secondary mx-auto mb-4" />
            <h3 className="text-lg font-medium text-dark-primary mb-2">
              Trends Analysis
            </h3>
            <p className="text-dark-secondary">
              Detailed trend analysis coming soon
            </p>
          </div>
        </TabsContent>
        <TabsContent value="prompts" className="space-y-6">
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-dark-primary mb-2">
              Prompt Performance
            </h3>
            <p className="text-dark-secondary">
              Individual prompt analytics coming soon
            </p>
          </div>
        </TabsContent>
        <TabsContent value="models" className="space-y-6">
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-dark-primary mb-2">
              Model Analytics
            </h3>
            <p className="text-dark-secondary">
              Detailed model comparison coming soon
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  </>
);

// Generic placeholder pages
const GenericPage = ({ title, description, icon: Icon }) => (
  <>
    <header className="bg-dark-bg border-b border-dark-color px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-dark-primary">{title}</h1>
          <p className="text-sm text-dark-secondary mt-1">{description}</p>
        </div>
        <button className="dark-button-secondary gap-2 flex items-center">
          <Icon className="w-4 h-4" />
          Export Data
        </button>
      </div>
    </header>
    <main className="flex-1 overflow-auto p-8 bg-dark-bg">
      <div className="text-center py-20">
        <Icon className="w-16 h-16 text-dark-secondary mx-auto mb-6" />
        <h3 className="text-2xl font-medium text-dark-primary mb-4">
          {title} Dashboard
        </h3>
        <p className="text-dark-secondary mb-8 max-w-md mx-auto">
          Comprehensive {title.toLowerCase()} analytics and insights coming
          soon. Track performance metrics, competitive analysis, and
          optimization opportunities.
        </p>
        <button className="dark-button-primary">Request Early Access</button>
      </div>
    </main>
  </>
);

// Navigation Configuration
const navigationConfig = {
  main: [
    { icon: BarChart3, label: "Dashboard", component: DashboardPage },
    {
      icon: FileText,
      label: "Reports",
      component: () => (
        <GenericPage
          title="Reports"
          description="Analytics reports and insights"
          icon={FileText}
        />
      ),
    },
    {
      icon: Lightbulb,
      label: "Prompts",
      component: () => (
        <GenericPage
          title="Prompts"
          description="Prompt optimization and management"
          icon={Lightbulb}
        />
      ),
    },
    {
      icon: Settings,
      label: "Optimize",
      component: () => (
        <GenericPage
          title="Optimize"
          description="LLM visibility optimization tools"
          icon={Settings}
        />
      ),
    },
  ],
  insight: [
    { icon: Brain, label: "Intelligence", component: IntelligencePage },
    { icon: Heart, label: "Sentiment", component: SentimentPage },
    {
      icon: Quote,
      label: "Citations",
      component: () => (
        <GenericPage
          title="Citations"
          description="Track brand citations across AI models"
          icon={Quote}
        />
      ),
    },
  ],
  analytics: [
    {
      icon: Search,
      label: "Crawlers",
      component: () => (
        <GenericPage
          title="Crawlers"
          description="AI model crawling and indexing data"
          icon={Search}
        />
      ),
    },
    {
      icon: Zap,
      label: "LLM Traffic",
      component: () => (
        <GenericPage
          title="LLM Traffic"
          description="Language model traffic analytics"
          icon={Zap}
        />
      ),
    },
  ],
  other: [
    {
      icon: BookOpen,
      label: "Learn",
      component: () => (
        <GenericPage
          title="Learn"
          description="Educational resources and tutorials"
          icon={BookOpen}
        />
      ),
    },
    {
      icon: Puzzle,
      label: "Integrations",
      component: () => (
        <GenericPage
          title="Integrations"
          description="API integrations and connections"
          icon={Puzzle}
        />
      ),
    },
    {
      icon: User,
      label: "My Account",
      component: () => (
        <GenericPage
          title="My Account"
          description="Account settings and preferences"
          icon={User}
        />
      ),
    },
  ],
};

// Main Dashboard Component
const Dashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const allNavItems = [
    ...navigationConfig.main,
    ...navigationConfig.insight,
    ...navigationConfig.analytics,
    ...navigationConfig.other,
  ];
  const activeComponent =
    allNavItems.find((item) => item.label === activePage)?.component ||
    DashboardPage;

  const renderNavItem = (item, isActive) => {
    const Icon = item.icon;
    return (
      <button
        key={item.label}
        onClick={() => setActivePage(item.label)}
        className={`dark-nav-item w-full text-left ${
          isActive ? "dark-nav-item-active" : ""
        }`}
      >
        <Icon
          className={`w-5 h-5 ${
            isActive ? "text-dark-primary" : "text-dark-secondary"
          }`}
        />
        <span>{item.label}</span>
      </button>
    );
  };

  const ActiveComponent = activeComponent;

  return (
    <div
      className="flex h-screen bg-dark-bg"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <div className="w-72 bg-dark-bg border-r border-dark-color flex flex-col">
        <div className="p-8 border-b border-dark-color">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center dark-shadow-lg relative overflow-hidden">
              <span className="text-white font-bold text-lg relative z-10">
                
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark-primary">
                MoodMate
              </h1>
              <p className="text-xs text-dark-secondary font-medium">
                Doctor Panel
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-8 overflow-y-auto">
          <div className="space-y-2">
            {navigationConfig.main.map((item) =>
              renderNavItem(item, activePage === item.label)
            )}
          </div>

          <Separator style={{ backgroundColor: "#374151" }} />

          <div className="space-y-4">
            <div className="px-4">
              <h3 className="text-xs font-bold text-dark-secondary uppercase tracking-widest">
                Insight
              </h3>
            </div>
            <div className="space-y-2">
              {navigationConfig.insight.map((item) =>
                renderNavItem(item, activePage === item.label)
              )}
            </div>
          </div>

          <Separator style={{ backgroundColor: "#374151" }} />

          <div className="space-y-4">
            <div className="px-4">
              <h3 className="text-xs font-bold text-dark-secondary uppercase tracking-widest">
                Analytics
              </h3>
            </div>
            <div className="space-y-2">
              {navigationConfig.analytics.map((item) =>
                renderNavItem(item, activePage === item.label)
              )}
            </div>
          </div>

          <Separator style={{ backgroundColor: "#374151" }} />

          <div className="space-y-4">
            <div className="px-4">
              <h3 className="text-xs font-bold text-dark-secondary uppercase tracking-widest">
                Other
              </h3>
            </div>
            <div className="space-y-2">
              {navigationConfig.other.map((item) =>
                renderNavItem(item, activePage === item.label)
              )}
            </div>
          </div>
        </nav>

        <div className="p-6 border-t border-dark-color">
          <div className="bg-dark-card rounded-xl p-4 text-center border border-dark-color">
            <h4 className="text-sm font-bold text-dark-primary mb-2">
              Upgrade to Pro
            </h4>
            <p className="text-xs text-dark-secondary mb-3">
              Unlock advanced analytics
            </p>
            <button className="dark-button-primary text-xs py-2 px-4 w-full">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default function DoctorDashboard() {
  return <Dashboard />;
}
