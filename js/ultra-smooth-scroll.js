// ===================================
// ULTRA SMOOTH SCROLL - JAVASCRIPT
// Butter-smooth momentum scrolling
// ===================================

(function() {
    'use strict';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignore empty hash
            if (href === '#' || href === '#0') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Ultra smooth scroll with custom easing
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
                
                // Update URL without jumping
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            }
        });
    });
    
    // Optimize scroll performance with requestAnimationFrame
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    function updateScrollEffects() {
        lastScrollY = window.scrollY;
        ticking = false;
        
        // Add any scroll-based effects here
        // This runs at 60fps for smooth performance
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }, { passive: true });
    
    // Smooth scroll to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Debounce resize events for performance
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Handle resize here if needed
        }, 150);
    }, { passive: true });
    
    // Optimize animations with Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.glass-card, .service, .project, .exp-card, .skill-card').forEach(el => {
        observer.observe(el);
    });
    
    console.log('✅ Ultra smooth scroll initialized!');
})();
