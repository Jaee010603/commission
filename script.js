document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.fade-in');
    const nav = document.querySelector('header');
    let lastScrollY = window.scrollY;

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom > 0
        );
    }

    function checkVisibility() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    checkVisibility();

    window.addEventListener('scroll', function () {
        checkVisibility();

        if (window.innerWidth <= 768) {
            if (window.scrollY > lastScrollY) {
                nav.classList.add('hidden'); 
            } else {
                nav.classList.remove('hidden'); 
            }
            lastScrollY = window.scrollY;
        }
    });

    const navLinks = document.querySelectorAll('.navigation ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const boxes = document.querySelectorAll('.pop-up');
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('visible');
        }, index * 300);
    });

    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navList.classList.toggle('show');
        });
    }
});
