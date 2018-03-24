import env from './env';
import theme from '../common/theme';
import translate from '../common/translate';

const prefix = 'app-settings.';

const THEME = 'theme';
const LANG = 'lang';
let inited = false;

function value(key, val) {
    const fullKey = prefix + key;
    const ret = env(fullKey, val);
    return ret;
}

const settings = {
    init: function () {
        if (inited) {
            return;
        }
        inited = true;
        const firstLang = value(LANG);
        firstLang && settings.lang(firstLang);
    },
    theme: function (name) {
        if (name !== undefined) {
            value(THEME, name);
            theme(name);
        }
        return theme.getCurrent();
    },
    lang: function (val) {
        if (val !== undefined && (val != translate.getLang())) {
            value(LANG, val);
            translate.setLang(val);
        }
        return translate.getLang();
    },
};

const firstTheme = value(THEME);
firstTheme && settings.theme(firstTheme);

export default settings;
