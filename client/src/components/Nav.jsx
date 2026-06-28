import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons';

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
  }

  function handleSearchKey(e) {
    if (e.key === 'Enter') scrollTo('inspire');
  }

  return (
    <nav className={`nav${stuck ? ' stuck' : ''}`} id="nav">
      <div className="wrap nav-top">
        <img
          className="nav-logo"
          src="/assets/kashti-logo.png"
          alt="Kashti Adventures"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <div className="nav-search">
          <input
            ref={searchRef}
            type="text"
            placeholder="What would you like to explore?"
            aria-label="Search destinations"
            onKeyDown={handleSearchKey}
          />
          <button className="mag" aria-label="Search" onClick={() => scrollTo('inspire')}>
            <Icon id="i-search" />
          </button>
        </div>
        <div className="nav-links">
          <a className="nav-link" href="#explore">Experiences</a>
          <a className="nav-link" href="#explore">Corporate Retreats</a>
          <a className="nav-link" href="#why">Educare</a>
          <a className="nav-link" href="#book">More</a>
        </div>
      </div>
      <div className="nav-cats-wrap">
        <div className="wrap nav-cats">
          <a className="nav-cat" href="#inspire"><Icon id="i-map" /> Domestic</a>
          <a className="nav-cat" href="#inspire"><Icon id="i-globe" /> International</a>
          <a className="nav-cat" href="#explore"><Icon id="i-mtn" /> Treks</a>
          <a className="nav-cat" href="#inspire"><Icon id="i-users" /> Group Tours</a>
          <a className="nav-cat" href="#explore"><Icon id="i-lotus" /> Spiritual Tours</a>
        </div>
      </div>
    </nav>
  );
}
