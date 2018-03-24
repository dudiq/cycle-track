import browserStorage from 'jr-browser-storage';

const myLocalStorage = browserStorage('cyt:', 'cyt', window.localStorage);

export default myLocalStorage;
