/**
 * Carousel functionality for GiveGyan website
 * Handles company logo carousel in the portfolio section
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the company carousel
    initCompanyCarousel();
});

function initCompanyCarousel() {
    const carousel = document.getElementById('companyCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.getElementById('carouselIndicators');
    const counter = document.getElementById('carouselCounter');
    
    if (!carousel || !prevBtn || !nextBtn || !indicators || !counter) return;
    
    // Configuration
    const totalCompanies = 70;
    const companiesPerSlide = 10;
    const totalSlides = Math.ceil(totalCompanies / companiesPerSlide);
    let currentSlide = 0;
    
    // Generate carousel slides
    generateCarouselSlides();
    
    // Generate indicators
    generateIndicators();
    
    // Set initial state
    updateCarousel();
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCarousel();
        }
    });
    
    // Generate carousel slides with company logos
    function generateCarouselSlides() {
        carousel.innerHTML = '';
        
        // Define real company logos for the first 11 positions
        const realCompanies = [
            { name: 'HackerRank', logo: 'images/hackerrank-logo.png' },
            { name: 'Coda', logo: 'images/coda-logo.png' },
            { name: 'Databook', logo: 'images/databook-logo-png.png' },
            { name: 'Suki', logo: 'images/suki-ai-logo.png' },
            { name: 'Deserve', logo: 'images/deserve-logo.png' },
            { name: 'Vivino', logo: 'images/vivino-logo.png' },
            { name: 'Spotdraft', logo: 'images/spotdraft-logo.png' },
            { name: 'Nala', logo: 'images/nala-logo-high-res.png' },
            { name: 'Curefit', logo: 'images/curefit-logo.png' },
            { name: 'Backbone Labs', logo: 'images/backbone-logo.png' },
            { name: 'Skyflow', logo: 'images/skyflow-logo.png' }
        ];
        
        for (let i = 0; i < totalSlides; i++) {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            
            const startCompany = i * companiesPerSlide + 1;
            const endCompany = Math.min((i + 1) * companiesPerSlide, totalCompanies);
            
            for (let j = startCompany; j <= endCompany; j++) {
                const companyLogo = document.createElement('div');
                companyLogo.className = 'company-logo';
                
                const img = document.createElement('img');
                
                // Use real company logos for the first 11 positions
                if (j <= 11) {
                    const index = j - 1; // 0-based index for the realCompanies array
                    img.src = realCompanies[index].logo;
                    img.alt = realCompanies[index].name;
                    
                    // Add company name
                    const companyName = document.createElement('div');
                    companyName.className = 'company-name';
                    companyName.textContent = realCompanies[index].name;
                    companyLogo.appendChild(img);
                    companyLogo.appendChild(companyName);
                } else {
                    // Use placeholder images for the rest
                    img.src = `images/company-${(j % 8) + 1}.png`; // Reuse the 8 existing images
                    img.alt = `Company ${j}`;
                    
                    // Add placeholder company name
                    const companyName = document.createElement('div');
                    companyName.className = 'company-name';
                    companyName.textContent = `Company ${j}`;
                    companyLogo.appendChild(img);
                    companyLogo.appendChild(companyName);
                }
                slide.appendChild(companyLogo);
            }
            
            carousel.appendChild(slide);
        }
    }
    
    // Generate carousel indicators
    function generateIndicators() {
        indicators.innerHTML = '';
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator';
            indicator.dataset.slide = i;
            
            indicator.addEventListener('click', () => {
                currentSlide = i;
                updateCarousel();
            });
            
            indicators.appendChild(indicator);
        }
    }
    
    // Update carousel state
    function updateCarousel() {
        // Update slide position
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update indicators
        const allIndicators = indicators.querySelectorAll('.carousel-indicator');
        allIndicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Update counter text
        const startCompany = currentSlide * companiesPerSlide + 1;
        const endCompany = Math.min((currentSlide + 1) * companiesPerSlide, totalCompanies);
        counter.textContent = `Showing ${startCompany}-${endCompany} of ${totalCompanies} companies`;
        
        // Update button states
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }
}
