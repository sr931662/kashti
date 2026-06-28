import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageBanner from '../components/PageBanner';

const COMMUNITIES = [
  {
    id: 'fitness',
    icon: 'i-sun',
    color: '#1b9b6f',
    accent: '#e7f3ec',
    label: 'Fitness Community Trips',
    tagline: 'Move together. Go further.',
    hero: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    desc: "Yoga on a ridge at sunrise. A 15 km trail run through a pine forest. A swim in a glacier lake. Fitness trips aren't about suffering — they're about discovering what your body can do when the scenery is beautiful enough to forget you're tired.",
    trips: ['Rishikesh Yoga & Trail Run', 'Spiti High-Altitude Trek', 'Coorg Cycling & Waterfall Trail', 'Andamans Ocean Swimming Camp'],
    who: 'Fitness enthusiasts, yoga practitioners, runners, cyclists',
    groupSize: '8–16 people',
    pace: 'Active to Strenuous',
  },
  {
    id: 'alumni',
    icon: 'i-users',
    color: '#eda32c',
    accent: '#fcefd4',
    label: 'Alumni Trips',
    tagline: 'Old friends. New stories.',
    hero: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    desc: "You\'ve been meaning to reconnect for years. We give you the perfect excuse — and the perfect destination. Alumni trips are curated for groups that already share a history and want to make a new chapter together. Group bookings, private transport, shared memories.",
    trips: ['Goa School Reunion Weekend', 'College Batch Rajasthan Road Trip', 'Batch of \'05 Manali Special', 'Corporate Alumni Getaway'],
    who: 'School batches, college alumni groups, old workmates',
    groupSize: '12–50 people',
    pace: 'Easy to Moderate',
  },
  {
    id: 'women',
    icon: 'i-shield',
    color: '#7c4dff',
    accent: '#f0ebff',
    label: 'Women-only Experiences',
    tagline: 'Your space. Your pace. Your adventure.',
    hero: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80',
    desc: "Travel should feel free, not guarded. Our women-only departures are designed so you can fully exhale — vetted female guides, carefully selected stays, group dynamics that naturally gel. Solo travellers especially welcome. You\'ll leave with friends you didn\'t know you needed.",
    trips: ['Ladakh Women\'s Expedition', 'Kerala Solo Women\'s Retreat', 'Rajasthan Heritage Circuit', 'Bali Women\'s Wellness Week'],
    who: 'Solo women travellers, friend groups, women\'s collectives',
    groupSize: '6–14 people',
    pace: 'Easy to Active',
  },
  {
    id: 'special',
    icon: 'i-star',
    color: '#0c4a35',
    accent: '#e7f3ec',
    label: 'Special Interest Groups',
    tagline: 'Your obsession. Our destination.',
    hero: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=900&q=80',
    desc: 'Twitchers chasing the Siberian crane in Bharatpur. Photographers hunting the blue hour over Jaisalmer. Craft lovers on a hand-block-print trail through Rajasthan. When your interest is specific enough to feel niche, we design the trip around it — and find the others who feel the same.',
    trips: ['Bharatpur Birding Expedition', 'Rajasthan Textile Trail', 'Night-sky Photography, Ladakh', 'Heritage Architecture Walk, Ahmedabad'],
    who: 'Birdwatchers, photographers, artisans, history buffs',
    groupSize: '4–12 people',
    pace: 'Variable',
  },
];

export default function Community() {
  return (
    <>
      {/* hero */}
      <header className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="ph-scrim" />
        <div className="wrap ph-content">
          <span className="kicker amber"><Icon id="i-users" /> Community</span>
          <h1 className="ph-title">Travel is better <em>together.</em></h1>
          <p className="ph-tagline">Find your tribe. Find your trip.</p>
        </div>
      </header>

      {/* intro */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="kicker" style={{ justifyContent: 'center' }}>Four communities. Infinite bonds.</span>
            <h2 className="sec-title">Who do you <em>travel with?</em></h2>
            <p className="lede" style={{ maxWidth: 560, margin: '16px auto 0' }}>
              Every community has a different energy. Find yours below — or enquire and we'll build something entirely new for your group.
            </p>
          </div>
        </div>
      </section>

      {/* community sections */}
      {COMMUNITIES.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className="section comm-section"
          style={{ background: i % 2 === 0 ? 'var(--paper)' : 'var(--paper-2)' }}
        >
          <div className="wrap">
            <div className={`comm-grid reveal${i % 2 === 1 ? ' comm-grid-rev' : ''}`}>
              <div className="comm-photo">
                <img src={c.hero} alt={c.label} loading="lazy" decoding="async" />
                <div className="comm-badge" style={{ background: c.color }}>
                  <Icon id={c.icon} />
                </div>
              </div>
              <div className="comm-text">
                <span className="kicker" style={{ color: c.color }}>
                  <span style={{ background: c.color, width: 30, height: 2, borderRadius: 2, display: 'inline-block' }} />
                  Community
                </span>
                <h2 className="sec-title">{c.label}</h2>
                <p className="comm-tagline">{c.tagline}</p>
                <p className="comm-desc">{c.desc}</p>

                <div className="comm-meta">
                  <span className="cm-item"><Icon id="i-users" /> {c.who}</span>
                  <span className="cm-item"><Icon id="i-compass" /> {c.groupSize}</span>
                  <span className="cm-item"><Icon id="i-mtn" /> Pace: {c.pace}</span>
                </div>

                <div className="comm-trips">
                  <span className="ct-label">Popular trips</span>
                  <div className="ct-pills">
                    {c.trips.map((t, j) => (
                      <Link className="ct-pill" to="/itineraries" key={j}>{t}</Link>
                    ))}
                  </div>
                </div>

                <Link className="btn btn-green" to="/#book">
                  Join this community <Icon id="i-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PAGE BANNER */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <PageBanner
            kicker="Build your own community"
            title="Have a group with no"
            em="destination yet?"
            desc="Fitness clubs, college alumni, office teams, women's circles — if you have the people, we have the place. Custom community trips start here."
            cta="Start a community trip"
            ctaHref="/#book"
            img="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
            badges={['Any group size', 'Private itinerary', 'Dedicated manager']}
          />
        </div>
      </section>

      {/* CTA band */}
      <section className="section dispatch" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="book-bg" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="reveal">
            <span className="kicker amber" style={{ justifyContent: 'center' }}>Don't see your tribe?</span>
            <h2 className="sec-title" style={{ color: '#fff', marginTop: 16 }}>We'll build one <em style={{ color: '#f6c45e' }}>for you.</em></h2>
            <p className="lede" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 480, margin: '16px auto 28px' }}>
              Have a group with a shared interest and no destination yet? Tell us who you are — we'll design the perfect trip around you.
            </p>
            <Link className="btn btn-amber btn-lg" to="/#book">
              Start a custom community trip <Icon id="i-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
