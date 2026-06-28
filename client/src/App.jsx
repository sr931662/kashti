import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Icons from './components/Icons';
import Nav from './components/Nav';
import Footer from './components/Footer';

import './styles/atlas.css';
import './styles/atlas-home.css';
import './styles/pages.css';

const Home        = lazy(() => import('./pages/Home'));
const Experiences = lazy(() => import('./pages/Experiences'));
const Itinerary   = lazy(() => import('./pages/Itinerary'));
const Educare     = lazy(() => import('./pages/Educare'));
const Community   = lazy(() => import('./pages/Community'));
const More        = lazy(() => import('./pages/More'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(id);
        if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        else if (attempts < 10) { setTimeout(() => tryScroll(attempts + 1), 80); }
      };
      setTimeout(tryScroll, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function PageWrapper({ children }) {
  const { pathname } = useLocation();
  useScrollReveal(pathname);
  return <>{children}</>;
}

function PageFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ width: 36, height: 36, borderRadius: '50%', border: '3px solid #e6f0ea', borderTopColor: '#1b9b6f', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Icons />
      <ScrollToTop />
      <Nav />
      <PageWrapper>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/"                       element={<Home />} />
            <Route path="/experiences"            element={<Experiences />} />
            <Route path="/experiences/:category"  element={<Experiences />} />
            <Route path="/itineraries"            element={<Itinerary />} />
            <Route path="/itineraries/:id"        element={<Itinerary />} />
            <Route path="/educare"                element={<Educare />} />
            <Route path="/community"              element={<Community />} />
            <Route path="/more"                   element={<More />} />
          </Routes>
        </Suspense>
      </PageWrapper>
      <Footer />
    </BrowserRouter>
  );
}
