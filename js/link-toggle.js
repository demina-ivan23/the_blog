export const toggleActiveLinks = () => {
    let hash = window.location.hash || '#home';
    let links = document.querySelectorAll('.header__navbar__link-list__element__link');
    let activeLink = document.querySelector(`${hash}-link`);
    let burgerLinks = document.querySelectorAll('.burger-menu__main__link-list__element__link');
    let activeBurgerLink = document.querySelector(`${hash}-burger-link`);
    links.forEach(link => {
        link.classList.remove('active');
    });
    burgerLinks.forEach(link => {
        link.classList.remove('active');
    });
    if (activeLink) {
        activeLink.classList.add('active');
    }
    if (activeBurgerLink) {
        activeBurgerLink.classList.add('active');
    }
};
