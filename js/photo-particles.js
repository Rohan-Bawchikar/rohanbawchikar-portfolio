// =============================================
// PROFILE PHOTO - ADVANCED PARTICLE SYSTEM
// Magnetic cursor attraction & dynamic effects
// =============================================

(function() {
    'use strict';
    
    const photoContainer = document.querySelector('.profile-photo-container');
    const photoFrame = document.querySelector('.photo-frame');
    const particlesContainer = document.querySelector('.photo-particles');
    
    if (!photoContainer || !photoFrame) return;
    
    // Desktop-only interactive effects
    const isDesktop = window.innerWidth > 768;
    
    if (isDesktop) {
        // Magnetic Cursor Effect
        photoFrame.addEventListener('mousemove', (e) => {
            const rect = photoFrame.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.05;
            const moveY = y * 0.05;
            
            photoFrame.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.08) rotate(5deg)`;
        });
        
        photoFrame.addEventListener('mouseleave', () => {
            photoFrame.style.transform = '';
        });
        
        // Create Cursor Follower Particles
        let mouseX = 0;
        let mouseY = 0;
        let particles = [];
        
        photoContainer.addEventListener('mousemove', (e) => {
            const rect = photoContainer.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            
            // Create particle trail
            if (Math.random() > 0.7) {
                createCursorParticle(mouseX, mouseY);
            }
        });
        
        function createCursorParticle(x, y) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '100';
            
            const colors = [
                'rgba(139, 92, 246, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(245, 158, 11, 0.8)'
            ];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.boxShadow = '0 0 10px currentColor';
            
            photoContainer.appendChild(particle);
            particles.push(particle);
            
            // Animate particle
            let opacity = 1;
            let scale = 1;
            const interval = setInterval(() => {
                opacity -= 0.02;
                scale += 0.05;
                particle.style.opacity = opacity;
                particle.style.transform = `scale(${scale})`;
                
                if (opacity <= 0) {
                    clearInterval(interval);
                    particle.remove();
                    particles = particles.filter(p => p !== particle);
                }
            }, 16);
        }
    }
    
    // Enhanced Particle Animation
    if (particlesContainer) {
        const allParticles = particlesContainer.querySelectorAll('.particle');
        
        allParticles.forEach((particle, index) => {
            // Random initial animation delay
            particle.style.animationDelay = (index * 0.25) + 's';
            
            // Add dynamic color shift
            setInterval(() => {
                if (!isDesktop) return; // Skip on mobile for performance
                
                const colors = [
                    'radial-gradient(circle, rgba(139, 92, 246, 1), transparent)',
                    'radial-gradient(circle, rgba(59, 130, 246, 1), transparent)',
                    'radial-gradient(circle, rgba(34, 197, 94, 1), transparent)',
                    'radial-gradient(circle, rgba(245, 158, 11, 1), transparent)',
                    'radial-gradient(circle, rgba(239, 68, 68, 1), transparent)'
                ];
                
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            }, 3000 + (index * 500));
        });
    }
    
    // Intersection Observer for Animation Trigger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                photoContainer.classList.add('revealed');
                photoContainer.style.opacity = '1';
            }
        });
    }, { threshold: 0.2 });
    
    if (photoContainer) {
        photoContainer.style.opacity = '0';
        photoContainer.style.transition = 'opacity 1s ease-out';
        observer.observe(photoContainer);
    }
    
    // Status Badge Interaction
    const statusBadge = document.querySelector('.photo-status');
    if (statusBadge && isDesktop) {
        statusBadge.addEventListener('mouseenter', () => {
            statusBadge.style.transform = 'translateX(-50%) scale(1.1)';
            statusBadge.style.boxShadow = '0 0 60px rgba(34, 197, 94, 1), 0 10px 40px rgba(0, 0, 0, 0.4)';
        });
        
        statusBadge.addEventListener('mouseleave', () => {
            statusBadge.style.transform = 'translateX(-50%) scale(1)';
            statusBadge.style.boxShadow = '';
        });
    }
    
    // Performance optimization: Pause animations when not in viewport
    const pauseableElements = document.querySelectorAll('.photo-orb, .photo-border-glow, .photo-particles');
    const performanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            pauseableElements.forEach(el => {
                if (entry.isIntersecting) {
                    el.style.animationPlayState = 'running';
                } else {
                    el.style.animationPlayState = 'paused';
                }
            });
        });
    }, { threshold: 0 });
    
    if (photoContainer) {
        performanceObserver.observe(photoContainer);
    }
    
    console.log('🔥 Profile Photo Killer Effects Activated!');
    
})();
