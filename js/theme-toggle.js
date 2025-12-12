// Theme Initialization and Toggle
(function() {
	// Theme init: localStorage -> system -> default 'dark'
	const root = document.documentElement;
	const stored = localStorage.getItem('theme');
	const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
	const initial = stored || (prefersLight ? 'light' : 'dark');
	
	if (initial === 'light') root.setAttribute('data-theme', 'light');
	
	const label = document.getElementById('theme-label');
	if (label) label.textContent = initial === 'light' ? 'Light mode' : 'Dark mode';
})();

// Theme toggle button
const toggleBtn = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

if (toggleBtn) {
	toggleBtn.addEventListener('click', () => {
		const isLight = document.documentElement.getAttribute('data-theme') === 'light';
		
		if (isLight) {
			document.documentElement.removeAttribute('data-theme');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
		
		if (themeLabel) {
			const nowLight = document.documentElement.getAttribute('data-theme') === 'light';
			themeLabel.textContent = nowLight ? 'Light mode' : 'Dark mode';
		}
	});
}
