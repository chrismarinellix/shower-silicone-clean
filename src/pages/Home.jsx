import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ParallaxHero from '../components/ParallaxHero';
import FloatingBubbles from '../components/FloatingBubbles';
import MorphingBlob from '../components/MorphingBlob';
import CursorGlow from '../components/CursorGlow';
import GlitchText from '../components/GlitchText';
import TiltCard from '../components/TiltCard';
import LiquidButton from '../components/LiquidButton';
import WaveBackground from '../components/WaveBackground';
import ExplodingText from '../components/ExplodingText';
import MagneticButton from '../components/MagneticButton';
import './Home.css';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const backgroundHue = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <motion.div
      ref={containerRef}
      className="flyer-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Hero Section with ALL the effects */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
        {/* Animated gradient background */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FF8C42 100%)',
            scale,
          }}
        />

        {/* Morphing blobs */}
        <MorphingBlob color="#fff" size={500} style={{ top: '10%', left: '-10%' }} />
        <MorphingBlob color="#F7931E" size={400} style={{ top: '60%', right: '-5%' }} />
        <MorphingBlob color="#ff4444" size={300} style={{ bottom: '10%', left: '30%' }} />

        {/* Floating bubbles */}
        <FloatingBubbles count={25} />

        {/* Wave background at bottom */}
        <WaveBackground />

        {/* Hero content */}
        <motion.div
          style={{
            position: 'relative',
            zIndex: 10,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
          }}
        >
          {/* Floating badge */}
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              padding: '10px 30px',
              marginBottom: '20px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600' }}>
              ✨ Melbourne's #1 Silicone Specialists
            </span>
          </motion.div>

          {/* Exploding title */}
          <ExplodingText
            text="SHOWER SILICONE"
            className="hero-title"
          />
          <ExplodingText
            text="REPLACEMENT"
            className="hero-title"
          />

          {/* Glitch price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            style={{ margin: '30px 0' }}
          >
            <GlitchText
              text="JUST $500"
              className="price-glitch"
            />
          </motion.div>

          {/* Animated blurb */}
          <motion.div
            className="blurb-box"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
            style={{ perspective: 1000 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
            }}
          >
            <motion.p
              className="blurb-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Is your shower silicone looking <motion.span
                style={{ color: '#ff4444', fontWeight: 'bold' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >black, moldy, and embarrassing?</motion.span> You've lived with that disgusting, unhealthy bathroom for too long.
            </motion.p>

            <motion.div
              className="value-badge"
              whileHover={{
                rotate: [-2, 2, -2, 0],
                scale: 1.05,
              }}
              transition={{ type: "spring" }}
            >
              <div className="value-main">That's less than $2 a day over a year</div>
              <div className="value-sub">A tiny price for a pristine bathroom</div>
            </motion.div>
          </motion.div>

          {/* Liquid CTA button */}
          <LiquidButton
            style={{
              padding: '25px 60px',
              borderRadius: '50px',
              marginTop: '30px',
              fontSize: '1.3rem',
              fontWeight: '800',
              color: 'white',
            }}
          >
            <a href="tel:0417035368" style={{ color: 'white', textDecoration: 'none' }}>
              📞 Call Now: 0417 035 368
            </a>
          </LiquidButton>

          {/* Scroll indicator */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              style={{
                width: '30px',
                height: '50px',
                border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '10px',
              }}
            >
              <motion.div
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'white',
                  borderRadius: '50%',
                }}
                animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Benefits Section with 3D Tilt Cards */}
      <div className="content-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background blobs */}
        <MorphingBlob color="#FF6B35" size={300} style={{ top: '20%', left: '-10%', opacity: 0.1 }} />
        <MorphingBlob color="#F7931E" size={250} style={{ bottom: '20%', right: '-5%', opacity: 0.1 }} />

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50, rotateX: -45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{ perspective: 1000 }}
        >
          Why Choose Us?
        </motion.h2>

        <motion.div
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { icon: "💰", title: "Affordable Pricing", desc: "Transform your bathroom for just $500. Transparent pricing, no hidden fees.", color: "#FFD700" },
            { icon: "⚡", title: "Quick & Efficient", desc: "Most jobs completed in 2-4 hours. Minimal disruption, maximum impact.", color: "#00D4FF" },
            { icon: "🛡️", title: "Health & Safety", desc: "Remove harmful mold. Create a healthier bathroom for your family.", color: "#00FF88" },
            { icon: "👑", title: "Premium Materials", desc: "Highest quality anti-fungal silicone that resists mold for years.", color: "#FF6B35" },
            { icon: "✓", title: "Satisfaction Guaranteed", desc: "We stand behind our work with comprehensive warranty.", color: "#9B59B6" },
            { icon: "🏠", title: "Local Service", desc: "Servicing Sandringham & surrounding Melbourne suburbs.", color: "#E74C3C" }
          ].map((item, index) => (
            <TiltCard
              key={index}
              className="benefit-item"
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}
            >
              <motion.span
                className="benefit-icon"
                style={{ fontSize: '3rem', display: 'block', marginBottom: '15px' }}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {item.icon}
              </motion.span>
              <div className="benefit-title" style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '10px',
                background: `linear-gradient(135deg, ${item.color}, #333)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {item.title}
              </div>
              <div className="benefit-desc" style={{ color: '#666', lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </TiltCard>
          ))}
        </motion.div>

        {/* About Section with dramatic entrance */}
        <motion.div
          className="about-section"
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          style={{ perspective: 1000 }}
        >
          <motion.h2
            className="section-title"
            whileHover={{ scale: 1.05, color: '#FF6B35' }}
          >
            Hi, I'm Chris
          </motion.h2>
          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I'm a professional silicone specialist with years of experience transforming bathrooms across Sandringham and surrounding suburbs. I take pride in delivering absolutely perfect results every single time.
          </motion.p>
          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            I'll completely remove that old, moldy silicone, thoroughly clean and prepare the surfaces, then apply fresh professional-grade anti-fungal silicone with perfect, smooth lines. Your shower will look brand new - and stay that way for years.
          </motion.p>
        </motion.div>

        {/* Service Area with bouncy badges */}
        <div className="service-area">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Service Area
          </motion.h2>
          <motion.p
            className="section-desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Servicing Sandringham & surrounding Melbourne suburbs (within 15km)
          </motion.p>
          <motion.div
            className="suburbs-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Sandringham', 'Hampton', 'Brighton', 'Black Rock', 'Beaumaris', 'Cheltenham', 'Mentone', 'Moorabbin', 'Highett'].map((suburb, index) => (
              <motion.div
                className="suburb-badge"
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1,
                  }
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -5, 5, 0],
                  backgroundColor: "#FF6B35",
                  color: "white",
                  borderColor: "#FF6B35",
                  boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                {suburb}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quiz Section */}
        <motion.div
          className="quiz-promo-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '30px',
            padding: '50px 30px',
            margin: '60px auto',
            maxWidth: '600px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Floating quiz icons */}
          <motion.span
            style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '2rem', opacity: 0.3 }}
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🧠
          </motion.span>
          <motion.span
            style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '2rem', opacity: 0.3 }}
            animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            💡
          </motion.span>

          <motion.h2
            style={{
              color: 'white',
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '15px',
            }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Test Your Silicone Knowledge!
          </motion.h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '25px', fontSize: '1.1rem' }}>
            Take our fun quiz and learn everything about bathroom silicone care
          </p>
          <Link to="/learning" style={{ textDecoration: 'none' }}>
            <motion.button
              style={{
                background: 'linear-gradient(135deg, #FF6B35, #F7931E)',
                border: 'none',
                padding: '18px 50px',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(255, 107, 53, 0.4)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(255, 107, 53, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Take the Quiz
            </motion.button>
          </Link>
        </motion.div>

        {/* Epic CTA Section */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Animated background circles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: 100 + i * 50,
                height: 100 + i * 50,
                borderRadius: '50%',
                border: '2px solid rgba(255,107,53,0.2)',
                top: '50%',
                left: '50%',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
                x: '-50%',
                y: '-50%',
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            />
          ))}

          <motion.h3
            className="cta-title"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,107,53,0)",
                "0 0 40px rgba(255,107,53,0.5)",
                "0 0 20px rgba(255,107,53,0)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Ready to Transform Your Bathroom?
          </motion.h3>
          <p className="cta-desc">
            Get your shower looking brand new. Call now for a free quote.
          </p>

          <MagneticButton
            className="cta-button"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF6B35, #F7931E)',
              color: 'white',
              padding: '25px 70px',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1.5rem',
              fontWeight: '800',
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 10px 40px rgba(255,107,53,0.4)',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <a href="tel:0417035368" style={{ color: 'white', textDecoration: 'none' }}>
              🚀 Call Now: 0417 035 368
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
