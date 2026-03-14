const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, {passive:true});

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  if (isOpen) {
    mobileMenu.classList.add('open');
  } else {
    mobileMenu.style.display = 'block';
    mobileMenu.classList.remove('open');
    setTimeout(() => { mobileMenu.style.display = ''; }, 250);
  }
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('open');
  });
});

document.getElementById('submitBtn').addEventListener('click', () => {
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;
  const msg = document.getElementById('successMsg');

  if (!fname || !email || !interest) {
    document.getElementById('submitBtn').textContent = 'Please fill in required fields';
    setTimeout(() => {
      document.getElementById('submitBtn').innerHTML = 'Register Interest <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
    }, 2200);
    return;
  }

  msg.style.display = 'block';
  document.getElementById('submitBtn').style.opacity = '0.5';
  document.getElementById('submitBtn').style.pointerEvents = 'none';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.pillar, .audience-card, .stat-cell').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});