import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxHero({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
          y: backgroundY,
          zIndex: 0
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(80px)',
          y: floatingY,
          zIndex: 0
        }}
      />
      <motion.div 
        style={{ position: 'relative', zIndex: 1, opacity, width: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
