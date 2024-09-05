const setTheme = () => {
    const darkThemeOn = sessionStorage.getItem('darkThemeOn');
    if (darkThemeOn == "true") {
        document.getElementById('main').classList.add('dark-theme');
        document.getElementById('theme-toggle').checked = true;
    } else if(darkThemeOn != true) {
        console.log('hi');
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

setTheme();

window.addEventListener('hashchange', (event) => {
    toggleActiveLinks();
});
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

toggleActiveLinks();
