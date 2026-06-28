import { useScrollReveal } from './hooks/useScrollReveal';
import Icons from './components/Icons';
import FlightPath from './components/FlightPath';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Inspire from './components/Inspire';
import FeaturedCarousel from './components/FeaturedCarousel';
import Explore from './components/Explore';
import WhyKashti from './components/WhyKashti';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import GivingBack from './components/GivingBack';
import Footer from './components/Footer';

import './styles/atlas.css';
import './styles/atlas-home.css';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Icons />
      <FlightPath />
      <Nav />
      <Hero />
      <Marquee />
      <Inspire />
      <FeaturedCarousel />
      <Explore />
      <WhyKashti />
      <Reviews />
      <Gallery />
      <Booking />
      <GivingBack />
      <Footer />
    </>
  );
}
