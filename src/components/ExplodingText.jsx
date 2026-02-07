import { motion } from 'framer-motion';

export default function ExplodingText({ text, className = "" }) {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', perspective: 1000 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: 'inline-block',
            marginRight: letter === " " ? "0.3em" : "0.02em",
            transformStyle: 'preserve-3d',
          }}
          whileHover={{
            scale: 1.4,
            color: '#F7931E',
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.3 }
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
