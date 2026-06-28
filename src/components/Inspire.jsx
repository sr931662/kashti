import { useState } from 'react';
import { Icon } from './Icons';
import TourCard from './TourCard';
import { TOURS } from '../data/tours';

export default function Inspire() {
  const [region, setRegion] = useState('domestic');

  return (
    <section className="section inspire" id="inspire" data-screen-label="Take inspiration">
      <div className="wrap">
        <div className="inspire-grid">
          <div className="inspire-rail" aria-hidden="true">
            <div className="inspire-vlabel">
              Take inspiration.<br /><span className="accent">Just travel.</span>
            </div>
          </div>

          <div className="inspire-main">
            <div className="inspire-head-m">
              <span className="eyebrow-pill" style={{ alignSelf: 'center' }}>
                <Icon id="i-compass" /> Take inspiration
              </span>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>Just <em>travel.</em></h2>
            </div>

            <div className="center-row">
              <div className={`region-toggle${region === 'international' ? ' international' : ''}`}>
                <span className="glider" />
                <button className={region === 'domestic' ? 'on' : ''} onClick={() => setRegion('domestic')}>Domestic</button>
                <button className={region === 'international' ? 'on' : ''} onClick={() => setRegion('international')}>International</button>
              </div>
            </div>

            <div className="collection reveal">
              <div className="collection-head">
                <div className="collection-title">
                  <span className="pill"><Icon id="i-users" /> Group Tours</span>
                  <span className="sub">Fixed departures · join a small crew</span>
                </div>
                <a className="viewall" href="#inspire">View all <Icon id="i-arrow" /></a>
              </div>
              <div className="tour-grid">
                {TOURS[region].group.map((t, i) => <TourCard key={i} tour={t} />)}
              </div>
            </div>

            <div className="collection reveal">
              <div className="collection-head">
                <div className="collection-title">
                  <span className="pill"><Icon id="i-spark" /> Customized Trips</span>
                  <span className="sub">Private · shaped entirely around you</span>
                </div>
                <a className="viewall" href="#inspire">View all <Icon id="i-arrow" /></a>
              </div>
              <div className="tour-grid">
                {TOURS[region].custom.map((t, i) => <TourCard key={i} tour={t} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
