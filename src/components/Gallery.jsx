import { Icon } from './Icons';

const FRAMES = [
  { src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80', alt: 'Santorini', handle: '@wander.meera', tall: true },
  { src: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=500&q=80', alt: 'Bali',      handle: '@rohan.trails' },
  { src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80', alt: 'Kyoto',     handle: '@kyoto.diaries' },
  { src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80', alt: 'Andamans', handle: '@saltinhair' },
  { src: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80', alt: 'Jaisalmer', handle: '@desert.caravan' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80', alt: 'Ladakh',    handle: '@highpass.co' },
];

export default function Gallery() {
  return (
    <section className="section" id="frames" data-screen-label="Journey in frame">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="kicker" style={{ justifyContent: 'center' }}>Journey in frame</span>
          <h2 className="sec-title">Moments from the <em>road.</em></h2>
          <p className="lede">Tag <b>#KashtiAdventures</b> and your shot could land right here.</p>
        </div>
        <div className="frame-grid reveal d1">
          {FRAMES.map((f, i) => (
            <div className={`frame-cell${f.tall ? ' frame-tall' : ''}`} key={i}>
              <img src={f.src} alt={f.alt} loading="lazy" />
              <span className="handle">
                <Icon id="i-camera" /> {f.handle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
