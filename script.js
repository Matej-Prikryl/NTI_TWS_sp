const menuToggle = document.getElementById('menu-toggle');
const primaryMenu = document.getElementById('primary-menu');
const themeToggle = document.getElementById('theme-toggle');
const ctaExplore = document.getElementById('cta-explore');
const ctaCourse = document.getElementById('cta-course');
const rangesTable = document.getElementById('ranges-table');
const courseSection = document.getElementById('sec-course');
const practiceTime = document.getElementById('practice-time');
const practiceTimeValue = document.getElementById('practice-time-value');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    primaryMenu.classList.toggle('is-open');
});

primaryMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        primaryMenu.classList.remove('is-open');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
        menuToggle.setAttribute('aria-expanded', 'false');
        primaryMenu.classList.remove('is-open');
    }
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
});

ctaCourse?.addEventListener('click', () => {
    courseSection?.scrollIntoView({ behavior: 'smooth' });
});

ctaExplore?.addEventListener('click', () => {
    rangesTable?.scrollIntoView({ behavior: 'smooth' });
});

practiceTime?.addEventListener('input', () => {
    if (practiceTimeValue) {
        practiceTimeValue.textContent = `${practiceTime.value} min`;
    }
});