/**
 * GiveGyan Website JavaScript
 * Handles navigation, animations, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add animate-on-scroll class to elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const children = section.children;
        for (let i = 0; i < children.length; i++) {
            if (!children[i].classList.contains('container')) {
                children[i].classList.add('animate-on-scroll');
            } else {
                const containerChildren = children[i].children;
                for (let j = 0; j < containerChildren.length; j++) {
                    containerChildren[j].classList.add('animate-on-scroll');
                }
            }
        }
    });
    
    // Initial check for animations
    animateOnScroll();
    
    // Check for animations on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Handle Google Form embedding
    const setupGoogleForm = function(formUrl) {
        const iframe = document.getElementById('google-form');
        const placeholder = document.querySelector('.form-placeholder');
        
        if (iframe && formUrl) {
            iframe.src = formUrl;
            iframe.style.display = 'block';
            
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        }
    };
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    const makeHeaderSticky = function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
    
    window.addEventListener('scroll', makeHeaderSticky);
    
    // Add CSS class for sticky header
    const style = document.createElement('style');
    style.textContent = `
        header.sticky {
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        header.sticky .navbar {
            padding: 10px 0;
        }
    `;
    document.head.appendChild(style);
    
    // Set up Load More button for company logos
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreLogos);
    }
});

// Function to generate company logos
function generateCompanyLogo(index) {
    const logoDiv = document.createElement('div');
    logoDiv.className = 'company-logo';
    
    // Use existing images for first 8, then create placeholders for the rest
    if (index <= 8) {
        const img = document.createElement('img');
        img.src = `images/company-${index}.png`;
        img.alt = `Company ${index}`;
        logoDiv.appendChild(img);
    } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'logo-placeholder';
        placeholder.textContent = `Company ${index}`;
        logoDiv.appendChild(placeholder);
    }
    
    return logoDiv;
}

// Function to load more company logos (triggered by the Load More button)
function loadMoreLogos() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const currentCount = portfolioGrid.querySelectorAll('.company-logo').length;
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const portfolioCounter = document.getElementById('portfolioCounter');
    
    // Add 8 more logos, up to max of 70
    const batchSize = 8;
    const maxLogos = 70;
    let newCount = Math.min(currentCount + batchSize, maxLogos);
    
    // Add new logos
    for (let i = currentCount + 1; i <= newCount; i++) {
        portfolioGrid.appendChild(generateCompanyLogo(i));
    }
    
    // Update counter text
    if (portfolioCounter) {
        portfolioCounter.textContent = `Displaying ${newCount} of ${maxLogos} companies`;
    }
    
    // Hide button if we've reached the maximum
    if (newCount >= maxLogos) {
        loadMoreBtn.style.display = 'none';
        if (portfolioCounter) {
            portfolioCounter.textContent = `All ${maxLogos} companies displayed`;
        }
    }
}

// Function to set up Google Form (to be called when user provides the form URL)
function setupGoogleForm(formUrl) {
    const iframe = document.getElementById('google-form');
    const placeholder = document.querySelector('.form-placeholder');
    
    if (iframe && formUrl) {
        iframe.src = formUrl;
        iframe.style.display = 'block';
        
        if (placeholder) {
            placeholder.style.display = 'none';
        }
    }
}
