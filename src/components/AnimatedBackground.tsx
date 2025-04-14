"use client";
import { motion } from "framer-motion";

// Background bubble component
const BackgroundBubble = ({
  size,
  x,
  y,
  delay,
  opacity = 0.25,
  color,
}: {
  size: number;
  x: number;
  y: number;
  delay: number;
  opacity?: number;
  color: string;
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
    initial={{ scale: 0.75, opacity: 0, x: 0, y: 0 }}
    animate={{
      scale: [0.75, 1.03, 0.75],
      opacity: [opacity * 0.8, opacity, opacity * 0.8],
      x: Math.random() * 30 - 15,
      y: Math.random() * 30 - 15,
    }}
    transition={{
      duration: 12 + Math.random() * 8,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

const AnimatedBackground = () => {
  // Available gradient colors for randomization
  const colors = [
    "bg-gradient-to-br from-blue-300 to-indigo-400",
    "bg-gradient-to-br from-purple-300 to-pink-400",
    "bg-gradient-to-br from-cyan-300 to-blue-400",
    "bg-gradient-to-br from-indigo-300 to-purple-400",
    "bg-gradient-to-br from-blue-400 to-teal-300",
    "bg-gradient-to-br from-pink-300 to-purple-400",
    "bg-gradient-to-br from-teal-300 to-cyan-400",
  ];

  // Fixed positions with randomized size and color
  const bubbles = [
    {
      size: 200 + Math.random() * 250, // Random size between 200 and 450
      x: 5,
      y: 10,
      delay: 0,
      opacity: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      size: 200 + Math.random() * 250,
      x: 80,
      y: 15,
      delay: 0.3,
      opacity: 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      size: 200 + Math.random() * 250,
      x: 20,
      y: 60,
      delay: 0.5,
      opacity: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      size: 200 + Math.random() * 250,
      x: 70,
      y: 70,
      delay: 0.7,
      opacity: 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      size: 200 + Math.random() * 250,
      x: 40,
      y: 30,
      delay: 1.0,
      opacity: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      size: 200 + Math.random() * 250,
      x: 10,
      y: 95,
      delay: 1.5,
      opacity: 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      size: 200 + Math.random() * 250,
      x: 60,
      y: 40,
      delay: 1.8,
      opacity: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      size: 200 + Math.random() * 250,
      x: 30,
      y: 20,
      delay: 2.0,
      opacity: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none min-h-[200vh]">
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
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]"></div>
    </div>
  );
};

export default AnimatedBackground;
