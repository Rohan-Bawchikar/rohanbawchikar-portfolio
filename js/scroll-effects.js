// Scroll effects: parallax, progress bar, and scroll reveals
// Parallax scroll effects
(function() {
	const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce').matches;
	if (prefersReduced) return;
	
	const back = document.querySelector('.parallax .layer-back');
	const front = document.querySelector('.parallax .layer-front');
	if (!back || !front) return;
	
	let ticking = false;
	
	const onScroll = () => {
		if (ticking) return;
		
		window.requestAnimationFrame(() => {
			const y = window.scrollY || window.pageYOffset;
			back.style.transform = 'translateY(' + (y * 0.15) + 'px)';
			front.style.transform = 'translateY(' + (y * 0.30) + 'px)';
			ticking = false;
		});
		
		ticking = true;
	};
	
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
})();

// Scroll reveal animations
(function() {
	const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced) return;
	
	const items = document.querySelectorAll('[data-animate]');
	const io = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('revealed');
				io.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15 });
	
	items.forEach(el => io.observe(el));
})();

// Scroll Progress Indicator
(function() {
	const scrollProgress = document.getElementById('scrollProgress');
	if (!scrollProgress) return;
	
	let ticking = false;
	
	function updateScrollProgress() {
		if (ticking) return;
		
		window.requestAnimationFrame(() => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scrollPercent = (scrollTop / docHeight) * 100;
			scrollProgress.style.width = scrollPercent + '%';
			ticking = false;
		});
		
		ticking = true;
	}
	
	window.addEventListener('scroll', updateScrollProgress, { passive: true });
	updateScrollProgress();
})();

// Enhanced scroll reveal animations with stagger
(function() {
	const observerOptions = {
		root: null,
		rootMargin: '0px 0px -100px 0px',
		threshold: 0.1
	};
	
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('revealed');
			}
		});
	}, observerOptions);
	
	// Observe all animated elements
	const animatedElements = document.querySelectorAll('[data-animate]');
	animatedElements.forEach(el => observer.observe(el));
	
	// Observe skill cards individually for stagger
	const skillCards = document.querySelectorAll('.skill-card');
	skillCards.forEach((card, index) => {
		card.style.transitionDelay = `${index * 0.1}s`;
		observer.observe(card);
	});
	
	// Observe certification cards
	const certCards = document.querySelectorAll('.cert-card');
	certCards.forEach((card, index) => {
		card.style.transitionDelay = `${index * 0.15}s`;
		observer.observe(card);
	});
})();
