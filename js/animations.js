// Animations: custom cursor, floating particles, magnetic buttons, and experience cards
// Custom Cursor
(function() {
	const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced) return;
	
	const cursorDot = document.getElementById('cursorDot');
	const cursorOutline = document.getElementById('cursorOutline');
	if (!cursorDot || !cursorOutline) return;
	
	// Check if it's a touch device
	const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	if (isTouchDevice) return;
	
	document.body.classList.add('cursor-active');
	
	let mouseX = 0, mouseY = 0;
	let outlineX = 0, outlineY = 0;
	
	document.addEventListener('mousemove', (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
		cursorDot.style.left = mouseX + 'px';
		cursorDot.style.top = mouseY + 'px';
	});
	
	// Smooth follow for outline
	function animateOutline() {
		outlineX += (mouseX - outlineX) * 0.15;
		outlineY += (mouseY - outlineY) * 0.15;
		cursorOutline.style.left = outlineX + 'px';
		cursorOutline.style.top = outlineY + 'px';
		requestAnimationFrame(animateOutline);
	}
	animateOutline();
	
	// Add hover class for interactive elements
	const interactiveElements = document.querySelectorAll('a, button, .btn, .project, .service');
	interactiveElements.forEach(el => {
		el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
		el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
	});
})();

// Floating Particles
(function() {
	const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced) return;
	
	const particlesContainer = document.getElementById('particles');
	if (!particlesContainer) return;
	
	const particleCount = 30;
	
	for (let i = 0; i < particleCount; i++) {
		const particle = document.createElement('div');
		particle.className = 'particle';
		
		const size = Math.random() * 6 + 2;
		particle.style.width = size + 'px';
		particle.style.height = size + 'px';
		
		particle.style.left = Math.random() * 100 + '%';
		particle.style.setProperty('--float-x', (Math.random() * 200 - 100) + 'px');
		
		const duration = Math.random() * 10 + 15;
		particle.style.animationDuration = duration + 's';
		particle.style.animationDelay = Math.random() * 5 + 's';
		
		particlesContainer.appendChild(particle);
	}
})();

// Magnetic Button Effect
(function() {
	const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced) return;
	
	const buttons = document.querySelectorAll('.btn');
	
	buttons.forEach(button => {
		button.addEventListener('mousemove', (e) => {
			const rect = button.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			
			button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
		});
		
		button.addEventListener('mouseleave', () => {
			button.style.transform = 'translate(0, 0)';
		});
	});
})();

// Social Icons Animation
(function() {
	const sciIcons = document.querySelectorAll('.sci a');
	
	sciIcons.forEach((icon, index) => {
		icon.style.animationDelay = (index * 0.1) + 's';
	});
})();

// Experience Section - Expand/Collapse functionality
document.addEventListener('DOMContentLoaded', function() {
	const expandButtons = document.querySelectorAll('.expand-btn');
	
	expandButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			const targetId = this.getAttribute('data-target');
			const details = document.getElementById(targetId);
			const isExpanded = this.getAttribute('aria-expanded') === 'true';
			
			if (isExpanded) {
				// Collapse
				details.classList.remove('expanded');
				this.setAttribute('aria-expanded', 'false');
				this.querySelector('.expand-text').textContent = 'View Details';
			} else {
				// Expand
				details.classList.add('expanded');
				this.setAttribute('aria-expanded', 'true');
				this.querySelector('.expand-text').textContent = 'Hide Details';
			}
		});
	});
	
	// Animate progress bars when cards are revealed
	const experienceGrid = document.querySelector('.experience-grid');
	if (experienceGrid) {
		const progressObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const progressBars = entry.target.querySelectorAll('.progress-bar');
					progressBars.forEach(bar => {
						const progress = bar.getAttribute('data-progress');
						bar.style.setProperty('--progress', progress);
					});
					progressObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.2 });
		
		progressObserver.observe(experienceGrid);
	}
});
