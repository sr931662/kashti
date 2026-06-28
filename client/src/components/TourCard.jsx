import { Icon } from './Icons';
import { inr } from '../data/tours';

export default function TourCard({ tour }) {
  return (
    <article className="tcard">
      <div className="tcard-photo">
        <img src={tour.img} alt={tour.name} loading="lazy" decoding="async" />
        <span className="tcard-tag">{tour.tag}</span>
        <span className="tcard-fav"><Icon id="i-heart" /></span>
        <span className="tcard-place">
          <Icon id="i-pin" />
          {tour.place}
        </span>
      </div>
      <div className="tcard-body">
        <h4>{tour.name}</h4>
        <div className="tcard-meta">
          <span className="star"><Icon id="i-star" />{tour.rating.toFixed(1)}</span>
          <span className="dot" />
          <span>{tour.days} days</span>
          <span className="dot" />
          <span>guided</span>
        </div>
        <div className="tcard-foot">
          <span className="tcard-price">from <b>{inr(tour.price)}</b></span>
          <span className="tcard-go"><Icon id="i-arrow" /></span>
        </div>
      </div>
    </article>
  );
}
