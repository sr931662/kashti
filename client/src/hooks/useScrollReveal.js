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

    // Process every unhandled .reveal element:
    // - already in viewport → instant .in
    // - off-screen → hand to IntersectionObserver
    function observe() {
      document.querySelectorAll('.reveal:not(.in):not([data-rev])').forEach((el) => {
        el.setAttribute('data-rev', '1');
        const { top, bottom } = el.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          el.classList.add('in');
        } else {
          io.observe(el);
        }
      });
    }

    // First pass — elements that exist right now
    const raf = requestAnimationFrame(observe);

    // Second pass — catches elements added by React.lazy after Suspense resolves
    let moTimer;
    const root = document.getElementById('root');
    const mo = new MutationObserver(() => {
      clearTimeout(moTimer);
      moTimer = setTimeout(observe, 30);
    });
    if (root) mo.observe(root, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(moTimer);
      io.disconnect();
      mo.disconnect();
      // Clean up tracking attributes so re-entry on next route works cleanly
      document.querySelectorAll('[data-rev]').forEach((el) => el.removeAttribute('data-rev'));
    };
  }, [pathname]);
}
