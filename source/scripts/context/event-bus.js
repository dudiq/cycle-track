const listeners = {};

const events = {
    trig: (msg) => {
        const listener = listeners[msg];
        if (listener) {
            for (let i = 0, l = listener.length; i < l; i += 2) {
                const handler = listener[i];
                const ct = listener[i + 1];
                handler.apply(ct, arguments);
            }
        }
    },
    on: (msg, handler, ct) => {
        const listener = listeners[msg] = listeners[msg] || [];
        listener.push(handler, ct);
    },
    off: (msg, handler) => {
        const listener = listeners[msg];
        if (listener) {
            const pos = listener.indexOf(handler);
            if (pos > -1) {
                listener.splice(pos, 2);
            }
            if (!listener.length) {
                delete listener[msg];
            }
        }
    },
};

export default events;
