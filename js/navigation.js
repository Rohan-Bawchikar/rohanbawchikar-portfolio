// Navigation functionality
// Smooth scroll for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
	link.addEventListener('click', function(e) {
		if (this.hash !== "") {
			e.preventDefault();
			const target = document.querySelector(this.hash);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		}
	});
});

// Active nav link on scroll + back to top
(function() {
	const sections = ['home', 'about', 'projects', 'services', 'experience', 'skills', 'certifications', 'contact'];
	const navLinks = Array.from(document.querySelectorAll('.navbar ul li a'));
	const backToTop = document.getElementById('backToTop');
	
	const setActive = () => {
		const y = window.scrollY + 120;
		let current = 'home';
		
		sections.forEach(id => {
			const el = document.getElementById(id);
			if (el && el.offsetTop <= y) current = id;
		});
		
		navLinks.forEach(a => {
			const li = a.parentElement;
			if (a.getAttribute('href') === '#' + current) {
				li.classList.add('active');
			} else {
				li.classList.remove('active');
			}
		});
		
		if (backToTop) {
			if (window.scrollY > 400) {
				backToTop.classList.add('show');
			} else {
				backToTop.classList.remove('show');
			}
		}
	};
	
	window.addEventListener('scroll', setActive, { passive: true });
	setActive();
	
	// Back to top button
	if (backToTop) {
		backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
	}
	
	// Set current year in footer
	const yearEl = document.getElementById('year');
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}
})();

// Enhanced Navbar Auto-hide on Scroll
(function() {
	const navbar = document.querySelector('.navbar');
	if (!navbar) return;
	
	let lastScrollTop = 0;
	let ticking = false;
	
	function updateNavbar() {
		if (ticking) return;
		
		window.requestAnimationFrame(() => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			
			if (scrollTop > lastScrollTop && scrollTop > 100) {
				// Scrolling down - hide navbar
				navbar.style.transform = 'translateY(-100%)';
			} else {
				// Scrolling up - show navbar
				navbar.style.transform = 'translateY(0)';
			}
			
			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
			ticking = false;
		});
		
		ticking = true;
	}
	
	window.addEventListener('scroll', updateNavbar, { passive: true });
	
	// Add transition to navbar
	navbar.style.transition = 'transform 0.3s ease';
})();

// Mobile Hamburger Menu
(function() {
	const menuToggle = document.getElementById('menuToggle');
	const navMenu = document.getElementById('navMenu');
	
	if (!menuToggle || !navMenu) return;
	
	menuToggle.addEventListener('click', () => {
		menuToggle.classList.toggle('active');
		navMenu.classList.toggle('active');
	});
	
	// Close menu when clicking a link
	const navLinks = navMenu.querySelectorAll('a');
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			menuToggle.classList.remove('active');
			navMenu.classList.remove('active');
		});
	});
	
	// Close menu when clicking outside
	document.addEventListener('click', (e) => {
		if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
			menuToggle.classList.remove('active');
			navMenu.classList.remove('active');
		}
	});
})();
