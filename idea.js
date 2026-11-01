const SIGN_SELECTOR = '.sign';
const HERO_SELECTOR = '.hero';
const KICK_CLASS = 'is-kicked';
const KICK_MS = 3200;
const PETAL_COUNT = 16;
const PETAL_CLASS = 'petal';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const sign = document.querySelector(SIGN_SELECTOR);
const hero = document.querySelector(HERO_SELECTOR);

function kick() {
  sign.classList.remove(KICK_CLASS);
  sign.getBoundingClientRect();
  sign.classList.add(KICK_CLASS);
  setTimeout(() => sign.classList.remove(KICK_CLASS), KICK_MS);
}

function scatterPetals() {
  for (let index = 0; index < PETAL_COUNT; index += 1) {
    const petal = document.createElement('span');
    petal.className = PETAL_CLASS;
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${9 + Math.random() * 8}s`;
    petal.style.animationDelay = `${-Math.random() * 16}s`;
    hero.appendChild(petal);
  }
}

sign.addEventListener('click', kick);
sign.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    kick();
  }
});

if (!matchMedia(REDUCED_MOTION_QUERY).matches) scatterPetals();
