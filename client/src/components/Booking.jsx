import { useState } from 'react';
import { Icon } from './Icons';

const SEGMENTS = [
  { val: 'leisure',   label: '☼ Leisure' },
  { val: 'corporate', label: '✦ Corporate' },
  { val: 'education', label: '✎ Education' },
];

export default function Booking() {
  const [segment, setSegment] = useState('');
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [when, setWhen]       = useState('');
  const [details, setDetails] = useState('');
  const [success, setSuccess] = useState(false);

  function submit() {
    if (!name || !email || !when || !details) {
      alert('Please fill in all fields.');
      return;
    }
    if (!segment) {
      alert('Pick a gate / travel type first!');
      return;
    }
    setSuccess(true);
    setName(''); setEmail(''); setWhen(''); setDetails(''); setSegment('');
    setTimeout(() => setSuccess(false), 6500);
  }

  return (
    <section className="section dispatch" id="book" data-screen-label="Booking">
      <div className="book-bg" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1920&q=80" alt="" />
      </div>
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="kicker amber" style={{ justifyContent: 'center' }}>Central dispatch</span>
          <h2 className="sec-title">Let's chart <em>your</em> journey.</h2>
          <p className="lede">Tell us where the wind's taking you. A real navigator replies within 24 hours — no bots, no call centres.</p>
        </div>

        <div className="boarding reveal d1">
          <div className="bd-stub">
            <svg className="globe" width="280" height="280" style={{ color: '#fff' }}>
              <use href="#i-globe" />
            </svg>
            <div>
              <h3>Boarding<br />Pass</h3>
              <div className="sub">Request your clearance</div>
            </div>
            <div className="bd-meta">
              <div className="row"><div className="k">Home port</div><div className="v">New Delhi, India</div></div>
              <div className="row"><div className="k">Comm channel</div><div className="v">boarding@kashtiadventures.com</div></div>
              <div className="row"><div className="k">Desk hours</div><div className="v">24 / 7 — every time zone</div></div>
            </div>
            <div className="foot"><img src="/assets/kashti-logo.png" alt="Kashti Adventures" /></div>
          </div>

          <div className="bd-form">
            <div className="ff">
              <label className="fl">Which gate are you boarding?</label>
              <div className="seg">
                {SEGMENTS.map(s => (
                  <button
                    key={s.val}
                    type="button"
                    className={segment === s.val ? 'on' : ''}
                    onClick={() => setSegment(s.val)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="ff two">
              <div className="ff">
                <label className="fl" htmlFor="f-name">Lead traveller</label>
                <input type="text" id="f-name" placeholder="e.g. Karan Mehta" value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
              </div>
              <div className="ff">
                <label className="fl" htmlFor="f-email">Email</label>
                <input type="email" id="f-email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
              </div>
            </div>
            <div className="ff">
              <label className="fl" htmlFor="f-when">Roughly when & how many?</label>
              <input type="text" id="f-when" placeholder="e.g. July 2026 · 4 travellers" value={when} onChange={e => setWhen(e.target.value)} />
            </div>
            <div className="ff">
              <label className="fl" htmlFor="f-details">Where's the wind taking you?</label>
              <textarea id="f-details" rows="3" placeholder="Dream destinations, occasion, anything we should know…" value={details} onChange={e => setDetails(e.target.value)} />
            </div>
            <button type="button" className="btn btn-green btn-lg" style={{ width: '100%' }} onClick={submit}>
              Request my boarding pass <Icon id="i-compass" />
            </button>
            {success && (
              <div className="bd-success show">
                <svg width="22" height="22"><use href="#i-check" /></svg>
                Boarding pass requested! A navigator will reach out within 24 hours.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
