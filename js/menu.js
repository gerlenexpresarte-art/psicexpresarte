(function () {
    // --- MENU TOGGLE ---
    const navMenu = document.querySelector('.nav__link');
    const navToggle = document.querySelector('.nav__menu');
    const navClose = document.querySelector('.nav__close');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('nav__link--show');
        });
    }

    if (navClose && navMenu) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('nav__link--show');
        });
    }

    // Close menu when clicking a link (Mobile)
    const navLinks = document.querySelectorAll('.nav__links');
    if (navLinks.length > 0 && navMenu) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav__link--show');
            });
        });
    }

    // --- FAQ TOGGLE ---
    const faqItems = document.querySelectorAll('.faq__item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
                const icon = item.querySelector('.faq__icon');
                if (icon) {
                    icon.textContent = item.classList.contains('active') ? '-' : '+';
                }
            });
        });
    }

    // --- SHRINK EFFECT ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            // Toggle 'shrink' class based on scroll position
            header.classList.toggle('shrink', window.scrollY > 50);
        });
    }

})();