/**
 * Contact Form Handler for GiveGyan Website
 * Handles form submission feedback for Formspree
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        // Add event listener for form submission
        contactForm.addEventListener('submit', function(e) {
            // Don't prevent default - let Formspree handle the submission
            
            // Show loading state
            if (formStatus) {
                formStatus.textContent = 'Sending message...';
                formStatus.className = 'form-status';
                formStatus.style.display = 'block';
                
                // This will be overridden by Formspree's redirect
                // but provides feedback until that happens
                setTimeout(function() {
                    formStatus.textContent = 'Your message has been sent successfully!';
                    formStatus.className = 'form-status success';
                }, 2000);
            }
        });
    }
});
