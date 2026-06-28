import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';
import TourCard from './TourCard';
import { TOURS } from '../data/tours';

const CUSTOM_STEPS = [
  { icon: 'i-compass', title: 'Tell us your dream', desc: 'Destination, duration, budget, vibe — no idea too vague.' },
  { icon: 'i-users',   title: 'We design it for you', desc: 'A dedicated planner builds a bespoke itinerary within 48 hours.' },
  { icon: 'i-spark',   title: 'You just show up', desc: 'Hotels, transport, guides, activities — we handle every detail.' },
];

export default function Inspire() {
  const [region, setRegion] = useState('domestic');

  return (
    <section className="section inspire" id="inspire" data-screen-label="Take inspiration">
      <div className="wrap">
        <div className="inspire-grid">
          <div className="inspire-main">

            <div className="center-row">
              <div className={`region-toggle${region === 'international' ? ' international' : ''}`}>
                <span className="glider" />
                <button className={region === 'domestic' ? 'on' : ''} onClick={() => setRegion('domestic')}>Domestic</button>
                <button className={region === 'international' ? 'on' : ''} onClick={() => setRegion('international')}>International</button>
              </div>
            </div>

            {/* ── Normal Trips ── */}
            <div className="collection reveal">
              <div className="collection-head">
                <div className="collection-title">
                  <span className="pill"><Icon id="i-compass" /> Normal Trips</span>
                  <span className="sub">Fixed departures · join a scheduled crew</span>
                </div>
                <a className="viewall" href="/experiences">View all <Icon id="i-arrow" /></a>
              </div>
              <div className="tour-grid">
                {TOURS[region].group.map((t, i) => <TourCard key={i} tour={t} />)}
              </div>
            </div>

            {/* ── Group Trips ── */}
            <div className="collection reveal">
              <div className="collection-head">
                <div className="collection-title">
                  <span className="pill"><Icon id="i-users" /> Group Trips</span>
                  <span className="sub">Private groups · your dates, your crew</span>
                </div>
                <a className="viewall" href="/experiences">View all <Icon id="i-arrow" /></a>
              </div>
              <div className="tour-grid">
                {TOURS[region].custom.map((t, i) => <TourCard key={i} tour={t} />)}
              </div>
            </div>

            {/* ── Customized Trips ── */}
            <div className="collection reveal">
              <div className="collection-head">
                <div className="collection-title">
                  <span className="pill pill-amber"><Icon id="i-spark" /> Customized Trips</span>
                  <span className="sub">Design your own journey from scratch</span>
                </div>
              </div>
              <div className="custom-band">
                <div className="custom-band-bg" aria-hidden="true">
                  <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="custom-band-scrim" aria-hidden="true" />
                <div className="custom-band-content">
                  <div className="custom-steps">
                    {CUSTOM_STEPS.map((s, i) => (
                      <div className="cs-item" key={i}>
                        <span className="cs-num">{i + 1}</span>
                        <span className="cs-icon"><Icon id={s.icon} /></span>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="custom-cta-row">
                    <div>
                      <p className="custom-tagline">Every detail. Zero stress. Entirely yours.</p>
                    </div>
                    <Link className="btn btn-amber btn-lg" to="/#book">
                      Build my trip <Icon id="i-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
