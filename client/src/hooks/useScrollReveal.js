import { useEffect } from 'react';

export function useScrollReveal(pathname) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.06, rootMargin: '0px 0px -2% 0px' }
    );

    // rAF fires after the browser has painted the new page's DOM —
    // safer than setTimeout and fires as soon as possible.
    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll('.reveal:not(.in)');
      els.forEach((el) => {
        // Immediately reveal elements already visible in viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in');
        } else {
          io.observe(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);
}
