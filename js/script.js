/* ===================================================
   JK CLOUD TECHNOLOGIES — MAIN JAVASCRIPT
   =================================================== */

'use strict';

/* ================================================
   LOADING SCREEN
   ================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('loaded');
  }, 1800);
});

/* ================================================
   AOS INIT
   ================================================ */
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
  delay: 0,
});

/* ================================================
   PARTICLES
   ================================================ */
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['rgba(59,130,246,0.6)', 'rgba(124,58,237,0.5)', 'rgba(6,182,212,0.5)', 'rgba(168,85,247,0.4)'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
})();

/* ================================================
   NAVBAR SCROLL BEHAVIOUR
   ================================================ */
const nav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link:not(.btn-nav)');
const sections = document.querySelectorAll('section[id]');

function updateNav() {
  const y = window.scrollY;

  // Shrink on scroll
  nav.classList.toggle('scrolled', y > 50);

  // Back to top visibility
  document.getElementById('backToTop').classList.toggle('visible', y > 400);

  // Active nav link
  let current = '';
  sections.forEach(sec => {
    if (y >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ================================================
   SMOOTH SCROLL FOR NAV LINKS
   ================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    // Close mobile menu
    const bsCollapse = document.getElementById('navMenu');
    if (bsCollapse.classList.contains('show')) {
      bootstrap.Collapse.getInstance(bsCollapse)?.hide();
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ================================================
   COUNTER ANIMATION
   ================================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ================================================
   SERVICE FILTER
   ================================================ */
document.querySelectorAll('.service-filter .filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelector('.service-filter .filter-btn.active').classList.remove('active');
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('#servicesGrid .service-item').forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
      if (match) {
        item.style.animation = 'none';
        void item.offsetWidth;
        item.style.animation = '';
      }
    });
  });
});

/* ================================================
   PORTFOLIO FILTER
   ================================================ */
document.querySelectorAll('.portfolio-filter .filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelector('.portfolio-filter .filter-btn.active').classList.remove('active');
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('#portfolioGrid .portfolio-item').forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
    });
  });
});

/* ================================================
   BILLING TOGGLE (Pricing)
   ================================================ */
const billingToggle = document.getElementById('billingToggle');
if (billingToggle) {
  const prices = {
    monthly: ['6,999', '9,999', '14,999', '24,999'],
    annual:  ['5,599', '7,999', '11,999', '19,999'],
  };
  billingToggle.addEventListener('change', function () {
    const mode = this.checked ? 'annual' : 'monthly';
    document.querySelectorAll('.monthly-price').forEach((el, i) => {
      if (prices[mode][i]) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-8px)';
        setTimeout(() => {
          el.textContent = prices[mode][i];
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.transition = 'all 0.3s ease';
        }, 150);
      }
    });
  });
}

/* ================================================
   CONTACT FORM
   ================================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const inputs = this.querySelectorAll('[required]');
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#ef4444';
        valid = false;
      } else {
        input.style.borderColor = '';
      }
    });
    if (!valid) return;

    const btn = this.querySelector('.btn-submit');
    const loader = btn.querySelector('.btn-loader');
    const text = btn.childNodes[0];

    btn.disabled = true;
    loader.style.display = 'inline-block';
    text.textContent = ' Sending... ';

    setTimeout(() => {
      btn.disabled = false;
      loader.style.display = 'none';
      text.textContent = ' Message Sent! ';
      showToast();
      contactForm.reset();
      setTimeout(() => {
        text.textContent = ' Send Message ';
        btn.querySelector('i').className = 'fas fa-paper-plane';
      }, 3000);
    }, 1800);
  });

  // Remove error highlight on input
  contactForm.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => el.style.borderColor = '');
  });
}

function showToast() {
  const toast = document.getElementById('toastMsg');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ================================================
   BACK TO TOP
   ================================================ */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ================================================
   NAVBAR COLLAPSE ON LINK CLICK (Mobile)
   ================================================ */
document.querySelectorAll('#navMenu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const collapse = document.getElementById('navMenu');
    const bsCollapse = bootstrap.Collapse.getInstance(collapse);
    if (bsCollapse && collapse.classList.contains('show')) bsCollapse.hide();
  });
});

/* ================================================
   PARALLAX HERO SHAPES
   ================================================ */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const shapes = document.querySelectorAll('.shape');
  shapes.forEach((shape, i) => {
    const speed = (i + 1) * 0.08;
    shape.style.transform = `translateY(${y * speed}px)`;
  });
}, { passive: true });

