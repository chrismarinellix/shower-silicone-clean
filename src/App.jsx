import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from 'antd';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import WhyReplace from './pages/WhyReplace';
import WhenToReplace from './pages/WhenToReplace';
import HowItWorks from './pages/HowItWorks';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Learning from './pages/Learning';
import 'antd/dist/reset.css';

const { Content } = Layout;

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <ScrollProgress />
      <ScrollToTop />
      <Navigation />
      <Content style={{ paddingTop: '70px', minHeight: 'calc(100vh - 70px)' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/why-replace" element={<WhyReplace />} />
            <Route path="/when-to-replace" element={<WhenToReplace />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
