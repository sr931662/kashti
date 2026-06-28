import { useEffect, useRef } from 'react';
import { Icon } from './Icons';

export default function FlightPath() {
  const svgRef  = useRef(null);
  const dashRef = useRef(null);
  const glowRef = useRef(null);
  const planeRef = useRef(null);
  const pathLenRef = useRef(0);

  function buildPath() {
    const svg  = svgRef.current;
    const dash = dashRef.current;
    const glow = glowRef.current;
    if (!svg || !dash) return 0;

    const h  = document.body.scrollHeight;
    const w  = window.innerWidth;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.setAttribute('width',  w);
    svg.setAttribute('height', h);

    const cx   = w / 2;
    const amp  = Math.min(w * 0.32, 420);
    const pts  = [];
    const segs = Math.max(6, Math.round(h / 620));
    for (let i = 0; i <= segs; i++) {
      const y   = (h / segs) * i;
      const dir = i % 2 === 0 ? -1 : 1;
      const x   = cx + dir * amp * (0.55 + 0.45 * Math.sin(i * 1.3));
      pts.push([x, y]);
    }
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const [px, py] = pts[i - 1];
      const [x, y]   = pts[i];
      const my = (py + y) / 2;
      d += ` C ${px} ${my}, ${x} ${my}, ${x} ${y}`;
    }
    dash.setAttribute('d', d);
    if (glow) glow.setAttribute('d', d);
    const len = dash.getTotalLength();
    if (glow) { glow.style.strokeDasharray = len; glow.style.strokeDashoffset = len; }
    return len;
  }

  function onScrollPath() {
    const glow  = glowRef.current;
    const dash  = dashRef.current;
    const plane = planeRef.current;
    const len   = pathLenRef.current;
    if (!glow || !len) return;
    const docH = document.body.scrollHeight - window.innerHeight;
    const prog = Math.min(1, Math.max(0, window.scrollY / Math.max(1, docH)));
    const drawn = len * prog;
    glow.style.strokeDashoffset = len - drawn;
    if (plane && dash) {
      const pt  = dash.getPointAtLength(Math.min(len - 1, drawn + 2));
      const pt2 = dash.getPointAtLength(Math.min(len - 1, drawn + 18));
      const ang = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI;
      plane.style.transform = `translate(${pt.x}px, ${pt.y}px) translate(-50%, -50%) rotate(${ang}deg)`;
    }
  }

  useEffect(() => {
    pathLenRef.current = buildPath();
    onScrollPath();

    window.addEventListener('scroll', onScrollPath, { passive: true });

    let rT;
    const onResize = () => {
      clearTimeout(rT);
      rT = setTimeout(() => { pathLenRef.current = buildPath(); onScrollPath(); }, 200);
    };
    window.addEventListener('resize', onResize);

    const onLoad = () => setTimeout(() => { pathLenRef.current = buildPath(); onScrollPath(); }, 300);
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('scroll', onScrollPath);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onLoad);
      clearTimeout(rT);
    };
  }, []);

  return (
    <>
      <svg className="flightpath" id="flightpath" ref={svgRef} preserveAspectRatio="none">
        <path id="fp-dash" ref={dashRef} />
        <path id="fp-glow" className="glow" ref={glowRef} />
      </svg>
      <div className="path-vehicle" id="fp-plane" ref={planeRef}>
        <svg width="34" height="34"><use href="#i-plane" /></svg>
      </div>
    </>
  );
}
