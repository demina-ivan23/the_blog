export const keepMenuOpen = () => {
    const menuOpen = sessionStorage.getItem('menuOpen');
    if (menuOpen == "true") {
        document.querySelector('.burger-menu').classList.remove('hidden');
        document.querySelector('html').classList.add('scroll-disabeled');
    }
}
export const openMenu = () => {
    document.querySelector('.burger-menu').classList.remove('hidden');
    document.querySelector('html').classList.add('scroll-disabeled');
    sessionStorage.setItem('menuOpen', true);
}
export const closeMenu = () => {
    document.querySelector('.burger-menu').classList.add('hidden');
    document.querySelector('html').classList.remove('scroll-disabeled');
    sessionStorage.setItem('menuOpen', false);
}