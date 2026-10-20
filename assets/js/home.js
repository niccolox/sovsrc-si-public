(() => {
  const controls = document.querySelector('.home-filters');
  const gallery = document.querySelector('.story-gallery');
  const status = document.getElementById('home-results');
  if (!controls || !gallery || !status) return;

  const buttons = [...controls.querySelectorAll('button[data-topic]')];
  const cards = [...gallery.querySelectorAll('.story-card')];
  controls.hidden = false;
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const topic = button.dataset.topic;
      let count = 0;
      for (const card of cards) {
        card.hidden = topic !== 'all' && card.dataset.topic !== topic;
        if (!card.hidden) count += 1;
      }
      for (const control of buttons) control.setAttribute('aria-pressed', String(control === button));
      status.textContent = topic === 'all'
        ? `${count} illustrated articles from the public library.`
        : `${count} articles on ${button.textContent.toLocaleLowerCase()}.`;
    });
  }
})();
