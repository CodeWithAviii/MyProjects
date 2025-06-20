 VANTA.NET({
            el: "#vanta-canvas",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3b82f6,
            backgroundColor: 0x0,
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Animation for elements when they come into view
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('benefit-card')) {
                        entry.target.classList.add('visible');
                    } 
                    else if (entry.target.classList.contains('skill-category')) {
                        entry.target.classList.add('visible');
                        // Animate list items with delay
                        const listItems = entry.target.querySelectorAll('.skill-list li');
                        listItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, 100 * index);
                        });
                    }
                    else if (entry.target.classList.contains('cta-section')) {
                        entry.target.classList.add('visible');
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements
        document.querySelectorAll('.benefit-card').forEach(el => observer.observe(el));
        document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));
        document.querySelector('.cta-section').classList.remove('visible');
        observer.observe(document.querySelector('.cta-section'));