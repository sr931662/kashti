import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export default function GivingBack() {
  return (
    <section className="section giveback" id="giveback" data-screen-label="Giving back">
      <div className="wrap">
        <div className="gb-card reveal">
          <div className="gb-photo">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80"
              alt="Local community"
              loading="lazy"
            />
            <div className="gb-stat">
              <b>2%</b>
              <span>of every trip, reinvested</span>
            </div>
          </div>
          <div className="gb-text">
            <svg className="gb-bg" width="220" height="220">
              <use href="#i-leaf" />
            </svg>
            <span className="kicker">Giving back to society</span>
            <h2>We travel light, but we <em>leave more</em> than footprints.</h2>
            <p>Two percent of every Kashti journey funds the communities and landscapes that make these trips worth taking — schools, clean-up drives and homestay livelihoods.</p>
            <ul className="gb-points">
              <li><span className="dot"><Icon id="i-check" /></span> Homestays over hotels, wherever we can</li>
              <li><span className="dot"><Icon id="i-check" /></span> Local guides, fairly paid</li>
              <li><span className="dot"><Icon id="i-check" /></span> Carbon-balanced group departures</li>
            </ul>
            <div className="gb-tagline">leave only ripples. ~</div>
            <div className="gb-cta-row">
              <Link className="btn btn-green" to="/more#about">
                Our full story <Icon id="i-arrow" />
              </Link>
              <Link className="btn btn-outline" to="/#book">
                Travel with purpose <Icon id="i-leaf" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
