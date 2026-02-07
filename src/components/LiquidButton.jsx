import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LiquidButton({ children, onClick, style = {}, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: 'none',
        cursor: 'pointer',
        ...style,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Liquid blob background */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120%',
          height: '120%',
          background: 'linear-gradient(135deg, #FF6B35, #F7931E)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
        animate={isHovered ? {
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '70% 30% 30% 70% / 70% 70% 30% 30%',
            '30% 70% 70% 30% / 30% 30% 70% 70%',
          ],
          rotate: [0, 180, 360],
          x: '-50%',
          y: '-50%',
        } : {
          x: '-50%',
          y: '-50%',
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      {/* Ripple effect */}
      {isHovered && (
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.4)',
          }}
          initial={{ scale: 0, x: '-50%', y: '-50%', opacity: 1 }}
          animate={{ scale: 15, opacity: 0 }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}

      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </motion.button>
  );
}
