import { Layout } from 'antd';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import 'antd/dist/reset.css';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <Navigation />
      <Content style={{ paddingTop: '70px' }}>
        <Home />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
