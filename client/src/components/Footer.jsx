export default function Footer() {
  return (
    <>
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
          <path d="M0,40 C180,8 360,8 540,30 C720,52 900,68 1080,52 C1260,36 1350,30 1440,38 L1440,70 L0,70 Z" fill="currentColor" />
        </svg>
      </div>
      <footer className="footer" data-screen-label="Footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <img className="f-logo" src="/assets/kashti-logo.png" alt="Kashti Adventures" />
              <p className="f-blurb">Every great story begins with a kashti. Boats, roads and skies — we plan the whole passage, from Lucknow to anywhere.</p>
            </div>
            <div>
              <h5>Travel</h5>
              <a className="f-link" href="#inspire">Domestic tours</a>
              <a className="f-link" href="#inspire">International tours</a>
              <a className="f-link" href="#explore">Treks &amp; trails</a>
              <a className="f-link" href="#explore">Spiritual tours</a>
            </div>
            <div>
              <h5>Studio</h5>
              <a className="f-link" href="#why">Why Kashti</a>
              <a className="f-link" href="#reviews">Traveller reviews</a>
              <a className="f-link" href="#giveback">Giving back</a>
              <a className="f-link" href="#book">Plan a trip</a>
            </div>
            <div>
              <h5>Drop anchor</h5>
              <span className="f-link">boarding@kashtiadventures.com</span>
              <span className="f-link">+91 98XXX XXXXX</span>
              <span className="f-link">Lucknow, Uttar Pradesh</span>
            </div>
          </div>
          <div className="f-bottom">
            <span>© 2026 Kashti Adventures — made with ☀ in India</span>
            <span>Leisure · Corporate · Educational travel</span>
          </div>
          <div className="f-wordmark" aria-hidden="true">KASHTI</div>
        </div>
      </footer>
    </>
  );
}
