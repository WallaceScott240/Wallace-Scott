import React, { useState } from "react";

const InteractiveStrip: React.FC = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple = { 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top, 
      id: Date.now() 
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000); // Remove after animation ends
  };

  const stripStyle: React.CSSProperties = {
    height: "30px",
    width: "100%",
    background: "#FFBE02",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  };

  return (
    <div style={stripStyle} onMouseMove={handleMouseMove}>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "absolute",
            top: ripple.y - 15 + "px",
            left: ripple.x - 15 + "px",
            width: "30px",
            height: "30px",
            background: "#fff",
            borderRadius: "50%",
            transform: "scale(1)",
            animation: "rippleAnimation 1s ease-out",
            pointerEvents: "none",
          }}
        ></span>
      ))}

      {/* Ripple Animation */}
      <style>
        {`
          @keyframes rippleAnimation {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            100% {
              transform: scale(10);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InteractiveStrip;
