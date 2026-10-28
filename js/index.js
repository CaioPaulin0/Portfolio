const header = document.querySelector('.site-header');
const navigationLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const menuToggle = document.querySelector('.menu-toggle');
const mobileViewport = window.matchMedia('(max-width: 760px)');
const navigation = document.querySelector('.site-nav');

function setMenuOpen(open, restoreFocus = false) {
    navigation.inert = mobileViewport.matches && !open;
    header.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    if (restoreFocus) menuToggle.focus();
}

menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

header.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('menu-open')) {
        setMenuOpen(false, true);
    }
});

document.addEventListener('click', event => {
    if (!header.contains(event.target)) setMenuOpen(false);
});

header.addEventListener('focusout', event => {
    if (!header.contains(event.relatedTarget)) setMenuOpen(false);
});

mobileViewport.addEventListener('change', () => setMenuOpen(false));
setMenuOpen(false);

function updateNavigation() {
    const showHeader = mobileViewport.matches || window.scrollY > 120;
    header.classList.toggle('is-visible', showHeader);
    header.inert = !showHeader;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    const offset = header.offsetHeight + 40;
    let currentLink = navigationLinks[0];

    navigationLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section && section.getBoundingClientRect().top <= offset) {
            currentLink = link;
        }
    });

    navigationLinks.forEach(link => {
        if (link === currentLink) {
            link.setAttribute('aria-current', 'location');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

window.addEventListener('scroll', updateNavigation, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
