import React, { useEffect, useState, useRef, useMemo } from "react";
import { Send } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserAllChats,
  sendMessageToActiveChat,
} from "../../feature/chat/chatThunks";
import { FormatAIResponse } from "../../components/FormatAIResponse";
import Logo from "../../assets/transparent-logo.png";
import LoaderModal from "../../components/LoaderModal";
import EmotionIndicator from "./EmotionIndicator";
import { FormatAISimply } from "../../components/FormatAISimply";

export default function ChatArea() {
  const { currentChat } = useSelector((state) => state.chat);
  

  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (currentChat?.messages) {
      setMessages(currentChat.messages);
    }
  }, [currentChat]);

  useEffect(() => {
    dispatch(getUserAllChats());
  }, [dispatch]);

  const handleSend = async () => {
    if (!input.trim()) return;
   
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage, { role: "loading" }]);
    setInput("");

    try {
      const actionResult = await dispatch(sendMessageToActiveChat(input))
        .unwrap;
      const newMessages = actionResult?.payload?.chat?.messages;
      const lastMessage = newMessages?.[newMessages.length - 1];

      const response = lastMessage?.content || "Thinking...";

      setMessages((prev) => {
        const filtered = prev.filter((m) => m.role !== "loading");
        return [...filtered, { role: "assistant", content: response }];
      });
    } catch (error) {
      console.error("Message send failed", error);
      setMessages((prev) => prev.filter((m) => m.role !== "loading"));
    }
  };

  const messagesEndRef = useRef(null);

  const renderedMessages = useMemo(() => {
    const lastAssistantIndex = messages
      .map((msg, i) => (msg.role === "assistant" ? i : -1))
      .filter((i) => i !== -1)
      .pop();

    return messages.map((msg, idx) => (
      <div
        key={idx}
        className={`flex items-start gap-3 ${
          msg.role === "user" ? "self-end flex-row-reverse p-3" : "self-start"
        }`}
      >
        {msg.role === "assistant" && (
          <img
            src={Logo}
            alt="AI"
            className="w-8 h-8 rounded-full border border-white/30 object-cover"
          />
        )}
        <div
          className={`max-w-[70%] px-4 py-2 rounded-2xl backdrop-blur-lg border border-white/20 ${
            msg.role === "user"
              ? "bg-white/10 text-white"
              : msg.role === "assistant"
              ? "bg-white/10 text-white"
              : "bg-gray-300 text-gray-500 animate-pulse"
          }`}
        >
          {msg.role === "loading" ? (
            <img src={Logo} className="w-6 h-6" />
          ) : msg.role === "assistant" && idx === lastAssistantIndex ? (
            <FormatAIResponse rawText={msg.content} />
          ) : (
            < FormatAISimply rawText={msg.content} />
          )}
        </div>
      </div>
    ));
  }, [messages]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const savedScrollTop = parseInt(localStorage.getItem("chatScrollTop"), 10);
    if (!isNaN(savedScrollTop)) {
      container.scrollTop = savedScrollTop;
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      localStorage.setItem("chatScrollTop", container.scrollTop);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // if (!currentChat) return <LoaderModal text="Fetching Chat" />;

  if (messages?.length > 0) {
    return (
      <div className="relative h-full overflow-hidden bg-[#22223f] flex flex-col justify-end px-6 pb-4 pt-12 rounded-2xl">
        <EmotionIndicator />

        {/* Glowing background ball */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-3xl pointer-events-none z-0" />

        {/* Chat Container */}
        <div
          ref={scrollContainerRef}
          className="relative max-w-4xl w-full mx-auto flex flex-col gap-6 z-10 overflow-y-auto pb-12 px-2 no-scrollbar h-full"
          style={{ maxHeight: "calc(100vh - 150px)", overflowX: "hidden" }}
        >
          {renderedMessages}
          <div className="text-white" ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="relative w-full flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-full px-4 py-3 flex items-center gap-3 mt-4 w-[70%]"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="How can I help you?"
              className="flex-1 bg-transparent text-white placeholder:text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-blue-400/80 hover:bg-blue-400 transition"
            >
              <Send size={20} className="text-white" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (messages?.length === 0) {
    const suggestions = [
      "How can I help you today?",
      "How was your day? Mate 😊, We can talk about that .",
      "What's on your mind? I'm here to listen and support you.",
    ];

    const chats = [
      { sender: "ai", message: "Hello! How can I assist you today?" },
      {
        sender: "user",
        message: "Tell me something about my project performance.",
      },
    ];
    return (
      <div className="relative h-full rounded-2xl overflow-hidden bg-[#22223f] flex flex-col justify-end p-6">
        {/* 🌈 Gradient glowing background ball */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-3xl pointer-events-none z-0" />
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white"><img src={Logo} alt="" className="animate-pulse" /></div>
        {/* 💬 Chat UI container */}
        <div className="relative max-w-4xl w-full mx-auto flex flex-col gap-8 z-10">
          {/* 💬 Suggestions row */}
          <div className="flex flex-wrap gap-4 justify-center">
            {suggestions.map((text, i) => (
              <div
                key={i}
                className="px-4 py-2 text-sm text-white bg-white/10 border border-white/20 backdrop-blur-lg rounded-full hover:bg-white/20 transition"
              >
                {text}
              </div>
            ))}
          </div>

          {/* 📨 Input bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-full px-4 py-3 flex items-center gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about your projects"
              className="flex-1 bg-transparent text-white placeholder:text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-blue-400/80 hover:bg-blue-400 transition"
            >
              <Send size={20} className="text-white" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}
