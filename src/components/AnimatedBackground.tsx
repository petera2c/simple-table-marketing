"use client";
import { motion } from "framer-motion";

// Available gradient colors
const colors = [
  "bg-gradient-to-br from-blue-300 to-indigo-400",
  "bg-gradient-to-br from-purple-300 to-pink-400",
  "bg-gradient-to-br from-cyan-300 to-blue-400",
  "bg-gradient-to-br from-indigo-300 to-purple-400",
  "bg-gradient-to-br from-blue-400 to-teal-300",
  "bg-gradient-to-br from-pink-300 to-purple-400",
  "bg-gradient-to-br from-teal-300 to-cyan-400",
];

// Fixed positions with fixed size and color
const bubbles = [
  {
    size: 300,
    x: 85,
    y: 5,
    delay: 0,
    opacity: 0.3,
    color: colors[0],
  },
  {
    size: 350,
    x: 10,
    y: 25,
    delay: 0.3,
    opacity: 0.25,
    color: colors[1],
  },
  {
    size: 400,
    x: 75,
    y: 35,
    delay: 0.5,
    opacity: 0.3,
    color: colors[2],
  },
  {
    size: 350,
    x: 35,
    y: 38,
    delay: 0.7,
    opacity: 0.25,
    color: colors[3],
  },
  {
    size: 300,
    x: 35,
    y: 20,
    delay: 1.0,
    opacity: 0.2,
    color: colors[4],
  },

  {
    size: 300,
    x: 5,
    y: 5,
    delay: 2.0,
    opacity: 0.3,
    color: colors[0],
  },
];

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
      x: 0,
      y: 0,
    }}
    transition={{
      duration: 15,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

const AnimatedBackground = () => {
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
