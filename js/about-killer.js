/* ========================================
   ABOUT SECTION - KILLER ANIMATIONS JS
   Interactive particles, 3D tilt, and
   counter animations
   ======================================== */

(function() {
  'use strict';

  // ==================== PARTICLE SYSTEM ====================
  function createAboutParticles() {
    const container = document.getElementById('aboutParticles');
    if (!container) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.borderRadius = '50%';
      particle.style.background = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.3})`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.pointerEvents = 'none';
      
      // Animation properties
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      const distance = Math.random() * 100 + 50;
      
      particle.style.animation = `floatParticle ${duration}s ${delay}s infinite ease-in-out`;
      
      container.appendChild(particle);
    }

    // Add keyframes for particle animation
    if (!document.getElementById('particleKeyframes')) {
      const style = document.createElement('style');
      style.id = 'particleKeyframes';
      style.textContent = `
        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(-15px, -60px) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translate(25px, -40px) scale(1.1);
            opacity: 0.5;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ==================== 3D TILT EFFECT ====================
  function init3DTilt() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        element.style.setProperty('--tilt-x', `${-rotateX}deg`);
        element.style.setProperty('--tilt-y', `${rotateY}deg`);
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.setProperty('--tilt-x', '0deg');
        element.style.setProperty('--tilt-y', '0deg');
      });
    });
  }

  // ==================== COUNTER ANIMATION ====================
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    };
    
    // Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  }

  // ==================== SCROLL REVEAL ANIMATIONS ====================
  function initScrollReveal() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0)';
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(element);
    });
  }

  // ==================== FLOATING AVATAR PARTICLES ====================
  function createAvatarParticles() {
    const container = document.querySelector('.avatar-particles');
    if (!container) return;

    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 3 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.borderRadius = '50%';
      particle.style.background = `rgba(102, 126, 234, ${Math.random() * 0.6 + 0.2})`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      const duration = Math.random() * 5 + 3;
      const delay = Math.random() * 2;
      
      particle.style.animation = `floatAvatarParticle ${duration}s ${delay}s infinite ease-in-out`;
      
      container.appendChild(particle);
    }

    // Add keyframes for avatar particle animation
    if (!document.getElementById('avatarParticleKeyframes')) {
      const style = document.createElement('style');
      style.id = 'avatarParticleKeyframes';
      style.textContent = `
        @keyframes floatAvatarParticle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
          50% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ==================== BADGE HOVER ANIMATIONS ====================
  function initBadgeAnimations() {
    const badges = document.querySelectorAll('.badge');
    
    badges.forEach(badge => {
      badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
      });
      
      badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // ==================== PASSION ITEM RIPPLE EFFECT ====================
  function initPassionRipple() {
    const items = document.querySelectorAll('.passion-item');
    
    items.forEach(item => {
      item.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(102, 126, 234, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Add ripple keyframes
    if (!document.getElementById('rippleKeyframes')) {
      const style = document.createElement('style');
      style.id = 'rippleKeyframes';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ==================== ENHANCED PARALLAX FOR ORBS ====================
  function initOrbParallax() {
    const orbs = document.querySelectorAll('.about-orb');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const aboutSection = document.querySelector('.about-killer');
      
      if (!aboutSection) return;
      
      const rect = aboutSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView) {
        orbs.forEach((orb, index) => {
          const speed = (index + 1) * 0.05;
          const yPos = -(scrolled * speed);
          orb.style.transform = `translateY(${yPos}px)`;
        });
      }
    });
  }

  // ==================== INITIALIZE ALL ====================
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all animations
    createAboutParticles();
    init3DTilt();
    animateCounters();
    initScrollReveal();
    createAvatarParticles();
    initBadgeAnimations();
    initPassionRipple();
    initOrbParallax();

    console.log('About section killer animations initialized! 🎉');
  }

  // Start initialization
  init();
})();
