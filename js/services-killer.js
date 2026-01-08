/* ========================================
   SERVICES SECTION - KILLER ANIMATIONS JS
   Interactive particles, 3D tilt, and
   counter animations
   ======================================== */

(function() {
  'use strict';

  // ==================== PARTICLE SYSTEM ====================
  function createServicesParticles() {
    const container = document.getElementById('servicesParticles');
    if (!container) return;

    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.borderRadius = '50%';
      
      // Use futuristic AI colors
      const colors = [
        'rgba(106, 0, 255, 0.6)',   // violet
        'rgba(0, 242, 255, 0.6)',   // blue
        'rgba(76, 201, 240, 0.6)'   // cyan
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.pointerEvents = 'none';
      particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
      
      // Animation properties
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      
      particle.style.animation = `floatServiceParticle ${duration}s ${delay}s infinite ease-in-out`;
      
      container.appendChild(particle);
    }

    // Add keyframes
    if (!document.getElementById('serviceParticleKeyframes')) {
      const style = document.createElement('style');
      style.id = 'serviceParticleKeyframes';
      style.textContent = `
        @keyframes floatServiceParticle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translate(30px, -40px) scale(1.3);
            opacity: 0.8;
          }
          50% {
            transform: translate(-20px, -70px) scale(0.7);
            opacity: 0.5;
          }
          75% {
            transform: translate(35px, -50px) scale(1.1);
            opacity: 0.6;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ==================== 3D TILT EFFECT ====================
  function init3DTilt() {
    const tiltElements = document.querySelectorAll('.service-card[data-tilt]');
    
    tiltElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
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
    const counters = document.querySelectorAll('.services-stats .stat-value[data-count]');
    
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
    
    // Intersection Observer
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

  // ==================== ICON PARTICLES ====================
  function createIconParticles() {
    const containers = document.querySelectorAll('.service-icon-particles');
    
    containers.forEach(container => {
      const particleCount = 8;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.borderRadius = '50%';
        particle.style.background = 'currentColor';
        particle.style.opacity = '0.6';
        
        const angle = (360 / particleCount) * i;
        const distance = 40;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;
        
        particle.style.left = `calc(50% + ${x}px)`;
        particle.style.top = `calc(50% + ${y}px)`;
        particle.style.animation = `orbitIconParticle 3s ${i * 0.2}s infinite ease-in-out`;
        
        container.appendChild(particle);
      }
    });

    // Add orbit keyframes
    if (!document.getElementById('iconOrbitKeyframes')) {
      const style = document.createElement('style');
      style.id = 'iconOrbitKeyframes';
      style.textContent = `
        @keyframes orbitIconParticle {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.3;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ==================== MAGNETIC CURSOR EFFECT ====================
  function initMagneticEffect() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = x * 0.05;
        const moveY = y * 0.05;
        
        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ==================== SCROLL REVEAL ====================
  function initScrollReveal() {
    const elements = document.querySelectorAll('.services-killer [data-animate]');
    
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
    
    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(element);
    });
  }

  // ==================== PARALLAX ORBS ====================
  function initOrbParallax() {
    const orbs = document.querySelectorAll('.services-orb');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const servicesSection = document.querySelector('.services-killer');
      
      if (!servicesSection) return;
      
      const rect = servicesSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView) {
        orbs.forEach((orb, index) => {
          const speed = (index + 1) * 0.04;
          const yPos = -(scrolled * speed);
          orb.style.transform = `translateY(${yPos}px)`;
        });
      }
    });
  }

  // ==================== FEATURE LIST ANIMATION ====================
  function initFeatureAnimations() {
    const features = document.querySelectorAll('.service-features li');
    
    features.forEach((feature, index) => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateX(-20px)';
      feature.style.transition = `all 0.4s ease ${index * 0.1}s`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const features = entry.target.querySelectorAll('.service-features li');
          features.forEach((feature, index) => {
            setTimeout(() => {
              feature.style.opacity = '1';
              feature.style.transform = 'translateX(0)';
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));
  }

  // ==================== GLOW PULSE ON HOVER ====================
  function initGlowPulse() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const glow = this.querySelector('.service-card-glow');
        if (glow) {
          glow.style.animation = 'pulseGlow 1.5s ease-in-out infinite';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        const glow = this.querySelector('.service-card-glow');
        if (glow) {
          glow.style.animation = 'none';
        }
      });
    });

    if (!document.getElementById('glowPulseKeyframes')) {
      const style = document.createElement('style');
      style.id = 'glowPulseKeyframes';
      style.textContent = `
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ==================== INITIALIZE ALL ====================
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    createServicesParticles();
    init3DTilt();
    animateCounters();
    createIconParticles();
    initMagneticEffect();
    initScrollReveal();
    initOrbParallax();
    initFeatureAnimations();
    initGlowPulse();

    console.log('Services section killer animations initialized! 🚀');
  }

  init();
})();
