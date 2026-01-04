// Perbaikan interaktivitas: menu mobile, smooth scroll, reveal on scroll
const nav = document.getElementById('site-nav');
const btnMenu = document.getElementById('btn-menu');

// Toggle menu mobile
btnMenu && btnMenu.addEventListener('click', () => {
  const expanded = btnMenu.getAttribute('aria-expanded') === 'true';
  btnMenu.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});



// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // close menu on mobile
    if (nav.classList.contains('open')) { nav.classList.remove('open'); btnMenu.setAttribute('aria-expanded', 'false'); }
  });
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .project-card, .card, .hero-content').forEach(el => observer.observe(el));



