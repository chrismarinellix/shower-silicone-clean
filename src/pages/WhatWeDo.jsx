import { Link } from 'react-router-dom';
import { Row, Col, Card, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

function WhatWeDo() {
  const services = [
    {
      icon: '🚿',
      title: 'Shower Silicone Replacement',
      description: 'Complete removal and replacement of all silicone in your shower enclosure, including:',
      items: ['Shower tray edges', 'Wall-to-wall joints', 'Glass door seals', 'Corner joints and angles']
    },
    {
      icon: '🛁',
      title: 'Bath Silicone Replacement',
      description: 'Professional resealing of your bathtub, covering:',
      items: ['Bath-to-wall seals', 'Bath panel joints', 'Tap and fitting seals', 'Overflow and drain seals']
    },
    {
      icon: '🚽',
      title: 'Complete Bathroom Refresh',
      description: 'Full bathroom silicone service including:',
      items: ['Sink and basin seals', 'Toilet base sealing', 'Mirror and fixture seals', 'All tile joints and edges']
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Assessment & Preparation',
      description: 'We carefully assess your bathroom and protect all surfaces before starting work.'
    },
    {
      number: 2,
      title: 'Complete Removal',
      description: 'All old silicone is carefully removed using professional tools, ensuring no damage to tiles or surfaces.'
    },
    {
      number: 3,
      title: 'Deep Cleaning',
      description: 'Surfaces are thoroughly cleaned and treated with anti-fungal solution to prevent future mold growth.'
    },
    {
      number: 4,
      title: 'Professional Application',
      description: 'Premium anti-fungal silicone is expertly applied with perfect, smooth lines.'
    },
    {
      number: 5,
      title: 'Finishing & Inspection',
      description: 'We carefully finish the sealant, clean up completely, and inspect our work to ensure perfection.'
    },
    {
      number: 6,
      title: 'Cure Time Guidance',
      description: 'We provide clear instructions for cure time and care to ensure long-lasting results.'
    }
  ];

  const materials = [
    {
      title: 'Anti-Fungal Silicone',
      description: 'We exclusively use professional-grade, anti-fungal silicone that actively resists mold and mildew growth.'
    },
    {
      title: 'Waterproof & Flexible',
      description: 'Our silicone remains flexible and waterproof for years, moving naturally with your bathroom surfaces.'
    },
    {
      title: 'Long-Lasting Protection',
      description: 'Premium formulations that maintain their appearance and effectiveness much longer than standard silicone.'
    },
    {
      title: 'Color Options',
      description: 'Available in clear, white, and other colors to perfectly match your bathroom aesthetic.'
    }
  ];

  const guaranteePoints = [
    'Professional, courteous service',
    'Punctual arrival within scheduled time window',
    'Complete protection of your bathroom',
    'Thorough clean-up after service',
    'Satisfaction guarantee on all work',
    'Comprehensive warranty coverage'
  ];

  return (
    <motion.div 
      style={{ background: '#f8f9fa' }}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
        padding: '80px 20px 60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Title level={1} style={{ color: 'white', marginBottom: '16px', fontWeight: '900', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              What We Do
            </Title>
            <Paragraph style={{ color: 'white', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', opacity: 0.95 }}>
              Professional bathroom silicone removal and replacement services
            </Paragraph>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Title level={2} style={{ color: '#2C2C2C', marginBottom: '16px', fontWeight: '800', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Expert Silicone Replacement for a Fresh, Clean Bathroom
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#6B6B6B', maxWidth: '800px', margin: '0 auto' }}>
            At Silicone Refresh, we specialize in the complete removal and replacement of bathroom silicone sealant.
            Our expert team transforms tired, moldy bathrooms into fresh, clean spaces you'll love.
          </Paragraph>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} md={8} key={index}>
                <motion.div variants={itemVariants} style={{ height: '100%' }}>
                  <Card
                    hoverable
                    style={{
                      height: '100%',
                      borderRadius: '12px',
                      border: '1px solid #e8e3da'
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <motion.div 
                        style={{ fontSize: '48px', marginBottom: '16px' }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {service.icon}
                      </motion.div>
                      <Title level={4} style={{ color: '#2C2C2C', marginBottom: '16px' }}>
                        {service.title}
                      </Title>
                      <Paragraph style={{ color: '#6B6B6B', marginBottom: '16px' }}>
                        {service.description}
                      </Paragraph>
                      <ul style={{ textAlign: 'left', color: '#6B6B6B', paddingLeft: '20px' }}>
                        {service.items.map((item, idx) => (
                          <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>

      {/* Process Detail */}
      <div style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Our Professional Process
          </Title>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Row gutter={[32, 32]}>
              {processSteps.map((step, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <motion.div variants={itemVariants} style={{ height: '100%' }}>
                    <Card style={{ height: '100%', borderRadius: '12px' }}>
                      <div style={{ display: 'flex', gap: '16px' }}>
                        <motion.div 
                          style={{
                            background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            flexShrink: 0,
                            boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)'
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {step.number}
                        </motion.div>
                        <div>
                          <Title level={4} style={{ color: '#2C2C2C', marginTop: '8px', marginBottom: '12px' }}>
                            {step.title}
                          </Title>
                          <Paragraph style={{ color: '#6B6B6B', margin: 0 }}>
                            {step.description}
                          </Paragraph>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </div>
      </div>

      {/* Materials */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          Premium Materials We Use
        </Title>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row gutter={[32, 32]}>
            {materials.map((material, index) => (
              <Col xs={24} sm={12} key={index}>
                <motion.div variants={itemVariants} style={{ height: '100%' }}>
                  <Card
                    hoverable
                    style={{
                      height: '100%',
                      borderRadius: '12px',
                      border: '1px solid #e8e3da'
                    }}
                  >
                    <Title level={4} style={{ color: '#2C2C2C', marginBottom: '12px' }}>
                      {material.title}
                    </Title>
                    <Paragraph style={{ color: '#6B6B6B', margin: 0 }}>
                      {material.description}
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>

      {/* Guarantee */}
      <div style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Card style={{ borderRadius: '12px' }}>
            <Title level={2} style={{ textAlign: 'center', color: '#2C2C2C', marginBottom: '40px', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              Our Service Guarantee
            </Title>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row gutter={[24, 24]}>
                {guaranteePoints.map((point, index) => (
                  <Col xs={24} sm={12} md={8} key={index}>
                    <motion.div 
                      variants={itemVariants}
                      style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                    >
                      <CheckCircleOutlined style={{ fontSize: '24px', color: '#10b981', marginTop: '4px' }} />
                      <Paragraph style={{ color: '#2C2C2C', margin: 0, fontSize: '16px' }}>
                        {point}
                      </Paragraph>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        style={{
          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%)',
          padding: '60px 20px',
          textAlign: 'center'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={2} style={{ color: '#2C2C2C', marginBottom: '16px', fontWeight: '800', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Ready to Refresh Your Bathroom?
          </Title>
          <Paragraph style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#6B6B6B', marginBottom: '32px' }}>
            Get your free, no-obligation quote today
          </Paragraph>
          <Link to="/contact">
            <motion.button 
              style={{
                height: '50px',
                fontSize: '16px',
                padding: '0 40px',
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                border: 'none',
                borderRadius: '6px',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '500',
                boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Free Quote
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WhatWeDo;
