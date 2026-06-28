import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageBanner from '../components/PageBanner';
import { ITINERARIES, inrFormat } from '../data/itineraries';

/* ================================================================
   FILTER TABS
   ================================================================ */
const TYPES = ['All', 'Adventure', 'Beach', 'Cultural', 'Wellness'];

/* ================================================================
   ITINERARY CARD
   ================================================================ */
function ItineraryCard({ itin }) {
  return (
    <div className="itin-card">
      <div className="ic-img">
        <img src={itin.img} alt={itin.title} loading="lazy" />
        <span className="ic-badge">{itin.type}</span>
      </div>
      <div className="ic-body">
        <h3>{itin.title}</h3>
        <div className="ic-dest">
          <Icon id="i-pin" />
          {itin.destination}
        </div>
        <div className="ic-highlights">
          {itin.highlights.slice(0, 4).map((hl, i) => (
            <span key={i} className="ic-hl-pill">{hl}</span>
          ))}
        </div>
        <div className="ic-foot">
          <div>
            <div className="ic-days">{itin.duration}</div>
            <div className="ic-price">
              <span>From</span>
              <b>{inrFormat(itin.price)}</b>
            </div>
          </div>
          <Link to={`/itineraries/${itin.id}`} className="ic-link">
            View itinerary <Icon id="i-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   ITINERARY LIST
   ================================================================ */
function ItineraryList() {
  const [activeType, setActiveType] = useState('All');

  const filtered = activeType === 'All'
    ? ITINERARIES
    : ITINERARIES.filter(it => it.type === activeType);

  return (
    <>
      {/* Page Hero */}
      <section
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="ph-scrim" />
        <div className="wrap ph-content">
          <span className="kicker">Plan your journey</span>
          <h1 className="ph-title">
            Ready-made itineraries.{' '}
            <em>Made to feel personal.</em>
          </h1>
          <p className="ph-tagline">
            Every route is hand-crafted by our expedition team — tested, refined and loved by our travellers.
          </p>
        </div>
      </section>

      {/* Listing section */}
      <section className="section">
        <div className="wrap">
          {/* Filter tabs */}
          <div className="itin-filters">
            {TYPES.map(type => (
              <button
                key={type}
                className={`itin-filter-btn${activeType === type ? ' active' : ''}`}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="itin-grid">
            {filtered.map(itin => (
              <ItineraryCard key={itin.id} itin={itin} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <PageBanner
            kicker="Custom trips"
            title="Don't see your dream route?"
            em="We'll build it."
            desc="Tell us your dates, your style and your budget — our trip designers will craft a bespoke itinerary just for you."
            cta="Talk to a trip designer"
            ctaHref="/#book"
            img="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80"
          />
        </div>
      </section>
    </>
  );
}

/* ================================================================
   FAQ ITEM (Detail page accordion)
   ================================================================ */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="faq-q">
        {q}
        <span className="faq-chev"><Icon id="i-chev" /></span>
      </div>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

/* ================================================================
   ITINERARY DETAIL
   ================================================================ */
function ItineraryDetail({ itin }) {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ backgroundImage: `url('${itin.hero}')` }}
      >
        <div className="ph-scrim" />
        <div className="wrap ph-content">
          <span className="kicker">{itin.type} · {itin.destination}</span>
          <h1 className="ph-title">{itin.title}</h1>
          <p className="ph-tagline">{itin.subtitle}</p>
        </div>
      </section>

      <div className="wrap" style={{ paddingTop: 48 }}>

        {/* Overview bar */}
        <div className="itin-overview">
          <div className="ov-item">
            <div className="ov-label">Duration</div>
            <div className="ov-val">{itin.duration}</div>
          </div>
          <div className="ov-item">
            <div className="ov-label">Difficulty</div>
            <div className="ov-val">{itin.difficulty}</div>
          </div>
          <div className="ov-item">
            <div className="ov-label">Group Size</div>
            <div className="ov-val">{itin.groupSize}</div>
          </div>
          <div className="ov-item">
            <div className="ov-label">Price from</div>
            <div className="ov-val">{inrFormat(itin.price)}</div>
          </div>
        </div>

        {/* Day-by-day timeline */}
        <section className="section" style={{ paddingTop: 0 }}>
          <span className="kicker">Day by day</span>
          <h2 className="sec-title" style={{ marginBottom: 40 }}>
            Your journey, <em>day by day</em>
          </h2>
          <div className="day-timeline">
            {itin.days.map(day => (
              <div key={day.day} className="dt-item">
                <div className="dt-left">
                  <div className="dt-num">{day.day}</div>
                  <div className="dt-line" />
                </div>
                <div className="dt-right">
                  <div className="dt-title">Day {day.day} — {day.title}</div>
                  <div className="dt-desc">{day.desc}</div>
                  <div className="dt-chips">
                    {day.activities.map((act, i) => (
                      <span key={i} className="dt-chip">
                        <Icon id="i-check" />
                        {act}
                      </span>
                    ))}
                  </div>
                  <div className="dt-meta">
                    {day.stay && day.stay !== '—' && (
                      <span className="dt-meta-item">
                        <Icon id="i-star" /> Stay: {day.stay}
                      </span>
                    )}
                    {day.meals && (
                      <span className="dt-meta-item">
                        <Icon id="i-sun" /> Meals: {day.meals}
                      </span>
                    )}
                    {day.elevation && day.elevation !== '—' && (
                      <span className="dt-meta-item">
                        <Icon id="i-mtn" /> Elevation: {day.elevation}
                      </span>
                    )}
                    {day.distance && day.distance !== '—' && (
                      <span className="dt-meta-item">
                        <Icon id="i-compass" /> Distance: {day.distance}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section className="section" style={{ paddingTop: 0 }}>
          <span className="kicker">What's covered</span>
          <h2 className="sec-title" style={{ marginBottom: 40 }}>
            Inclusions &amp; <em>Exclusions</em>
          </h2>
          <div className="itin-inex">
            <div className="inex-col">
              <h3 className="inc-head">What's included</h3>
              <div className="inex-list">
                {itin.includes.map((item, i) => (
                  <div key={i} className="inex-item">
                    <span className="inex-dot inc"><Icon id="i-check" /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="inex-col">
              <h3 className="exc-head">Not included</h3>
              <div className="inex-list">
                {itin.excludes.map((item, i) => (
                  <div key={i} className="inex-item">
                    <span className="inex-dot exc"><Icon id="i-arrow" /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section" style={{ paddingTop: 0 }}>
          <span className="kicker">Questions</span>
          <h2 className="sec-title" style={{ marginBottom: 40 }}>
            Frequently asked <em>questions</em>
          </h2>
          <div className="faq-list">
            {itin.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ paddingTop: 0, paddingBottom: 72 }}>
          <div
            style={{
              background: 'var(--green-ink)',
              borderRadius: 24,
              padding: 'clamp(36px,5vw,64px)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <span className="kicker" style={{ color: 'var(--amber-soft)' }}>
              Ready to go?
            </span>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 800,
                fontSize: 'clamp(28px,4vw,52px)',
                color: '#fff',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Book the <em style={{ fontStyle: 'normal', color: 'var(--amber-soft)' }}>{itin.title}</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, maxWidth: 520, lineHeight: 1.6 }}>
              Share your travel dates and group size and our team will confirm availability, customise your experience and lock in your spot.
            </p>
            <Link className="btn btn-amber btn-lg" to="/#book">
              Start your booking <Icon id="i-arrow" />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}

/* ================================================================
   DEFAULT EXPORT — router dispatcher
   ================================================================ */
export default function Itinerary() {
  const { id } = useParams();

  if (!id) {
    return <ItineraryList />;
  }

  const itin = ITINERARIES.find(it => it.id === id);

  if (!itin) {
    return (
      <div className="wrap" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 36, color: 'var(--green-ink)' }}>
          Itinerary not found
        </h2>
        <p style={{ marginTop: 12, color: '#5e655f' }}>
          The itinerary you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/itineraries" className="btn btn-green" style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Browse all itineraries <Icon id="i-arrow" />
        </Link>
      </div>
    );
  }

  return <ItineraryDetail itin={itin} />;
}
