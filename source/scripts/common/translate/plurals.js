import log from '../logger';
import numberFormat from './number-format';

import pluEn from './plurals/en';
import pluRu from './plurals/ru';
import pluEs from './plurals/es';

const logger = log('plurals.js');

const map = {};

((plurals) => {
    plurals.forEach((plu) => {
        if (map[plu.lang]) {
            logger.error(`trying register already defined plural - ${plu.lang}`);
        } else {
            map[plu.lang] = plu;
        }
    });
})([pluEn, pluRu, pluEs]);

function plural(lang, fields, data) {
    const plu = map[lang];
    let ret = fields.key || '';
    let asMap = false;
    if (typeof data === 'object') {
        asMap = true;
    }

    for (const key in fields) {
        if (key != 'key') {
            const num = asMap ?
                data[key] :
                data;

            const pluArray = fields[key];
            const index = plu.getIndex(num);
            let pluStr = pluArray ? pluArray[index] : '';
            const numFormatted = numberFormat(lang, num);
            pluStr = pluStr.replace('{#}', numFormatted);
            ret = ret.replace(`{#${key}}`, pluStr);
        }
    }

    if (asMap) {
        for (let key in data) {
            if (!fields.hasOwnProperty(key)) {
                const val = data[key];
                ret = ret.replace(`{#${key}}`, val);
            }
        }
    }

    return ret;
}

export default plural;
