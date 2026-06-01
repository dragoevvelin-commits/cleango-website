// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

// Before/After sliders
document.querySelectorAll('.ba').forEach(slider => {
  const beforeEl = slider.querySelector('.ba-before');
  const afterEl  = slider.querySelector('.ba-after');
  const range    = slider.querySelector('.ba-range');
  if (beforeEl) beforeEl.style.backgroundImage = `url('${slider.dataset.before}')`;
  if (afterEl)  afterEl.style.backgroundImage  = `url('${slider.dataset.after}')`;
  if (range) {
    const update = v => slider.style.setProperty('--p', v + '%');
    range.addEventListener('input', e => update(e.target.value));
    update(50);
  }
});

// Scroll fade-in (progressive enhancement — only hides elements if JS loads)
document.body.classList.add('js-fi');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });
document.querySelectorAll('.fi').forEach(el => io.observe(el));

// Portfolio filter
const fBtns  = document.querySelectorAll('.f-btn');
const pItems = document.querySelectorAll('.port-item');
fBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    fBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    pItems.forEach(item => {
      item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
    });
  });
});

// Contact form (placeholder)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.textContent = 'Изпращане…'; btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Изпратено!'; btn.style.background = '#2e7d32';
      setTimeout(() => {
        btn.textContent = 'Изпратете запитване';
        btn.disabled = false; btn.style.background = '';
        form.reset();
      }, 3000);
    }, 900);
  });
}
