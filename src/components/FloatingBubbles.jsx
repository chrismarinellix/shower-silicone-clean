import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function FloatingBubbles({ count = 20 }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, [count]);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          style={{
            position: 'absolute',
            left: `${bubble.left}%`,
            bottom: '-100px',
            width: bubble.size,
            height: bubble.size,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.1))`,
            boxShadow: `
              inset 0 0 20px rgba(255,255,255,0.5),
              0 0 20px rgba(255,255,255,0.2)
            `,
            opacity: bubble.opacity,
          }}
          animate={{
            y: [0, -1200],
            x: [0, Math.sin(bubble.id) * 100, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
