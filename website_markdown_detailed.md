# GiveGyan Website - Detailed Structure

## Meta Information
- Title: GiveGyan - Apps & Portfolio
- Viewport: width=device-width, initial-scale=1.0
- Font Family: Poppins (weights: 300, 400, 500, 600, 700)
- External Resources: Font Awesome 6.0.0-beta3, Google Fonts

## Navigation
```html
<header>
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <a href="#home">GiveGyan</a>
            </div>
            <div class="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-menu" id="navMenu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#app" class="nav-link">App</a></li>
                <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>
</header>
```

## Banner Section
```html
<section id="home" class="banner">
    <div class="container">
        <h1 class="fade-in">GiveGyan</h1>
        <div class="banner-content fade-in-delay">
            <p>Showcasing innovation and investment</p>
        </div>
    </div>
</section>
```

## One-liner Introduction
```html
<section class="intro">
    <div class="container">
        <p class="one-liner fade-in">/ɡjɑːn/ (Indian English) ​information or knowledge</p>
    </div>
</section>
```

## Portfolio Section
```html
<section id="portfolio" class="portfolio">
    <div class="container">
        <h2>Portfolio</h2>
        <p class="portfolio-intro">Companies we invest in and advise</p>
        
        <div class="carousel-container">
            <div class="carousel-wrapper">
                <div class="carousel" id="companyCarousel">
                    <!-- Carousel slides dynamically generated via JavaScript -->
                </div>
            </div>
            
            <div class="carousel-controls">
                <button id="prevBtn" class="carousel-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                <div class="carousel-indicators" id="carouselIndicators">
                    <!-- Indicators dynamically generated via JavaScript -->
                </div>
                <button id="nextBtn" class="carousel-btn next-btn"><i class="fas fa-chevron-right"></i></button>
            </div>
            
            <div class="portfolio-note">
                <p id="carouselCounter">Showing 1-10 of 70 companies</p>
            </div>
        </div>
    </div>
</section>
```

### Carousel Implementation Details
The carousel displays company logos with their names underneath. It shows 10 companies at a time with navigation controls.

**Real Companies (First 11):**
1. HackerRank - `images/hackerrank-logo.png`
2. Coda - `images/coda-logo.png`
3. Databook - `images/databook-logo-png.png`
4. Suki.ai - `images/suki-ai-logo.png`
5. Deserve - `images/deserve-logo.png`
6. Vivino - `images/vivino-logo.png`
7. Spotdraft - `images/spotdraft-logo.png`
8. Nala - `images/nala-logo-high-res.png`
9. Curefit - `images/curefit-logo.png`
10. Backbone Labs - `images/backbone-logo.png`
11. Skyflow - `images/skyflow-logo.png`

**Placeholder Companies:**
- Companies 12-70 use placeholder images that cycle through 8 generic company logos

## App Showcase Section
```html
<section id="app" class="app-showcase">
    <div class="container">
        <h2>Featured App</h2>
        <div class="app-card">
            <div class="app-image">
                <img src="images/prompt-vault-icon.png" alt="Prompt Vault App Icon">
            </div>
            <div class="app-details">
                <h3>Prompt Vault</h3>
                <p class="app-description">A powerful app for storing, organizing, and sharing your AI prompts. Boost your productivity with our intuitive prompt management system.</p>
                <div class="app-links">
                    <a href="#" class="app-store-button">
                        <i class="fab fa-app-store"></i> App Store
                    </a>
                    <a href="#" class="play-store-button coming-soon">
                        <i class="fab fa-google-play"></i> Coming Soon
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Contact Section
```html
<section id="contact" class="contact">
    <div class="container">
        <h2>Contact Us</h2>
        <div class="contact-form">
            <form id="contactForm" action="https://formspree.io/peeyush@givegyan.com" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email address" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject of your message" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
                </div>
                <!-- Hidden fields for Formspree configuration -->
                <input type="hidden" name="_replyto" value="peeyush@givegyan.com">
                <input type="hidden" name="_subject" value="New contact form submission from GiveGyan website">
                <input type="text" name="_gotcha" style="display:none">
                <div class="form-group">
                    <button type="submit" class="submit-btn">Send Message</button>
                </div>
                <div id="form-status" class="form-status"></div>
            </form>
        </div>
    </div>
</section>
```

## Footer
```html
<footer>
    <div class="container">
        <div class="footer-content">
            <div class="copyright">
                <p>&copy; 2025 GiveGyan. All rights reserved.</p>
            </div>
            <div class="social-links">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="back-to-top">
            <a href="#home"><i class="fas fa-arrow-up"></i></a>
        </div>
    </div>
</footer>
```

## JavaScript Files
The website uses three JavaScript files:
1. `js/script.js` - Main functionality
2. `js/contact-form.js` - Handles contact form submission via Formspree
3. `js/carousel.js` - Implements the company logo carousel

### Carousel.js Key Features
- Displays 10 companies per slide
- Shows real company logos for the first 11 positions
- Uses placeholder images for remaining positions
- Includes navigation arrows and indicator dots
- Shows a counter of which companies are being displayed
- Responsive design that adjusts based on screen size

### Contact-form.js Key Features
- Handles form submission feedback
- Shows loading state when form is submitted
- Provides success message after submission
- Works with Formspree for email delivery

## CSS Styling Highlights
- Minimalistic design with gray and white color scheme
- Responsive layout that adapts to different screen sizes
- Fade-in animations for banner and introduction sections
- Hover effects on navigation links, buttons, and company logos
- Card-based design for app showcase
- Clean form styling with focus states
- Mobile-friendly navigation with hamburger menu
