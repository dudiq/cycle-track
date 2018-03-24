import dom from './dom';

const utils = {
    getAction: function (findEl) {
        const el = dom.closestByAttr(findEl, 'data-action');
        const ret = {};
        if (el) {
            ret.action = el.getAttribute('data-action');
            ret.value = el.getAttribute('data-value');
        }
        return ret;
    },
};

export default utils;
