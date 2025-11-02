import { Link } from 'react-router-dom';
import { Row, Col, Card, Typography, Tag, Button, Space } from 'antd';
import { CalendarOutlined, UserOutlined, RightOutlined } from '@ant-design/icons';
import { blogPosts } from '../data/blogPosts';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

function Blog() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
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
            Silicone Care Blog
          </Title>
          <Paragraph style={{ color: 'white', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', opacity: 0.95 }}>
            Tips, guides, and expert advice for maintaining your bathroom silicone
          </Paragraph>
        </div>
      </div>

      {/* Blog Content */}
      <div style={{ padding: '60px 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <Row gutter={[48, 48]}>
          {/* Blog Posts */}
          <Col xs={24} lg={17}>
            <Row gutter={[32, 32]}>
              {sortedPosts.map(post => (
                <Col xs={24} key={post.id}>
                  <Card
                    hoverable
                    cover={
                      <div style={{
                        position: 'relative',
                        height: '300px',
                        backgroundImage: `url(${post.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}>
                        <Tag
                          color="#FF6B35"
                          style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            fontSize: '14px',
                            padding: '6px 16px',
                            borderRadius: '6px'
                          }}
                        >
                          {post.category}
                        </Tag>
                      </div>
                    }
                    style={{ borderRadius: '12px', overflow: 'hidden' }}
                  >
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <Space size="large">
                        <Text type="secondary">
                          <CalendarOutlined /> {formatDate(post.date)}
                        </Text>
                        <Text type="secondary">
                          <UserOutlined /> {post.author}
                        </Text>
                      </Space>

                      <Link to={`/blog/${post.slug}`}>
                        <Title level={3} style={{ color: '#2C2C2C', marginBottom: '12px', marginTop: 0 }}>
                          {post.title}
                        </Title>
                      </Link>

                      <Paragraph style={{ color: '#6B6B6B', fontSize: '16px' }}>
                        {post.excerpt}
                      </Paragraph>

                      <Link to={`/blog/${post.slug}`}>
                        <Button
                          type="default"
                          style={{
                            borderColor: '#FF6B35',
                            color: '#FF6B35'
                          }}
                        >
                          Read More <RightOutlined />
                        </Button>
                      </Link>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Sidebar */}
          <Col xs={24} lg={7}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {/* Categories */}
              <Card style={{ borderRadius: '12px' }}>
                <Title level={4} style={{ color: '#2C2C2C', marginBottom: '20px' }}>
                  Categories
                </Title>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  {['Maintenance', 'How-To', 'Tips & Tricks', 'Before & After'].map(category => (
                    <Link
                      key={category}
                      to="/blog"
                      style={{
                        display: 'block',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        background: 'rgba(255, 107, 53, 0.05)',
                        color: '#2C2C2C',
                        transition: 'all 0.3s'
                      }}
                    >
                      {category}
                    </Link>
                  ))}
                </Space>
              </Card>

              {/* CTA Widget */}
              <Card
                style={{
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)'
                }}
              >
                <Title level={4} style={{ color: 'white', marginBottom: '12px', fontWeight: '800' }}>
                  Need Professional Help?
                </Title>
                <Paragraph style={{ color: 'white', opacity: 0.95, marginBottom: '20px' }}>
                  Get expert silicone replacement for your bathroom.
                </Paragraph>
                <Link to="/contact">
                  <Button
                    type="primary"
                    size="large"
                    block
                    style={{
                      background: 'white',
                      color: '#FF6B35',
                      border: 'none',
                      fontWeight: '600'
                    }}
                  >
                    Get a Free Quote
                  </Button>
                </Link>
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Blog;
