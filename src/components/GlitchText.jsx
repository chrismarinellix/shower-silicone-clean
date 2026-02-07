import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function GlitchText({ text, className = "" }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={className}
      style={{ position: 'relative', display: 'inline-block' }}
      whileHover={{ scale: 1.02 }}
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{text}</span>

      {/* Glitch layers */}
      <motion.span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          color: '#ff0000',
          zIndex: 1,
          opacity: isGlitching ? 0.8 : 0,
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        }}
        animate={isGlitching ? {
          x: [-2, 2, -2, 0],
          y: [1, -1, 0],
        } : {}}
        transition={{ duration: 0.1 }}
      >
        {text}
      </motion.span>

      <motion.span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          color: '#00ffff',
          zIndex: 1,
          opacity: isGlitching ? 0.8 : 0,
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
        }}
        animate={isGlitching ? {
          x: [2, -2, 2, 0],
          y: [-1, 1, 0],
        } : {}}
        transition={{ duration: 0.1 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
