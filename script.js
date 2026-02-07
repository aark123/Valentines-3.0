

(function () {
  'use strict';

  const PETAL_CHARS = ['🌸', '💗', '🩷', '✿'];
  const PETAL_COUNT = 18;
  const MIN_DURATION = 7;
  const MAX_DURATION = 14;

  function createPetal() {
    const petal = document.createElement('span');
    petal.classList.add('petal');
    petal.textContent = PETAL_CHARS[Math.floor(Math.random() * PETAL_CHARS.length)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = (1 + Math.random() * 1) + 'rem';

    const duration = MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION);
    petal.style.animationDuration = duration + 's';
    petal.style.animationDelay = Math.random() * 6 + 's';

    document.body.appendChild(petal);


    setTimeout(() => {
      petal.remove();
    }, (duration + 7) * 1000);
  }

  function spawnPetals() {
    for (let i = 0; i < PETAL_COUNT; i++) {
      createPetal();
    }

    setInterval(() => { createPetal(); }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', spawnPetals);
  } else {
    spawnPetals();
  }
})();
