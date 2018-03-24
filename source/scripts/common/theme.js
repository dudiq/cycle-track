let timerId;
let root;
const prefix = 'theme-';
const CHANGE_TIMEOUT = 500;
const THEME_DEFAULT = 'dark';
const themes = {
    dark: true,
    light: true,
};
let currTheme = THEME_DEFAULT;

function removeClass(className, toRemove) {
    const classes = className.split(toRemove);
    className = classes.join('');
    return className;
}

function theme(name) {
    let themeName = prefix;
    (!themes[name]) && (name = THEME_DEFAULT);

    (name != THEME_DEFAULT) && (themeName += name);

    currTheme = name;

    !root && (root = document.getElementsByTagName('html')[0]);

    clearTimeout(timerId);
    timerId = setTimeout(function () {
        // remove 'theme-animate' class
        const classNames = removeClass(root.className, 'theme-animate');
        root.className = classNames;
    }, CHANGE_TIMEOUT);


    let className = removeClass(root.className, prefix);
    themeName && (className += ' ' + themeName);
    className += ' theme-animate';
    root.className = className;
}

theme.getCurrent = function () {
    return currTheme;
};

export default theme;
