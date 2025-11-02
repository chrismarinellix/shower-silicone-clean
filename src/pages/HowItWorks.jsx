import { Link } from 'react-router-dom';
import { Row, Col, Card, Typography, Steps } from 'antd';
import {
  PhoneOutlined,
  CalendarOutlined,
  CarOutlined,
  ToolOutlined,
  CheckCircleOutlined,
  SmileOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

function HowItWorks() {
  const bookingSteps = [
    {
      icon: <PhoneOutlined style={{ fontSize: '32px' }} />,
      title: '1. Get Your Quote',
      description: 'Contact us through our website or phone. Tell us about your bathroom and what needs doing. We\'ll provide a transparent, no-obligation quote usually within 24 hours.',
      time: 'Takes 5 minutes'
    },
    {
      icon: <CalendarOutlined style={{ fontSize: '32px' }} />,
      title: '2. Schedule Your Service',
      description: 'Choose a date and time that works for you. We offer flexible scheduling including evenings and weekends. You\'ll receive a confirmation with all the details.',
      time: 'Book in advance or same-week'
    },
    {
      icon: <CarOutlined style={{ fontSize: '32px' }} />,
      title: '3. We Arrive on Time',
      description: 'Our professional team arrives within your scheduled time window with all equipment and materials. We\'ll introduce ourselves and review the work to be done.',
      time: 'Punctual arrival guaranteed'
    },
    {
      icon: <ToolOutlined style={{ fontSize: '32px' }} />,
      title: '4. We Do the Work',
      description: 'Our experts complete the entire process while you relax. Most jobs are finished in 2-4 hours depending on the bathroom size.',
      time: '2-4 hours average'
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: '32px' }} />,
      title: '5. Final Inspection',
      description: 'We walk you through the completed work, provide care instructions, and ensure you\'re completely satisfied before we leave.',
      time: 'Your satisfaction guaranteed'
    },
    {
      icon: <SmileOutlined style={{ fontSize: '32px' }} />,
      title: '6. Enjoy Your Fresh Bathroom',
      description: 'After the recommended cure time (usually 24 hours), your bathroom is ready for full use. Enjoy your clean, fresh silicone for years to come!',
      time: 'Long-lasting results'
    }
  ];

  const detailedProcess = [
    {
      number: 1,
      title: 'Preparation & Protection',
      items: [
        'Lay protective coverings on floors and surfaces',
        'Set up our workspace efficiently',
        'Assess the condition of existing silicone',
        'Plan the most effective approach'
      ],
      note: 'Your bathroom is completely protected throughout the process.'
    },
    {
      number: 2,
      title: 'Old Silicone Removal',
      items: [
        'Carefully cut and remove all old silicone',
        'Use professional tools designed to avoid surface damage',
        'Remove silicone from every corner and gap',
        'Ensure absolutely no residue remains'
      ],
      note: 'This is the most critical step - poor removal means poor results.'
    },
    {
      number: 3,
      title: 'Surface Preparation',
      items: [
        'Deep clean all surfaces where new silicone will be applied',
        'Apply anti-fungal treatment to prevent mold',
        'Ensure surfaces are completely dry',
        'Apply masking tape for perfect lines'
      ],
      note: 'Proper preparation is key to long-lasting adhesion.'
    },
    {
      number: 4,
      title: 'Professional Application',
      items: [
        'Apply premium anti-fungal silicone in smooth, continuous beads',
        'Use expert technique for gap-free application',
        'Work methodically through each area',
        'Ensure proper adhesion and thickness'
      ],
      note: 'Years of experience ensure perfect application every time.'
    },
    {
      number: 5,
      title: 'Finishing & Smoothing',
      items: [
        'Tool the silicone to create perfect, smooth profiles',
        'Remove masking tape at optimal time',
        'Check every joint for perfection',
        'Make any necessary touch-ups'
      ],
      note: 'This creates that professional, factory-fresh appearance.'
    },
    {
      number: 6,
      title: 'Clean-Up & Inspection',
      items: [
        'Remove all protective coverings',
        'Clean any residual marks or materials',
        'Conduct thorough quality inspection',
        'Walk you through the completed work'
      ],
      note: 'We leave your bathroom spotless and ready to admire!'
    }
  ];

  const expectations = [
    { icon: '⏰', title: 'Timing', description: 'Most bathroom silicone replacements take 2-4 hours. Larger or more complex bathrooms may take longer. We\'ll give you an accurate estimate when booking.' },
    { icon: '🏠', title: 'Access', description: 'We need access to water and electricity. You don\'t need to stay home - many customers use the time to run errands or work.' },
    { icon: '🚿', title: 'Bathroom Use', description: 'The bathroom can be used immediately after we finish, but avoid wetting the new silicone for 24 hours for best results.' },
    { icon: '🧹', title: 'Clean-Up', description: 'We handle all clean-up completely. You won\'t need to do anything except enjoy your refreshed bathroom!' }
  ];

  const careInstructions = [
    'Avoid getting the silicone wet for 24 hours',
    'Don\'t touch or disturb the silicone during cure time',
    'Ensure good ventilation in the bathroom',
    'After cure time, maintain with regular cleaning',
    'Use non-abrasive cleaners to preserve anti-fungal properties'
  ];

  return (
    <div style={{ background: '#f8f9fa' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
        padding: '80px 20px 60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={1} style={{ color: 'white', marginBottom: '16px', fontWeight: '900', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            How It Works
          </Title>
          <Paragraph style={{ color: 'white', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', opacity: 0.95 }}>
            Our proven process for perfect silicone replacement
          </Paragraph>
        </div>
      </div>

      {/* Booking Process */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          From Booking to Beautiful Bathroom
        </Title>
        <Row gutter={[32, 48]}>
          {bookingSteps.map((step, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <Card style={{ height: '100%', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ color: '#FF6B35', marginBottom: '16px' }}>
                  {step.icon}
                </div>
                <Title level={4} style={{ color: '#2C2C2C', marginBottom: '12px' }}>
                  {step.title}
                </Title>
                <Paragraph style={{ color: '#6B6B6B', marginBottom: '16px' }}>
                  {step.description}
                </Paragraph>
                <Text style={{
                  display: 'inline-block',
                  background: 'rgba(255, 107, 53, 0.1)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  color: '#FF6B35',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {step.time}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Detailed Process */}
      <div style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            What Happens During the Service
          </Title>
          <Row gutter={[32, 32]}>
            {detailedProcess.map((step, index) => (
              <Col xs={24} md={12} key={index}>
                <Card style={{ height: '100%', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '24px',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)'
                    }}>
                      {step.number}
                    </div>
                    <Title level={4} style={{ color: '#2C2C2C', marginTop: '8px' }}>
                      {step.title}
                    </Title>
                  </div>
                  <Paragraph strong style={{ marginBottom: '12px', color: '#2C2C2C' }}>
                    What we do:
                  </Paragraph>
                  <ul style={{ color: '#6B6B6B', paddingLeft: '20px', marginBottom: '16px' }}>
                    {step.items.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
                    ))}
                  </ul>
                  <div style={{
                    background: 'rgba(255, 107, 53, 0.1)',
                    padding: '12px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #FF6B35'
                  }}>
                    <Text style={{ color: '#F7931E', fontStyle: 'italic' }}>
                      {step.note}
                    </Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* What to Expect */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          What to Expect
        </Title>
        <Row gutter={[32, 32]}>
          {expectations.map((expectation, index) => (
            <Col xs={24} sm={12} key={index}>
              <Card hoverable style={{ height: '100%', borderRadius: '12px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>{expectation.icon}</div>
                  <Title level={4} style={{ color: '#2C2C2C', marginBottom: '12px' }}>
                    {expectation.title}
                  </Title>
                  <Paragraph style={{ color: '#6B6B6B', margin: 0 }}>
                    {expectation.description}
                  </Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* After Service */}
      <div style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            After Your Service
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card style={{ height: '100%', borderRadius: '12px' }}>
                <Title level={3} style={{ color: '#2C2C2C', marginBottom: '24px' }}>
                  Care Instructions
                </Title>
                <ul style={{ color: '#6B6B6B', paddingLeft: '20px' }}>
                  {careInstructions.map((instruction, index) => (
                    <li key={index} style={{ marginBottom: '12px', fontSize: '16px' }}>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card style={{ height: '100%', borderRadius: '12px' }}>
                <Title level={3} style={{ color: '#2C2C2C', marginBottom: '24px' }}>
                  Our Warranty
                </Title>
                <Paragraph style={{ color: '#6B6B6B', fontSize: '16px', marginBottom: '24px' }}>
                  All our work is covered by our comprehensive warranty. If you notice any issues with adhesion,
                  appearance, or performance within the warranty period, we'll make it right - no questions asked.
                </Paragraph>
                <Link to="/contact">
                  <button style={{
                    height: '45px',
                    fontSize: '14px',
                    padding: '0 30px',
                    background: 'white',
                    border: '2px solid #FF6B35',
                    borderRadius: '6px',
                    color: '#FF6B35',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}>
                    Contact Us About Warranty
                  </button>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%)',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={2} style={{ color: '#2C2C2C', marginBottom: '16px', fontWeight: '800', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Ready to Get Started?
          </Title>
          <Paragraph style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#6B6B6B', marginBottom: '32px' }}>
            Book your professional silicone replacement service today
          </Paragraph>
          <Link to="/contact">
            <button style={{
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
            }}>
              Get Your Free Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
