import React, { useEffect, useState, useRef, useMemo } from "react";
import { Send } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessageToActiveChat } from "../../feature/chat/chatThunks";
import { FormatAIResponse } from "../../components/FormatAIResponse";
import Logo from "../../assets/e18e014e-98af-4f3d-b93d-9113c64c4aff.jpeg";

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

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage, { role: "loading" }]);
    setInput("");

    try {
      const actionResult = await dispatch(sendMessageToActiveChat(input));
      const newMessages = actionResult?.payload?.chat?.messages;
      const lastMessage = newMessages?.[newMessages.length - 1];

      const response = lastMessage?.content || "AI response...";

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
          msg.role === "user" ? "self-end flex-row-reverse" : "self-start"
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
            <span>{msg.content}</span>
          )}
        </div>
      </div>
    ));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="relative h-full overflow-hidden bg-[#22223f] flex flex-col justify-end p-6 rounded-2xl">
      {/* Glowing background ball */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-3xl pointer-events-none z-0" />

      {/* Chat Container */}
      <div
        className="relative max-w-4xl w-full mx-auto flex flex-col gap-6 z-10 overflow-y-auto pb-32 px-2 no-scrollbar"
        style={{ maxHeight: "calc(100vh - 150px)", overflowX: "hidden" }}
      >
        {renderedMessages}
        <div className="text-white" ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-full px-4 py-3 flex items-center gap-3 mt-4 fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl z-20"
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
  );
}
