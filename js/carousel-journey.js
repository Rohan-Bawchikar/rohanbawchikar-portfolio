// ========================================
// HORIZONTAL CAROUSEL JOURNEY
// ========================================

(function() {
  'use strict';

  const container = document.querySelector('.carousel-container');
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.journey-card');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');
  const dots = document.querySelectorAll('.dot');

  if (!container || !track || cards.length === 0) return;

  let currentIndex = 0;

  // Scroll to specific card
  function scrollToCard(index) {
    const card = cards[index];
    if (!card) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const scrollLeft = container.scrollLeft + cardRect.left - containerRect.left - (containerRect.width / 2) + (cardRect.width / 2);

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });

    currentIndex = index;
    updateDots();
  }

  // Update active dot
  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const newIndex = Math.max(0, currentIndex - 1);
      scrollToCard(newIndex);
    });
  }

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const newIndex = Math.min(cards.length - 1, currentIndex + 1);
      scrollToCard(newIndex);
    });
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      scrollToCard(index);
    });
  });

  // Scroll to first card on load
  scrollToCard(0);

  console.log('🎯 Horizontal Carousel Journey initialized!');
})();
