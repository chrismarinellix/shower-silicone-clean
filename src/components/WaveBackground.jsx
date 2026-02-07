import { motion } from 'framer-motion';

export default function WaveBackground() {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '200px',
      overflow: 'hidden',
      zIndex: 0,
    }}>
      {[0, 1, 2].map((i) => (
        <motion.svg
          key={i}
          style={{
            position: 'absolute',
            bottom: i * -20,
            left: 0,
            width: '200%',
            height: '100%',
            opacity: 0.3 - i * 0.08,
          }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          animate={{
            x: [0, -720, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            fill="rgba(255,255,255,0.5)"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </motion.svg>
      ))}
    </div>
  );
}
