document.addEventListener('DOMContentLoaded', () => {
    const mainSection = document.querySelector('main.hero');
    const heroContent = document.querySelector('.hero-content');
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    if (mainSection) {
        observer.observe(mainSection);
    }
    if (heroContent) {
        observer.observe(heroContent);
    }
    sections.forEach(section => {
        observer.observe(section);
    });
});
