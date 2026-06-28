import { useEffect, useRef } from 'react';
import { Icon } from './Icons';
import heroBg from '../assets/hero_background.mp4';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <header className="hero" id="top" data-screen-label="Hero">
      <div className="hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-img"
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-content">
        <span className="kicker">Travel studio · Est. Delhi, India</span>
        <span className="scribble">hello, fellow wanderer —</span>
        <h1>
          Every great story begins with a{' '}
          <span className="hl">
            kashti.
            <svg viewBox="0 0 200 16" preserveAspectRatio="none">
              <path d="M3 11 C 40 4, 70 14, 100 8 S 165 3, 197 9" stroke="#f6c45e" strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="lede">
          Kashti means boat — and getting there is half the joy. We craft leisure escapes, corporate
          journeys and educational expeditions that feel less like a booking and more like a beginning.
        </p>
        <div className="hero-cta">
          <a className="btn btn-amber btn-lg" href="#inspire">
            Start the adventure <Icon id="i-compass" />
          </a>
          <a className="btn btn-ghost btn-lg" href="#explore">Browse experiences</a>
        </div>
        <div className="hero-trust">
          <div className="avatars">
            <span style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/44.jpg')" }} />
            <span style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/32.jpg')" }} />
            <span style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/68.jpg')" }} />
            <span style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/75.jpg')" }} />
          </div>
          <div className="t-text">
            <div className="stars">★★★★★</div>
            <span><b>25k+ travellers</b> ferried across 3 continents</span>
          </div>
        </div>
      </div>

      <div className="hero-strip">
        <div className="wrap hero-strip-in">
          <div className="stat"><Icon id="i-clock" /> <span><b>7+</b> years of experience</span></div>
          <span className="sep" />
          <div className="stat"><Icon id="i-users" /> <span><b>120+</b> communities</span></div>
          <span className="sep" />
          <div className="stat"><Icon id="i-star" /> <span><b>64.8k</b> reviews</span></div>
          <span className="sep" />
          <div className="stat"><Icon id="i-globe" /> <span><b>25k+</b> travellers</span></div>
          <a className="hero-scroll" href="#inspire">
            Scroll <span className="mouse" />
          </a>
        </div>
      </div>
    </header>
  );
}
