const IMG = {
  beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  resort: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
  santorini: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
  bali: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80',
  ladakh: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  andaman: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
  kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  jaisalmer: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
  boat: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80',
  coach: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
  alps: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=800&q=80',
  valley: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
};

export const TOURS = {
  domestic: {
    group: [
      { img: IMG.ladakh,    tag: 'Scheduled Trip', place: 'Ladakh',    name: 'Ladakh High-Pass Odyssey',    days: 7, rating: 4.9, price: 38900,  itineraryId: 'ladakh-7-days'    },
      { img: IMG.andaman,   tag: 'Scheduled Trip', place: 'Andamans',  name: 'Andaman Island Hopper',       days: 6, rating: 4.8, price: 52400,  itineraryId: 'andaman-6-days'   },
      { img: IMG.jaisalmer, tag: 'Scheduled Trip', place: 'Rajasthan', name: 'Thar Desert Caravan',         days: 5, rating: 4.7, price: 27900,  itineraryId: 'rajasthan-8-days' },
      { img: IMG.boat,      tag: 'Scheduled Trip', place: 'Kerala',    name: 'Backwaters by Kashti',        days: 4, rating: 4.9, price: 24500,  itineraryId: 'kerala-5-days'    },
    ],
    custom: [
      { img: IMG.valley,    tag: 'Group Trip',     place: 'Himachal',  name: 'Spiti Circuit, Your Way',     days: 8, rating: 4.9, price: 41500,  itineraryId: null               },
      { img: IMG.resort,    tag: 'Group Trip',     place: 'Goa',       name: 'Slow Goa Beach Retreat',      days: 5, rating: 4.8, price: 31200,  itineraryId: null               },
      { img: IMG.ladakh,    tag: 'Group Trip',     place: 'Sikkim',    name: 'Eastern Himalaya Private',    days: 7, rating: 4.8, price: 44800,  itineraryId: null               },
      { img: IMG.boat,      tag: 'Group Trip',     place: 'Kerala',    name: 'Munnar & Backwaters Bespoke', days: 6, rating: 4.9, price: 36900,  itineraryId: 'kerala-5-days'    },
    ],
  },
  international: {
    group: [
      { img: IMG.santorini, tag: 'Scheduled Trip', place: 'Greece',      name: 'Aegean Drift — Santorini', days: 6,  rating: 4.9, price: 118000, itineraryId: 'greece-6-days'    },
      { img: IMG.bali,      tag: 'Scheduled Trip', place: 'Indonesia',   name: 'Bali & Gili Sail Escape',  days: 7,  rating: 4.8, price: 78500,  itineraryId: null               },
      { img: IMG.kyoto,     tag: 'Scheduled Trip', place: 'Japan',       name: 'Japan Blossom Passage',    days: 9,  rating: 4.9, price: 165000, itineraryId: 'japan-9-days'     },
      { img: IMG.alps,      tag: 'Scheduled Trip', place: 'Switzerland', name: 'Alpine Rail & Trail',      days: 8,  rating: 4.8, price: 142000, itineraryId: null               },
    ],
    custom: [
      { img: IMG.santorini, tag: 'Group Trip',     place: 'Greece',    name: 'Cyclades, Island by Island', days: 9,  rating: 4.9, price: 158000, itineraryId: 'greece-6-days'    },
      { img: IMG.bali,      tag: 'Group Trip',     place: 'Vietnam',   name: 'Halong Bay Private Cruise',  days: 7,  rating: 4.8, price: 96500,  itineraryId: null               },
      { img: IMG.kyoto,     tag: 'Group Trip',     place: 'Japan',     name: 'Tokyo to Kyoto, Tailored',   days: 10, rating: 4.9, price: 184000, itineraryId: 'japan-9-days'     },
      { img: IMG.alps,      tag: 'Group Trip',     place: 'Italy',     name: 'Dolomites Slow Escape',      days: 8,  rating: 4.8, price: 149000, itineraryId: null               },
    ],
  },
};

export const SLIDES = [
  {
    img: IMG.santorini,
    kicker: 'Featured voyage · Greece',
    title: 'Sail the Aegean blue',
    text: 'Six days of catamaran mornings and clifftop sunsets across Santorini and quiet, crowd-free Milos.',
    badges: ['6 days', 'Small group', 'Flights included'],
  },
  {
    img: IMG.andaman,
    kicker: 'Featured voyage · Andamans',
    title: 'Islands that empty by five',
    text: 'Bioluminescent kayaks, reef snorkels and beaches all to yourself across Havelock and Neil.',
    badges: ['6 days', 'Sea & air', 'Reef snorkel'],
  },
  {
    img: IMG.kyoto,
    kicker: 'Featured voyage · Japan',
    title: 'Shinkansen between worlds',
    text: 'Neon Tokyo, steaming Hakone onsen and ten thousand vermilion gates in old Kyoto.',
    badges: ['9 days', 'Rail pass', 'Ryokan night'],
  },
  {
    img: IMG.ladakh,
    kicker: 'Featured voyage · Ladakh',
    title: 'Above the clouds',
    text: 'Khardung La, the dunes of Nubra and a starlit night camped on the shore of Pangong Tso.',
    badges: ['7 days', 'By road', 'Oxygen support'],
  },
];

export function inr(n) {
  return '₹' + n.toLocaleString('en-IN');
}
