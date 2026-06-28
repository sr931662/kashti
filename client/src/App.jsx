import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Icons from './components/Icons';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Educare from './pages/Educare';
import Community from './pages/Community';
import More from './pages/More';

import './styles/atlas.css';
import './styles/atlas-home.css';
import './styles/pages.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  useScrollReveal();
  return <>{children}</>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Icons />
      <ScrollToTop />
      <Nav />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/:category" element={<Experiences />} />
          <Route path="/educare" element={<Educare />} />
          <Route path="/community" element={<Community />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </BrowserRouter>
  );
}
