export const toggleActiveLinks = () => {
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
