import { Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

function Navigation() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: '0 20px',
        height: '70px'
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          fontWeight: '900',
          color: '#1a1a1a',
          whiteSpace: 'nowrap'
        }}>
          Shower - Silicone
        </span>
      </div>

      {/* Call Button */}
      <Button
        type="primary"
        icon={<PhoneOutlined />}
        onClick={scrollToContact}
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
          border: 'none',
          height: '40px',
          fontWeight: '700',
          boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
          fontSize: 'clamp(14px, 2vw, 16px)'
        }}
      >
        <span style={{ display: window.innerWidth > 480 ? 'inline' : 'none' }}>Call </span>0417 035 368
      </Button>
    </header>
  );
}

export default Navigation;
