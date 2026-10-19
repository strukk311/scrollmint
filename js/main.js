(() => {
    const header = document.querySelector('[data-header]');
    const burger = document.querySelector('[data-burger]');
    const nav = document.querySelector('[data-nav]');
    const mobileQuery = window.matchMedia('(max-width: 768px)');
  
    /* ---------- Mobile menu ---------- */
    const setMenu = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('no-scroll', open);
    };
  
    if (burger && nav) {
      burger.addEventListener('click', () => {
        setMenu(burger.getAttribute('aria-expanded') !== 'true');
      });
  
      nav.addEventListener('click', (e) => {
        if (e.target.closest('a')) setMenu(false);
      });
  
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          setMenu(false);
          burger.focus();
        }
      });

      mobileQuery.addEventListener('change', (e) => {
        if (!e.matches) setMenu(false);
      });
    }
  
    /* Header border on scroll */
    if (header) {
      const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  
    /* Current year */
    const year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
})();
