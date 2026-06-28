import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons';
import { SLIDES } from '../data/tours';

export default function FeaturedCarousel() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  function go(n) {
    setIdx(((n % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }

  function restart() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 5500);
  }

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  function handleNav(dir) {
    go(idx + dir);
    restart();
  }

  function handleDot(i) {
    go(i);
    restart();
  }

  return (
    <section className="section feature" id="featured" data-screen-label="Featured carousel">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: 34 }}>
          <span className="kicker">This season's headline</span>
          <h2 className="sec-title">Voyages <em>boarding soon.</em></h2>
        </div>
        <div className="carousel reveal d1">
          <div className="carousel-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {SLIDES.map((s, i) => (
              <div className="slide" key={i}>
                <img src={s.img} alt={s.title} decoding="async" loading={i === 0 ? 'eager' : 'lazy'} />
                <div className="slide-content">
                  <span className="kicker">{s.kicker}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="slide-badges">
                    {s.badges.map((b, j) => (
                      <span key={j}><Icon id="i-compass" />{b}</span>
                    ))}
                  </div>
                  <a className="btn btn-amber" href="#book">
                    Plan this voyage <Icon id="i-arrow" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button className="car-arr prev" aria-label="Previous" onClick={() => handleNav(-1)}>
            <Icon id="i-arrow" style={{ transform: 'rotate(180deg)' }} />
          </button>
          <button className="car-arr next" aria-label="Next" onClick={() => handleNav(1)}>
            <Icon id="i-arrow" />
          </button>
          <div className="car-dots">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className={`car-dot${i === idx ? ' on' : ''}`}
                onClick={() => handleDot(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
