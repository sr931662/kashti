const REVIEWS = [
  {
    text: '"The houseboat crew remembered my mother\'s tea exactly the way she liked it by day two. We genuinely didn\'t want to dock."',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    who: 'Meera & family', trip: 'Backwaters by Kashti · Kerala',
  },
  {
    text: '"Our entire sales offsite — 60 people, three cities — ran without a single hiccup. Kashti\'s crew were three steps ahead the whole time."',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    who: 'Rohan Khanna', trip: 'VP Sales · Corporate offsite',
  },
  {
    text: '"As a school we worry about safety first. Every transfer was escorted, every child accounted for. The parents were thrilled."',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    who: "Mrs. D'Souza", trip: 'Coordinator · Educational tour',
  },
  {
    text: '"Kayaking through glowing water at midnight in Havelock — I still don\'t fully believe it happened. Best trip of my life."',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    who: 'Arjun S.', trip: 'Andaman Island Hopper',
  },
];

export default function Reviews() {
  return (
    <section className="section mint" id="reviews" data-screen-label="Reviews">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Reviews from travellers</span>
          <h2 className="sec-title">Letters back to the <em>harbour.</em></h2>
        </div>
        <div className="reviews-grid reveal d1">
          {REVIEWS.map((r, i) => (
            <div className="review" key={i}>
              <span className="quote" aria-hidden="true">"</span>
              <div className="stars">★★★★★</div>
              <p>{r.text}</p>
              <div className="who-row">
                <span className="ava" style={{ backgroundImage: `url('${r.avatar}')` }} />
                <div>
                  <div className="who">{r.who}</div>
                  <div className="trip">{r.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
