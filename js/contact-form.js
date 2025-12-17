// ==================================
// CONTACT FORM MODAL FUNCTIONALITY
// ==================================

// Wrap everything in DOMContentLoaded to ensure DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const openFormBtn = document.getElementById('openContactForm');
    const closeFormBtn = document.getElementById('closeContactForm');
    const contactModal = document.getElementById('contactModal');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const modalOverlay = contactModal?.querySelector('.modal-overlay');

    // Open modal
    function openContactModal() {
        if (contactModal) {
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scroll
        }
    }

    // Close modal
    function closeContactModal() {
        if (contactModal) {
            contactModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore body scroll
            // Reset form and messages
            if (contactForm) contactForm.reset();
            if (formSuccess) formSuccess.classList.remove('show');
            if (formError) formError.classList.remove('show');
            // Remove input states
            const inputs = contactForm?.querySelectorAll('input, textarea');
            inputs?.forEach(input => {
                input.classList.remove('has-value', 'error');
            });
        }
    }

    // Close success message
    function closeSuccessMessage() {
        if (formSuccess) {
            formSuccess.classList.remove('show');
        }
        setTimeout(() => {
            closeContactModal();
        }, 300);
    }

    // Close error message
    function closeErrorMessage() {
        if (formError) {
            formError.classList.remove('show');
        }
    }

    // Event Listeners
    if (openFormBtn) {
        openFormBtn.addEventListener('click', openContactModal);
    }

    if (closeFormBtn) {
        closeFormBtn.addEventListener('click', closeContactModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeContactModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal?.classList.contains('active')) {
            closeContactModal();
        }
    });

    // Success/Error message close buttons
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');
    const closeErrorBtn = document.getElementById('closeErrorBtn');
    
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', closeSuccessMessage);
    }
    
    if (closeErrorBtn) {
        closeErrorBtn.addEventListener('click', closeErrorMessage);
    }

    // ==================================
    // FLOATING LABEL FUNCTIONALITY
    // ==================================

    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

    formInputs.forEach(input => {
        // Check if input has value on load
        if (input.value.trim() !== '') {
            input.classList.add('has-value');
        }
        
        // Add has-value class when typing
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
            // Remove error state when typing
            this.classList.remove('error');
            const errorSpan = this.closest('.form-group')?.querySelector('.input-error');
            if (errorSpan) errorSpan.textContent = '';
        });
        
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement?.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement?.classList.remove('focused');
        });
    });

    // ==================================
    // FORM VALIDATION & SUBMISSION
    // ==================================

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('formName')?.value.trim();
            const email = document.getElementById('formEmail')?.value.trim();
            const subject = document.getElementById('formSubject')?.value.trim();
            const message = document.getElementById('formMessage')?.value.trim();
            
            // Validation
            let isValid = true;
            
            // Validate name
            if (!name || name.length < 2) {
                showError('name', 'Please enter a valid name');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate subject
            if (!subject || subject.length < 3) {
                showError('subject', 'Please enter a subject');
                isValid = false;
            }
            
            // Validate message
            if (!message || message.length < 10) {
                showError('message', 'Message must be at least 10 characters');
                isValid = false;
            }
            
            // If valid, simulate sending (you can replace this with actual form submission)
            if (isValid) {
                // Show loading state
                const submitBtn = contactForm.querySelector('.form-submit-btn');
                if (submitBtn) {
                    submitBtn.classList.add('loading');
                    submitBtn.disabled = true;
                }
                
                // Simulate API call (replace with your actual form submission logic)
                setTimeout(() => {
                    const success = Math.random() > 0.1; // 90% success rate for demo
                    
                    if (submitBtn) {
                        submitBtn.classList.remove('loading');
                        submitBtn.disabled = false;
                    }
                    
                    if (success) {
                        // Show success message
                        contactForm.style.display = 'none';
                        if (formSuccess) {
                            formSuccess.classList.add('show');
                        }
                        
                        // Here you would actually send the form data
                        console.log('Form Data:', { name, email, subject, message });
                        
                        // You can use mailto or an API endpoint
                        // Example mailto link:
                        // window.location.href = `mailto:ro.bawchikar07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
                        
                    } else {
                        // Show error message
                        contactForm.style.display = 'none';
                        if (formError) {
                            formError.classList.add('show');
                        }
                    }
                }, 1500); // Simulate network delay
            }
        });
    }

    // Show error function
    function showError(fieldName, errorMessage) {
        const input = document.getElementById('form' + fieldName.charAt(0).toUpperCase() + fieldName.slice(1));
        const errorSpan = document.querySelector(`[data-error="${fieldName}"]`);
        
        if (input) {
            input.classList.add('error');
        }
        
        if (errorSpan) {
            errorSpan.textContent = errorMessage;
        }
    }

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log('🚀 Contact form initialized with killer effects!');
}); // End of DOMContentLoaded
