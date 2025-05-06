document.addEventListener('mousemove', function(event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    if (!heroContent || !heroImage) return;

    const rect = heroContent.getBoundingClientRect();
    const heroCenterX = rect.left + rect.width / 2;
    const heroCenterY = rect.top + rect.height / 2;

    const distanceX = mouseX - heroCenterX;
    const distanceY = mouseY - heroCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const maxDistance = Math.sqrt(windowWidth * windowWidth + windowHeight * windowHeight) / 2;

    function mapRange(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }

    const glowIntensity = mapRange(distance, 0, maxDistance, 1, 0); // Increased intensity
    const textColor = '62EAF5';
    const shadowSpread = mapRange(distance, 0, maxDistance, 28, 0); // Control spread
    const textShadow = `0 0 ${glowIntensity}px #${textColor}, 0 0 ${shadowSpread}px rgba(98, 234, 245, 0.5)`; // Added spread
    heroContent.style.textShadow = textShadow;
});

const aboutSection = document.querySelector('.about-section');
const missionSection = document.querySelector('.mission-section');
const starb1t0Section = document.querySelector('.starb1t0-ftc-section');
const sponsorsSection = document.querySelector('.sponsors-section');
const heroContent = document.querySelector('.hero-content');
const heroImage = document.querySelector('.hero-image');

let lastScrollY = window.scrollY;
let isIntersectingAbout = false;
let isIntersectingMission = false;
let isIntersectingStarb1t0 = false;
let isIntersectingSponsors = false;

const observerAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        isIntersectingAbout = entry.isIntersecting;
        if (!isIntersectingAbout) {
            aboutSection.classList.remove('show');
            aboutSection.classList.remove('reverse');
        }
    });
}, {
    threshold: 0.5,
});

const observerMission = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        isIntersectingMission = entry.isIntersecting;
        if (!isIntersectingMission) {
            missionSection.classList.remove('show');
            missionSection.classList.remove('reverse');
        }
    });
}, {
    threshold: 0.5,
});

const observerStarb1t0 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        isIntersectingStarb1t0 = entry.isIntersecting;
        if (!isIntersectingStarb1t0) {
            starb1t0Section.classList.remove('show');
            starb1t0Section.classList.remove('reverse');
        }
    });
}, {
    threshold: 0.5,
});

const observerSponsors = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        isIntersectingSponsors = entry.isIntersecting;
        if (!isIntersectingSponsors) {
            sponsorsSection.classList.remove('show');
            sponsorsSection.classList.remove('reverse');
        }
    });
}, {
    threshold: 0.5,
});

observerAbout.observe(aboutSection);
observerMission.observe(missionSection);
if (starb1t0Section) {
    observerStarb1t0.observe(starb1t0Section);
}
if (sponsorsSection) {
    observerSponsors.observe(sponsorsSection);
}

let ticking = false;

function updateBodyHeight() {
    const container = document.querySelector('.about-container') || aboutSection;
    if (container) {
        const containerHeight = container.offsetTop + container.offsetHeight;
        document.body.style.height = containerHeight + 'px';
    }
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (isIntersectingAbout) {
                if (!aboutSection.classList.contains('show')) {
                    aboutSection.classList.add('show');
                }
                aboutSection.classList.remove('reverse');
            } else {
                aboutSection.classList.remove('show');
                aboutSection.classList.remove('reverse');
            }

            if (isIntersectingMission) {
                if (!missionSection.classList.contains('show')) {
                    missionSection.classList.add('show');
                }
                missionSection.classList.remove('reverse');
            } else {
                missionSection.classList.remove('show');
                missionSection.classList.remove('reverse');
            }

            if (isIntersectingStarb1t0) {
                if (!starb1t0Section.classList.contains('show')) {
                    starb1t0Section.classList.add('show');
                }
                starb1t0Section.classList.remove('reverse');
            } else {
                starb1t0Section.classList.remove('show');
                starb1t0Section.classList.remove('reverse');
            }

            if (isIntersectingSponsors) {
                if (!sponsorsSection.classList.contains('show')) {
                    sponsorsSection.classList.add('show');
                }
                sponsorsSection.classList.remove('reverse');
            } else {
                sponsorsSection.classList.remove('show');
                sponsorsSection.classList.remove('reverse');
            }

            ticking = false;
        });

        ticking = true;
    }
});

const heroSection = document.querySelector('.hero');

const observerHero = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            heroContent.classList.add('fly-in-left');
            heroImage.classList.add('fly-in-right');
        } else {
            heroContent.classList.remove('fly-in-left');
            heroImage.classList.remove('fly-in-right');
        }
    });
}, {
    threshold: 0.1,
});

if (heroSection) {
    observerHero.observe(heroSection);
}




