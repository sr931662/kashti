import { Icon } from './Icons';

const ITEMS = [
  { icon: 'i-pin',   label: 'Santorini' },
  { icon: 'i-ship',  label: 'Andaman Islands' },
  { icon: 'i-pin',   label: 'Ladakh' },
  { icon: 'i-plane', label: 'Bali' },
  { icon: 'i-pin',   label: 'Kyoto' },
  { icon: 'i-bus',   label: 'Jaisalmer' },
  { icon: 'i-pin',   label: 'Swiss Alps' },
  { icon: 'i-sun',   label: 'Kerala' },
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <Icon id={item.icon} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
