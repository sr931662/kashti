import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageBanner from '../components/PageBanner';

const TEASERS = [
  {
    icon: 'i-globe',
    line: 'Not a field trip. Not a tour. Something that doesn\'t have a name yet.',
  },
  {
    icon: 'i-compass',
    line: 'What if the most important lesson you ever learned happened 2,000 km from a classroom?',
  },
  {
    icon: 'i-spark',
    line: 'Every student who has done this says the same thing: "I didn\'t know I could feel like this."',
  },
  {
    icon: 'i-map',
    line: 'Structured. Safe. Supervised. And somehow, the most unstructured feeling in the world.',
  },
];

const WHISPERS = [
  'A living curriculum.',
  'History you can touch.',
  'Science you can smell.',
  'Geography you can climb.',
  'Culture you can taste.',
  'Confidence you can keep.',
];

export default function Educare() {
  const [formData, setFormData] = useState({ name: '', role: '', institution: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    if (!formData.name || !formData.email || !formData.institution) {
      alert('Please fill in your name, institution and email.');
      return;
    }
    setSent(true);
    setFormData({ name: '', role: '', institution: '', email: '', message: '' });
    setTimeout(() => setSent(false), 7000);
  }

  return (
    <>
      {/* ===== HERO — mysterious, cinematic ===== */}
      <header className="edu-hero">
        <div className="eh-bg">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80" alt="" fetchpriority="high" decoding="async" />
        </div>
        <div className="eh-scrim" />
        <div className="wrap eh-content">
          <span className="edu-tag">Kashti Educare</span>
          <h1 className="eh-title">
            What if school <br />
            felt like <em>this?</em>
          </h1>
          <p className="eh-sub">We can't tell you everything. But what we can tell you is — it changes everything.</p>
          <a href="#programme" className="btn btn-amber btn-lg">
            Discover the programme <Icon id="i-arrow" />
          </a>
        </div>
        <div className="eh-whisper-strip">
          {WHISPERS.map((w, i) => (
            <span key={i}>{w}</span>
          ))}
          {WHISPERS.map((w, i) => (
            <span key={`r${i}`} aria-hidden="true">{w}</span>
          ))}
        </div>
      </header>

      {/* ===== WHAT WE WON'T TELL YOU (teaser) ===== */}
      <section className="section" id="programme">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="kicker" style={{ justifyContent: 'center' }}>The Programme</span>
            <h2 className="sec-title">Some things are better <em>experienced.</em></h2>
            <p className="lede" style={{ maxWidth: 560, margin: '16px auto 0' }}>
              We've deliberately left the details out of this page. Not because there's nothing to say — but because words won't do it justice. Here's what we'll let slip.
            </p>
          </div>

          <div className="teaser-grid reveal d1">
            {TEASERS.map((t, i) => (
              <a className="teaser-card" href="#enquire" key={i}>
                <span className="tc-icon"><Icon id={t.icon} /></span>
                <p className="tc-line">"{t.line}"</p>
                <span className="tc-cta">Find out more <Icon id="i-arrow" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE FEELING (no facts, all emotion) ===== */}
      <section className="section band edu-feeling" id="feeling">
        <div className="wrap">
          <div className="ef-grid reveal">
            <div className="ef-photo">
              <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80" alt="Learning in the wild" loading="lazy" decoding="async" />
              <div className="ef-overlay">
                <blockquote>"I expected a school trip. I got a turning point."</blockquote>
                <cite>— A student, age 16</cite>
              </div>
            </div>
            <div className="ef-text">
              <span className="kicker">What you'll carry back</span>
              <h2 className="sec-title">Not just <em>memories.</em></h2>
              <p className="lede">The kind of experience that makes a 17-year-old suddenly understand why the world is the way it is. The kind that turns curious students into confident humans.</p>
              <ul className="edu-points">
                <li><span className="ep-dot"><Icon id="i-star" /></span><div><b>Perspective</b><br />Seeing their country — or the world — for the first time, not through a textbook.</div></li>
                <li><span className="ep-dot"><Icon id="i-shield" /></span><div><b>Confidence</b><br />The kind that only comes from navigating something real.</div></li>
                <li><span className="ep-dot"><Icon id="i-spark" /></span><div><b>A story to tell</b><br />For the rest of their lives.</div></li>
                <li><span className="ep-dot"><Icon id="i-compass" /></span><div><b>Curiosity, reignited</b><br />The best classroom trick we know.</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
      <section className="section" id="who">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="kicker" style={{ justifyContent: 'center' }}>Who It's For</span>
            <h2 className="sec-title">Curious minds, <em>any age.</em></h2>
          </div>
          <div className="who-grid reveal d1">
            {[
              { icon: 'i-users', label: 'Schools',      desc: 'Class VI to XII. Annual excursions reimagined.' },
              { icon: 'i-globe', label: 'Colleges',     desc: 'Undergraduate & postgrad expedition programmes.' },
              { icon: 'i-case',  label: 'Corporates',   desc: 'L&D teams who want learning that actually sticks.' },
              { icon: 'i-heart', label: 'Families',     desc: 'Parents who believe travel is the best teacher.' },
            ].map((item, i) => (
              <a className="who-tile" href="#enquire" key={i}>
                <span className="wt-icon"><Icon id={item.icon} /></span>
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
                <span className="wt-cta">Enquire <Icon id="i-arrow" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MYSTERY STAT STRIP ===== */}
      <div className="edu-stat-strip reveal">
        <div className="wrap edu-stats">
          <div className="es-item"><b>94%</b><span>of participants say it was the best trip of their lives</span></div>
          <div className="es-sep" />
          <div className="es-item"><b>3 continents</b><span>of programme destinations</span></div>
          <div className="es-sep" />
          <div className="es-item"><b>Fully supervised</b><span>escorted groups, 24 / 7 on-ground support</span></div>
          <div className="es-sep" />
          <div className="es-item"><b>Since 2017</b><span>trusted by 120+ institutions</span></div>
        </div>
      </div>

      {/* ===== PAGE BANNER ===== */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <PageBanner
            flip
            kicker="Trusted by institutions"
            title="120+ schools already"
            em="on board."
            desc="From Grade VI excursions to college expeditions — Kashti Educare operates escorted programmes across India and 3 continents."
            cta="Request programme details"
            ctaHref="/educare#enquire"
            img="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
            badges={['Fully escorted', '3 continents', 'Since 2017']}
          />
        </div>
      </section>

      {/* ===== ENQUIRY FORM ===== */}
      <section className="section dispatch" id="enquire">
        <div className="book-bg" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="sec-head center reveal">
            <span className="kicker amber" style={{ justifyContent: 'center' }}>Get First Access</span>
            <h2 className="sec-title" style={{ color: '#fff' }}>Be the first to <em style={{ color: '#f6c45e' }}>know.</em></h2>
            <p className="lede" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 520, margin: '16px auto 0' }}>
              We share full programme details only with institutions that enquire. Drop your details — a Kashti educator responds within 24 hours.
            </p>
          </div>

          <div className="edu-form-wrap reveal d1">
            <div className="bd-form">
              <div className="ff two">
                <div className="ff">
                  <label className="fl" htmlFor="edu-name">Your name</label>
                  <input id="edu-name" type="text" placeholder="Ms. Priya Sharma" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div className="ff">
                  <label className="fl" htmlFor="edu-role">Your role</label>
                  <input id="edu-role" type="text" placeholder="e.g. Principal / HOD / Parent" value={formData.role} onChange={e => setFormData(p => ({ ...p, role: e.target.value }))} />
                </div>
              </div>
              <div className="ff two">
                <div className="ff">
                  <label className="fl" htmlFor="edu-inst">Institution</label>
                  <input id="edu-inst" type="text" placeholder="School / College / Organisation" value={formData.institution} onChange={e => setFormData(p => ({ ...p, institution: e.target.value }))} />
                </div>
                <div className="ff">
                  <label className="fl" htmlFor="edu-email">Email</label>
                  <input id="edu-email" type="email" placeholder="you@school.edu" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                </div>
              </div>
              <div className="ff">
                <label className="fl" htmlFor="edu-msg">Anything specific you'd like to know?</label>
                <textarea id="edu-msg" rows="3" placeholder="Number of students, preferred dates, destination interests…" value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
              </div>
              <button type="button" className="btn btn-amber btn-lg" style={{ width: '100%' }} onClick={handleSubmit}>
                Send my enquiry <Icon id="i-arrow" />
              </button>
              {sent && (
                <div className="bd-success show">
                  <svg width="22" height="22"><use href="#i-check" /></svg>
                  Received! A Kashti educator will be in touch within 24 hours with full programme details.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
