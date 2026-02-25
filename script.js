/* ════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════ */
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

let mx = -200, my = -200, fx = -200, fy = -200;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

// Smooth follower
(function followCursor() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  cursorFollower.style.left = fx + 'px';
  cursorFollower.style.top  = fy + 'px';
  requestAnimationFrame(followCursor);
})();

// Hover state
document.querySelectorAll('a, button, .proj__card, .contact__card, .act__card, .skill-tags span').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ════════════════════════════════
   NAV: SCROLL + ACTIVE LINKS
════════════════════════════════ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Active nav link on scroll
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__links a');

const secObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35, rootMargin: `-${nav.offsetHeight}px 0px -50% 0px` });

sections.forEach(s => secObserver.observe(s));

/* ════════════════════════════════
   MOBILE MENU
════════════════════════════════ */
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

function toggleMenu(state) {
  menuOpen = state;
  mobileMenu.classList.toggle('open', menuOpen);
  const [s0, s1, s2] = burger.querySelectorAll('span');
  if (menuOpen) {
    s0.style.transform = 'rotate(45deg) translate(5px, 5px)';
    s1.style.opacity   = '0';
    s2.style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    s0.style.transform = s1.style.transform = s2.style.transform = '';
    s1.style.opacity = '';
  }
}

burger.addEventListener('click', () => toggleMenu(!menuOpen));
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => toggleMenu(false)));

/* ════════════════════════════════
   SMOOTH SCROLL WITH NAV OFFSET
════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - nav.offsetHeight, behavior: 'smooth' });
  });
});

/* ════════════════════════════════
   SCROLL REVEAL
════════════════════════════════ */
const reveals = document.querySelectorAll('.scroll-reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), i * 60);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => revealObs.observe(el));

/* ════════════════════════════════
   COUNTER ANIMATION
════════════════════════════════ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = 16;
  const totalSteps = duration / step;
  let current = 0;
  const increment = target / totalSteps;
  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, step);
}

const counterEls = document.querySelectorAll('.counter__num[data-target]');
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counterEls.forEach(el => counterObs.observe(el));

/* ════════════════════════════════
   PROJECT FILTERS
════════════════════════════════ */
const filterBtns = document.querySelectorAll('.proj__filter');
const projCards  = document.querySelectorAll('.proj__card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    let delay = 0;
    projCards.forEach(card => {
      const cats = card.dataset.category || '';
      const show = filter === 'all' || cats.split(' ').includes(filter);

      if (show) {
        card.classList.remove('hidden');
        card.style.transition = `opacity .4s ease ${delay}s, transform .4s ease ${delay}s, border-color .3s, box-shadow .3s`;
        card.classList.remove('in-view');
        setTimeout(() => card.classList.add('in-view'), 10);
        delay += 0.05;
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ════════════════════════════════
   TYPING EFFECT — hero sub
════════════════════════════════ */
const roles = [
  'Supply Chain &amp; Operations',
  'Engineering Management',
  'Operations Research',
  'Data Analytics',
  'Project Management',
];
const subEl = document.querySelector('.hero__sub');
const monoTag = subEl ? subEl.querySelector('.mono-tag') : null;

if (subEl && monoTag) {
  let rIdx = 0, cIdx = 0, deleting = false;

  function typeRole() {
    const plain = roles[rIdx].replace(/&amp;/g, '&');
    const current = plain;

    if (!deleting) {
      const partial = current.slice(0, cIdx + 1);
      subEl.innerHTML = `<span class="mono-tag">MEM @ NC State</span> ${partial}<span class="type-cursor">|</span>`;
      cIdx++;
      if (cIdx === current.length) {
        deleting = true;
        return setTimeout(typeRole, 2200);
      }
    } else {
      const partial = current.slice(0, cIdx - 1);
      subEl.innerHTML = `<span class="mono-tag">MEM @ NC State</span> ${partial}<span class="type-cursor">|</span>`;
      cIdx--;
      if (cIdx === 0) {
        deleting = false;
        rIdx = (rIdx + 1) % roles.length;
      }
    }
    setTimeout(typeRole, deleting ? 45 : 75);
  }

  // Add cursor style
  const style = document.createElement('style');
  style.textContent = `.type-cursor{color:var(--gold);animation:cursorBlink .7s step-end infinite}@keyframes cursorBlink{0%,100%{opacity:1}50%{opacity:0}}`;
  document.head.appendChild(style);

  setTimeout(typeRole, 1800);
}

/* ════════════════════════════════
   PARALLAX ORBS
════════════════════════════════ */
const orb1 = document.querySelector('.hero__orb--1');
const orb2 = document.querySelector('.hero__orb--2');

if (orb1 && orb2) {
  window.addEventListener('mousemove', e => {
    const xRatio = (e.clientX / window.innerWidth - 0.5);
    const yRatio = (e.clientY / window.innerHeight - 0.5);
    orb1.style.transform = `translate(${xRatio * 30}px, ${yRatio * 30}px)`;
    orb2.style.transform = `translate(${xRatio * -20}px, ${yRatio * -20}px)`;
  }, { passive: true });
}

/* ════════════════════════════════
   PHOTO SCENE TILT
════════════════════════════════ */
const photoScene = document.querySelector('.photo-scene');
if (photoScene) {
  photoScene.addEventListener('mousemove', e => {
    const rect = photoScene.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / rect.height) * -12;
    const ry = ((e.clientX - cx) / rect.width) * 12;
    photoScene.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  photoScene.addEventListener('mouseleave', () => {
    photoScene.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
  });
}