/* ================================================
   TYPED TEXT EFFECT (Hero Badge)
   ================================================ */
(function typeEffect() {
  const badge = document.querySelector('.hero-badge');
  if (!badge) return;
  const texts = [
    'Premium IT Solutions',
    'Web Development Experts',
    'Cloud Technology Leaders',
    'Digital Transformation',
  ];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const iconHTML = '<i class="fas fa-star"></i> ';

  function type() {
    const current = texts[index];
    if (isDeleting) {
      badge.innerHTML = iconHTML + current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      badge.innerHTML = iconHTML + current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 100;
    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      delay = 300;
    }
    setTimeout(type, delay);
  }

  setTimeout(type, 2500);
})();

/* ================================================
   CARD TILT EFFECT ON MOUSE MOVE
   ================================================ */
document.querySelectorAll('.service-card, .pricing-card, .why-card').forEach(card => {
  card.addEventListener('mousemove', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = '';
  });
});

/* ================================================
   NUMBER INCREMENT FOR HERO STATS (on visible)
   ================================================ */
const heroStatObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(el => animateCounter(el));
      heroStatObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroStatObserver.observe(heroStats);

/* ================================================
   LAZY IMAGE LOADING
   ================================================ */
const lazyImages = document.querySelectorAll('img[data-src]');
if (lazyImages.length) {
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        imgObserver.unobserve(entry.target);
      }
    });
  });
  lazyImages.forEach(img => imgObserver.observe(img));
}

/* ================================================
   NEWSLETTER FORM
   ================================================ */
const newsletterBtn = document.querySelector('.newsletter-form button');
if (newsletterBtn) {
  newsletterBtn.addEventListener('click', function () {
    const input = this.previousElementSibling;
    if (!input.value.trim() || !input.value.includes('@')) {
      input.style.borderColor = '#ef4444';
      return;
    }
    input.style.borderColor = '#10b981';
    this.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
      input.value = '';
      input.style.borderColor = '';
      this.innerHTML = '<i class="fas fa-paper-plane"></i>';
    }, 2000);
  });
}

/* ================================================
   SCROLL PROGRESS BAR
   ================================================ */
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 3px; width: 0%;
    background: linear-gradient(90deg, #3b82f6, #7c3aed);
    z-index: 99999; transition: width 0.1s linear;
    box-shadow: 0 0 10px rgba(59,130,246,0.5);
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (window.scrollY / total) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

/* ================================================
   TESTIMONIAL CAROUSEL AUTO-PLAY PAUSE ON HOVER
   ================================================ */
const testimonialEl = document.getElementById('testimonialSlider');
if (testimonialEl) {
  testimonialEl.addEventListener('mouseenter', () => {
    bootstrap.Carousel.getInstance(testimonialEl)?.pause();
  });
  testimonialEl.addEventListener('mouseleave', () => {
    bootstrap.Carousel.getInstance(testimonialEl)?.cycle();
  });
}

/* ================================================
   RIPPLE EFFECT ON BUTTONS
   ================================================ */
document.querySelectorAll('.btn-primary-custom, .btn-outline-custom, .pricing-btn, .filter-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position: absolute; border-radius: 50%;
      width: ${size}px; height: ${size}px;
      left: ${e.clientX - rect.left - size / 2}px;
      top: ${e.clientY - rect.top - size / 2}px;
      background: rgba(255,255,255,0.4);
      transform: scale(0); animation: rippleAnim 0.6s linear;
      pointer-events: none;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Inject ripple keyframes
const style = document.createElement('style');
style.textContent = '@keyframes rippleAnim { to { transform: scale(4); opacity: 0; } }';
document.head.appendChild(style);

/* ================================================
   MOBILE MENU BACKGROUND CLICK CLOSE
   ================================================ */
document.addEventListener('click', function (e) {
  const menu = document.getElementById('navMenu');
  const toggle = document.querySelector('.navbar-toggler');
  if (menu && menu.classList.contains('show') && !menu.contains(e.target) && !toggle.contains(e.target)) {
    bootstrap.Collapse.getInstance(menu)?.hide();
  }
});

/* ================================================
   IMAGE ERROR FALLBACK
   ================================================ */
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function () {
    this.style.display = 'none';
  });
});

console.log('%cJK Cloud Technologies', 'color:#3b82f6;font-size:1.5rem;font-weight:900;');
console.log('%cBuilding Powerful Digital Solutions 🚀', 'color:#7c3aed;font-size:0.9rem;');
