import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageBanner from '../components/PageBanner';

const CORPORATE_FEATURES = [
  { icon: 'i-compass', title: 'End-to-end management', desc: 'Transport, hotels, F&B, activities, AV — one point of contact.' },
  { icon: 'i-users',   title: 'Any group size',         desc: 'From leadership off-sites of 12 to all-hands of 500+.' },
  { icon: 'i-shield',  title: 'Zero-stress execution',  desc: 'Our on-ground team handles everything. You just attend.' },
  { icon: 'i-spark',   title: 'ROI-driven design',      desc: 'Team activities engineered for bonding, not box-ticking.' },
];

const INSURANCE_POINTS = [
  'Medical emergency & evacuation',
  'Trip cancellation & curtailment',
  'Lost baggage & travel documents',
  'Adventure activity cover',
  'COVID-related disruption cover',
];

const FAQS = [
  { q: 'How far in advance should I book?',            a: 'For domestic trips, 3–4 weeks. For international and group departures, 8–12 weeks is ideal to secure the best availability and pricing.' },
  { q: 'Do you handle visa applications?',              a: 'Yes — we provide visa documentation support, country-specific checklists, and partner with visa facilitation services for major international destinations.' },
  { q: 'What\'s your cancellation policy?',            a: 'Cancellations 30+ days before departure: 90% refund. 15–29 days: 50% refund. Under 15 days: trip credit for future bookings. Full details in your booking confirmation.' },
  { q: 'Can I book as a solo traveller?',               a: 'Absolutely — our group departures are popular with solo travellers. We can also pair you with a compatible co-traveller if you prefer not to pay a single supplement.' },
  { q: 'Are your trips accessible for mobility needs?', a: 'Many of our leisure and cultural trips can be adapted. Let us know at enquiry stage and we\'ll tailor an itinerary that works.' },
];

export default function More() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* hero */}
      <header className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="ph-scrim" />
        <div className="wrap ph-content">
          <span className="kicker amber"><Icon id="i-globe" /> More from Kashti</span>
          <h1 className="ph-title">Everything else <em>you need.</em></h1>
          <p className="ph-tagline">Corporate · Groups · Insurance · About · FAQs</p>
        </div>
      </header>

      {/* ===== CORPORATE ===== */}
      <section className="section" id="corporate">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kicker">Corporate Retreats</span>
            <h2 className="sec-title">Offsites that <em>actually work.</em></h2>
            <p className="lede">The best team-building doesn't happen in a conference room. It happens on a trail, over a shared meal in a mountain village, or kayaking through mangroves at dawn.</p>
          </div>
          <div className="why-grid reveal d1">
            {CORPORATE_FEATURES.map((f, i) => (
              <div className="why-card" key={i}>
                <span className="wic"><Icon id={f.icon} /></span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal d2" style={{ marginTop: 40, textAlign: 'center' }}>
            <Link className="btn btn-green btn-lg" to="/#book">
              Request a corporate proposal <Icon id="i-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GROUP BOOKINGS ===== */}
      <section className="section band" id="groups">
        <div className="wrap">
          <div className="gb-card reveal">
            <div className="gb-photo">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80" alt="Group travel" loading="lazy" />
              <div className="gb-stat"><b>15+</b><span>group size for best rates</span></div>
            </div>
            <div className="gb-text">
              <span className="kicker">Group Bookings</span>
              <h2>The more you travel, <em>the less you pay.</em></h2>
              <p>Group bookings unlock private transport, negotiated hotel rates, a dedicated trip manager, and a completely custom itinerary built around your group's preferences.</p>
              <ul className="gb-points">
                <li><span className="dot"><Icon id="i-check" /></span> Dedicated trip manager throughout</li>
                <li><span className="dot"><Icon id="i-check" /></span> Private coach / chartered flights for 30+</li>
                <li><span className="dot"><Icon id="i-check" /></span> Custom itinerary, not a fixed package</li>
                <li><span className="dot"><Icon id="i-check" /></span> GST invoice for institutions & companies</li>
              </ul>
              <Link className="btn btn-amber" to="/#book">
                Get a group quote <Icon id="i-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSURANCE ===== */}
      <section className="section" id="insurance">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="kicker" style={{ justifyContent: 'center' }}>Travel Insurance</span>
            <h2 className="sec-title">Travel with full <em>peace of mind.</em></h2>
            <p className="lede" style={{ maxWidth: 520, margin: '16px auto 0' }}>
              We partner with leading insurers to offer comprehensive cover — available at booking, no separate paperwork.
            </p>
          </div>
          <div className="ins-grid reveal d1">
            {INSURANCE_POINTS.map((p, i) => (
              <div className="ins-card" key={i}>
                <span className="ic-dot"><Icon id="i-shield" /></span>
                <span>{p}</span>
              </div>
            ))}
            <div className="ins-card ins-card-cta">
              <Icon id="i-arrow" />
              <span>Add insurance at checkout — from ₹299 per trip</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section mint" id="about">
        <div className="wrap">
          <div className="gb-card reveal">
            <div className="gb-photo">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80" alt="About Kashti" loading="lazy" />
              <div className="gb-stat"><b>2017</b><span>founded in Delhi</span></div>
            </div>
            <div className="gb-text" style={{ background: 'var(--green-ink)' }}>
              <span className="kicker">Our Story</span>
              <h2>A studio born from one idea: <em>travel is the point.</em></h2>
              <p>Kashti started in Delhi when a group of friends realised that the best trips they'd ever had were the ones nobody planned for them — spontaneous, local, deeply personal.</p>
              <p style={{ marginTop: 14 }}>We built Kashti to give that feeling to everyone: a studio that handles every detail so you can experience travel the way it's meant to be — as an end in itself, not a means to a photograph.</p>
              <ul className="gb-points">
                <li><span className="dot"><Icon id="i-check" /></span> 7+ years operating</li>
                <li><span className="dot"><Icon id="i-check" /></span> 120+ partner communities</li>
                <li><span className="dot"><Icon id="i-check" /></span> 25,000+ travellers served</li>
                <li><span className="dot"><Icon id="i-check" /></span> 3 continents of active routes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAGE BANNER ===== */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <PageBanner
            flip
            kicker="Corporate & Group travel"
            title="Travel that works as hard"
            em="as you do."
            desc="From leadership offsites of 12 to all-hands gatherings of 500+, Kashti handles every detail end-to-end — so you just show up."
            cta="Request a proposal"
            ctaHref="/more#corporate"
            img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            badges={['Any size group', 'GST invoice', 'Dedicated manager']}
          />
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="section" id="faqs">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="kicker" style={{ justifyContent: 'center' }}>FAQs</span>
            <h2 className="sec-title">Questions, <em>answered.</em></h2>
          </div>
          <div className="faq-list reveal d1">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className={`faq-item${openFaq === i ? ' open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-q">
                  <span>{f.q}</span>
                  <span className="faq-chev"><Icon id="i-chev" /></span>
                </div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
