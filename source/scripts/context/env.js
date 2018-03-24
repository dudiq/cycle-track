import browserStorage from 'jr-browser-storage';

const envStorage = browserStorage('cyt:', 'system-store', window.localStorage);

const KEY = 'env';
const env = envStorage(KEY) || {};

export default function (key, value) {
    if (value !== undefined) {
        env[key] = value;
        envStorage(KEY, env);
    }
    return env[key];
}
