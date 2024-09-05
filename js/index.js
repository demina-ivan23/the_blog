//Functions

const setTheme = () => {
    const darkThemeOn = sessionStorage.getItem('darkThemeOn');
    if (darkThemeOn == "true") {
        document.getElementById('main').classList.add('dark-theme');
        document.getElementById('theme-toggle').checked = true;
    } else {
        document.getElementById('main').classList.remove('dark-theme');
        document.getElementById('theme-toggle').checked = false;
    }
}
const toggleTheme = () => {
    document.getElementById('main').classList.toggle('dark-theme');
    sessionStorage.setItem('darkThemeOn', document.getElementById('main').classList.contains('dark-theme'));
}

const toggleActiveLinks = () => {
    let hash = window.location.hash || '#home';
    let links = document.querySelectorAll('.header__navbar__link-list__element__link');
    let activeLink = document.querySelector(`${hash}-link`);
    links.forEach(link => {
        link.classList.remove('active');
    });
    if (activeLink) {
        activeLink.classList.add('active');
    }
};

const keepMenuOpen = () => {
    const menuOpen = sessionStorage.getItem('menuOpen');
    if (menuOpen == "true") {
        document.querySelector('.burger-menu').classList.remove('hidden');
        document.querySelector('html').classList.add('scroll-disabeled');
    }
}
const openMenu = () => {
    document.querySelector('.burger-menu').classList.remove('hidden');
    document.querySelector('html').classList.add('scroll-disabeled');
    sessionStorage.setItem('menuOpen', true);
}
const closeMenu = () => {
    document.querySelector('.burger-menu').classList.add('hidden');
    document.querySelector('html').classList.remove('scroll-disabeled');
    sessionStorage.setItem('menuOpen', false);
}

//Code execution and listeners attachment

setTheme();
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);


window.addEventListener('hashchange', (event) => {
    toggleActiveLinks();
});
toggleActiveLinks();

keepMenuOpen();
document.getElementById('burger-open').addEventListener('click', openMenu);
document.getElementById('burger-close').addEventListener('click', closeMenu);
const links = document.querySelectorAll('.header__navbar__link-list__element__link');
for(let link of links){
    link.addEventListener('click', closeMenu);
}
