import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Background bubble component with more visible styling
const BackgroundBubble = ({
  size,
  x,
  y,
  delay,
  opacity = 0.3,
  color = "bg-blue-500/30",
}: {
  size: number;
  x: number;
  y: number;
  delay: number;
  opacity?: number;
  color?: string;
}) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      zIndex: -1,
    }}
    initial={{ scale: 0.6, opacity: 0 }}
    animate={{ scale: 1, opacity }}
    transition={{
      duration: 5 + Math.random() * 7,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

const AnimatedBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Generate bubbles across the viewport with varied colors and improved visibility
  const bubbles = [
    { size: 300, x: 5, y: 10, delay: 0, opacity: 0.25, color: "bg-blue-500/35" },
    { size: 200, x: 80, y: 15, delay: 0.3, opacity: 0.22, color: "bg-indigo-500/30" },
    { size: 250, x: 20, y: 60, delay: 0.5, opacity: 0.28, color: "bg-blue-400/35" },
    { size: 180, x: 70, y: 70, delay: 0.7, opacity: 0.25, color: "bg-sky-500/35" },
    { size: 350, x: 40, y: 30, delay: 1.0, opacity: 0.2, color: "bg-blue-600/30" },
    { size: 420, x: 85, y: 90, delay: 1.3, opacity: 0.18, color: "bg-indigo-400/30" },
    { size: 280, x: 10, y: 95, delay: 1.5, opacity: 0.25, color: "bg-blue-500/35" },
    { size: 360, x: 60, y: 40, delay: 1.8, opacity: 0.2, color: "bg-sky-400/30" },
    // Add a few more prominent bubbles
    { size: 200, x: 30, y: 20, delay: 2.0, opacity: 0.3, color: "bg-blue-500/40" },
    { size: 230, x: 75, y: 50, delay: 0.8, opacity: 0.32, color: "bg-indigo-500/40" },
    { size: 190, x: 15, y: 45, delay: 1.2, opacity: 0.35, color: "bg-sky-400/45" },
    { size: 320, x: 88, y: 25, delay: 0.4, opacity: 0.3, color: "bg-blue-400/40" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none min-h-[200vh]">
      {isLoaded && (
        <>
          {bubbles.map((bubble, index) => (
            <BackgroundBubble
              key={index}
              size={bubble.size}
              x={bubble.x}
              y={bubble.y}
              delay={bubble.delay}
              opacity={bubble.opacity}
              color={bubble.color}
            />
          ))}

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]"></div>
        </>
      )}
    </div>
  );
};

export default AnimatedBackground;
