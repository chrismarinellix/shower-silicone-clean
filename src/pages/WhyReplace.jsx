import { Link } from 'react-router-dom';
import { Row, Col, Card, Typography, Timeline } from 'antd';
import {
  WarningOutlined,
  CheckOutlined,
  CloseOutlined,
  DollarOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

function WhyReplace() {
  const healthConcerns = [
    {
      icon: '🦠',
      title: 'Mold & Mildew Growth',
      description: 'Old silicone becomes a breeding ground for black mold and mildew, which can cause respiratory problems, allergies, and other health issues, especially for children and those with asthma.'
    },
    {
      icon: '💧',
      title: 'Water Damage Prevention',
      description: 'Degraded silicone allows water to seep behind tiles and into walls, leading to expensive structural damage, rot, and even more serious mold problems in hidden areas.'
    },
    {
      icon: '🌫️',
      title: 'Poor Air Quality',
      description: 'Moldy silicone releases spores into the air, reducing bathroom air quality and potentially affecting the air throughout your home.'
    },
    {
      icon: '🧼',
      title: 'Hygiene Standards',
      description: 'Discolored, moldy silicone is impossible to clean properly and harbors bacteria, compromising the cleanliness of your bathroom.'
    }
  ];

  const aestheticBenefits = [
    {
      icon: '✨',
      title: 'Instant Visual Transformation',
      description: 'Fresh white silicone makes your entire bathroom look cleaner, newer, and more appealing. It\'s amazing how much difference clean grout lines can make!'
    },
    {
      icon: '🏠',
      title: 'Increase Home Value',
      description: 'Clean, well-maintained bathrooms significantly boost property value. It\'s one of the most cost-effective upgrades you can make before selling.'
    },
    {
      icon: '💰',
      title: 'Affordable Alternative to Renovation',
      description: 'Get that \'like new\' bathroom feel for a fraction of the cost of re-tiling or full bathroom renovation. Maximum impact, minimal investment.'
    },
    {
      icon: '😊',
      title: 'Pride in Your Space',
      description: 'Enjoy using your bathroom again without feeling embarrassed. Create a space you\'re proud to show guests.'
    }
  ];

  const timelineItems = [
    {
      color: '#10b981',
      label: 'New',
      children: (
        <div>
          <Title level={4} style={{ color: '#2C2C2C' }}>0-1 Years: Like New</Title>
          <Paragraph>Fresh, white, and pristine. Fully waterproof with excellent adhesion.</Paragraph>
        </div>
      )
    },
    {
      color: '#3b82f6',
      label: 'OK',
      children: (
        <div>
          <Title level={4} style={{ color: '#2C2C2C' }}>1-3 Years: Starting to Show Age</Title>
          <Paragraph>May show slight discoloration. Still functional but beginning to degrade.</Paragraph>
        </div>
      )
    },
    {
      color: '#f59e0b',
      label: 'Concern',
      children: (
        <div>
          <Title level={4} style={{ color: '#2C2C2C' }}>3-5 Years: Time to Consider Replacement</Title>
          <Paragraph>Visible yellowing or black spots. Mold starting to appear. Water seal compromised in places.</Paragraph>
        </div>
      )
    },
    {
      color: '#ef4444',
      label: 'Urgent',
      children: (
        <div>
          <Title level={4} style={{ color: '#2C2C2C' }}>5+ Years: Replacement Overdue</Title>
          <Paragraph>Significant mold growth, peeling, or gaps. Water damage likely occurring. Health hazard present.</Paragraph>
        </div>
      )
    }
  ];

  const diyIssues = [
    'Often incomplete old silicone removal',
    'No professional surface preparation',
    'Difficult to achieve smooth, professional finish',
    'Risk of damaging tiles or surfaces',
    'Lower quality materials often used',
    'Time-consuming and frustrating',
    'Results rarely last as long'
  ];

  const professionalBenefits = [
    'Complete, thorough old silicone removal',
    'Expert surface preparation and treatment',
    'Perfect, smooth professional finish',
    'Zero risk of surface damage',
    'Premium anti-fungal materials',
    'Quick service, minimal disruption',
    'Long-lasting results with warranty'
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
              Why Replace Your Bathroom Silicone?
            </Title>
            <Paragraph style={{ color: 'white', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', opacity: 0.95 }}>
              Understanding the importance of fresh, clean silicone sealant
            </Paragraph>
          </motion.div>
        </div>
      </div>

      {/* Health & Safety Concerns */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          Health & Safety Concerns
        </Title>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Row gutter={[32, 32]}>
            {healthConcerns.map((concern, index) => (
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
                    <div style={{ textAlign: 'center' }}>
                      <motion.div 
                        style={{ fontSize: '48px', marginBottom: '16px' }}
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      >
                        {concern.icon}
                      </motion.div>
                      <Title level={4} style={{ color: '#2C2C2C', marginBottom: '12px' }}>
                        {concern.title}
                      </Title>
                      <Paragraph style={{ color: '#6B6B6B', margin: 0 }}>
                        {concern.description}
                      </Paragraph>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>

      {/* Aesthetic & Value Benefits */}
      <div style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Aesthetic & Value Benefits
          </Title>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]}>
              {aestheticBenefits.map((benefit, index) => (
                <Col xs={24} sm={12} key={index}>
                  <motion.div variants={itemVariants} style={{ height: '100%' }}>
                    <Card style={{ height: '100%', borderRadius: '12px' }}>
                      <Title level={4} style={{ color: '#2C2C2C', marginBottom: '12px' }}>
                        {benefit.icon} {benefit.title}
                      </Title>
                      <Paragraph style={{ color: '#6B6B6B', margin: 0 }}>
                        {benefit.description}
                      </Paragraph>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </div>
      </div>

      {/* Silicone Lifecycle Timeline */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          Understanding Silicone Degradation
        </Title>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card style={{ borderRadius: '12px', padding: '20px' }}>
            <Timeline mode="left" items={timelineItems} />
          </Card>
        </motion.div>
      </div>

      {/* DIY vs Professional */}
      <div style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Why Professional Replacement Matters
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ height: '100%' }}
              >
                <Card
                  style={{
                    height: '100%',
                    borderRadius: '12px',
                    border: '2px solid #ef4444'
                  }}
                >
                  <Title level={3} style={{ color: '#ef4444', marginBottom: '24px' }}>
                    DIY Approach
                  </Title>
                  {diyIssues.map((issue, index) => (
                    <div key={index} style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                      <CloseOutlined style={{ fontSize: '20px', color: '#ef4444', marginTop: '4px' }} />
                      <Text style={{ color: '#2C2C2C' }}>{issue}</Text>
                    </div>
                  ))}
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ height: '100%' }}
              >
                <Card
                  style={{
                    height: '100%',
                    borderRadius: '12px',
                    border: '2px solid #10b981'
                  }}
                >
                  <Title level={3} style={{ color: '#10b981', marginBottom: '24px' }}>
                    Professional Service
                  </Title>
                  {professionalBenefits.map((benefit, index) => (
                    <div key={index} style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                      <CheckOutlined style={{ fontSize: '20px', color: '#10b981', marginTop: '4px' }} />
                      <Text style={{ color: '#2C2C2C' }}>{benefit}</Text>
                    </div>
                  ))}
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Cost Perspective */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          A Smart Investment
        </Title>
        <Row gutter={[48, 32]} align="middle" justify="center">
          <Col xs={24} md={10}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                style={{
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '2px solid #FF6B35'
                }}
              >
                <Title level={3} style={{ color: '#2C2C2C', fontWeight: '800' }}>
                  Professional Silicone Replacement
                </Title>
                <div style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#FF6B35',
                  margin: '20px 0'
                }}>
                  $150 - $300
                </div>
                <Paragraph style={{ color: '#6B6B6B' }}>
                  Complete shower or bath service with premium materials
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} md={2} style={{ textAlign: 'center' }}>
            <Title level={3} style={{ color: '#2C2C2C' }}>vs</Title>
          </Col>
          <Col xs={24} md={10}>
            <Card
              style={{
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px solid #e8e3da'
              }}
            >
              <Title level={3} style={{ color: '#2C2C2C' }}>
                Bathroom Renovation
              </Title>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#ef4444',
                margin: '20px 0'
              }}>
                $3,000 - $8,000+
              </div>
              <Paragraph style={{ color: '#6B6B6B' }}>
                Full re-tiling and renovation work
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Text strong style={{ fontSize: '20px', color: '#FF6B35' }}>
            Get 90% of the visual impact for less than 5% of the cost!
          </Text>
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
            Ready for a Fresh, Clean Bathroom?
          </Title>
          <Paragraph style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#6B6B6B', marginBottom: '32px' }}>
            Discover how affordable professional silicone replacement can be
          </Paragraph>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
            <Link to="/when-to-replace">
              <motion.button 
                style={{
                  height: '50px',
                  fontSize: '16px',
                  padding: '0 40px',
                  background: 'white',
                  border: '2px solid #FF6B35',
                  borderRadius: '6px',
                  color: '#FF6B35',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check If You Need Replacement
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WhyReplace;
