import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export default function PageBanner({ kicker, title, em, desc, cta, ctaHref = '/#book', img, badges = [], flip = false }) {
  return (
    <div className={`page-banner${flip ? ' page-banner-flip' : ''}`}>
      <div className="pb-img-wrap">
        <img src={img} alt="" loading="lazy" />
        <div className="pb-img-scrim" />
      </div>
      <div className="pb-text">
        {kicker && <span className="kicker amber"><Icon id="i-spark" /> {kicker}</span>}
        <h2 className="pb-title">{title}{em && <> <em>{em}</em></>}</h2>
        {desc && <p className="pb-desc">{desc}</p>}
        {badges.length > 0 && (
          <div className="pb-badges">
            {badges.map((b, i) => (
              <span key={i}><Icon id="i-compass" /> {b}</span>
            ))}
          </div>
        )}
        <Link className="btn btn-amber btn-lg pb-cta" to={ctaHref}>
          {cta} <Icon id="i-arrow" />
        </Link>
      </div>
    </div>
  );
}
