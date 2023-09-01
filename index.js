const btnCatch = document.getElementById('btnCatch');

function getRandomValue(max) {
  return Math.floor(Math.random() * max);
}

function moveButton() {
  btnCatch.style.left = getRandomValue(window.innerWidth - btnCatch.clientWidth) + 'px';
  btnCatch.style.top = getRandomValue(window.innerHeight - btnCatch.clientHeight) + 'px';
}

btnCatch.addEventListener('mouseover', moveButton);

