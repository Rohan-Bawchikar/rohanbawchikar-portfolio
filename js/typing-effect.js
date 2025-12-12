// Typing animation for hero subtitle
(function() {
	const typingText = document.getElementById('typingText');
	if (!typingText) return;
	
	const texts = [
		'Frontend Developer',
		'UI/UX Enthusiast',
		'React Developer',
		'Creative Designer'
	];
	let textIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let typingSpeed = 100;
	
	function type() {
		const currentText = texts[textIndex];
		
		if (isDeleting) {
			typingText.textContent = currentText.substring(0, charIndex - 1);
			charIndex--;
			typingSpeed = 50;
		} else {
			typingText.textContent = currentText.substring(0, charIndex + 1);
			charIndex++;
			typingSpeed = 100;
		}
		
		if (!isDeleting && charIndex === currentText.length) {
			typingSpeed = 2000; // Pause at end
			isDeleting = true;
		} else if (isDeleting && charIndex === 0) {
			isDeleting = false;
			textIndex = (textIndex + 1) % texts.length;
			typingSpeed = 500; // Pause before next text
		}
		
		setTimeout(type, typingSpeed);
	}
	
	type();
})();
