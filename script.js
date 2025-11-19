// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Chat Widget Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chatToggle');
    const chatBox = document.getElementById('chatBox');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');
    const typingIndicator = document.getElementById('typingIndicator');
    const quickReplies = document.querySelectorAll('.quick-reply');

    // Bot responses
    const botResponses = {
        'book an appointment': 'I can assist you with booking an appointment. Please call us at 0956 771 7721 or complete the contact form on our website. Which treatment would you like to schedule?',
        'treatment pricing': 'Treatment pricing varies based on individual needs and consultation requirements. I recommend scheduling a consultation for accurate pricing information.',
        'clinic location': 'Our clinic is located at 1120 1F Jade Hotel and Suites, Chino Roces Ave. Brgy. La Paz, Makati, Philippines. Parking is available on-site.',
        'operating hours': 'Our operating hours:\n\u2022 Monday - Saturday: 9:00 AM - 7:00 PM\n\u2022 Sunday: 10:00 AM - 5:00 PM',
        'default': 'Thank you for contacting Blanc & Noir Aesthetic Clinic. For immediate assistance, please call 0956 771 7721 or visit our clinic during business hours.'
    };

    // Toggle chat box
    chatToggle.addEventListener('click', function() {
        chatBox.classList.toggle('active');
        if (chatBox.classList.contains('active')) {
            chatInput.focus();
        }
    });

    // Close chat box
    chatClose.addEventListener('click', function() {
        chatBox.classList.remove('active');
    });

    // Send message function
    function sendMessage(message, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user' : 'bot');
        messageDiv.textContent = message;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        if (isUser) {
            // Show typing indicator
            typingIndicator.style.display = 'flex';
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simulate bot response delay
            setTimeout(() => {
                typingIndicator.style.display = 'none';
                const response = getBotResponse(message.toLowerCase());
                sendMessage(response, false);
            }, 1500);
        }
    }

    // Get bot response
    function getBotResponse(message) {
        for (const key in botResponses) {
            if (message.includes(key)) {
                return botResponses[key];
            }
        }
        return botResponses.default;
    }

    // Send button click
    chatSend.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            sendMessage(message, true);
            chatInput.value = '';
        }
    });

    // Enter key to send
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                sendMessage(message, true);
                chatInput.value = '';
            }
        }
    });

    // Quick reply buttons
    quickReplies.forEach(button => {
        button.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            sendMessage(message, true);
        });
    });

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Auto-advance slides every 4 seconds
    setInterval(nextSlide, 4000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will contact you within 24 hours.');
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
        });
    }

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Add specific animation classes based on element type
                if (entry.target.classList.contains('section-header')) {
                    entry.target.classList.add('scroll-down');
                } else if (entry.target.classList.contains('about-image')) {
                    entry.target.classList.add('slide-left');
                } else if (entry.target.classList.contains('about-content')) {
                    entry.target.classList.add('slide-right');
                } else {
                    entry.target.classList.add('scroll-up');
                }
            }
        });
    }, observerOptions);

    // Elements to observe for scroll animations
    const animatedElements = document.querySelectorAll([
        '.section-header',
        '.feature-item',
        '.treatment-card',
        '.testimonial-card',
        '.gallery-item',
        '.contact-item',
        '.about-content',
        '.about-image'
    ].join(','));

    // Start observing elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Additional scroll effects for parallax-like movement
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-slideshow, .about-image img');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);



    // Enhanced scroll animations for mobile
    if (window.innerWidth <= 768) {
        // Reduce animation intensity on mobile for better performance
        const mobileElements = document.querySelectorAll('.feature-item, .treatment-card, .testimonial-card');
        mobileElements.forEach(element => {
            element.style.transform = 'translateY(20px)';
        });
    }
});