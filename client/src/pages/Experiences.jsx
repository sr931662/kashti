import { useParams, Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import PageBanner from '../components/PageBanner';

const CATEGORIES = [
  {
    slug: 'jungle-safaris',
    icon: 'i-leaf',
    title: 'Jungle Safaris',
    tagline: 'Where the wild things are.',
    hero: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1920&q=80',
    desc: "Dawn jeep rides through silent sal forests, tiger pug marks in damp mud, a leopard draped on a branch at golden hour — India's wildlife sanctuaries hold scenes that don't translate to photographs. They have to be lived.",
    destinations: [
      { name: 'Jim Corbett',  state: 'Uttarakhand', img: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=700&q=80', badge: 'Tiger Reserve', note: 'India\'s oldest national park' },
      { name: 'Ranthambore', state: 'Rajasthan',    img: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=700&q=80', badge: 'Tiger Reserve', note: 'Fort ruins meet jungle' },
      { name: 'Sariska',     state: 'Rajasthan',    img: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=700&q=80', badge: 'Tiger Reserve', note: 'Compact & uncrowded' },
      { name: 'Gir Gujarat', state: 'Gujarat',      img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=700&q=80', badge: 'Lion Sanctuary', note: 'Last Asiatic lions on Earth' },
    ],
    includes: ['Expert naturalist guide', 'Shared jeep safari (6 seats)', 'Zone permit & entry fees', 'Stay near the reserve', 'Early morning + evening drives'],
  },
  {
    slug: 'honeymoon',
    icon: 'i-heart',
    title: 'Honeymoon',
    tagline: 'Your first adventure together.',
    hero: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=80',
    desc: 'A honeymoon should feel like the world was arranged just for the two of you. Overwater villas with glass floors, candlelit dinners on private beaches, sunrise hikes to viewpoints nobody else knows about — we plan every detail so you only have to show up and fall deeper in love.',
    destinations: [
      { name: 'Maldives',    state: 'Indian Ocean',  img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=700&q=80', badge: 'Overwater Villa', note: 'Bioluminescent lagoons' },
      { name: 'Santorini',   state: 'Greece',        img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80', badge: 'Clifftop Sunsets', note: 'Caldera views & cave suites' },
      { name: 'Kerala',      state: 'India',         img: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=700&q=80', badge: 'Houseboat Stay', note: 'Backwaters & spice gardens' },
      { name: 'Bali',        state: 'Indonesia',     img: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=700&q=80', badge: 'Private Villa', note: 'Rice terraces & temple dawns' },
    ],
    includes: ['Romantic room decor on arrival', 'Private candlelit dinners', 'Couples\' spa session', 'Surprise experiences', 'Photography session'],
  },
  {
    slug: 'cultural-immersion',
    icon: 'i-globe',
    title: 'Cultural Immersion',
    tagline: 'Travel beyond the postcard.',
    hero: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1920&q=80',
    desc: "The real India — and the real world — exists in the lanes behind the monuments. A morning chai at a potter\'s wheel, a weaver demonstrating a dying textile art, the sound of a dhrupad recital echoing through a haveli courtyard. Cultural immersion means actually being somewhere, not just passing through.",
    destinations: [
      { name: 'Rajasthan',   state: 'India',    img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80', badge: 'Royal Heritage', note: 'Forts, havelis & folk arts' },
      { name: 'Varanasi',    state: 'India',    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80', badge: 'Spiritual India', note: 'The oldest living city on Earth' },
      { name: 'Kyoto',       state: 'Japan',    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80', badge: 'Living Tradition', note: 'Tea ceremony & geisha quarter' },
      { name: 'Marrakech',   state: 'Morocco',  img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=700&q=80', badge: 'Medina Maze',  note: 'Souks, riads & Berber culture' },
    ],
    includes: ['Local expert storyteller', 'Craft & cooking workshops', 'Heritage property stays', 'Private palace access', 'Artisan studio visits'],
  },
  {
    slug: 'border-defence',
    icon: 'i-shield',
    title: 'Border & Defence',
    tagline: 'Stand where history was made.',
    hero: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
    desc: "Watchtowers at dusk. The beat retreat ceremony\'s drums rolling across a parade ground. Glaciers that soldiers patrol at -30°C. India\'s frontiers hold a different kind of beauty — fierce, humbling and unforgettable. These journeys are for those who want to understand what it really costs to keep a country free.",
    destinations: [
      { name: 'Wagah Border', state: 'Punjab',   img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80', badge: 'Beat Retreat', note: 'The most electrifying ceremony in India' },
      { name: 'Ladakh',       state: 'J&K',      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80', badge: 'High Altitude', note: 'World\'s highest motorable roads' },
      { name: 'Tawang',       state: 'Arunachal',img: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=700&q=80', badge: 'Eastern Frontier', note: 'Monastery meets the McMahon Line' },
      { name: 'Kutch',        state: 'Gujarat',  img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80', badge: 'Desert Border', note: 'Rann & BSF patrols' },
    ],
    includes: ['Permit handling for restricted zones', 'Ex-serviceman guide (optional)', 'Ceremony grandstand tickets', 'Defence museum visits', 'Military-themed stays'],
  },
  {
    slug: 'yoga-retreats',
    icon: 'i-lotus',
    title: 'Yoga Retreats',
    tagline: 'Come back to yourself.',
    hero: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80',
    desc: 'Somewhere between a downward dog at 5 AM with the Himalayan mist rolling in and a silent dinner under a banyan tree, something shifts. Yoga retreats are not holidays — they are re-sets. We find the ashrams and wellness sanctuaries where the practice goes deeper than any studio class.',
    destinations: [
      { name: 'Rishikesh',   state: 'Uttarakhand', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80', badge: 'Yoga Capital', note: 'Ganga banks & ancient ashrams' },
      { name: 'Kerala',      state: 'India',        img: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=700&q=80', badge: 'Ayurveda',    note: 'Panchakarma & backwaters' },
      { name: 'Mysuru',      state: 'Karnataka',    img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80', badge: 'Ashtanga',    note: 'Classical yoga in its birthplace' },
      { name: 'Bali',        state: 'Indonesia',    img: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=700&q=80', badge: 'Ubud Jungle', note: 'Rice-field sunrise savasana' },
    ],
    includes: ['Daily yoga & meditation sessions', 'Sattvic meals (plant-based)', 'Pranayama & breathwork', 'Optional Ayurvedic treatments', 'Digital detox environment'],
  },
  {
    slug: 'offbeat',
    icon: 'i-compass',
    title: 'Offbeat Travel',
    tagline: 'The map ends. The adventure begins.',
    hero: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80',
    desc: "No influencer queues. No souvenir shops at every corner. Just places that still feel like discoveries — villages where outsiders rarely stay, trails with no signposts, festivals that the internet hasn't found yet. If you travel to feel something, not to document it, this is where you belong.",
    destinations: [
      { name: 'Spiti Valley', state: 'Himachal',  img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80', badge: 'Cold Desert', note: 'Monasteries above the clouds' },
      { name: 'Ziro Valley',  state: 'Arunachal', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80', badge: 'Tribal India', note: 'Apatani culture & pine forests' },
      { name: 'Majuli',       state: 'Assam',     img: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=700&q=80', badge: 'River Island', note: 'World\'s largest river island' },
      { name: 'Champaner',    state: 'Gujarat',   img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80', badge: 'Forgotten City', note: 'UNESCO site, zero crowds' },
    ],
    includes: ['Off-grid accommodation', 'Local family homestays', 'Community-led experiences', 'Unmarked trail guides', 'Low footprint travel'],
  },
  {
    slug: 'propose-me-better',
    icon: 'i-spark',
    title: 'Propose Me Better',
    tagline: 'The answer will always be yes.',
    hero: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80',
    desc: "The proposal is not just a question — it is the first page of a story you\'ll tell forever. We design the exact scene: the rooftop in Jaisalmer at blue hour, the private beach in Andamans with floating candles, the hot air balloon above the Thar. You bring the ring. We handle everything else.",
    destinations: [
      { name: 'Andamans',   state: 'India',     img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=700&q=80', badge: 'Beach Setup',    note: 'Private island, candlelit shore' },
      { name: 'Jaisalmer',  state: 'Rajasthan', img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80', badge: 'Desert Magic',   note: 'Golden fort at twilight' },
      { name: 'Udaipur',    state: 'Rajasthan', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80', badge: 'Lake Palace',    note: 'Floating palace dinner' },
      { name: 'Santorini',  state: 'Greece',    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80', badge: 'Caldera View',   note: 'Blue domes & champagne sunset' },
    ],
    includes: ['Scene design & décor', 'Photographer (hidden)', 'Champagne & florals', 'Private dining setup', 'Contingency plan for weather'],
  },
];

function ExperienceDetail({ cat }) {
  return (
    <>
      {/* hero */}
      <header className="page-hero" style={{ backgroundImage: `url('${cat.hero}')` }}>
        <div className="ph-scrim" />
        <div className="wrap ph-content">
          <span className="kicker amber"><Icon id={cat.icon} /> Experiences</span>
          <h1 className="ph-title">{cat.title}</h1>
          <p className="ph-tagline">{cat.tagline}</p>
        </div>
      </header>

      {/* intro */}
      <section className="section">
        <div className="wrap exp-intro reveal">
          <p className="exp-desc">{cat.desc}</p>
        </div>
      </section>

      {/* destinations */}
      <section className="section band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="kicker">Featured destinations</span>
            <h2 className="sec-title">Pick your <em>starting point.</em></h2>
          </div>
          <div className="dest-cards reveal d1">
            {cat.destinations.map((d, i) => (
              <div className="dest-card" key={i}>
                <div className="dc-photo">
                  <img src={d.img} alt={d.name} loading="lazy" />
                  <span className="dc-badge">{d.badge}</span>
                </div>
                <div className="dc-body">
                  <h4>{d.name}</h4>
                  <span className="dc-state"><Icon id="i-pin" /> {d.state}</span>
                  <p>{d.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* what's included */}
          <div className="includes-wrap reveal d2">
            <h3 className="inc-title">What's included</h3>
            <ul className="inc-list">
              {cat.includes.map((item, i) => (
                <li key={i}><span className="inc-dot"><Icon id="i-check" /></span>{item}</li>
              ))}
            </ul>
            <Link className="btn btn-amber btn-lg" to="/#book">
              Book this experience <Icon id="i-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ExperiencesList() {
  return (
    <>
      <header className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="ph-scrim" />
        <div className="wrap ph-content">
          <span className="kicker amber"><Icon id="i-compass" /> All Experiences</span>
          <h1 className="ph-title">Find your kind of <em>adventure.</em></h1>
          <p className="ph-tagline">Seven experiences. Infinite stories.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <PageBanner
            kicker="Group & Custom trips"
            title="Can't find what you're looking for?"
            em="We'll build it."
            desc="Tell us your dream trip — destination, budget, crew size — and our planners will design a bespoke itinerary within 48 hours."
            cta="Plan a custom trip"
            ctaHref="/#book"
            img="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
            badges={['Any destination', 'Any group size', '48-hr turnaround']}
          />
          <div className="exp-grid" style={{ marginTop: 40 }}>
            {CATEGORIES.map((cat, i) => (
              <Link className="exp-card reveal" to={`/experiences/${cat.slug}`} key={i}>
                <div className="ec-photo">
                  <img src={cat.hero} alt={cat.title} loading="lazy" />
                  <div className="ec-over" />
                </div>
                <div className="ec-body">
                  <span className="ec-icon"><Icon id={cat.icon} /></span>
                  <h3>{cat.title}</h3>
                  <p>{cat.tagline}</p>
                  <span className="ec-go">Explore <Icon id="i-arrow" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function Experiences() {
  const { category } = useParams();
  const cat = category ? CATEGORIES.find(c => c.slug === category) : null;

  if (category && !cat) {
    return (
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="sec-title">Experience not found.</h2>
          <Link className="btn btn-green" to="/experiences" style={{ marginTop: 24 }}>Back to Experiences</Link>
        </div>
      </section>
    );
  }

  return cat ? <ExperienceDetail cat={cat} /> : <ExperiencesList />;
}
