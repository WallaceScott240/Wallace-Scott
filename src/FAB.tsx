import React, { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaSmile } from "react-icons/fa";
import { getBotResponse } from "./botlogic";

const FloatingBotButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "Who are you",
    "What is your purpose",
    "How can I contact support",
    "How do I sign up",
    "What services do you offer",
  ];

  const handleSendMessage = (text?: string) => {
    const message = text || input;
    if (message.trim()) {
      setMessages((prev) => [...prev, `You: ${message}`]);
      setInput("");

      const botResponse = getBotResponse(message);
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, `🤖: ${botResponse}`]);
      }, 800);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: "#004B47",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            fontSize: "24px",
            cursor: "pointer",
            backdropFilter: "blur(10px)",
          }}
        >
          {open ? <FaTimes /> : <FaSmile />}
        </button>
      </div>

      {/* Chatbot UI */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            height: "460px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 999,
          }}
        >
          <div
            style={{
              padding: "10px",
              backgroundColor: "#004B47",
              color: "white",
              fontWeight: "bold",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            OxMol
          </div>

          {/* Quick Question Buttons */}
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              padding: "8px",
              gap: "8px",
              backgroundColor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(5px)",
              flexWrap: "nowrap",
            }}
          >
            {quickQuestions.map((q, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(q)}
                style={{
                  whiteSpace: "nowrap",
                  backgroundColor: "#004B47",
                  color: "white",
                  border: "none",
                  borderRadius: "20px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div
            style={{
              padding: "10px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              overflowY: "auto",
              color: "#333",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  alignSelf: message.startsWith("You")
                    ? "flex-end"
                    : "flex-start",
                  maxWidth: "70%",
                  backgroundColor: message.startsWith("You")
                    ? "#e0e0e0"
                    : "#004B47",
                  color: message.startsWith("You") ? "#333" : "white",
                  padding: "8px 12px",
                  borderRadius: "20px",
                  wordWrap: "break-word",
                  backdropFilter: "blur(5px)",
                }}
              >
                {message}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #ccc",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                color: "#333",
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              style={{
                backgroundColor: "#004B47",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingBotButton;
