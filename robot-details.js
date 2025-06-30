document.addEventListener('DOMContentLoaded', () => {
    const sections = [
        document.querySelector('main.hero'),
        document.querySelector('section.intake'),
        document.querySelector('section.claw')
    ].filter(Boolean);

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
