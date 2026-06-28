import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icons';

const NAV_ITEMS = [
  {
    label: 'Experiences', href: '/experiences',
    children: [
      { label: 'Jungle Safaris',     href: '/experiences/jungle-safaris',     icon: 'i-leaf',    sub: 'Jim Corbett · Ranthambore · Sariska · Gir' },
      { label: 'Honeymoon',          href: '/experiences/honeymoon',          icon: 'i-heart',   sub: 'Romantic escapes for two' },
      { label: 'Cultural Immersion', href: '/experiences/cultural-immersion', icon: 'i-globe',   sub: 'Royal Heritage & living traditions' },
      { label: 'Border & Defence',   href: '/experiences/border-defence',     icon: 'i-shield',  sub: 'Frontier forts & military heritage' },
      { label: 'Yoga Retreats',      href: '/experiences/yoga-retreats',      icon: 'i-lotus',   sub: 'Wellness, stillness & renewal' },
      { label: 'Offbeat Travel',     href: '/experiences/offbeat',            icon: 'i-compass', sub: 'Roads less travelled' },
      { label: 'Propose Me Better',  href: '/experiences/propose-me-better',  icon: 'i-spark',   sub: 'Unforgettable proposal moments' },
    ],
  },
  {
    label: 'Educare', href: '/educare',
    children: [
      { label: 'The Programme',   href: '/educare#programme', icon: 'i-passport', sub: 'Something extraordinary awaits' },
      { label: "Who It's For",    href: '/educare#who',       icon: 'i-users',    sub: 'Schools, colleges & curious minds' },
      { label: 'Enquire Now',     href: '/educare#enquire',   icon: 'i-arrow',    sub: 'Get first access' },
    ],
  },
  {
    label: 'Community', href: '/community',
    children: [
      { label: 'Fitness Trips',      href: '/community#fitness',  icon: 'i-sun',     sub: 'Move, sweat, explore together' },
      { label: 'Alumni Trips',       href: '/community#alumni',   icon: 'i-users',   sub: 'Reconnect through adventure' },
      { label: 'Women-only',         href: '/community#women',    icon: 'i-shield',  sub: 'Safe, curated, empowering' },
      { label: 'Special Interest',   href: '/community#special',  icon: 'i-star',    sub: 'Birdwatching, photography & more' },
    ],
  },
  {
    label: 'More', href: '/more',
    children: [
      { label: 'Corporate Retreats', href: '/more#corporate',  icon: 'i-case',    sub: 'Offsites that actually work' },
      { label: 'Group Bookings',     href: '/more#groups',     icon: 'i-users',   sub: 'Book for your whole crew' },
      { label: 'Travel Insurance',   href: '/more#insurance',  icon: 'i-shield',  sub: 'Travel with full peace of mind' },
      { label: 'About Kashti',       href: '/more#about',      icon: 'i-compass', sub: 'Our story from Delhi' },
    ],
  },
];

export default function Nav() {
  const [stuck, setStuck]       = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef    = useRef(null);
  const closeTimer = useRef(null);
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpenMenu(null); setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`nav${stuck ? ' stuck' : ''}`} id="nav" ref={navRef}>
      <div className="wrap nav-top">
        <Link to="/" className="nav-logo-wrap">
          <img className="nav-logo" src="/assets/kashti-logo.png" alt="Kashti Adventures" />
        </Link>

        {isHome && (
          <div className="nav-search">
            <input
              type="text"
              placeholder="What would you like to explore?"
              aria-label="Search destinations"
              onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = '/experiences'; }}
            />
            <Link to="/experiences" className="mag" aria-label="Search">
              <Icon id="i-search" />
            </Link>
          </div>
        )}

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="nav-drop-wrap"
              onMouseEnter={() => { clearTimeout(closeTimer.current); setOpenMenu(item.label); }}
              onMouseLeave={() => { closeTimer.current = setTimeout(() => setOpenMenu(null), 120); }}
            >
              <Link
                className={`nav-link nav-link-drop${openMenu === item.label ? ' open' : ''}`}
                to={item.href}
              >
                {item.label}
                <svg viewBox="0 0 24 24" className="nav-chev"><use href="#i-chev" /></svg>
              </Link>
              {openMenu === item.label && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link key={child.label} to={child.href} className="nd-item">
                      <span className="nd-icon"><Icon id={child.icon} /></span>
                      <span className="nd-text">
                        <span className="nd-label">{child.label}</span>
                        <span className="nd-sub">{child.sub}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link className="btn btn-amber btn-sm nav-cta" to="/#book">Plan a trip</Link>
        </div>

        <button
          className={`nav-burger${mobileOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className="nav-cats-wrap">
        <div className="wrap nav-cats">
          <Link className="nav-cat" to="/experiences/jungle-safaris"><Icon id="i-leaf" /> Jungle Safaris</Link>
          <Link className="nav-cat" to="/experiences/honeymoon"><Icon id="i-heart" /> Honeymoon</Link>
          <Link className="nav-cat" to="/experiences/yoga-retreats"><Icon id="i-lotus" /> Yoga Retreats</Link>
          <Link className="nav-cat" to="/community#women"><Icon id="i-users" /> Women-only</Link>
          <Link className="nav-cat" to="/experiences/offbeat"><Icon id="i-compass" /> Offbeat</Link>
          <Link className="nav-cat" to="/experiences/border-defence"><Icon id="i-shield" /> Border & Defence</Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="nav-mobile">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="nm-group">
              <Link className="nm-head" to={item.href}>{item.label}</Link>
              {item.children.map((child) => (
                <Link key={child.label} className="nm-child" to={child.href}>
                  <Icon id={child.icon} /> {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
