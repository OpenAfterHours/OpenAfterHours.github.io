(() => {
  const isTouch = window.matchMedia('(hover: none)').matches;

  // ---- Typewriter ----
  const typer = document.querySelector('.t1-typer');
  if (typer) {
    const text = typer.querySelector('.t1-typer-text');
    let phrases;
    try { phrases = JSON.parse(typer.dataset.phrases); } catch { phrases = []; }
    if (phrases.length && text) {
      let phraseIdx = 0;
      let phase = 'typing';
      let i = 0;
      const tick = () => {
        const target = phrases[phraseIdx];
        let delay;
        if (phase === 'typing') {
          if (i < target.length) {
            i++;
            text.textContent = target.slice(0, i);
            delay = 65;
          } else {
            phase = 'holding';
            delay = 1400;
          }
        } else if (phase === 'holding') {
          phase = 'deleting';
          delay = 0;
        } else {
          if (i > 0) {
            i--;
            text.textContent = target.slice(0, i);
            delay = 35;
          } else {
            phraseIdx = (phraseIdx + 1) % phrases.length;
            phase = 'typing';
            delay = 200;
          }
        }
        setTimeout(tick, delay);
      };
      tick();
    }
  }

  // ---- Cursor parallax on formulas (pointer devices only) ----
  if (!isTouch) {
    const hero = document.querySelector('.t1-hero');
    const layer = document.querySelector('.t1-formula-layer');
    if (hero && layer) {
      const spans = [...layer.children];
      hero.addEventListener('mousemove', (e) => {
        const r = hero.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width - 0.5;
        const cy = (e.clientY - r.top) / r.height - 0.5;
        spans.forEach((s, idx) => {
          const depth = (idx % 4 + 1) * 6;
          s.style.translate = `${cx * depth}px ${cy * depth}px`;
        });
      });
      hero.addEventListener('mouseleave', () => {
        spans.forEach((s) => { s.style.translate = ''; });
      });
    }
  }

  // ---- Tap-to-flip on cards (touch devices) ----
  const cards = document.querySelectorAll('.t1-flip');
  if (isTouch && cards.length) {
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) return;
        cards.forEach((c) => { if (c !== card) c.classList.remove('is-flipped'); });
        card.classList.toggle('is-flipped');
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.t1-flip')) {
        cards.forEach((c) => c.classList.remove('is-flipped'));
      }
    });
  }
})();
