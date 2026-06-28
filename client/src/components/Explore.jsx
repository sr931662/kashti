import { Icon } from './Icons';

const CARDS = [
  {
    img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80',
    alt: 'Romantic escape', icon: 'i-heart',
    title: 'Romantic Escapes', desc: 'Overwater villas & candlelit shores.', href: '#inspire',
  },
  {
    img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80',
    alt: 'Spiritual tours', icon: 'i-lotus',
    title: 'Spiritual Tours', desc: 'Temples, ghats & quiet mountain shrines.', href: '#inspire',
  },
  {
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80',
    alt: 'Treks and trails', icon: 'i-mtn',
    title: 'Treks & Trails', desc: 'High passes, ridgelines & starlit camps.', href: '#inspire',
  },
  {
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80',
    alt: 'Corporate retreats', icon: 'i-case',
    title: 'Corporate Retreats', desc: 'Offsites & reward trips, flawlessly run.', href: '#book',
  },
];

export default function Explore() {
  return (
    <section className="section band" id="explore" data-screen-label="Explore by experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker amber">Explore by mood</span>
          <h2 className="sec-title">Find your <em>kind</em> of escape.</h2>
          <p className="lede">From honeymoons to high-altitude treks — pick the feeling, we'll chart the route.</p>
        </div>
        <div className="explore-grid reveal d1">
          {CARDS.map((c, i) => (
            <a className="xcard" href={c.href} key={i}>
              <img src={c.img} alt={c.alt} loading="lazy" />
              <div className="xcard-in">
                <span className="ic"><Icon id={c.icon} /></span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <span className="x-explore">Explore <Icon id="i-arrow" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
