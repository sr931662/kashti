import { Icon } from './Icons';

const CARDS = [
  { icon: 'i-compass', title: 'Human navigators', desc: 'A real planner on every trip — no bots, no call centres. They know the back-roads and the best chai stops.' },
  { icon: 'i-shield',  title: 'Safe & escorted',  desc: 'Vetted partners, 24/7 on-trip support and fully supervised group & educational journeys.' },
  { icon: 'i-spark',   title: 'Made just for you', desc: 'Every itinerary is handcrafted around your pace, budget and the moments you actually care about.' },
  { icon: 'i-leaf',    title: 'Travel that gives back', desc: 'A slice of every trip funds local communities and low-impact travel across the places we love.' },
];

export default function WhyKashti() {
  return (
    <section className="section" id="why" data-screen-label="Why Kashti">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="kicker" style={{ justifyContent: 'center' }}>The Kashti difference</span>
          <h2 className="sec-title">Why <em>Kashti?</em></h2>
          <p className="lede">Seven years, three continents, one promise — the journey matters as much as the destination.</p>
        </div>
        <div className="why-grid reveal d1">
          {CARDS.map((c, i) => (
            <div className="why-card" key={i}>
              <span className="wic"><Icon id={c.icon} /></span>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
