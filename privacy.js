/* Privacy page: navbar scroll + mobile menu (matches index behavior) */
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function updateNavbar() {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
});
