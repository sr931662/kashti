import FlightPath from '../components/FlightPath';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Inspire from '../components/Inspire';
import FeaturedCarousel from '../components/FeaturedCarousel';
import Explore from '../components/Explore';
import WhyKashti from '../components/WhyKashti';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import Booking from '../components/Booking';
import GivingBack from '../components/GivingBack';

export default function Home() {
  return (
    <>
      <FlightPath />
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
    </>
  );
}
