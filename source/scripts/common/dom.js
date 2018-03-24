
const dom = {
    indexOf: function (el) {
        const children = el.parentElement.children;
        let ret = -1;
        for (let i = 0, l = children.length; i < l; i++) {
            if (children[i] == el){
                ret = i;
                break;
            }
        }
        return ret;
    },
    closestByAttr: function (el, dataAttr) {
        do {
            if (el.hasAttribute && el.hasAttribute(dataAttr)) {
                return el;
            }
        } while (el = el.parentNode);
    },
    hasClass: function (element, value) {
        return element.classList ?
            element.classList.contains(value) :
            element.className.indexOf(value) > -1;
    },
    removeClass: function (el, className) {

    },
    addClass: function (el, className) {

    },
    on: function (node, event, listener, useCapture = false) {
        if (node.addEventListener) {
            node.addEventListener(event, listener, useCapture);
        } else {
            node.attachEvent(`on${event}`, listener);
        }
    },
    off: function (node, event, listener, useCapture = false) {
        if (node.removeEventListener) {
            node.removeEventListener(event, listener, false, useCapture);
        } else {
            node.detachEvent(`on${event}`, listener);
        }
    },
};

export default dom;
