//Imports
import {setTheme, toggleTheme} from './theme.js';
import {toggleActiveLinks} from './link-toggle.js';
import {keepMenuOpen, openMenu, closeMenu} from './burger.js';

//Code execution and listeners attachment

setTheme();
document.getElementById('theme-toggle').addEventListener('click', (event) => { toggleTheme(event.target.id) });
document.getElementById('theme-toggle-burger').addEventListener('click', (event) => { toggleTheme(event.target.id) });


window.addEventListener('hashchange', (event) => {
    toggleActiveLinks();
});

toggleActiveLinks();

keepMenuOpen();
document.getElementById('burger-open').addEventListener('click', openMenu);
document.getElementById('burger-close').addEventListener('click', closeMenu);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});

window.addEventListener('popstate', (event) => {
        closeMenu();
});
if(!document.querySelector('.burger-menu').classList.contains('hidden')){   
    window.addEventListener('beforeunload', (event) => {
        event.preventDefault;
        closeMenu();
    });
}
const links = document.querySelectorAll('.burger-menu__main__link-list__element__link');
for (let link of links) {
    link.addEventListener('click', closeMenu);
}
