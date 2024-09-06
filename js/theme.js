export const setTheme = () => {
    const darkThemeOn = sessionStorage.getItem('darkThemeOn');
    if (darkThemeOn == "true") {
        document.getElementById('main').classList.add('dark-theme');
        document.getElementById('theme-toggle').checked = true;
        document.getElementById('theme-toggle-burger').checked = true;
    } else {
        document.getElementById('main').classList.remove('dark-theme');
        document.getElementById('theme-toggle').checked = false;
        document.getElementById('theme-toggle-burger').checked = false;

    }
}
export const toggleTheme = (targetId) => {
    if(targetId == 'theme-toggle'){
        document.getElementById('theme-toggle-burger').checked = !document.getElementById('theme-toggle-burger').checked 
    } else if(targetId == 'theme-toggle-burger'){
        document.getElementById('theme-toggle').checked = !document.getElementById('theme-toggle').checked 
    }
    document.getElementById('main').classList.toggle('dark-theme');
    sessionStorage.setItem('darkThemeOn', document.getElementById('main').classList.contains('dark-theme'));
}