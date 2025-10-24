import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import WhyReplace from './pages/WhyReplace';
import HowItWorks from './pages/HowItWorks';
import WhenToReplace from './pages/WhenToReplace';
import Learning from './pages/Learning';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/why-replace" element={<WhyReplace />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/when-to-replace" element={<WhenToReplace />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
