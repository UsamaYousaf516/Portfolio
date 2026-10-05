export const THEME_KEY = 'uy-theme';

// Runs before first paint so a saved dark theme doesn't flash light.
export const themeInitScript = `try{if(localStorage.getItem('${THEME_KEY}')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}`;
