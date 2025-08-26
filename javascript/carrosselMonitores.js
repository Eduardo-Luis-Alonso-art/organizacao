document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.monitor-card');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const carrosselContainer = document.querySelector('.carrossel-monitores');
  if (!cards.length || !prevBtn || !nextBtn || !carrosselContainer) return;

  let currentIndex = 0;
  let intervalId;

  function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    cards[index].classList.add('active');
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  function startCarrossel() {
    intervalId = setInterval(nextCard, 5000);
  }

  function pauseCarrossel() {
    clearInterval(intervalId);
  }

  nextBtn.addEventListener('click', () => {
    nextCard();
    pauseCarrossel();
    startCarrossel();
  });

  prevBtn.addEventListener('click', () => {
    prevCard();
    pauseCarrossel();
    startCarrossel();
  });

  carrosselContainer.addEventListener('mouseenter', pauseCarrossel);
  carrosselContainer.addEventListener('mouseleave', startCarrossel);

  showCard(currentIndex);
  startCarrossel();
});