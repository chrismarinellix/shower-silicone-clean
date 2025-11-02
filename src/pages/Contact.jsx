import { useState } from 'react';
import { Row, Col, Card, Form, Input, Select, Button, Typography, Space, message } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      message.success('Thank you! We\'ll contact you within 24 hours.');
      form.resetFields();
      setLoading(false);
    }, 1000);
    console.log('Form submitted:', values);
  };

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
        padding: '80px 20px 60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Title level={1} style={{ color: 'white', marginBottom: '16px', fontWeight: '900', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Get Your Free Quote
          </Title>
          <Paragraph style={{ color: 'white', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', opacity: 0.95 }}>
            Professional bathroom silicone replacement in Sandringham and surrounding areas
          </Paragraph>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[48, 48]}>
          {/* Contact Info Column */}
          <Col xs={24} lg={10}>
            <Card style={{ marginBottom: '24px' }}>
              <Title level={3} style={{ color: '#2C2C2C', marginBottom: '16px' }}>
                Kartell Caulking
              </Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: '32px' }}>
                Expert silicone removal and replacement for bathrooms. Servicing Sandringham, Victoria and surrounding Melbourne suburbs.
              </Paragraph>

              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <EnvironmentOutlined style={{ fontSize: '24px', color: '#FF6B35' }} />
                  <div>
                    <Text strong style={{ display: 'block', marginBottom: '4px' }}>Location</Text>
                    <Text type="secondary">20 Reno Road<br />Sandringham VIC 3191</Text>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <PhoneOutlined style={{ fontSize: '24px', color: '#FF6B35' }} />
                  <div>
                    <Text strong style={{ display: 'block', marginBottom: '4px' }}>Phone</Text>
                    <a href="tel:0417035368" style={{ fontSize: '16px' }}>0417 035 368</a>
                    <br />
                    <Text type="secondary" style={{ fontSize: '14px' }}>Call or text for fastest response</Text>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <MailOutlined style={{ fontSize: '24px', color: '#FF6B35' }} />
                  <div>
                    <Text strong style={{ display: 'block', marginBottom: '4px' }}>Email</Text>
                    <a href="mailto:info@kartellcaulking.com.au">info@kartellcaulking.com.au</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <ClockCircleOutlined style={{ fontSize: '24px', color: '#FF6B35' }} />
                  <div>
                    <Text strong style={{ display: 'block', marginBottom: '4px' }}>Hours</Text>
                    <Text type="secondary">
                      Monday - Friday: 7am - 6pm<br />
                      Saturday: 8am - 4pm<br />
                      Sunday: By appointment
                    </Text>
                  </div>
                </div>
              </Space>
            </Card>

            <Card>
              <Title level={4} style={{ color: '#2C2C2C', marginBottom: '16px' }}>
                Service Areas
              </Title>
              <Paragraph>We service Sandringham and surrounding Melbourne suburbs including:</Paragraph>
              <Row gutter={[8, 8]}>
                {['Sandringham', 'Hampton', 'Brighton', 'Black Rock', 'Beaumaris', 'Cheltenham', 'Mentone', 'Moorabbin', 'Highett', 'And surrounding areas'].map(suburb => (
                  <Col span={12} key={suburb}>
                    <Text>• {suburb}</Text>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>

          {/* Form Column */}
          <Col xs={24} lg={14}>
            <Card>
              <Title level={3} style={{ color: '#2C2C2C', marginBottom: '8px' }}>
                Request a Free Quote
              </Title>
              <Paragraph style={{ marginBottom: '32px' }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </Paragraph>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark="optional"
              >
                <Form.Item
                  name="name"
                  label="Your Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input size="large" placeholder="John Smith" />
                </Form.Item>

                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input size="large" placeholder="john@example.com" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="phone"
                      label="Phone"
                      rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                      <Input size="large" placeholder="0412 345 678" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="suburb"
                  label="Suburb"
                  rules={[{ required: true, message: 'Please enter your suburb' }]}
                >
                  <Input size="large" placeholder="Where are you located?" />
                </Form.Item>

                <Form.Item
                  name="service"
                  label="Service Required"
                  rules={[{ required: true, message: 'Please select a service' }]}
                >
                  <Select size="large" placeholder="Select a service...">
                    <Select.Option value="shower-base">Shower Base Silicone</Select.Option>
                    <Select.Option value="full-shower">Full Shower Enclosure</Select.Option>
                    <Select.Option value="bath">Bathtub Silicone</Select.Option>
                    <Select.Option value="full-bathroom">Complete Bathroom</Select.Option>
                    <Select.Option value="multiple">Multiple Bathrooms</Select.Option>
                    <Select.Option value="other">Other / Not Sure</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Tell us about your bathroom"
                  rules={[{ required: true, message: 'Please provide some details' }]}
                >
                  <TextArea
                    rows={5}
                    placeholder="Please describe the work needed, current condition of silicone, any specific concerns, etc."
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={loading}
                    block
                    style={{
                      height: '50px',
                      fontSize: '16px',
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                      border: 'none',
                      boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)'
                    }}
                  >
                    Get Your Free Quote
                  </Button>
                </Form.Item>

                <Paragraph type="secondary" style={{ textAlign: 'center', marginTop: '16px' }}>
                  We respect your privacy. Your information will only be used to provide you with a quote.
                </Paragraph>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Why Choose Section */}
      <div style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#2C2C2C', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Why Choose Kartell Caulking?
          </Title>
          <Row gutter={[32, 32]}>
            {[
              { icon: '⭐', title: 'Local & Reliable', desc: 'Based in Sandringham, we\'re your local silicone experts with a reputation for quality work.' },
              { icon: '💰', title: 'Fair Pricing', desc: 'Transparent quotes with no hidden fees. You\'ll know the cost upfront.' },
              { icon: '🛠️', title: 'Professional Service', desc: 'Years of experience, premium materials, and attention to detail in every job.' },
              { icon: '✓', title: 'Guaranteed Work', desc: 'We stand behind our work with a comprehensive warranty.' }
            ].map((reason, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card hoverable style={{ textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>{reason.icon}</div>
                  <Title level={4} style={{ color: '#2C2C2C' }}>{reason.title}</Title>
                  <Paragraph>{reason.desc}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Contact;
