import { useState, useEffect } from 'react';
import { Icon } from './Icons';

const FRAMES = [
  { src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85', alt: 'Santorini', handle: '@wander.meera', tall: true },
  { src: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=85',  alt: 'Bali',      handle: '@rohan.trails' },
  { src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85',  alt: 'Kyoto',     handle: '@kyoto.diaries' },
  { src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85',  alt: 'Andamans',  handle: '@saltinhair' },
  { src: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85',  alt: 'Jaisalmer', handle: '@desert.caravan' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85',  alt: 'Ladakh',    handle: '@highpass.co' },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setActive(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section className="section" id="frames" data-screen-label="Journey in frame">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="kicker" style={{ justifyContent: 'center' }}>Journey in frame</span>
          <h2 className="sec-title">Moments from the <em>road.</em></h2>
          <p className="lede">Tag <b>#KashtiAdventures</b> and your shot could land right here.</p>
        </div>
        <div className="frame-grid reveal d1">
          {FRAMES.map((f, i) => (
            <div
              className={`frame-cell${f.tall ? ' frame-tall' : ''}`}
              key={i}
              onClick={() => setActive(f)}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${f.alt} by ${f.handle}`}
              onKeyDown={(e) => e.key === 'Enter' && setActive(f)}
            >
              <img src={f.src} alt={f.alt} loading="lazy" />
              <span className="handle"><Icon id="i-camera" /> {f.handle}</span>
              <span className="frame-zoom"><Icon id="i-search" /></span>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="lb-overlay" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={() => setActive(null)} aria-label="Close">
            <Icon id="i-close" />
          </button>
          <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <div className="lb-caption">
              <span className="lb-handle"><Icon id="i-camera" /> {active.handle}</span>
              <span className="lb-place">{active.alt}</span>
            </div>
          </div>
          <p className="lb-hint">Press ESC or click outside to close</p>
        </div>
      )}
    </section>
  );
}
