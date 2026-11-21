const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.type !== filter;
    });
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
