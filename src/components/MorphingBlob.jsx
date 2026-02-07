import { motion } from 'framer-motion';

export default function MorphingBlob({ color = '#FF6B35', size = 400, style = {} }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}66 0%, transparent 70%)`,
        filter: 'blur(40px)',
        ...style,
      }}
      animate={{
        scale: [1, 1.3, 0.9, 1.1, 1],
        x: [0, 50, -30, 20, 0],
        y: [0, -30, 40, -20, 0],
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
