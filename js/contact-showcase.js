// ========================================
// KILLER CONTACT SHOWCASE - JAVASCRIPT
// 3D Tilt | Number Counter | Particles
// ========================================

(function() {
  'use strict';

  // ============================================
  // 3D TILT EFFECT ON MOUSE MOVE
  // ============================================
  const tiltCards = document.querySelectorAll('[data-tilt]');
  
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', handleTilt);
    card.addEventListener('mouseleave', resetTilt);
  });

  function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }

  // ============================================
  // ANIMATED NUMBER COUNTERS
  // ============================================
  const counters = document.querySelectorAll('.highlight-number[data-count]');
  let counterAnimated = false;

  function animateCounters() {
    if (counterAnimated) return;
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
    
    counterAnimated = true;
  }

  // Trigger counter animation when section is in view
  const showcaseSection = document.querySelector('.contact-showcase');
  if (showcaseSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(showcaseSection);
  }

  // ============================================
  // COPY EMAIL FUNCTION
  // ============================================
  window.copyEmail = function() {
    const email = 'ro.bawchikar07@gmail.com';
    
    // Create temporary element
    const temp = document.createElement('textarea');
    temp.value = email;
    temp.style.position = 'absolute';
    temp.style.left = '-9999px';
    document.body.appendChild(temp);
    
    // Select and copy
    temp.select();
    temp.setSelectionRange(0, 99999); // For mobile
    
    try {
      document.execCommand('copy');
      showCopyFeedback();
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    
    document.body.removeChild(temp);
  };

  function showCopyFeedback() {
    const btn = event.target.closest('.card-action');
    if (!btn) return;
    
    const originalText = btn.querySelector('.action-text').textContent;
    btn.querySelector('.action-text').textContent = 'Copied!';
    btn.querySelector('.action-icon').className = 'fa-solid fa-check action-icon';
    
    setTimeout(() => {
      btn.querySelector('.action-text').textContent = originalText;
      btn.querySelector('.action-icon').className = 'fa-solid fa-copy action-icon';
    }, 2000);
  }

  // ============================================
  // FLOATING PARTICLES GENERATION
  // ============================================
  const particlesContainer = document.getElementById('showcaseParticles');
  if (particlesContainer) {
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'showcase-particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      const duration = Math.random() * 10 + 15;
      particle.style.animationDuration = duration + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      
      particlesContainer.appendChild(particle);
    }
  }

  console.log('🚀 Contact Showcase initialized with killer effects!');
})();
